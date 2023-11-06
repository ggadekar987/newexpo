import { View, Image, ScrollView,Button,TextInput } from "react-native";
import React,{useEffect} from "react";
import { Text, Avatar, IconButton, Divider, Menu } from 'react-native-paper';
import ItemCard from '../components/ItemCard';
import { RootStackScreenProps } from '../../types';
import { useTranslation } from 'react-i18next';
import { useGetUsersItemsQuery } from '../services/api';
const PLACEHOLDER_IMAGE =
  'https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg';

export default function Home({ navigation }: { navigation: any }) {
    const { t } = useTranslation();
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    const items = useGetUsersItemsQuery();
    console.log(items.data)
    useEffect(()=>{
        console.log(items.data)
    },[]);
    const avatarImage = '' || PLACEHOLDER_IMAGE;
  return (
    <ScrollView 
    >
       <View>
          <Text>List of history on app user performed: responded</Text>
          <Text>Number of Ads responded: 0</Text>
          <Text>Number of Ads posted including deleted: 0</Text>
        </View>
 
        {items.data?.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
    </ScrollView>
  );
}
const styles = {
    wrapper: {
      justifyContent: 'center',
      alignItems: 'center'
    } 
}