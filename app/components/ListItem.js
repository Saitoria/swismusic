import React from 'react';
import {View,StyleSheet,Text,Image, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const converTime = minutes => {
    if(minutes)
    {
        const hrs = minutes/(60*1000);
        const minute = hrs.toString().split('.')[0];
        const percent = parseInt(hrs.toString().split('.').slice(0,2));
        const sec = Math.ceil((60*percent)/100);
    
    if(parseInt(minute)<10 && sec<10)
    {
        return `0${minute}:0${sec}`;
    }
    if(parseInt(minute)<10 )
    {
        return `0${minute}:${sec}`;
    }
    if(sec<10)
    {
        return `${minute}:0${sec}`;
    }

    return `${minute}:${sec}`;
    }
};


const ListItem = ({title,duration,onOptionPress,onAudioPress}) =>
{
    return(
        <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onAudioPress}>
            <View style={styles.leftContainer}>
                <Image style={styles.thumbnail} source={require('../resources/music-icon(3).png')}/>
                <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <Text style={styles.time} numberOfLines={1}>{converTime(duration)}</Text>
                </View>
            </View>
            </TouchableWithoutFeedback>

            <View style={styles.rightContainer}>
            <Icon name="ellipsis-v" size={20} color="#000" style={styles.iconStyle} onPress={onOptionPress} />
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignSelf:'center',
        width:'96%',
        height:68,
        //paddingVertical:10,
    },
    leftContainer:{
        flexDirection:'row',
        alignItems:'center',
        flex:1,
        paddingVertical:5,
    },
    rightContainer:{
        flexBasis:'7%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:5,
        zIndex:10,
        backgroundColor:'white',
    },
    thumbnail:{
        height:46,
        width:46,
        paddingRight:10,
        alignItems:'center',
    },
    titleContainer:{
        paddingLeft:10,
    },
    title:{
        fontSize:14,
        width:320,
        color:'black',
    },
    time:{
        fontSize:12,
        marginTop:3,
        color:'black',
    },
    iconStyle:{
        height:45,
         width:45,
         position:'absolute',
         left:0,
         padding:12,
        },

});

export default ListItem;