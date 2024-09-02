import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import theme from '../../theme/theme';

type PointsViewProps = {
  isOpen: boolean,
  points: number
}

export default function PointsView({isOpen, points}: PointsViewProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.font28}>{points}</Text>
      <Text style={styles.font28}> pts </Text>
      <Icon
        name="caretdown"
        color={theme.color.grey}
        size={18}
        style={styles.arrow}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2
  },
  font28: {
    fontSize: theme.fontSize.F28
  },
  arrow: {
    top: 2
  }
})
