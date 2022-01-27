import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Audiolist from '../screens/AudioList';
import Player from '../screens/Player';
import Playlist from '../screens/Playlist';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import AudioProvider from '../context/AudioProvider';
import AudioFiles from '../context/AudioFiles';

const Tab = createBottomTabNavigator();
export default function AppNavigator()
{
    return(
        <AudioFiles>
        <NavigationContainer>
            <Tab.Navigator 
                barStyle={{paddingBottom:50}}
                nav
            >
                <Tab.Screen name='Home' component={Home} options={{
                    tabBarIcon : () => {return(<Icon name="home" size={25} color="#038aff" />)},
                    tabBarStyle: {paddingBottom:8,height:'7.5%'},
                    headerShown:false,
                }}/>
                <Tab.Screen name='Search' component={Search} options={{
                    tabBarIcon : () => {return(<Icon name="search" size={25} color="#038aff" />)},
                    tabBarStyle: {paddingBottom:8,height:'7.5%'},
                    headerShown:false,
                }}/>
                <Tab.Screen name='Tracks' component={Audiolist} options={{
                    tabBarIcon : () => {return(<Icon name="headphones" size={25} color="#038aff" />)},
                    tabBarStyle: {paddingBottom:8,height:'7.5%'},
                    headerShown:false,
                }}/>
                <Tab.Screen name='Player' component={Player} options={{
                    tabBarIcon : () => {return(<FontAwesome5 name="compact-disc" size={25} color="#038aff" />)},
                    tabBarStyle: {paddingBottom:8,height:'7.5%'},
                    headerShown:false,
                }}/>
                <Tab.Screen name='Playlist' component={Playlist} options={{
                    tabBarIcon : () => {return(<MaterialIcons name="library-music" size={25} color="#038aff" />)},
                    tabBarStyle: {paddingBottom:8,height:'7.5%'},
                    headerShown:false,
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
        </AudioFiles>
    );
}
