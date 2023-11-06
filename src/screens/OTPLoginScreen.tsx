import { View, Image, ScrollView,Button,TextInput } from "react-native";
import React from "react";
import OTPTextInput from 'react-native-otp-textinput';
import { useSendOtpMutation, useVerifyOtpMutation } from '../services/api';

export default function OTPLoginScreen({ navigation }: { navigation: any }) {
  const [otp, setOtp] = React.useState('');
  const [error, setError] = React.useState('');
  const [resendEnabled, setResendEnabled] = React.useState(true);
  const [seconds, setSeconds] = React.useState(30);
    const handleResendCode = () => {
      };
  return (
    <ScrollView  >
    <Image
      source={require('../assets/undraw_Login_re_4vu2.png')}
      resizeMode="contain"
    />
    <View  >
      <OTPTextInput
        handleTextChange={setOtp}
        keyboardType="number-pad"
        autoFocus
      />

      <View  >
        <View  >
          <Button onPress={handleResendCode} title="aaa" />
        </View>
      </View>
      
      <Button title="aaasss"
        onPress={() => {
          navigation.navigate('PinCode');
        }}/>
        
    </View>
  </ScrollView>
  );
}
 