
import { useFonts } from 'expo-font';
import Welcome from './screen/Welcome';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { useEffect } from 'react';
import RootStack from './navigators/RootStack';

export default function App() {
  async function _loadAsset() {
    try {
      await Font.loadAsync({
        'Bold': require('./assets/fonts/Lato-Bold.ttf'),
        'Regular': require('./assets/fonts/Lato-Regular.ttf')
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    _loadAsset();
  }, []);

  return (
    <RootStack />
  );
}


