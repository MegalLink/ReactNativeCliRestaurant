import React from 'react';
import {StyleSheet, View, Text,To} from 'react-native';
import {Avatar} from 'react-native-elements';
export default function InfoUser({userInfo}) {
  const {photoUrl,displayName,email}=userInfo
  
  return (
    <View style={styles.viewUserInfo}>
      <Avatar
        containerStyle={styles.userInfoAvatar}
        rounded
        activeOpacity={1}
        size='large'
        title='perfil'
        source={ photoUrl?{uri:photoUrl}:require('../../../assets/img/avatar-default.jpg')}
      />
      <View>
          <Text style={styles.displayName}>{displayName?displayName:'Anónimo'}</Text>
          <Text>{email?email:'Social login'}</Text>
      </View>
    </View>
  );
}
const styles=StyleSheet.create({
    viewUserInfo:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        paddingVertical:30

    },
    userInfoAvatar:{
        marginRight:20
    },
    displayName:{
        fontWeight:'bold',
        paddingBottom:10
    }
})