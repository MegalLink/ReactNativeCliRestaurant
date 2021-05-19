import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,ToastAndroid} from 'react-native'
import {Button} from 'react-native-elements'
import Loading from '../../components/Loading'
import {backgroundTheme,colorPrimary,colorDark} from '../../theme/theme'
import * as firebase from 'firebase'
import InfoUser from '../../components/Account/InfoUser'
import AccountOptions from '../../components/Account/AccountOptions'
const UserLogged=()=>{
    
    
      const [loading,changeLoading]=useState(false);
      const [loadingText,changeLoadingText]=useState('');
      const [userInfo,changeUserInfo]=useState(null);
      const [reloadUserInfo, setReloadUserInfo] = useState(false)
      useEffect(()=>{
          const unsubscribe=async ()=>{
              const user = await firebase.auth().currentUser;
              changeUserInfo(user)
          }
          unsubscribe()
          setReloadUserInfo(false)
          return unsubscribe
      },[reloadUserInfo])
    return(
    <View style={styles.viewUserInfo}>
        {userInfo&& <InfoUser userInfo={userInfo} changeLoading={changeLoading} changeLoadingText={changeLoadingText}></InfoUser>}
        <AccountOptions userInfo={userInfo} setReloadUserInfo={setReloadUserInfo}></AccountOptions>
        <Button title="Cerrar sesión" onPress={()=>{firebase.auth().signOut()}} buttonStyle={styles.btnCloseSession} titleStyle={styles.titleBtnStyle}></Button>
        <Loading text={loadingText} isVisible={loading}></Loading>
    </View>
)}
export default UserLogged
const styles =StyleSheet.create({
    viewUserInfo:{
        minHeight:'100%',
        backgroundColor:backgroundTheme
    },
    btnCloseSession:{
        marginTop:30,
        borderRadius:0,
        backgroundColor:backgroundTheme,
        borderTopWidth:1,
        borderTopColor:colorDark,
        borderBottomWidth:1,
        borderBottomColor:colorDark,
        paddingTop:10,
        paddingBottom:10,
        
    },
    titleBtnStyle:{
        color:colorPrimary
    }
})