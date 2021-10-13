import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';
import {addMovie, removeMovie} from '../../redux/reducers/moviesReducer';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Cast from '../../components/cast';
import TextInformation from '../../components/textInformation';
import {getCastMovies, getMoviesDetail} from '../../services/api/movies';
import Califications from "../../components/califications";

const SectionMovies = styled.View`
  background-color: #283546;
  height: ${hp('100%')}px;
  padding: 22px;
`;
const ImageMovie = styled.Image`
  width: ${wp('100%')}px;
  height: ${hp('37%')}px;
`;
const Info = styled.View`
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: row;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  margin-top: -30px;
`;
const TitleMovie = styled.Text`
  font-weight: bold;
  color: white;
  font-size: 22px;
`;
const TextDescription = styled.Text`
  color: #6b7480;
  font-size: 15px;
  line-height: 25px;
`;
const ContainerCast = styled.View`
  flex-direction: row;
  height: ${hp('30%')}px;
`;

interface Props {
  route: Route
};
interface Route {
  params: Params
};
interface Params {
  movieId: number
};

/**
 * Movie's description screen.  
 */

export default function DescriptionMovie(props:Props) {
  const { route } = props;
  const { movieId } = route.params;
  const [loading, setLoading] = useState(true);
  const [infoCast, setInfoCast] = useState([]);
  const [description, setDescription] = useState(
    {title: '', backdrop_path: '', genres: [], overview: '', production_companies: [], vote_average: 0},
  );
  const [like, setLike] = useState(false);

  const { movies } = useSelector(state  => state.movies)
  const dispatch = useDispatch();

  const getDataDetail = async () => {
    let responseDescription = await getMoviesDetail(movieId);
    if (responseDescription != undefined) {
      setDescription(responseDescription);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const getDataCast = async () => {
    setLoading(true);
    let responseCast = await getCastMovies(movieId);
    if (responseCast.length > 0) {
      setInfoCast(responseCast);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDataCast();
    getDataDetail();
  }, []);

  return (
    <ScrollView>
      <ImageMovie
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${description.backdrop_path}`,
        }}
        resizeMode="cover"
      />
      <Info>
        <Icon
          type="material-community"
          name="heart"
          color={movies.includes(movieId) ? "#f00" : "#fff"}
          underlayColor="transparent"
          containerStyle={{marginTop: -35,
            backgroundColor: "#283546",
            padding: 15,
            borderRadius: 100}}
          onPress={() =>{
            if(movies.includes(movieId)) {
              dispatch(removeMovie(movieId))
            } else {
              dispatch(addMovie(movieId))
            }
          }}
        />
      </Info>
      <SectionMovies>
        <TitleMovie>{description.title}</TitleMovie>
        <Califications movieRating={description.vote_average / 2}/>
        <TextDescription>{description.overview}</TextDescription>
        <ScrollView horizontal={true}>
          <ContainerCast>
            {infoCast.map((o, i) => {
              return (
                <Cast key={i} image={o.profile_path} character={o.character} />
              );
            })}
          </ContainerCast>
        </ScrollView>
        <TextInformation
          field={'Studio'}
          value={description.production_companies.map((o, i) => `${o.name}, `)}
          // value="jpa"
        />
        <TextInformation
          field={'Genre'}
          value={description.genres.map((o, i) => `${o.name}, `)}
          // value="jpa"
        />
        <TextInformation field={'Release'} value={description.Released} />
      </SectionMovies>
    </ScrollView>
  );
}
