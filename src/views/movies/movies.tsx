import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import styled from 'styled-components/native';
import { SearchBar } from "react-native-elements"
import MovieDescription from "../../components/movieDescription";
import {getMovies} from "../../services/api/movies"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const StyledScrollView = styled.ScrollView`
  background-color:#5ca1d4;
`

const TitleText = styled.Text`
  color: white;
  font-weight:bold;
  font-size:30px;
  padding: 25px 40px 20px 40px
`
const SectionMovies = styled.View`
  background-color: #283546;
  border-top-right-radius:20px;
  border-top-left-radius:20px;
  height: ${hp("100%")}px;
  margin-top:20px;
  padding-horizontal:20px
`
const ContainerTexts = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-Top: 22px;
  padding-horizontal: 10px;
  margin-bottom:10px
`
const SubTitleText = styled.Text`
  color:white;
  font-size:15px;
  text-transform: uppercase;
`

const SeeAllText = styled.Text`
  color:#6b7480;
`


export default function Movies(){
  const [search, setSearch] = useState("");

  const getData = async () => {
    let response = await getMovies();
    console.log("response", response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return(
    <StyledScrollView>
      <TitleText>Hello, what do you want to watch ?</TitleText>
      <SearchBar
        placeholder="Search"
        onChangeText={(movie:string) => {setSearch(movie)}}
        value={search}
        containerStyle={{backgroudColor:"#EEEEEE", borderBottomColor:"#EEEEEE", borderTopColor:"#EEEEEE",  width: "90%" }}
        inputContainerStyle={{backgroudColor:"#EEEEEE", borderRadius:50}}
        inputStyle={{color: "pink"}}
        lightTheme
      />
      <SectionMovies>
        <ContainerTexts>
          <SubTitleText>Recommended for you</SubTitleText>
          <SeeAllText>See all</SeeAllText>
        </ContainerTexts>
        <MovieDescription/>
        <ContainerTexts>
          <SubTitleText>Top rated</SubTitleText>
          <SeeAllText>See all</SeeAllText>
        </ContainerTexts>
        <MovieDescription/>
      </SectionMovies>
    </StyledScrollView>
  )
}

