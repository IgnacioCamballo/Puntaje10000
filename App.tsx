import { StyleSheet, StatusBar, View } from 'react-native';
import Main from './src/pages/Main';
import theme from './src/theme/theme';

export default function App() {
  return (
    <View>
      <StatusBar backgroundColor={theme.color.base} />
      <Main />
    </View>
  );
}
