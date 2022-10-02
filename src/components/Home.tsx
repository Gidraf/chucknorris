import { View, Text, StyleSheet, Dimensions, TextInput, Alert } from "react-native"
import * as React from "react"
import Svg, { Path } from "react-native-svg"
import Toolbar from "./Toolbar"
import Categories from "./Categories"
import Details from "./Details"
import Search from "./SearchComponent"


const Home = ()=>{
    const [category, setCategory] = React.useState("")    
    return (
        <View style={styles.container}>
           <Toolbar/>
           <Search/>
           <Categories category={category} setCategory={setCategory}/>
           <Details category={category}/>
        </View>
    )
}
export default Home

const styles = StyleSheet.create({
    container: {
    },
    search:{
        width:"80%",
        backgroundColor:"#616161",
        fontSize:18,
        padding:8,
        color:"#fff",
        textAlign:"center",
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10
    },
    searchComponent:{
        marginTop:10,
        width:"90%",
        marginLeft:"auto",
        marginRight:"auto",
        flexDirection:"row",
    },
    searchBtn:{
        backgroundColor:"#212121",
       fontSize:40,
       width:"15%",
       textAlign:"center",
       borderTopRightRadius:10,
       borderBottomRightRadius:10
    }
  });