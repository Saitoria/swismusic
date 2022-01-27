import React,{Component} from 'react';
import {Text,View,Button,StyleSheet,FlatList,Image} from 'react-native';
import {AudioContext} from '../context/AudioFiles';
import ListItem from '../components/ListItem';
import OptionModal from '../components/OptionModal';

export default class Audiolist extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            optionModalVisible:false,
        };

        this.currentItem = {};
    }

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
                 <ListItem title={item.fileName} duration={item.duration} onOptionPress={()=>{
                     this.setState({...this.state, optionModalVisible: true});
                     this.currentItem = item;
                 }}/> //duration={item.duration}
            )}
            keyExtractor={item => item.id}
        />
        <OptionModal 
        currentItem = {this.currentItem}
        visible={this.state.optionModalVisible} 
        onPlayPress={() => console.log('Playing audio')}
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