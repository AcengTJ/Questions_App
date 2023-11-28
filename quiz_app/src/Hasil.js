import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

class Hasil extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={Styles.container}>
                <View>
                    <Text  style={Styles.text}>Total Benar : {this.props.route.params.benar}</Text>
                    <Text  style={Styles.text}>Total Salah : {this.props.route.params.salah}</Text>
                </View>
                <View>
                    <TouchableOpacity key={1} style={Styles.tombol} onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={Styles.text}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const Styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding : 10,
        flex : 1,
        justifyContent:'center',
        alignItems:'center'
    },
    text :{
        fontSize:23,
        fontWeight:'bold'
    },
    tombol:{
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        width : 200,
        height : 50,
        borderRadius : 10,
        borderColor : '#C4B4E4',
        borderWidth : 2,
        marginVertical : 20
    },
});
export default Hasil;