import React from 'react';
import {StyleSheet, View, Text, ToastAndroid} from 'react-native';
import {Avatar} from 'react-native-elements';
import {launchImageLibrary} from 'react-native-image-picker';
import * as firebase from 'firebase';
export default function InfoUser({userInfo}) {
  const {uid,photoURL, displayName, email} = userInfo;
  console.log(userInfo)
  const changeAvatar = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        ToastAndroid.show('Galeria cerrada', ToastAndroid.LONG, ToastAndroid.CENTER);
      } else if (response.error) {
        ToastAndroid.show(`Error: ${response.error}`,  ToastAndroid.LONG, ToastAndroid.CENTER);
      } else if (response.customButton) {
        ToastAndroid.show(`${response.customButton}` ,ToastAndroid.LONG, ToastAndroid.CENTER);
      } else {
        uploadImage(response.uri)
          .then(() => {
            updatePhotoURL();
          })
          .catch(err => {
            console.error(err);
          });
      }
    });
  };
  const updatePhotoURL=()=>{
      firebase.storage().ref(`avatar/${uid}`).getDownloadURL().then(async (response)=>{
        const update={photoURL:response};
        await firebase.auth().currentUser.updateProfile(update);
        console.log("ready")
      })
  }
  const uploadImage = async uri => {
    
    const response = await fetch(uri);
   
    const blob = await response.blob();
    
    const ref = firebase.storage().ref().child(`avatar/${uid}`);
    
    return ref.put(blob);
  };
  return (
    <View style={styles.viewUserInfo}>
      <Avatar
        containerStyle={styles.userInfoAvatar}
        rounded
        activeOpacity={1}
        size="large"
        title="perfil"
        source={
          photoURL
            ? {uri: photoURL}
            : require('../../../assets/img/avatar-default.jpg')
        }>
        <Avatar.Accessory
          type="font-awesome-5"
          name="pencil-alt"
          size={22}
          onPress={changeAvatar}
        />
      </Avatar>
      <View>
        <Text style={styles.displayName}>
          {displayName ? displayName : 'Anónimo'}
        </Text>
        <Text>{email ? email : 'Social login'}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  viewUserInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 30,
  },
  userInfoAvatar: {
    marginRight: 20,
  },
  displayName: {
    fontWeight: 'bold',
    paddingBottom: 10,
  },
});
