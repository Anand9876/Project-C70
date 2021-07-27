import React,{Component} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import WriteStory from './screens/WriteStoryScreen';
import ReadStory from './screens/ReadStoryScreen';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator=createBottomTabNavigator({
  Writestory:{screen:WriteStory},
  Readstory:{screen:ReadStory}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const routeName=navigation.state.routeName;

      if(routeName==='Writestory'){
        return <Image source={require('./assets/write.png')} style={{width:40,height:40}} ></Image>
      }
      else if(routeName==='Readstory'){
        return <Image source={require('./assets/read.png')} style={{width:40,height:40}} ></Image>
      }
    }
  })
})

const AppContainer=createAppContainer(TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
