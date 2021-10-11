import React, {useState} from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ActivityIndicator,
  Image
} from "react-native";
import { AirbnbRating } from "react-native-elements"
import styled from "styled-components/native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const ViewDescriptionMovie = styled.TouchableOpacity`
  width: ${hp("25%")}px;
  height: ${hp("43%")}px;
  margin: 5px;
  background-color: grey
`
const ViewContent = styled.View`
  width: ${hp("25%")}px;
`

const ViewMovieImage = styled.View`
  padding: 12px;
  height: ${hp("30%")}px;
`

const ImageMovie = styled.Image`
  width: ${hp("20%")}px;
  height: ${wp("40%")}px;
  border-radius: 10px;
`

const NameMovie = styled.Text`
  color: white;
  padding-left: 10px
`

// interface Props {
//   images: string[]
// }

export default function MovieDescription(){
  // const { images } = props;
  // const imageMovie = images ? images[0] : null;
  const [rating, setRating] = useState(null);

  return (
    <ViewDescriptionMovie>
      <ViewContent>
        <ViewMovieImage>
          <ImageMovie
            source={require('../assets/prueba.jpg')}
          />
        </ViewMovieImage>
        <NameMovie>Avengers Endgme</NameMovie>
        <AirbnbRating
            count={5}
            reviews={["", "", "", "", ""]}
            defaultRating={0}
            size={20}
            reviewSize={1}
            onFinishRating={(value) => {
              setRating(value);
            }}
          />
      </ViewContent>
    </ViewDescriptionMovie>
    
  )
}