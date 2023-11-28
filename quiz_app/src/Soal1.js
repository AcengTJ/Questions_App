import React, { Component } from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import Soal2 from './Soal2';

class Soal1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            benar : 0,
            salah:0,
            pertanyaan:[
                {
                    id:1,
                    soal: "Sungai terpanjang yang ada di Indonesia adalah sungai ?",
                    opsi : ["Sungai Kapuas", "Sungai Raya", "Sungai Eden", "Sungai Wahana"],
                    jawaban: "Sungai Kapuas"
                },
                {
                    id:2,
                    soal: "Siapa Presiden pertama Indonesia ?",
                    opsi:["Ir. Soekarno", "M.Hatta", "Joko Widodo", "B.J. Habibi"],
                    jawaban : "Ir. Soekarno"
                },
                {
                    id:3,
                    soal: "Berapa hasil dari 1 + 1 x 0 =...",
                    opsi :["2","0","1","3"],
                    jawaban:"1"
                },
                {
                    id:4,
                    soal :"Tanggal kemerdekaan Indonesia ?",
                    opsi:["17 Agustus 1944", "18 Agustus 1945", "17 Agustus 1945", "18 Agustus 1944"],
                    jawaban:"17 Agustus 1945"
                }
            ]
        };
    }

    acakarray = () =>{
        let nilaiAwal = [0,1,2,3];
        for (let i=0;i<nilaiAwal.length;i++){
            const j = Math.floor(Math.random()*4);
            const temp = nilaiAwal[i];
            nilaiAwal[i] = nilaiAwal[j];
            nilaiAwal[j] = temp;
        }
        return nilaiAwal;
    }

    cekJawaban = (jawab, jawaban) => {
        if (jawab === jawaban) {
            this.setState({benar : this.state.benar + 1});
            Alert.alert (
                "Informasi",
                "Benar",
                [
                    {
                        text: "OK",
                        onPress : () => console.log("OK Pressed")
                    }
                ],
                {cancelable : false}
            );
            this.setState({salah : this.state.salah + 0});
        } else {
            this.setState({benar : this.state.benar + 0});
            Alert.alert (
                "Informasi",
                "Salah",
                [
                    {
                        text: "OK",
                        onPress : () => console.log("OK Pressed")
                    }
                ],
                {cancelable : false}
            );
            this.setState({salah : this.state.salah + 1});
        }
    };

    render() {
        let nilaiAcak = this.acakarray();
        let soal = this.state.pertanyaan[nilaiAcak[0]].soal;
        let opsi = this.state.pertanyaan[nilaiAcak[0]].opsi;
        return (
            <View style = {styles.container}>
                <View style={styles.Header}>
                    <TouchableOpacity style={styles.bNavigation} onPress={() => this.props.navigation.navigate('Home')}>
                        <Text>Back</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>Pertanyaan 1</Text>
                    <TouchableOpacity style={styles.bNavigation} onPress={() => this.props.navigation.navigate('Soal2', {salah : this.state.salah, benar : this.state.benar})}>
                        <Text>Next</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.boxsoal}>
                    <Text style={styles.text}>{soal}</Text>
                </View>
                {opsi.map((index)=>(
                    <View>
                        <Tombol
                            onPress={()=>this.cekJawaban(index, this.state.pertanyaan[nilaiAcak[0]].jawaban)}
                            text = {index}
                            key = {this.state.pertanyaan[nilaiAcak[0]].id}
                        />
                    </View>
                ))}
            </View>
        );
    }
}

const Tombol = (param) => {
    return(
        <TouchableOpacity onPress={param.onPress} style={styles.tombol}>
            <Text style={styles.textSoal}>{param.text}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
        padding : 20
    },
    Header : {
        flexDirection:'row',
        justifyContent : 'space-between',
        marginVertical : 10
    },
    bNavigation : {
        backgroundColor : '#8CCCF4',
        elevation : 5,
        width : 50,
        height : 50,
        justifyContent : 'center',
        alignItems : 'center'
    },
    boxsoal:{
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor : '#079BF6',
        borderWidth : 1,
        elevation: 10,
        borderRadius : 10,
        marginVertical : 10,
        flex : 0.5
    },
    tombol :{
        padding : 20,
        flexDirection:'row',
        marginVertical : 5,
        borderRadius : 10,
        elevation : 5,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#8CCCF4'
    },
    text : {
        fontSize : 20,
        fontWeight : 'normal'
    },
    textSoal : {
        fontSize : 23,
        fontWeight:'bold'
    }
})

export default Soal1;