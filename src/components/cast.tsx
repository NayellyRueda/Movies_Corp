import React from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Container = styled.View`
  width: ${wp('15%')}px;
  margin-top: 20px;
  margin-right: 12px;
`;

const Character = styled.Image`
  width: ${wp('15%')}px;
  height: ${wp('15%')}px;
  border-radius: 50px;
`;
const NameCharacter = styled.Text`
  color: #6b7480;
  text-align: center;
  margin-top: 5px;
`;
export interface Props {
  image: string;
  character: string;
};

export default function Cast(props: Props) {
  const {image, character} = props;
  return (
    <Container>
      <Character
        source={
          image == null
            ? require('../assets/no-image.png')
            : {uri: `https://image.tmdb.org/t/p/w500/${image}`}
        }
      />
      <NameCharacter>{character}</NameCharacter>
    </Container>
  );
}
