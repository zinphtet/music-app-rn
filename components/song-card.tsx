import {Pressable} from 'react-native';
import TrackPlayer, {Track} from 'react-native-track-player';
import styled from 'styled-components/native';
const SongCard: React.FC<Track> = ({url, title, artist, index}) => {
  const selectSongHandler = async () => {
    await TrackPlayer.skip(index);
  };
  return (
    <Pressable onPress={selectSongHandler}>
      <SongCardStyle>
        <ImageStyle
          source={require('./music-card.jpg')}
          // style={{ width: 250, height: 250 }}
        ></ImageStyle>
        <SongName>{title}</SongName>
        <ArtistName>{artist}</ArtistName>
      </SongCardStyle>
    </Pressable>
  );
};
export default SongCard;

const SongName = styled.Text`
  font-size: 24px;
  text-align: center;
  color: ${props => props.theme.colors.light.text};
`;
const ArtistName = styled.Text`
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.theme.colors.light.icon};
`;

const ImageStyle = styled.Image`
  width: 250px;
  height: 180px;
`;
const SongCardStyle = styled.View`
  width: 250px;
  gap: 10px;
  padding-bottom: 10px;
  border-radius: 20px;
  overflow: hidden;
  background: ${props => props.theme.colors.light.background};
`;
