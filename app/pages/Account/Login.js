import React,{useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Image,ToastAndroid} from 'react-native';
import {Divider} from 'react-native-elements';
import {colorPrimary, colorDanger} from '../../theme/theme';
import {useNavigation} from '@react-navigation/native';
import LoginForm from '../../components/Account/LoginForm';

export default function Login() {
    
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          style={styles.logo}
          source={require('../../../assets/img/login.png')}
        />
      </View>
      <View style={styles.viewContainer}>
        <LoginForm></LoginForm>
        <CreateAccount></CreateAccount>
      </View>
      <Divider style={styles.divider}></Divider>
      
    </ScrollView>
  );
}
function CreateAccount() {
  const navigate = useNavigation();
  return (
    <Text style={styles.textRegister}>
      ¿Aún no tienes una cuenta?
      <Text
        onPress={() => {
          navigate.navigate('Register');
        }}
        style={styles.btnRegister}>
        {' '}
        Regístrate
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 20,
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  btnRegister: {
    color: colorPrimary,
    fontWeight: 'bold',
  },
  divider: {
    backgroundColor: colorPrimary,
    marginHorizontal: 50,
    marginVertical: 20,
  },
  
});
