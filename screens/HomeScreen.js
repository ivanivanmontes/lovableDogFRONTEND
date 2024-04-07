import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Image} from "react-native";
import MapView, {Marker} from "react-native-maps";

import React, { useState } from "react";
import MapViewStyle from "./../utils/MapViewStyle.json";
import Header from "../views/header";


export default function HomeScreen() {
  const [isMarkerClicked, setIsMarkerCLicked] = useState(false);
  const onMarkerClick = () => {
    // console.log("Marker Clicked!!!")
    setIsMarkerCLicked(!isMarkerClicked)
  }
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}><Header/></View>
        <MapView 
        style={styles.map} 
        provider={"google"}
        region={{
          latitude: 43.781340440132006,
          longitude: 11.25431185076425,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
        customMapStyle={MapViewStyle}
        >
          <Marker
            coordinate={{
              latitude: 43.78131430618279, 
              longitude: 11.25434493726816
            }}
            onPress={onMarkerClick}
          >
            <Image 
              source={require("../assets/pinMarker.png")}
              style={{width: 60, height: 60, tintColor: isMarkerClicked ? "red" : "gray"}}

            />
          </Marker>
        </MapView>   
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
      flex: 1,
      // backgroundColor: '#FFDAB9',
      // alignItems: 'center',
      // justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    position: "absolute",
    alignItems: "center",
    zIndex: 10,
    padding:10,
    width: "100%",
    paddingHorizontal:20,
    top:40
  }
});





// export default HomeScreen;