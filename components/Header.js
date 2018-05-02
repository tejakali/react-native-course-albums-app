
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
      return(<View style = {styles.HeaderContainer}>
                <Text style = {styles.HeaderText}>{props.title}</Text>
           </View>);
}


const styles = StyleSheet.create(
    {

       HeaderContainer: {

          height : 60,
          backgroundColor : '#F8F8F8',
          justifyContent : 'center',
          alignItems : 'center',
          padding : 15,
          borderBottomWidth : 1,
          borderColor : '#a8a8a8',
        },

        HeaderText : {
        fontSize : 20,
        fontWeight : '900'
        }



    }

);

export default Header;