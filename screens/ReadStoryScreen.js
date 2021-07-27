import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class ReadStory extends Component{
    render(){
        return(
            <SafeAreaProvider style={{backgroundColor:'green'}}>
                <Header backgroundColor={'black'} centerComponent={{text:'Story Hub',style:{color:'orange',fontSize:20}}} />
                <View style={styles.container}>
                    <Text style={styles.text}>Read a Story</Text>
                </View>
            </SafeAreaProvider>
        )
    }
}
const styles=StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'black',
    width:1000,
    height:400,
    marginTop:20,
    marginLeft:250,
    borderColor:'orange',
    borderRadius:20,
    borderWidth:5
},
text:{
    fontSize:40,
    color:'orange',
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:400,
    paddingTop:250
}
})