import React from 'react';
import {Text,View,Button,StyleSheet} from 'react-native';

export default function Player()
{
    return(
        <View style={styles.container}>
        <Text style={styles.title} >Player</Text>
            <Text style={styles.txt} >Player page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        fontSize: 20,
        color: 'black',
    },
    title: {
        fontSize: 30,
        color: '#038aff',
        alignSelf: 'flex-start',
        position: 'absolute',
        top:0,
        left:0,
        fontWeight: 'bold',
        padding: 20,
    }
});