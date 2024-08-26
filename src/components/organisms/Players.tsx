import React from 'react'
import { Dimensions, ScrollView, StyleSheet } from 'react-native'
import Player from './Player'
import theme from '../../theme/theme'

export default function Players() {
  return (
    <ScrollView style={styles.container}>
      <Player />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width - 20,
    backgroundColor: theme.color.playersBase,
    borderColor: theme.color.black,
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 12
  }
})