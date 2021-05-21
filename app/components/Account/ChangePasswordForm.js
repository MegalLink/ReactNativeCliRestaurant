import React, {useState} from 'react';
import {StyleSheet, View, Text, ToastAndroid} from 'react-native';
import {Input, Button, Icon} from 'react-native-elements';
import {colorPrimary} from '../../theme/theme';
import * as firebase from 'firebase';
import {reauthenticate} from '../../utils/api';
export default function ChangeDisplayNameForm({
  setShowModal,
  setReloadUserInfo,
}) {
  const [showPassword, setshowPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const formDataDefault = {
    password: '',
    newPassword: '',
    confirmNewPassword: '',
  };
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(formDataDefault);
  const onChange = (e, type) => {
    setFormData({...formData, [type]: e.nativeEvent.text});
  };
  const onSubmit = async () => {
    let isSetErrors = true;
    let errorsTemp = {};
    setErrors({});
    if (
      !formData.password ||
      !formData.newPassword ||
      !formData.confirmNewPassword
    ) {
      errorsTemp = {
        password: !formData.password ? 'El password es obligatorio' : '',
        newPassword: !formData.newPassword
          ? 'Nuevo password es obligatorio'
          : '',
        confirmNewPassword: !formData.confirmNewPassword
          ? 'Confirmación de nuevo password es obligatorio'
          : '',
      };
    } else if (formData.newPassword !== formData.confirmNewPassword) {
      errorsTemp = {
        newPassword: 'El password no coincide',
        confirmNewPassword: 'El password no coincide',
      };
    } else if (formData.newPassword.length < 6) {
      errorsTemp = {
        newPassword: 'La contraseña tiene que ser mayor de 5 caracteres',
        confirmNewPassword: 'La contraseña tiene que ser mayor de 5 caracteres',
      };
    } else {
      setLoading(true);
      await reauthenticate(formData.password)
        .then(async () => {
          await firebase
            .auth()
            .currentUser.updatePassword(formData.newPassword)
            .then(() => {
              isSetErrors = false;
              setLoading(false);
              setShowModal(false);
              firebase.auth().signOut();
            })
            .catch(() => {
              errorsTemp = {
                other: 'Error al actualizar la contraseña',
              };
              setLoading(false);
            });
        })
        .catch(() => {
          errorsTemp = {password: 'La contraseña no es correcta'};
          setLoading(false);
        });
    }

    
    isSetErrors&&setErrors(errorsTemp);
    
  };
  return (
    <View style={sytles.view}>
      <Input
        secureTextEntry={showPassword}
        label="Password actual"
        rightIcon={{
          type: 'font-awesome-5',
          name: showPassword ? 'eye-slash' : 'eye',
          color: '#ccc',
          onPress: () => setshowPassword(!showPassword),
        }}
        placeholder="Password actual"
        onChange={e => onChange(e, 'password')}
        errorMessage={errors.password}></Input>
      <Input
        secureTextEntry={showPassword}
        label="Password nuevo"
        rightIcon={{
          type: 'font-awesome-5',
          name: showPassword ? 'eye-slash' : 'eye',
          color: '#ccc',
          onPress: () => setshowPassword(!showPassword),
        }}
        placeholder="Password nuevo"
        errorMessage={errors.newPassword}
        onChange={e => onChange(e, 'newPassword')}></Input>
      <Input
        secureTextEntry={showPassword}
        label="Confirmar password nuevo"
        rightIcon={{
          type: 'font-awesome-5',
          name: showPassword ? 'eye-slash' : 'eye',
          color: '#ccc',
          onPress: () => setshowPassword(!showPassword),
        }}
        placeholder="Confirmar password"
        errorMessage={errors.confirmNewPassword}
        onChange={e => onChange(e, 'confirmNewPassword')}></Input>
      <Button
        title="Cambiar password"
        containerStyle={sytles.btnContainer}
        buttonStyle={sytles.btn}
        onPress={onSubmit}
        loading={loading}></Button>
      <Text>{errors.other}</Text>
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
