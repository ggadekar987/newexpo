import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as resources from './resources';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserLanguage = async () => {
  try {
    const userLanguage = await AsyncStorage.getItem('userLanguage');
    return userLanguage || 'en';
  } catch (error) {
    console.error('Error getting user language:', error);
    return 'en';
  }
};

export const setUserLanguage = async (language: string) => {
  try {
    await AsyncStorage.setItem('userLanguage', language);
    i18n.changeLanguage(language);
  } catch (error) {
    console.error('Error setting user language:', error);
  }
};

getUserLanguage().then(userLanguage => {
  i18n.changeLanguage(userLanguage);
});

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    ...Object.entries(resources).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          translation: value,
        },
      }),
      {},
    ),
  },
  lng: 'en',
});

export default i18n;
