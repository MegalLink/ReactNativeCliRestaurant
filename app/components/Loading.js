
import React from 'react'
import {StyleSheet,View,ActivityIndicator,Text} from 'react-native'
import {Overlay} from 'react-native-elements'
const Loading=({isVisible,text})=>(
    <Overlay  isVisible={isVisible} overlayStyle={styles.overlay}>
        <View style={styles.view}>
            <ActivityIndicator size="large" color="#006180"></ActivityIndicator>
            {text&&<Text style={styles.text}>{text}</Text>}
        </View>
    </Overlay>
)

const styles=StyleSheet.create({
    overlay:{
        height:100,
        width:200,
        backgroundColor:'#fff',
        borderColor:'#006180',
        borderWidth:2,
        borderRadius:10
    },
    view:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:'#006180',
        textTransform:'uppercase',
        marginTop:10
    }
})

export default Loading