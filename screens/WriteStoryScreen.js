import React,{Component} from 'react';
import { View,Text,StyleSheet,TextInput } from 'react-native';
import {Header} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context'; 

export default class WriteStory extends Component{
    constructor(){
        super();
        this.state={
            Title:'',
            Author:'',
            Story:''
        }
    }
    render(){
        return(
           <SafeAreaProvider>
               <View style={styles.container}>
                   <Header backgroundColor={'black'} centerComponent={{text:'Story Hub',style:{color:'orange',fontSize:20}}} />
                   <View style={styles.subContainer}>
                   <TextInput onChangeText={text=>{
                       this.setState({Title:text})
                   }} style={styles.inputBox} value={this.state.Title} placeholder="Title of the Story" />
                   <TextInput onChangeText={text=>{
                       this.setState({Author:text})
                   }} style={styles.inputBox} value={this.state.Author} placeholder="Author of the Story" />
                   <TextInput onChangeText={text=>{
                       this.setState({Story:text})
                   }} style={styles.inputBox1} value={this.state.Story} placeholder="Write the Story" />
                   </View>
               </View>
           </SafeAreaProvider>
        )
    }
}
const styles=StyleSheet.create({
    inputBox:{
        marginTop: 50,
        width: '50%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 4,
        outline: 'none',
        backgroundColor:'white'
    },
    container:{
        flex: 1,
        backgroundColor: 'orange',
    },
    subContainer:{
        backgroundColor:'green',
        width:1000,
        height:500,
        justifyContent:'center',
        alignItems:'center',
        marginTop:60,
        marginLeft:250,
        borderColor:'black',
        borderWidth:10,
        borderRadius:20
    },
    inputBox1:{
        marginTop: 50,
        width: '50%',
        alignSelf: 'center',
        height: 100,
        textAlign: 'center',
        borderWidth: 4,
        outline: 'none',
        backgroundColor:'white'
    }
})