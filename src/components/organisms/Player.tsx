import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import AddPoints from '../molecules/AddPoints'
import theme from '../../theme/theme'
import NamePointsLine from '../molecules/NamePointsLine'
import PointsView from '../molecules/PointsView'

export default function Player() {
  return (
    <View style={styles.container}>
      <NamePointsLine>
        <Text style={styles.name}>Nacho</Text>
        <PointsView />
      </NamePointsLine>
      <AddPoints />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.white,
    margin: 10,
    borderColor: theme.color.black,
    borderWidth: 1,
    borderRadius: 20,
  },
  name: {
    fontSize: theme.fontSize.F28,
    fontWeight: "400"
  }
})