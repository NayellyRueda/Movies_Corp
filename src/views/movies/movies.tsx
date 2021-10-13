import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, ActivityIndicator, Image } from 'react-native';
import styled from 'styled-components/native';
import {SearchBar} from 'react-native-elements';
import MovieDescription from '../../components/movieDescription';
import {getMovies, getMoviesPopular} from '../../services/api/movies';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const StyledScrollView = styled.ScrollView`
  background-color: #5ca1d4;
`;

const TitleText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 30px;
  padding: 25px 40px 20px 40px;
`;
const SectionMovies = styled.View`
  background-color: #283546;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  height: ${hp('100%')}px;
  margin-top: 20px;
  padding-horizontal: 20px;
`;
const ContainerTexts = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 22px;
  padding-horizontal: 10px;
  margin-bottom: 10px;
`;
const SubTitleText = styled.Text`
  color: white;
  font-size: 15px;
  text-transform: uppercase;
`;

const SeeAllText = styled.Text`
  color: #6b7480;
`;


/**
 * Movie section screen.  
 */

export default function Movies() {
  const [search, setSearch] = useState('');
  const [infoMovie, setInfoMovie] = useState([]);
  const [moviesFiltered, setMoviesFiltered] = useState([]);
  const [moviesForYouFiltered, setMoviesForYouFiltered] = useState([]);
  const [infoMoviePopular, setInfoMoviePopular] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [loadingForYou, setLoadingForYou] = useState(true);

  const getData = async () => {
    setLoading(true);
    let response = await getMovies();
    if (response.length > 0) {
      setInfoMovie(response);
      setMoviesFiltered(response)
      setLoading(false);
    } else {
      setLoading(false);
    }
  };
  const getDataMoviesPopular = async () => {
    setLoadingForYou(true)
    let response = await getMoviesPopular();
    if(response.length > 0){
      setInfoMoviePopular(response);
      setMoviesForYouFiltered(response);
      setLoadingForYou(false);
    } else{
      setLoadingForYou(false)
    }

  };

  useEffect(() => {
    getData();
    getDataMoviesPopular();
  }, []);

  const handleSearch = (text: string) => {
    const filtered = infoMovie.filter(o => {
      return o.title.toUpperCase().includes(text.toUpperCase());
    });
    
    const filteredForYou = infoMoviePopular.filter(o => {
      return o.title.toUpperCase().includes(text.toUpperCase());
    });

    setMoviesFiltered(filtered);
    setMoviesForYouFiltered(filteredForYou);
    setSearch(text);
  };


  return (
    <StyledScrollView>
      <TitleText>Hello, what do you want to watch ?</TitleText>
      <SearchBar
        placeholder="Search"
        onChangeText={(movie: string) => {
          handleSearch(movie);
        }}
        value={search}
        containerStyle={{
          backgroundColor: '#5ca1d4',
          borderTopColor: '#5ca1d4',
          borderBottomColor: '#5ca1d4',
          width:"85%",
          height:15,
          marginBottom:20,
          alignSelf:"center"
        }}
        inputContainerStyle={{borderRadius: 50 }}
        inputStyle={{ color:"white"}}
        lightTheme
        placeholderTextColor='white'
        searchIcon={{color:"white"}}
      />
      <SectionMovies>
        <ContainerTexts>
          <SubTitleText>Recommended for you</SubTitleText>
          <SeeAllText>Ver peliculas favoritas</SeeAllText>
        </ContainerTexts>
        <ScrollView horizontal={true}>
          <View style={{flexDirection: 'row'}}>
            {loadingForYou ? (
              <ActivityIndicator color={'#5ca1d4'} size="large" />
            ) : (
              moviesForYouFiltered.map((o, i) => {
                return (
                  <MovieDescription
                    key={i}
                    title={o.title}
                    image={o.poster_path}
                    movieId={o.id}
                    movieRating={o.vote_average / 2}
                  />
                );
              })
            )}
          </View>
        </ScrollView>
        <ContainerTexts>
          <SubTitleText>Top rated</SubTitleText>
          <SeeAllText>See all</SeeAllText>
        </ContainerTexts>
        <ScrollView horizontal={true}>
          <View style={{flexDirection: 'row'}}>
            {loading ? (
              <ActivityIndicator color={'#5ca1d4'} size="large" />
            ) : (
              moviesFiltered.map((o, i) => {
                return (
                  <MovieDescription
                    key={i}
                    title={o.title}
                    image={o.poster_path}
                    movieId={o.id}
                    movieRating={o.vote_average / 2}
                  />
                );
              })
            )}
          </View>
        </ScrollView>
      </SectionMovies>
    </StyledScrollView>
  );
}

function NoFoundMovies(){
  return(
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={require("../../assets/img/no-result-found.png")}
        resizeMode="cover"
        style={{ width: 200, height: 200 }}
      />
    </View>
  )
}
