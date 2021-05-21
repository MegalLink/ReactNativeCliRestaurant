import React, {useState} from 'react';
import {StyleSheet, View, Text, ToastAndroid} from 'react-native';
import {Input, Button, Icon} from 'react-native-elements';
import {colorPrimary} from '../../theme/theme';
import * as firebase from 'firebase';
import {reauthenticate} from '../../utils/api';
import {validateEmail} from '../../utils/validations';
export default function ChangeEmailForm({
  email,
  setShowModal,
  setReloadUserInfo,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const defaultForm = {email: '', password: ''};
  const [formData, setformData] = useState(defaultForm);
  const [errors, seterrors] = useState({});

  const onChange = (e, type) => {
    setformData({...formData, [type]: e.nativeEvent.text});
  };
  const onSubmit = () => {
    seterrors({});
    if (!formData.email || email === formData.email) {
      seterrors({
        email: 'El email no ha cambiado',
      });
    } else if (!validateEmail(formData.email)) {
      seterrors({email: 'Ingrese un email válido'});
    } else if (!formData.password || formData.password.length < 6) {
      seterrors({password: 'El password debe tener más de 6 caracteres'});
    } else {
      setIsLoading(true);
      reauthenticate(formData.password)
        .then(response => {
          firebase
            .auth()
            .currentUser.updateEmail(formData.email)
            .then(() => {
              setIsLoading(false);
              setReloadUserInfo(true);
              ToastAndroid.show(
                'Email actualizado correctamente',
                ToastAndroid.LONG,
              );
              setShowModal(false);
            })
            .catch(() => {
              seterrors({email: 'Error al actualizar el email'});
              setIsLoading(false);
            });
        })
        .catch(() => {
          setIsLoading(false);
          seterrors({password: 'La contraseña no es correcta'});
        });
    }
  };
  return (
    <View style={sytles.view}>
      <Input
        label="Email"
        rightIcon={<Icon type="font-awesome-5" name="at" color="#ccc" />}
        placeholder="Email"
        errorMessage={errors.email}
        defaultValue={email ? email : ''}
        onChange={e => onChange(e, 'email')}></Input>
      <Input
        label="Password"
        secureTextEntry={showPassword}
        errorMessage={errors.password}
        rightIcon={{
          type: 'font-awesome-5',
          name: showPassword ? 'eye-slash' : 'eye',
          color: '#ccc',
          onPress: () => setShowPassword(!showPassword),
        }}
        placeholder="Password"
        onChange={e => onChange(e, 'password')}></Input>

      <Button
        title="Cambiar email"
        containerStyle={sytles.btnContainer}
        buttonStyle={sytles.btn}
        onPress={onSubmit}
        loading={isLoading}></Button>
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
