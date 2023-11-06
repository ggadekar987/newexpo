import { View, Image, ScrollView, Button, TextInput, Text } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";

export default function PhoneLogin({ navigation }: { navigation: any }) {
  const [phone, setPhone] = React.useState("");
  const { t } = useTranslation();

  return (
    <ScrollView>
      <View>
        <Image
          resizeMode="contain"
          style={styles.tinyLogo}
          source={require("../assets/undraw_Login_re_4vu2.png")}
        />
      </View>
      <View>
        <Text>{t("phoneVerification")}</Text>
        <Text >
          {t("phoneVerificationDescription")}
        </Text>
        <TextInput
          placeholder="9876543210"
          onChangeText={setPhone}
          keyboardType="number-pad"
        />
        <Button
          title="send OTP"
          onPress={() => {
            //sendOtp(phone);
            navigation.navigate("OTPLogin", { phoneNo: phone });
          }}
        />
      </View>
    </ScrollView>
  );
}
const styles = {
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width:  '100' ,
    height: 150,
    margin:'0 auto'
  },
  logo: {
    width: 66,
    height: 58,
  },
};
