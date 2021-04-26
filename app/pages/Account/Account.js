import React,{useState,useEffect} from 'react'
import {View,Text} from 'react-native'
import * as firebase from 'firebase'
import UserGuest from "./UserGuest"
import UserLogged from './UserLogged'
import Loading from '../../components/Loading'
const Account=()=>{
    const [logged,changeLogged]=useState(null)
    useEffect(()=>{
        const af=firebase.auth().onAuthStateChanged((user)=>{
            user?changeLogged(true):changeLogged(false)
        })
         return af
    },[logged])
    if(logged==null){
        return (<Loading text="Cargando..." isVisible={true}></Loading>)
    }
    return logged?<UserLogged/>:<UserGuest/>
}
export default Account