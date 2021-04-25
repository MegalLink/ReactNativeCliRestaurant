import React from 'react'
import {StyleSheet,View,Image} from 'react-native'
import RegisterForm from '../../components/Account/RegisterForm'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
export default function Register(){
    return (
        // KeyboarAwareScrollView siempre va en la vista principal no en las hijas
        <KeyboardAwareScrollView >  
           <Image style={styles.logo} source={require('../../../assets/img/register.png')} resizeMode="contain"/>
           <View style={styles.viewForm}>
            <RegisterForm></RegisterForm>

           </View>
        </KeyboardAwareScrollView>
    )
}
const styles=StyleSheet.create({
    logo:{
        width:'100%',
        height:200,
        marginTop:20
    },
    viewForm:{
        marginRight:40,
        marginLeft:40
    }
})