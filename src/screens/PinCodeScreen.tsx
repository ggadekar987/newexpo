/* eslint-disable react/no-unstable-nested-components */
import {   Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Button, HelperText, Text, TextInput } from 'react-native-paper';
import Geolocation from '@react-native-community/geolocation';

type Props = NativeStackScreenProps<RootStackParamList, 'PinCode'>;

export default function PinCodeScreen({ navigation }: Props) {
  return (
    <ScrollView  >
      <Image
        source={require('../assets/undraw_My_location_re_r52x.png')}
        resizeMode="contain"
      />
       <Button
          mode="contained"
          onPress={() => {
            navigation.navigate('Home');
          }}>
          { 'save'  }
        </Button>

        <Text  >-- OR --</Text>
       <Button
          mode="outlined"
          icon={({ size, color }) => (
            <MaterialIcons name="my-location" size={size} color={color} />
          )}
          onPress={() => {
            Geolocation.getCurrentPosition(info =>
              console.log(info.coords.latitude, info.coords.longitude),
            );
            navigation.navigate('Account');
          }}>
          { 'locateMe' }
        </Button>
    </ScrollView>
  );
}
