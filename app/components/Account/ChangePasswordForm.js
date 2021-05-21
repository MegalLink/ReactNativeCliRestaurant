import React, {useState} from 'react';
import {StyleSheet, View, Text, ToastAndroid} from 'react-native';
import {Input, Button, Icon} from 'react-native-elements';
import {colorPrimary} from '../../theme/theme';
import * as firebase from 'firebase';
export default function ChangeDisplayNameForm({displayName, setShowModal,setReloadUserInfo}) {
  const [newDisplayName, setNewDisplayName] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const onSubmit = () => {
    setError(null);
    if (!newDisplayName) {
      setError('El nombre no puede estar vacio');
    } else if (displayName === newDisplayName) {
      setError('El nombre no puede ser igual al actual');
    } else {
        const update={
            displayName:newDisplayName
        }
        setIsLoading(true)
      firebase.auth().currentUser.updateProfile(update).then(()=>{
            setIsLoading(false)
            setReloadUserInfo(true);
            setShowModal(false)
      }).catch((error)=>{
        ToastAndroid.show(`Error: ${error}`, ToastAndroid.LONG, ToastAndroid.CENTER);
        setIsLoading(false)
    })
    }
  };
  return (
    <View style={sytles.view}>
      <Input
      label="Nombre de usuario"
        rightIcon={<Icon type="font-awesome-5" name="user" color="#ccc" />}
        placeholder="Nombre de usuario"
        defaultValue={displayName && displayName}
        onChange={e => setNewDisplayName(e.nativeEvent.text)}
        errorMessage={error}
        
        ></Input>
      <Button
        title="Cambiar nombre"
        containerStyle={sytles.btnContainer}
        buttonStyle={sytles.btn}
        onPress={onSubmit} loading={isLoading}></Button>
    </View>
  );
}
const sytles = StyleSheet.create({
  view: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  btnContainer: {
    width: '100%',
  },
  btn: {
    backgroundColor: colorPrimary,
  },
});
