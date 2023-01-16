import React from 'react';
import {View, Text, Image} from 'react-native';
import Button from '../../components/Button/Button';
import Input from '../../components/TextInput/Input';
import styles from './Login.style';
import {Formik} from 'formik';

const initialFormValues = {
  usermail: '',
  password: '',
};

const Login = ({navigation}) => {
  const handleSignUp = () => {
    navigation.navigate('Sign up');
  };
  function handleFormSubmit(formValues) {
    console.log(formValues);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Image
          style={styles.image}
          source={require('../../assets/image.png')}
        />
        <Text style={styles.header_text}>I do not care!</Text>
      </View>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              value={values.usermail}
              onType={handleChange('usermail')}
              placeholder="Enter your e-mail..."
            />
            <Input
              value={values.password}
              onType={handleChange('password')}
              placeholder="Enter your password..."
            />
            <Button text={'Log in'} onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Button text={'Sign up'} theme="secondary" onPress={handleSignUp} />
      <View style={styles.bottom_container}>
        <Text style={styles.bottom_text}>Write... Read... Relax...</Text>
      </View>
    </View>
  );
};

export default Login;
