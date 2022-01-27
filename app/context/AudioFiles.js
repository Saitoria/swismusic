import React,{Component, createContext} from 'react';
import {Text,View,StyleSheet, Alert,PermissionsAndroid,Button} from 'react-native';
import MusicFiles from 'react-native-get-music-files';

export const AudioContext = createContext();
export default class AudioFiles extends Component{
    constructor(props)
    {
        super(props)
    }

    state = {
        trackArrayData:[]
    };

   getStoragePermision = async() => {
        try{
        const permission = await PermissionsAndroid.request(
       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
        title: "SwisMusic need permission to play audio",
        message:
          "SwisMusic needs access to your storage " +
          "so you listen to good music.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
        }
        );
        if (permission === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can access the audio files");
            this.getMusicFiles();
        } else {
            console.log("Storage permission denied");
            this.getStoragePermision();
        }
        }
        catch(error)
        {
            console.log(error);
            
        }
    }

    getMusicFiles = async () => {
    MusicFiles.getAll({
        id:true,
        fileName:true,
        blured : true, // works only when 'cover' is set to true
        artist : true,
        duration : true, //default : true
        cover : false, //default : true,
        genre : true,
        title : true,
        cover : true,
        minimumSongDuration : 10000 // get songs bigger than 10000 miliseconds duration,
       // fields : ['title','albumTitle','genre','lyrics','artwork','duration'] // for iOs Version
    }).then(tracks => {
        // do your stuff...
        //console.log(tracks);
        let trackArrayData = [];
        for(let i = 0; i <tracks.length;i++)
        {
            if(tracks[i])
            {
                trackArrayData.push(tracks[i]);
            }
        }
        this.setState({trackArrayData});
    }).catch(error => {
        // catch the error
        console.log(error);
    })
    }

    
    componentDidMount()
    {
        this.getStoragePermision();
    }
    
    render(){
        return(
            <AudioContext.Provider value={{trackArrayData: this.state.trackArrayData}}>
                {this.props.children}
            </AudioContext.Provider>
        )
    }
}

