import React from 'react'
import {View,Text,Button} from 'react-native'
import * as firebase from 'firebase'
const UserLogged=()=>(
    <View>
        <Text>UserLogged ...</Text>
        <Button title="cerrar sesion" onPress={()=>{firebase.auth().signOut()}}></Button>
    </View>
)
export default UserLogged