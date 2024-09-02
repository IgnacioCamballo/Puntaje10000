import { StyleSheet, StatusBar, View } from 'react-native';
import {FarkleProvider} from './src/context/FarkleProvider';
import Main from './src/pages/Main';
import theme from './src/theme/theme';

export default function App() {
  return (
    <View>
      <FarkleProvider>
        <StatusBar backgroundColor={theme.color.base} />
        <Main />
      </FarkleProvider>
    </View>
  );
}
