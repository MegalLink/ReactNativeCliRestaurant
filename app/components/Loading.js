
import React from 'react'
import {StyleSheet,View,ActivityIndicator,Text} from 'react-native'
import {Overlay} from 'react-native-elements'
import {colorPrimary,backgroundTheme} from '../theme/theme'
const Loading=({isVisible,text})=>(
    <Overlay  isVisible={isVisible} overlayStyle={styles.overlay}>
        <View style={styles.view}>
            <ActivityIndicator size="large" color={colorPrimary}></ActivityIndicator>
            {text&&<Text style={styles.text}>{text}</Text>}
        </View>
    </Overlay>
)

const styles=StyleSheet.create({
    overlay:{
        height:100,
        width:200,
        backgroundColor:backgroundTheme,
        borderColor:colorPrimary,
        borderWidth:6,
        borderRadius:10
    },
    view:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:colorPrimary,
        textTransform:'uppercase',
        marginTop:10
    }
})

export default Loading