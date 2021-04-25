import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {Input, Icon,Button} from 'react-native-elements';
import {colorPrimary} from '../../theme/theme';

export default function RegisterForm() {
  return (
   
      <View style={styles.formContainer} >
         <Input
            placeholder="Correo electrónico"
            containerStyle={styles.inputForm}
          />
          <Input
            secureTextEntry={true}
            placeholder="Contraseña"
            containerStyle={styles.inputForm}
          />
          <Input
            secureTextEntry={true}
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

});
