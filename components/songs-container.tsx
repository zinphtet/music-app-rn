import {FlatList} from 'react-native';
import SongCard from './song-card';
import styled from 'styled-components/native';
import {Track} from 'react-native-track-player';
const SongsContainer: React.FC<{title: string; songs: Track[]}> = ({
  title,
  songs,
}) => {
  return (
    <SongContainerStyle>
      <CategoryName>{title}</CategoryName>
      <FlatList
        horizontal
        data={songs}
        renderItem={({item , index}) => <SongCard {...item} index={index} />}
        keyExtractor={item => item.name}
        ItemSeparatorComponent={() => <ItemSeparator />}
        showsHorizontalScrollIndicator={false}
      />
    </SongContainerStyle>
  );
};

export default SongsContainer;

const CategoryName = styled.Text`
  font-size: 20px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.light.tint};
`;

const ItemSeparator = styled.View`
  width: 20px;
`;

const SongContainerStyle = styled.View`
  padding-right: 5px;
  gap: 10px;
`;
