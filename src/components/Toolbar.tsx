import { View, Text, StyleSheet, Dimensions } from "react-native"

import * as React from "react"
import Svg, { Path } from "react-native-svg"


const Toolbar = ()=>{

    return (
        <View style={styles.container}>
            <Text style={styles.toolbar}>Best Of ChuckNorris</Text>
        </View>
    )
}
export default Toolbar

const styles = StyleSheet.create({
    container: {
    elevation:10,
    backgroundColor: '#171717',
    padding:16,
    },
    toolbar:{
        alignSelf:"center",
        color:"white",
        fontSize:20,
    }
  });