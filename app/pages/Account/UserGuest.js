import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {colorPrimary} from '../../theme/theme'
const UserGuest = () => (
  <ScrollView style={styles.viewBody} centerContent={true}>
    <Image
      style={styles.image}
      source={require('../../../assets/img/user-guest.jpg')}
      resizeMode="center"
    />
    <Text style={styles.title}>Consulta tu perfil en Delicias del Campo</Text>
    <Text style={styles.description} >
      Vestibulum eu odio. Maecenas egestas arcu quis ligula mattis placerat.
      Vestibulum fringilla pede sit amet augue. Curabitur turpis. Vestibulum eu
      odio.
    </Text>
    <View style={styles.viewBtn}>
      <Button title="Ver tu perfil" buttonStyle={styles.btn} containerStyle={styles.btnContainer} onPress={()=>{console.log("Pressed Button")}}/>
    </View>
  </ScrollView>
);
const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    height: 300,
    width: '100%',
    marginBottom: 40,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    marginBottom:20
  },
  btn:{
    
    backgroundColor:colorPrimary,
  },
  btnContainer:{
      width:'70%',
  },
  viewBtn:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
  }
});
export default UserGuest;
