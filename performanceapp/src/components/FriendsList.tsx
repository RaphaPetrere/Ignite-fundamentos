import React, { useMemo } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Friend } from './Friend';

interface Props {
  data: {
    id: number;
    name: string;
    likes: number;
  }[];
  follow: () => void;
}

export const FriendsList = ({ data, follow }: Props) => {
  const totalLikes = useMemo(() => 
    data.reduce((likes, friend) => likes + friend.likes, 0)
  , [data]); //assim como o useEffect, ele só vai realizar essa função se o data mudar
  return (
    <View>
      <Text style={{marginVertical: 10}}>
        Total de likes - {totalLikes}
      </Text>
      <FlatList 
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => 
          <Friend follow={follow} data={item}/>
        }
      />
    </View>
  )
};
