import * as React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Header, Image, SearchBar } from "react-native-elements";

export default function DealsScreen() {
  return (
    <View style={styles.appContainer}>
      <Header
        placement="left"
        leftComponent={
          <Image
            source={{
              uri:
                "https://res.cloudinary.com/tkm/image/upload/c_scale,h_128/v1574161033/logo/tkm-round.png",
            }}
            style={{ width: 30, height: 30 }}
          />
        }
        centerComponent={
          <SearchBar
            placeholder="Type Here..."
            lightTheme
            placeholder="Search"
            round
            containerStyle={{
              width: 300,
              padding: 0,
            }}
          />
        }
        statusBarProps={{
          barStyle: "light-content",
          translucent: true,
          backgroundColor: "transparent",
        }}
      />
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
