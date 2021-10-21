import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import BtnDefaultPrimary from '../../components/BtnDefaultPrimary';
import InputValidate from '../../components/InputValidate';
import BtnSocial from '../../components/LoginRegist/BtnSocial';
import HeaderBackBtn from '../../components/LoginRegist/HeaderBackBtn';
import HeadlineTitle from '../../components/LoginRegist/HeadlineTitle';
import Title from '../../components/LoginRegist/Title';
import {STYLES} from '../../utils';
import {styles} from './styles';

const SignIn = () => {
  return (
    <View style={styles.container}>
      {/* Header back */}
      <HeaderBackBtn></HeaderBackBtn>

      {/* Title */}
      <Title label="Sign In"></Title>
      <HeadlineTitle
        label="Don't have account?"
        pressLabel=" Sign up now!"></HeadlineTitle>

      {/* Input value */}
      <InputValidate placeholder="Email or Phone Number"></InputValidate>
      <InputValidate placeholder="Password"></InputValidate>

      {/* Btn forgot pass */}
      <TouchableOpacity
        onPress={() => console.log('Navigation to forgot pass')}>
        <Text style={styles.txtForgot}>Forgot Password ?</Text>
      </TouchableOpacity>

      {/* Btn sign in */}
      <BtnDefaultPrimary label="SIGN IN"></BtnDefaultPrimary>
      <Text style={{marginTop: STYLES.mgt24, textAlign: 'center'}}>OR</Text>

      {/* Btn sign in with social */}
      <BtnSocial label="FACEBOOK"></BtnSocial>
      <BtnSocial label="GOOGLE" fb={false}></BtnSocial>
    </View>
  );
};

export default SignIn;
