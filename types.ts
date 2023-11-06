import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  PhoneLogin: undefined;
  OTPLogin: {
    phoneNo: string;
  };
  PinCode: undefined;
  Account: undefined;
  EditAccount: undefined;
  BottomTabs: NavigatorScreenParams<BottomTabsParamList>;
};

export type BottomTabsParamList = {};
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackScreenProps<ScreenName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, ScreenName>;

export type TItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type TUser = {
  id: string;
  name: string;
  phone: string;
  photo: string;
  language: string;
  address: string;
};
