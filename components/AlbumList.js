
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends React.Component {

state = {

         albums : null
           
        }

    componentWillMount()
    {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then((response) => (this.setState({ albums : response })));
     
    }


    render()
    {
       console.log("render is called");
       console.log(this.state.albums);
       return (<View>

                  { this.state.albums &&  this.state.albums.data.map((album,index) => (<Text key = {index}>{index +1 } : {album.title}</Text>) ) }
              
               </View>);
    }
}


export default AlbumList;