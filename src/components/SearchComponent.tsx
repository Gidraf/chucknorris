import { View, Text, StyleSheet, Dimensions, TextInput, ScrollView, TouchableOpacity } from "react-native"
import { useAppDispatch, useAppSelector } from '../state/Hooks';
import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { clearSuggestion, searchJoke, selectJoke } from "../state/actions";



// const suggestions = [{"value":"some infomation will appear here"}, {"value":"some infomation will appear here"}, {"value":"some infomation will appear here"}]

const Search = ()=>{
    const [category, setCategory] = React.useState("")
    const [query, setQuery] = React.useState("")
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = React.useState(false)
    const [errors, setErrors] = React.useState("")
    const suggestions = useAppSelector((state: any) => {
        return state.searchJoke;
      });

      const toggleIsLoading = ()=>{

      }
      const handleOnChange = (text: string)=>{
        setQuery(text)
        setErrors("")
        dispatch(searchJoke(toggleIsLoading,text, handleError))
      }

      const handleError = (err: string)=>{
        setErrors(err)
        dispatch(clearSuggestion()); 
    }
    return (
        <View style={{position:"relative"}}>
           <View style={styles.searchComponent}>
              <TextInput value={query} placeholderTextColor={"#fff"} onChangeText={handleOnChange} placeholder="Seacrh for Jokes" style={styles.search}/>
              <TouchableOpacity onPress={()=>{(!query)? setErrors("Joke name can't be empty") : dispatch(searchJoke(toggleIsLoading,query, handleError))}}><Text style={styles.searchBtn}>🔍</Text></TouchableOpacity>
           </View>
           {(query && suggestions.length > 0) &&  <ScrollView style={styles.suggestion}>
            <TouchableOpacity onPress={()=>{setQuery("");}}>
                <Text style={{padding:4}}>❌</Text>
            </TouchableOpacity>
            { suggestions.map((item: { value: string; },i: React.Key)=>(
                <TouchableOpacity key={i} onPress={()=>{dispatch(selectJoke(item));dispatch(clearSuggestion()); }}>
                <View style={{borderBottomColor:"black", borderBottomWidth:1,}}>
                     <Text style={styles.sugText} key={i}>{`${item.value.substring(0,20)}...`}</Text>
                </View>
                </TouchableOpacity>
            ))}
         </ScrollView>}
         {errors && !isLoading && <Text style={{textAlign:"center", color:"red"}}>{errors}</Text>}
        </View>
    )
}
export default Search

const styles = StyleSheet.create({
    search:{
        width:"80%",
        backgroundColor:"#f2592496",
        fontSize:18,
        padding:8,
        color:"#fff",
        textAlign:"center",
        borderTopLeftRadius:10,
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
       width:"100%",
       textAlign:"center",
       borderTopRightRadius:10,
       borderBottomRightRadius:10
    },
    suggestion:{
        width:"72%",
        height:300,
        marginLeft:"5%",
        marginRight:"auto",
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:"#fff",
        position:"absolute",
        top:60,
        zIndex:10,
        
    },
    sugText:{
        fontSize:16,
        padding:10,
        textAlign:"center",
    }
  });