import { View, Image, ScrollView,Button,TextInput } from "react-native";
import { useSendOtpMutation } from "../services/api";
import React from "react";

export default function PhoneLoginScreen({ navigation }: { navigation: any }) {
  const [sendOtp, { isLoading }] = useSendOtpMutation();
  const [phone, setPhone] = React.useState("");
  const [error, setError] = React.useState("");

  return (
    <ScrollView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Image
        source={require("../assets/undraw_Login_re_4vu2.png")}
        resizeMode="contain"
      />
      <View  >
        <TextInput
          placeholder="9876543210"
          onChangeText={setPhone}
          keyboardType="number-pad"
        />
        <Button title="sendOTP"
          onPress ={() => {
            if (!phone) {
              setError("phoneRequired");
              return;
            }

            const phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(phone)) {
              setError( "phoneInvalid" );
              return;
            }

            setError("");
            sendOtp(phone);
            navigation.navigate("Profile", { phoneNo: phone });
          }}
        
        />
      </View>
      
    </ScrollView>
  );
}
