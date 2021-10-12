import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import styled from 'styled-components/native';
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
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: -30px;
  background-color: #fff;
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

export default function DescriptionMovie() {
  const [loading, setLoading] = useState(true);
  const [infoCast, setInfoCast] = useState([]);
  const [description, setDescription] = useState([
    {title: '', backdrop_path: '', genres: [], overview: ''},
  ]);

  const getDataDetail = async () => {
    let responseDescription = await getMoviesDetail(19404);
    if (responseDescription != undefined) {
      setDescription(responseDescription);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const getDataCast = async () => {
    setLoading(true);
    let responseCast = await getCastMovies(19404);
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
      {/* <Info>
        <Icon
          type="material-community"
          name="heart"
          color="#f00"
          underlayColor="transparent"
          containerStyle={{marginTop: -35,
            backgroundColor: "#fff",
            padding: 15,
            borderRadius: 100,}}
        />
      </Info> */}
      <SectionMovies>
        <TitleMovie>{description.title}</TitleMovie>
        <Califications/>
        <TextDescription>{description.overview}</TextDescription>
        <ScrollView horizontal={true} style={{height: '5%'}}>
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
          // value={description.production_companies.map((o, i) => `${o.name}, `)}
          value="jpa"
        />
        <TextInformation
          field={'Genre'}
          // value={description.genres.map((o, i) => `${o.name}, `)}
          value="jpa"
        />
        <TextInformation field={'Release'} value={description.Released} />
      </SectionMovies>
    </ScrollView>
  );
}
