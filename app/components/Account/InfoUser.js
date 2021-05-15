import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
export default function InfoUser({userInfo}) {
  const {photoUrl,displayName,email}=userInfo
  const changeAvatar=()=>{
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options,(response)=>{
     
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log(response)
        // console.log('response', JSON.stringify(response));
      }
    })
  }
  return (
    <View style={styles.viewUserInfo}>
      <Avatar
        containerStyle={styles.userInfoAvatar}
        rounded
        activeOpacity={1}
        size='large'
        title='perfil'
        source={ photoUrl?{uri:photoUrl}:require('../../../assets/img/avatar-default.jpg')}
        
      >
         <Avatar.Accessory type='font-awesome-5' name='pencil-alt' size={22} onPress={changeAvatar}  />
      </Avatar>
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