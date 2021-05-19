import React from 'react'
import { StyleSheet } from 'react-native'
import {Overlay} from 'react-native-elements'
 export default function Modal({showModal, setShowModal,children}){
     const closeModal=()=>setShowModal(false);
    return <Overlay isVisible={showModal} overlayStyle={styles.overlay} onBackdropPress={closeModal} > 
        {children}
    </Overlay>

 }
 const styles=StyleSheet.create({
    overlay:{
        width:'90%'
    }
 })