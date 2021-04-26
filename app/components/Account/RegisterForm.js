import React, {useState} from 'react';
import {StyleSheet, View, ToastAndroid} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';
import {colorPrimary} from '../../theme/theme';
import {validateEmail} from '../../utils/validations';
import {useNavigation} from '@react-navigation/native'
import * as firebase from 'firebase';
import Loading from '../Loading'
export default function RegisterForm() {
  const toastShow = texto => {
    ToastAndroid.show(texto, ToastAndroid.LONG, ToastAndroid.CENTER);
  };
  const navigation=useNavigation()
  const defaultForm = {email: '', password: '', confirmPassword: ''};
  const [showPassord, changeShowPassword] = useState(false);
  const [showConfirmPassord, changeConfirmShowPassword] = useState(false);
  const [formData, changeFormData] = useState(defaultForm);
  const [loading,changeLoading]=useState(false)
  const onPressRegister = () => {
    changeConfirmShowPassword(false);
    changeShowPassword(false);
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      toastShow('Todos los campos son obligatorios');
    } else if (!validateEmail(formData.email)) {
      toastShow('Email no valido');
    } else if (formData.password !== formData.confirmPassword) {
      toastShow('Las contraseñas deben ser iguales');
    } else if (formData.password.length < 6) {
      toastShow('La contraseña deben tener 6 caráctares');
    } else {
      changeLoading(true)
      firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then(res => {
          changeLoading(false)
          navigation.navigate("Account")
        })
        .catch(err => {
          changeLoading(false)
          toastShow(err.message);
        });
    }
  };
  const onChange = (text, type) => {
    changeFormData({...formData, [type]: text});
  };

  return (
    <View style={styles.formContainer}>
      <Input
        nativeID="email"
        rightIcon={
          <Icon
            type="font-awesome-5"
            name="at"
            iconStyle={styles.iconRight}></Icon>
        }
        placeholder="Correo electrónico"
        containerStyle={styles.inputForm}
        onChangeText={text => {
          onChange(text, 'email');
        }}
      />
      <Input
        rightIcon={
          <Icon
            type="font-awesome-5"
            name={showPassord ? 'eye' : 'eye-slash'}
            iconStyle={styles.iconRight}
            onPress={() => {
              changeShowPassword(!showPassord);
            }}></Icon>
        }
        secureTextEntry={!showPassord}
        placeholder="Contraseña"
        containerStyle={styles.inputForm}
        onChangeText={text => {
          onChange(text, 'password');
        }}
      />
      <Input
        rightIcon={
          <Icon
            type="font-awesome-5"
            name={showConfirmPassord ? 'eye' : 'eye-slash'}
            iconStyle={styles.iconRight}
            onPress={() => {
              changeConfirmShowPassword(!showConfirmPassord);
            }}></Icon>
        }
        secureTextEntry={!showConfirmPassord}
        placeholder="Repetir contraseña"
        containerStyle={styles.inputForm}
        onChangeText={text => {
          onChange(text, 'confirmPassword');
        }}
      />
      <Button
        title="Registrarse"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnRegister}
        onPress={onPressRegister}></Button>
        <Loading isVisible={loading} text='Creando cuenta'></Loading>
    </View>
  );
}
const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  inputForm: {
    width: '100%',
  },
  btnContainer: {
    width: '80%',
  },
  btnRegister: {
    backgroundColor: colorPrimary,
  },
  iconRight: {
    color: colorPrimary,
  },
});
