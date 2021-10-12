import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Container = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;
const ContainerField = styled.View`
  width: 18%;
`;

const FieldText = styled.Text`
  color: #fff;
  margin-right: 13px;
`;
const ContainerValue = styled.View`
  width: ${wp('70%')}px;
`;
const ValueText = styled.Text`
  color: #6b7480;
`;

export interface Props {
  field: string;
  value: string;
}

export default function TextInformation(props: Props) {
  const {field, value} = props;
  return (
    <Container>
      <ContainerField>
        <FieldText>{field}</FieldText>
      </ContainerField>
      <ContainerValue>
        <ValueText>{value}</ValueText>
      </ContainerValue>
    </Container>
  );
}
