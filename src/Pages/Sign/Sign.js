import React from 'react';
import {View, Text, Image} from 'react-native';
import Button from '../../components/Button/Button';
import Input from '../../components/TextInput/Input';
import styles from './Sign.style';

const Sign = ({navigation}) => {
  const goBackLogin = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Image
          style={styles.image}
          source={require('../../assets/image.png')}
        />
        <Text style={styles.header_text}>I do not care!</Text>
      </View>
      <Input placeholder="Enter your e-mail..." />
      <Input placeholder="Enter your password..." />
      <Input placeholder="Enter your password again..." />
      <Button text={'Sign up'} />
      <Button text={'Back to Login'} theme="secondary" onPress={goBackLogin} />
      <View style={styles.bottom_container}>
        <Text style={styles.bottom_text}>Write... Read... Relax...</Text>
      </View>
    </View>
  );
};

export default Sign;
