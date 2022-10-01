import { View, Text, StyleSheet, Dimensions, TextInput, ScrollView, Image } from "react-native"
import UserAvatar from 'react-native-user-avatar';
import LottieView from "lottie-react-native";
import { useAppDispatch, useAppSelector } from '../state/Hooks';
import * as React from "react"
import Svg, { Path } from "react-native-svg"
import Toolbar from "./Toolbar"
import { getRandomJoke } from "../state/actions";

const categories = [
    {"name":"First"},
    {"name":"Second"},
    {"name":"Third"},
    {"name":"Fourth"},
    {"name":"Fifth"},
    {"name":"Sixt"},
]

const Details = ({category})=>{
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = React.useState(false)
    const randomJoke = useAppSelector((state: any) => {
        return state.randomJoke;
      });
      const toggleIsLoading = ()=>{
        if(isLoading){
            setIsLoading(false)
        }
        else {
            setIsLoading(true)
        }
    }
      React.useEffect(()=>{dispatch(getRandomJoke(toggleIsLoading,category))},[category])
    return (
        <View style={styles.container}>
           <Image resizeMode="contain" style={styles.iconImage} source={{uri:"https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"}}/>
           <Text style={styles.detailText}>{
            Object.keys(randomJoke).length>0 && randomJoke.value
           }
           </Text>
           <LottieView
           style={styles.laugh}
        source={require('../../assets/laugh.json')}
        autoPlay
        loop
      />
        </View>
    )
}
export default Details

const styles = StyleSheet.create({
    container: {
        paddingLeft:"5%",
        paddingRight:"5%",
        backgroundColor:"#f2592496",
        height:"40%",
        width:"90%",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:100,
        borderRadius:10,
    },
    iconImage:{
        height:"30%",
        marginTop:-85
    },
    detailText:{
        fontSize:18,
        marginTop:50,
    },
    laugh:{
        height:100,
        alignSelf:"center",
        bottom:1,
        position:"absolute",
    }
  });