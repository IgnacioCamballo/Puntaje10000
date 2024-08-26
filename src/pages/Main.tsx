import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Constants from "expo-constants"
import theme from '../theme/theme'
import Players from '../components/organisms/Players'

export default function Main() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>10.000</Text>
      
      <Players />

      <Text style={styles.publicidad}>Publicidad</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height - Constants.statusBarHeight,
    alignItems: "center",
    backgroundColor: theme.color.base,
    alignContent: "center",
    justifyContent: "center"
  },
  titulo: {
    fontSize: 60
  },
  publicidad: {
    height: 80, 
    width: "100%", 
    backgroundColor: theme.color.grey,
    position: "relative",
    bottom: 0
  }
})