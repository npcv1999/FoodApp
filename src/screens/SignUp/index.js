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

const SignUp = () => {
  return (
    <View style={styles.container}>
      {/* Header back*/}
      <HeaderBackBtn></HeaderBackBtn>
      {/* Title */}
      <Title label="Sign Up"></Title>
      <HeadlineTitle
        label="Enter your Email and new Password for sign up, or"
        pressLabel="Already have account?"></HeadlineTitle>

      {/* Input */}
      <InputValidate placeholder="Email"></InputValidate>
      <InputValidate
        placeholder="Password"
        secureTextEntry={true}></InputValidate>
      <InputValidate placeholder="Confirm Password"></InputValidate>

      {/* Btn sign up */}
      <BtnDefaultPrimary label="SIGN UP"></BtnDefaultPrimary>

      {/* Privacy Policy */}
      <Text style={{marginTop: STYLES.mgt16, textAlign: 'center'}}>
        By signing up you agree to our Terms Condition & Privacy Policy
      </Text>
      <Text style={{marginTop: STYLES.mgt24, textAlign: 'center'}}>OR</Text>

      {/* Btn social */}
      <BtnSocial label="FACEBOOK"></BtnSocial>
      <BtnSocial label="GOOGLE" fb={false}></BtnSocial>
    </View>
  );
};

export default SignUp;
