import React from 'react';
import {Text,View,Button,StyleSheet} from 'react-native';

export default function Playlist()
{
    return(
        <View style={styles.container}>
        <Text style={styles.title} >Playlist</Text>
            <Text style={styles.txt}>Playlist page</Text>
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