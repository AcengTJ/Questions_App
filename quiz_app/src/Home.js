import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Soal1 from './Soal1';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={Styles.container}>
                <View>
                    <Image source={{uri : 'https://t-2.tstatic.net/tribunnewswiki/foto/bank/images/universitas-widya-dharma-pontianak.jpg'}} style={Styles.image}/>
                </View>
                <View style={Styles.box}>
                    <Text style={Styles.text}>ACENG</Text>
                    <Text style={Styles.text}>19412400</Text>
                    <Text style={Styles.text}>6A Pemograman Android</Text>
                </View>
                <View>
                    <TouchableOpacity style={Styles.tombol} onPress={() => this.props.navigation.navigate(Soal1)}>
                        <Text style={Styles.textTombol}>Jawab Pertanyaan</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container :{
        backgroundColor:'white',
        flex : 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    image: {
        width : 268,
        height : 255,
    },
    text : {
        fontSize : 23,
        fontWeight : 'bold'
    },
    box : {
        justifyContent:'center',
        alignItems:'center',
        marginVertical : 30,
    },
    tombol : {
        backgroundColor : '#AA0CED',
        elevation : 10,
        borderRadius : 10,
        borderColor: '#D47CFC',
        borderWidth : 2,
        width : 200,
        height: 60,
        justifyContent:'center',
        alignItems:'center'
    },
    textTombol:{
        fontSize: 20,
        color: '#F3EEFC',
        fontWeight:'bold'
    }
});
export default Home;