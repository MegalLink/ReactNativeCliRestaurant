import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
import Modal from '../Modal';
import ChangeDisplayNameForm from './ChangeDisplayNameForm';
import ChangeEmailForm from './ChangeEmailForm';
const AccountOptions = ({userInfo, setReloadUserInfo}) => {
  const [showModal, setShowModal] = useState(false);
  const [renderComponent, setRenderComponent] = useState(null);
  const selectedComponent = key => {
    switch (key) {
      case 'displayName':
        setRenderComponent(
          <ChangeDisplayNameForm
            displayName={userInfo.displayName}
            setReloadUserInfo={setReloadUserInfo}
            setShowModal={setShowModal}></ChangeDisplayNameForm>,
        );
        break;
      case 'email':
        setRenderComponent(
          <ChangeEmailForm
            email={userInfo.email}
            setShowModal={setShowModal}
            setReloadUserInfo={setReloadUserInfo}
          />,
        );
        break;
      case 'password':
        setRenderComponent(<Text>Cambiando password</Text>);
        break;
      default:
        setRenderComponent(null);
        break;
    }
    console.log(key);
    setShowModal(true);
  };
  const menuOptions = generateOptions(selectedComponent);
  return (
    <View>
      {menuOptions.map((item, index) => (
        <ListItem key={index} bottomDivider onPress={item.onPress}>
          <Icon
            type={item.iconType}
            name={item.iconName}
            color={item.iconColor}
          />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron></ListItem.Chevron>
        </ListItem>
      ))}
      <Modal showModal={showModal} setShowModal={setShowModal}>
        {renderComponent}
      </Modal>
    </View>
  );
};
function generateOptions(selectedComponent) {
  return [
    {
      title: 'Cambiar Nombre y Apellido',
      iconType: 'font-awesome-5',
      iconName: 'user',
      iconColor: '#ccc',
      onPress: () => selectedComponent('displayName'),
    },
    {
      title: 'Cambiar Email',
      iconType: '',
      iconType: 'font-awesome-5',
      iconName: 'at',
      iconColor: '#ccc',
      onPress: () => selectedComponent('email'),
    },
    {
      title: 'Cambiar Password',
      iconType: '',
      iconType: 'font-awesome-5',
      iconName: 'key',
      iconColor: '#ccc',
      onPress: () => selectedComponent('password'),
    },
  ];
}

export default AccountOptions;
