import SongsContainer from '../components/songs-container';
import {PaddingContainer, TextComponent} from '../styles';
import {FlatList, Text, View} from 'react-native';
import {songsWithCategories} from '../mock/songs';
import styled from 'styled-components/native';
const HomeScreen = () => {
  return (
    <PaddingContainer>
      <FlatList
        data={songsWithCategories}
        renderItem={({item}) => <SongsContainer {...item} />}
        keyExtractor={item => item.title}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
      {/* <Text>Hello World</Text> */}
    </PaddingContainer>
  );
};
export default HomeScreen;

export const ItemSeparator = styled.View`
  height: 40px;
`;
