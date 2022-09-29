import { View, Text, StyleSheet } from "react-native"


const Home = ()=>{

    return (
        <View style={styles.container}>
            <Text style={styles.toolbar}>Best Of ChuckNorris</Text>
        </View>
    )
}
export default Home

const styles = StyleSheet.create({
    container: {
      backgroundColor:"blue",
      padding:10,
    },
    toolbar:{
   
    }
  });