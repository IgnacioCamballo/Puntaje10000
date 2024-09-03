import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Constants from "expo-constants"
import Icon from 'react-native-vector-icons/AntDesign'

import useFarkle from '../hooks/useFarkle'
import theme from '../theme/theme'
import translations from "../lenguage/lenguage.json"
import Players from '../components/organisms/Players'
import ModalMenu from '../components/molecules/ModalMenu'
import ModalPlayer from '../components/molecules/ModalPlayer'
import ModalEditPlayers from '../components/molecules/ModalEditPlayers'
import ModalRules from '../components/molecules/ModalRules'


export default function Main() {
  const { playerModal, setPlayerModal, setWhosOpen, lenguage } = useFarkle()

  const [modalMenu, setModalMenu] = useState(false)
  const [modalEditPlayers, setModalEditPlayers] = useState(false)
  const [modalRules, setModalRules] = useState(false)


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{translations.title.find(i => i.lenguage === lenguage)?.text}</Text>
      
      <Players />

      <Text style={styles.publicidad}>Publicidad</Text>

      <Icon 
        name='bars'
        color={theme.color.white}
        size={32}
        style={styles.menuIcon}
        onPress={() => {setModalMenu(true), setWhosOpen(0)}}
      />

      {modalMenu === true && <ModalMenu setModal={setModalMenu} setModalRules={setModalRules} setModalEditPlayers={setModalEditPlayers}/>}

      {playerModal && <ModalPlayer setModal={setPlayerModal}/>}

      {modalEditPlayers && <ModalEditPlayers setModalEditPlayers={setModalEditPlayers}/>}

      {modalRules && <ModalRules setModal={setModalRules}/>}
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
    fontSize: 60,
    height: 80
  },
  publicidad: {
    height: 60, 
    width: "100%", 
    backgroundColor: theme.color.white,
    position: "relative",
    bottom: 0
  },
  menuIcon: {
    position: "absolute",
    top: 16,
    right: 20
  }
})