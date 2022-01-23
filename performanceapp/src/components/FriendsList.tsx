import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
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
      <Text>
        Total de likes - {totalLikes}
      </Text>
      {data.map(friend => <Friend follow={follow} key={String(friend.id)} data={friend}/>)}
    </View>
  )
};
