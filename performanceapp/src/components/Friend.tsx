import React, { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import lodash from 'lodash';

interface Props {
  data: {
    id: number;
    name: string;
    likes: number;
  },
  follow: () => void;
}
const FriendComponent = ({ data, follow }: Props) => {
  return (
    <View style={{marginBottom: 10}}>
      <Text>
        {data.name} - Likes: {data.likes}
      </Text>
      <TouchableOpacity onPress={follow}>
        <Text>
          Deixar de seguir
        </Text>
      </TouchableOpacity>
    </View>
  )
};

export const Friend = memo(FriendComponent, (prevProps, nextProps) =>
  lodash.isEqual(prevProps.data, nextProps.data)
  //só re-renderiza se essa comparação de valores retornar falsa
);