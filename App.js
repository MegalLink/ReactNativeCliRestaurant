import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';

const App = () => {
  const [spin, changeSpin] = useState(false);
  const [modal,changeModal]=useState(false)
  const data = [
    {id: 1, nombre: 'Jeferson'},
    {id: 2, nombre: 'Alexander'},
    {id: 6, nombre: 'Jeferson'},
    {id: 3, nombre: 'Alexander'},
    {id: 4, nombre: 'Jeferson'},
    {id: 5, nombre: 'Alexander'},
  ];

  const renderItem = ({item}) => (
    <View>
      <Text style={[styles.textDanger]}>{item.nombre}</Text>
    </View>
  );

  var {width} = Dimensions.get('window');
  var {height} = Dimensions.get('screen');
  console.log(width, height);
  return (
    <ImageBackground source={{uri: 'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} style={{height: height, width: width}}>
      <ActivityIndicator animating={spin} size="small" color="#0000ff" />
      <Text>Hola mundo </Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        // onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        //   setModalVisible(!modalVisible);
        // }}
      >
       <Text> Soy un modal</Text>
       <Button onRequestClose={()=>{changeModal(false)}}> Cerrar Modal</Button>
      </Modal>
      <Button
        title="press me"
        onPress={() => {
          changeSpin(!spin);
        }}
      />
      <FlatList
        
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button
        title="Open modal"
        onPress={() => {
          changeModal(true);
        }}
      />
      <Image
        style={{height: 200, width: 200 }}
        source={{uri: 'https://picsum.photos/200'}}
      />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  textDanger: {
    color: '#ffff',
  },
  
  
});

export default App;
