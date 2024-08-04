import {Alert, Button, Image, Pressable, Text, View} from 'react-native';
import styled from 'styled-components/native';
import {song} from '../mock/songs';
import Icon from 'react-native-vector-icons/FontAwesome5Pro';
import {useEffect, useState} from 'react';
import {addRecommandedSongs, setupPlayer} from '../utils/music-controller';
import {ActivityIndicator} from 'react-native';
import TrackPlayer, {State, Event} from 'react-native-track-player';
import {Track} from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import {formatTime} from '../utils/helper';
const FloatingPlayer = () => {
  const {name} = song;
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [currentProgress, setCurrentProgress] = useState(200);
  const [duration, setDuration] = useState(0);
  useEffect(() => {
    const setUp = async () => {
      const isSetUp = await setupPlayer();
      await addRecommandedSongs();
      setReady(isSetUp);
    };
    setUp();
  }, []);

  const getActiveTrackIndex = async () => {
    const curTrack = (await TrackPlayer.getActiveTrack()) as unknown as Track;
    setCurrentTrack(curTrack);
  };
  const playHandler = async () => {
    const playState = await TrackPlayer.getPlaybackState();
    if (playState.state === State.Paused || playState.state === State.Ready) {
      TrackPlayer.play();
      setPlaying(true);
      return;
    }
    if (playState.state === State.Playing) {
      TrackPlayer.pause();
      setPlaying(false);
    }
  };
  const prevHandler = () => {
    TrackPlayer.skipToPrevious();
  };
  const nextHandler = () => {
    TrackPlayer.skipToNext();
  };

  // Event.
  TrackPlayer.addEventListener(Event.PlaybackActiveTrackChanged, track => {
    getActiveTrackIndex();
  });

  TrackPlayer.addEventListener(Event.PlaybackProgressUpdated, state => {
    if (duration !== state.duration) {
      setDuration(state.duration);
    }
    setCurrentProgress(state.position);
  });

  const sliderChandeHandler = (number: number) => {
    TrackPlayer.seekTo(number);
  };

  console.log('current progress', currentProgress);
  if (!ready) {
    return (
      <View>
        <Text> Loading ...</Text>
      </View>
    );
  }
  return (
    <FloatingContainer>
      <SliderTimeContainer>
        <Slider
          thumbTintColor="#cbc435"
          maximumTrackTintColor="#d71313"
          minimumTrackTintColor="#2510e1"
          value={currentProgress}
          minimumValue={0}
          maximumValue={duration}
          onValueChange={sliderChandeHandler}
        />
        <DurationConatiner>
          <DurationText>{formatTime(duration || 0)}</DurationText>
        </DurationConatiner>
      </SliderTimeContainer>

      <FloatingPlayerStyle>
        <ImageStyle source={require('./music-card.jpg')} />
        <ControlContainer>
          <Button title="pre" onPress={prevHandler} />
          <Button title={playing ? 'pause' : 'play'} onPress={playHandler} />
          <Button title="next" onPress={nextHandler} />
        </ControlContainer>
        {/* <Button title="cls" /> */}
      </FloatingPlayerStyle>
      {!ready ? (
        <ActivityIndicator />
      ) : (
        <SongName>
          {currentTrack?.artist} -- {currentTrack?.title}
        </SongName>
      )}
    </FloatingContainer>
  );
};
export default FloatingPlayer;

const FloatingPlayerStyle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ImageStyle = styled.Image`
  width: 100px;
  height: 60px;
  border-radius: 10px;
`;

const ControlContainer = styled.View`
  flex-direction: row;
  gap: 40px;
`;

const FloatingContainer = styled.View`
  position: absolute;
  background-color: ${props => props.theme.colors.light.tint};
  bottom: 0;
  right: 0;
  padding: 10px;
  width: 100%;
  gap: 10px;
`;
const SongName = styled.Text`
  font-size: 20px;
  color: white;
  text-align: right;
`;

const SliderTimeContainer = styled.View`
  /* flex-direction: row; */
  gap: 5px;
`;

const DurationText = styled.Text`
  text-align: right;
  color: #141be7;
  background-color: white;
  padding: 5px 10px;
  border-radius: 5px;
`;

const DurationConatiner = styled.View`
  align-items: center;
  justify-content: center;
`;
