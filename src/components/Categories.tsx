import { View, Text, StyleSheet, Dimensions, TextInput, ScrollView, TouchableOpacity } from "react-native"
import UserAvatar from 'react-native-user-avatar';
import { useAppDispatch, useAppSelector } from '../state/Hooks';

import * as React from "react"
import Svg, { Path } from "react-native-svg"
import Toolbar from "./Toolbar"
import { useEffect } from "react";
import { getCategories } from "../state/actions";

const Categories = ({category, setCategory})=>{
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = React.useState(false)
    const categories = useAppSelector((state: any) => {
        return state.categories;
      });

      const handleError = (data)=>{

      }

      const toggleIsLoading = (loading)=>{
            setIsLoading(loading)
      }
      useEffect(()=>{dispatch(getCategories(toggleIsLoading, handleError))},[])
    return (
        <View style={styles.container}>
           <Text style={styles.header}>Categories</Text>
           {!isLoading ? <ScrollView style={styles.categories} horizontal={true}>
            {
                categories.map((item,i)=>(
                    <View key={i}>
                    <TouchableOpacity onPress={()=>{setCategory(item)}}>
                    <UserAvatar style={styles.cat} size={50} key={i} name={item} bgColor={category === item ? '#f25924':"#f2592496"} />
                    <Text style={styles.cateText}>{item}</Text>
                    </TouchableOpacity>
                    </View>
                ))
            }
           </ScrollView> : <Text style={{color:"black"}}>Loading...</Text>}
        </View>
    )
}
export default Categories

const styles = StyleSheet.create({
    container: {
        paddingLeft:"5%",
        paddingRight:"5%",
        marginTop:20,
    },
    header:{
        marginTop:5,
        fontSize:20,
        textAlign:"center",
    },
    categories: {
        marginTop:10,
        width:"100%",
        marginLeft:"auto",
        marginRight:"auto",
        padding:10,
        overflow:"scroll",
    },
    cat:{
        marginLeft:8,
        marginRight:8,
    },
    cateText:{
        textAlign:"center"
    }
  });