import React from 'react';
import {View, Text, StyleSheet, Image} from "react-native";

export default function DealRowItem({item}) {
    return (
        <View style={style.background}>
            <View style={style.thumbContainer}>
                <Image style={style.thumbImg}
                       source={{uri: item.thumb}}></Image>
            </View>
            <View style={style.contentContainer}>
                <View style={style.containerTitle}>
                    <Text numberOfLines={2} style={style.textTitle}>{item.title}</Text>
                </View>
                <View style={style.containerPrice}>
                    <Text style={style.textPrice}>{item.discountPrice} {item.currency}
                        <Text style={style.textOrPrice}>{" "}{item.price} {item.currency}</Text>
                    </Text>
                </View>
                <View style={style.containerInf}>
                </View>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'row',
        height: 100,
    },
    thumbContainer: {
        flex: 10,
        flexDirection: 'row'
    },
    contentContainer: {
        padding: 10,
        fontSize: 12,
        flex: 28,
        flexDirection: 'column'
    },
    textTitle: {
        fontSize: 14,
        color: '#3399FF',
        fontWeight: 'bold',
    },
    containerTitle: {},
    containerPrice: {},
    containerInf: {},
    textPrice: {
        color: '#2ED573',
        fontSize: 16,
        fontWeight: 'bold'
    },
    textOrPrice: {
        paddingLeft:10,
        fontSize:14,
        fontWeight:'normal',
        color:'#808080',
        textDecorationLine:'line-through'
    },
    thumbImg: {
        margin:10,
        height:80,
        width: 80,
        borderRadius:3,
    }

})