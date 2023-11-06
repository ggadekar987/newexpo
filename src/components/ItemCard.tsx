import React from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import { TItem } from '../../types';

interface Props {
  item: TItem;
}
export default function ItemCard({ item }: Props) {
  const { t } = useTranslation();
  const onDelete = () => {
    Alert.alert(t('delete'), t('confirmDelete'), [
      {
        text: t('cancel'),
        style: 'cancel',
      },
      {
        text: t('delete'),
        onPress: () => {
          console.log(t('delete'));
        },
      },
    ]);
  };

  return (
    <Card mode="contained">
      <Card.Content  >
        <Text variant="titleLarge">{item.title}</Text>
        <Text variant="bodyMedium">{item.description}</Text>
        <Text variant="bodyMedium"  >
          20 Aug 2020
        </Text>
      </Card.Content>
      <Card.Cover source={{ uri: item.image }} resizeMode="contain" />
      <Card.Actions>
        <Button
          icon="delete"
          onPress={onDelete}
          buttonColor="white"
          textColor="red">
          {t('delete')}
        </Button>
        <Button icon="pencil-outline">{t('edit')}</Button>
      </Card.Actions>
    </Card>
  );
}
