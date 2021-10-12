import React, {useState} from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ActivityIndicator,
  Image
} from "react-native";
import { AirbnbRating } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const ViewDescriptionMovie = styled.TouchableOpacity`
  width: ${hp("25%")}px;
  height: ${hp("43%")}px;
  margin: 5px;
  // background-color: grey
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
  height: ${wp("45%")}px;
  border-radius: 10px;
`

const NameMovie = styled.Text`
  color: white;
  padding-left: 10px
`

interface Props {
  title: string,
  image: string
}

export default function MovieDescription(props:Props){
  const navigation = useNavigation();
  const { title, image } = props;
  const [rating, setRating] = useState(null);

  return (
    <ViewDescriptionMovie onPress={() => navigation.navigate("DescriptionMovie")}>
      <ViewContent>
        <ViewMovieImage>
          <ImageMovie
            source={{uri:`https://image.tmdb.org/t/p/w500/${image}`}}
          />
        </ViewMovieImage>
          <NameMovie>{title}</NameMovie>
        <AirbnbRating
          count={5}
          reviews={["", "", "", "", ""]}
          defaultRating={0}
          size={15}
          reviewSize={1}
          onFinishRating={(value) => {
            setRating(value);
          }}
        />
      </ViewContent>
    </ViewDescriptionMovie>
    
  )
}