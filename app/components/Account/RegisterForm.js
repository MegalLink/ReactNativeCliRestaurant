import React,{useState} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {Input, Icon,Button} from 'react-native-elements';
import {colorPrimary} from '../../theme/theme';

export default function RegisterForm() {
    const [showPassord,changeShowPassword]=useState(false)
    const [showConfirmPassord,changeConfirmShowPassword]=useState(false)
  return (
   
      <View style={styles.formContainer} >
         <Input
            rightIcon={<Icon type='font-awesome-5' name='at' iconStyle={styles.iconRight}></Icon>}
            placeholder="Correo electrónico"
            containerStyle={styles.inputForm}
          />
          <Input
           rightIcon={<Icon type='font-awesome-5' name={!showPassord?'eye':'eye-slash'} iconStyle={styles.iconRight} onPress={()=>{changeShowPassword(!showPassord)}}></Icon>}
            secureTextEntry={!showPassord}
            placeholder="Contraseña"
            containerStyle={styles.inputForm}
          />
          <Input
           rightIcon={<Icon type='font-awesome-5' name={!showConfirmPassord?'eye':'eye-slash'} iconStyle={styles.iconRight} onPress={()=>{changeConfirmShowPassword(!showConfirmPassord)}}></Icon>}
            secureTextEntry={!showConfirmPassord}
            placeholder="Repetir contraseña"
            containerStyle={styles.inputForm}
          />
          <Button
            title="Registrarse"
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btnRegister}></Button>
      </View>

  
  );
}
const styles = StyleSheet.create({
    
  formContainer: {
   flex:1,
   alignItems:'center',
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
  iconRight:{
      color:colorPrimary
  }

});
