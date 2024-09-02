import React, { useState } from 'react'
import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Constants from "expo-constants"
import Icon from 'react-native-vector-icons/AntDesign'

import useFarkle from '../../hooks/useFarkle'
import theme from '../../theme/theme'

type ModalMenuProps = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  setModalEditPlayers: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ModalMenu({setModal, setModalEditPlayers}: ModalMenuProps) {
  const {players, lenguage, setPlayers, setLenguage} = useFarkle()

  const [lenguageView, setLenguageView] = useState(false)
  
  const resetAlert = () => {
    Alert.alert(
      '',
      "Los puntajes de todos los jugadores volveran a 0, ¿estas seguro?",
      [
        {
          text: 'Cancelar',
          onPress: () => setModal(false),
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => resetScores(),
          style: 'cancel'
        },
      ],
    )
  }

  const resetScores = () => {
    let playersCopy = [...players] || []
    
    playersCopy.forEach(player => {
      player.points = 0
    })

    setPlayers(playersCopy)
    setModal(false)
  }

  return (
    <View style={styles.generalContainer}>
      <View style={styles.container}>
        <View style={styles.rowLine}>
          <Text style={styles.text} onPress={() => setLenguageView(!lenguageView)}>Idioma</Text>
          <Icon 
            name='closecircleo'
            size={24}
            onPress={() => setModal(false)}
            style={styles.icon}
            />
        </View>

        {lenguageView && 
          <View style={styles.lenguagesContainer}>
            <Text onPress={() => setLenguage("es")} style={[styles.textLenguage, lenguage === "es" ? styles.bgGrey : {}]}>Español</Text>
            <Text onPress={() => setLenguage("en")} style={[styles.textLenguage, lenguage === "en" ? styles.bgGrey : {}]}>English</Text>
          </View>
        }

        <Text style={styles.text} onPress={() => resetAlert()}>Resetear Puntos</Text>
        <Text style={styles.text} onPress={() => {setModalEditPlayers(true), setModal(false)}}>Editar Jugadores</Text>
        <Text style={styles.text} onPress={() => {}}>Leer Reglas</Text>
      </View>

      <TouchableOpacity style={styles.transparentView} activeOpacity={0} onPress={()=> setModal(false)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  generalContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: Dimensions.get("window").height - Constants.statusBarHeight - 80,
    width: Dimensions.get("window").width
  },
  container: {
    position: "absolute",
    zIndex: 1,
    top: 16,
    right: 20,
    backgroundColor: theme.color.white,
    padding: 8,
    borderRadius: 10,
    borderColor: theme.color.black,
    borderWidth: 1,
    gap: 8
  },
  transparentView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent"
  },
  text: {
    fontSize: theme.fontSize.F24,
    alignSelf: "flex-start"
  },
  textLenguage: {
    fontSize: theme.fontSize.F20,
    width: "100%",
    textAlign: "center"
  },
  lenguagesContainer: {
    borderWidth: 0.5,
    borderColor: theme.color.black,
  },
  icon: {
    transform: [{translateY: -6}]
  },
  rowLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  bgGrey: {
    backgroundColor: theme.color.softGrey
  }
})