import * as React from "react";
import {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Platform, FlatList, Button} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import {Header, Image, SearchBar} from "react-native-elements";
import axios from 'axios';
import DealRowItem from "./DealRowItem";
import host from "../../host.json";
export default function DealsScreen() {
    const [deals, setDeals] = useState()
    useEffect(() => {
            async function fetchData() {
                // You can await here
                const response = await axios(`${host.hostApi}/topics?limit=20`)
                formatData(response.data)
                setDeals(response.data);
            }

            fetchData();
        }, []
    )
    const formatData = function (data) {
        data.map(e => {
            e.key = e['_key'];
            e.currency = e.currency.split(' - ')[0]
            if(e.thumb){
                if(e.thumb[0]=='/'){
                    e.thumb=`${host.host}${e.thumb}`
                }
            }
            if (e.discountPrice)
                e.discountPrice = e.discountPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            if (e.price)
                e.price = e.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return e;
        })
    }
    return (
        <View style={styles.appContainer}>
            <Header
                leftContainerStyle={{
                    flex: 5,
                }}
                centerContainerStyle={{
                    flex: 95,
                }}
                placement="left"
                leftComponent={
                    <Image
                        source={{
                            uri:
                                "https://res.cloudinary.com/tkm/image/upload/c_scale,h_128/v1574161033/logo/tkm-round.png",
                        }}
                        style={{width: 30, height: 30}}
                    />
                }
                centerComponent={
                    <SearchBar
                        placeholder="Type Here..."
                        lightTheme
                        placeholder="Search"
                        round
                        containerStyle={{
                            borderBottomColor: "transparent",
                            borderTopColor: "transparent",
                            backgroundColor: "transparent",
                            width: "100%",
                        }}
                        inputContainerStyle={{
                            backgroundColor: "white",
                        }}
                    />
                }
                statusBarProps={{
                    barStyle: "light-content",
                    translucent: true,
                }}
                containerStyle={{}}
            />
            <FlatList data={deals} renderItem={({item}) => (
                <DealRowItem item={item}></DealRowItem>
            )}></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        // flex: 1,
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    headerContainer: {
        flexDirection: "row",
    },
    bodyContainer: {},
    listItemContainer: {
        flexDirection: "row",
    },
});
