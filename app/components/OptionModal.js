import React from 'react';
import {View,StyleSheet,Text,Modal,StatusBar,TouchableWithoutFeedback} from 'react-native';


export default function OptionModal({visible,onClose,currentItem,onPlayPress,onPlayListPress}) 
{
    return(
        <>
        <StatusBar hidden={true}/>
        <Modal animationType='slide' transparent visible={visible}>
            <View style={styles.modal}>
                <Text style={styles.title} numberOfLines={2}>{currentItem.fileName}</Text>
                <View style={styles.optionContainer}>

                <TouchableWithoutFeedback onPress={onPlayPress}>
                    <Text style={styles.option}>Play</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={onPlayListPress}>
                    <Text style={styles.option}>Add to playlist</Text>
                </TouchableWithoutFeedback>

                </View>
            </View>
            <TouchableWithoutFeedback onPress={onClose}>
            <View style={styles.modalBg}/>
            </TouchableWithoutFeedback>
        </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    modal:{
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        backgroundColor:'white',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        zIndex:1000,
    },
    optionContainer:{
        padding:20,
    },
    title:{
        fontSize:16,
        fontWeight:'bold',
        color:'black',
        padding:20,
        paddingBottom:0,
    },
    option:{
        fontSize:14,
        fontWeight:'bold',
        color:'black',
        paddingVertical:10, 
        letterSpacing:1,
    },
    modalBg:{
        position:'absolute',
        left:0,
        right:0,
        top:0,
        bottom:0,
        backgroundColor:'rgba(0,0,0,0.2)',
    },

});