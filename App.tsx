// import './utils/gesture-handler'
import 'react-native-gesture-handler';
import {ThemeProvider} from 'styled-components/native';
import theme from './constants/index';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './screens/home';
import ProfileScreen from './screens/profile';
import names from './screens/names';
import FloatingPlayer from './components/floating-music';

const Drawer = createDrawerNavigator();
const Page = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer independent={true}>
        {/* <Drawer.Navigator initialRouteName={names.home}>
          <Drawer.Screen name={names.home} component={HomeScreen} />
          <Drawer.Screen name={names.profile} component={ProfileScreen} />
        </Drawer.Navigator> */}
        <HomeScreen />
        <FloatingPlayer />
      </NavigationContainer>
    </ThemeProvider>
  );
};

// TrackPlayer.registerPlaybackService(() => playbackService);
export default Page;

// const TextComponent = styled
