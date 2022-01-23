import React, { memo } from 'react';
import { Text } from 'react-native';

interface Props {
  data: {
    id: number;
    name: string;
    likes: number;
  }
}
const FriendComponent = ({ data }: Props) => {
  return (
    <Text>
      {data.name} - Likes: {data.likes}
    </Text>
  )
};

export const Friend = memo(FriendComponent, (prevProps, nextProps) =>
  Object.is(prevProps.data, nextProps.data)
  //só re-renderiza se essa comparação de valores retornar falsa
);