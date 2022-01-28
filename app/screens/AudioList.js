import React,{Component} from 'react';
import {Text,View,Button,StyleSheet,FlatList,Image} from 'react-native';
import {AudioContext} from '../context/AudioFiles';
import ListItem from '../components/ListItem';
import OptionModal from '../components/OptionModal';
import TrackPlayer, {
    useTrackPlayerProgress,
    usePlaybackState,
    useTrackPlayerEvents,}
     from 'react-native-track-player';

export default class Audiolist extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            optionModalVisible:false,
            isPlaying:false,
        };

        this.currentItem = {};
    }

    handleAudioPress = async (audio) => {
        try{
            await TrackPlayer.setupPlayer();
            await TrackPlayer.add({
                id: audio.id,
                url: audio.path,
                title:audio.fileName,
                artist:audio.author,
                artwork:audio.blured,
            });
            const status = await TrackPlayer.play();            
            TrackPlayer.registerPlaybackService;
            //console.log(audio);
            console.log(status);
        }
        catch(e)
        {
            console.log(e);
        }
    };

    static contextType = AudioContext;
    render()
    {
    return(
        <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.pageTitle}>Tracks</Text>
        </View>

        <View style={styles.listContainer}>
        <FlatList
            data = {this.context.trackArrayData}
            renderItem = {({item}) => (//<View style={styles.box}><Text style={styles.txt}>{item.fileName}</Text></View>
                 <ListItem title={item.fileName} duration={item.duration}
                 onAudioPress={()=>this.handleAudioPress(item)
                    //this.setState({...this.state, optionModalVisible: true});
                 }
                  onOptionPress={()=>{
                     this.setState({...this.state, optionModalVisible: true});
                     this.currentItem = item;
                 }}/> //duration={item.duration}
            )}
            keyExtractor={item => item.id}
        />
        <OptionModal 
        currentItem = {this.currentItem}
        visible={this.state.optionModalVisible} 
        onPlayPress={() => console.log('Play song')}
        onPlayListPress={() => console.log('Going to playlist')}
        onClose={()=> this.setState({...this.state, optionModalVisible:false})}/>
        </View>
        </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'white',
    },
    listContainer:{
        marginTop:0,
        flex:1,
    },
    pageTitle: {
        fontSize: 28,
        color: '#038aff',
        alignSelf: 'flex-end',
        position: 'relative',
        top:0,
        left:-135,
        fontWeight: 'bold',
        marginVertical:10,
    }
});