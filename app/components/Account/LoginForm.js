import React, {useState} from 'react';
import {StyleSheet, View, ToastAndroid} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';
import {colorPrimary} from '../../theme/theme';
import {validateEmail} from '../../utils/validations';
import {useNavigation} from '@react-navigation/native'
import * as firebase from 'firebase';
import Loading from '../Loading'
export default function LoginForm(){
    const toastShow = texto => {
        ToastAndroid.show(texto, ToastAndroid.LONG, ToastAndroid.CENTER);
      };
      const navigation=useNavigation()
      const defaultForm = {email: '', password: ''};
      const [showPassord, changeShowPassword] = useState(false);
      const [formData, changeFormData] = useState(defaultForm);
      const [loading,changeLoading]=useState(false)
      const onPressLogin = () => {
        
        changeShowPassword(false);
        if (!formData.email || !formData.password) {
          toastShow('Todos los campos son obligatorios');
        } else if (!validateEmail(formData.email)) {
          toastShow('Email no valido');
        } else if (formData.password.length < 6) {
          toastShow('La contraseña deben tener 6 caráctares');
        } else {
          changeLoading(true)
          firebase
            .auth()
            .signInWithEmailAndPassword(formData.email, formData.password)
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
    return(
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
        keyboardType="email-address"
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
      
      <Button
        title="Iniciar sesión"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnRegister}
        onPress={onPressLogin}></Button>
        <Loading isVisible={loading} text='Iniciando sesion'></Loading>
    </View>
    )
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