import { StatusBar, View } from 'react-native';
import {FarkleProvider} from './src/context/FarkleProvider';
import Main from './src/pages/Main';
import theme from './src/theme/theme';
import { useFonts } from 'expo-font';
import { useCallback, useEffect } from 'react';
import * as SplashScreen from "expo-splash-screen"

export default function App() {
  const [fontsLoaded] = useFonts({
    Lakki: require("./assets/fonts/LakkiReddy-Regular.ttf")
  })

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync()
    }
    prepare()
  }, [])

  const onLayout = useCallback(async () => {
    if(fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if(!fontsLoaded) return null

  return (
    <View onLayout={onLayout}>
      <FarkleProvider>
        <StatusBar backgroundColor={theme.color.base} />
        <Main />
      </FarkleProvider>
    </View>
  );
}
