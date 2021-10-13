import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AirbnbRating } from "react-native-elements";
import styled from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Container = styled.View`
  flex-direction:row;
  justify-content: space-between;
  margin-vertical: 15px;
`
const Button = styled.TouchableOpacity`
  background-color:#6b7480;
  padding:2px;
  border-radius:20px;
  justify-content:center;
  width: ${wp("35%")}px;
`
const TextButton = styled.Text`
  text-transform:uppercase;
  text-align:center;
  font-weight: bold;
  color: white;
`

interface Props {
  movieRating: Number
}

/**
 * This component rates movie's satisfaction .
 */

export default function Califications(props : Props){
  const {movieRating} = props;
  const [rating, setRating] = useState();
  return (
    <Container>
      <Button>
        <TextButton>Watch now</TextButton>
      </Button>
      <AirbnbRating
          count={5}
          reviews={["", "", "", "", ""]}
          defaultRating={movieRating}
          isDisabled={true}
          size={15}
          reviewSize={1}
          onFinishRating={(value) => {
            setRating(value);
          }}
        />
    </Container>
  )
}
