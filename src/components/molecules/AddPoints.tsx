import React, { useState } from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import theme from '../../theme/theme'
import TextShownArea from '../atoms/TextShownArea'
import Button from '../atoms/Button'
import ButtonsSum from './ButtonsSum'
import useFarkle from '../../hooks/useFarkle'
import { PlayerType } from '../../types'

type AddPointsProps = {
  playerKey: number
}

export default function AddPoints({playerKey}: AddPointsProps) {
  const {players, setPlayers} = useFarkle()

  const [sum, setSum] = useState(0)

  const addScore = () => {
    const actualPlayer = players.find(player => player.key === playerKey)
    const index = players.findIndex(player => player.key === playerKey)
    
    if(actualPlayer!.points + sum < 0){
      Alert.alert(
        '',
        "El puntaje no puede ser menor a 0",
        [
          {
            text: 'OK',
            onPress: () => setSum(0),
            style: 'cancel'
          },
        ],
      )
    } else if (actualPlayer!.points + sum > 10000) {
      Alert.alert(
        '',
        "El puntaje no puede ser mayor a 10.000",
        [
          {
            text: 'OK',
            style: 'cancel'
          },
        ],
      )
    } else {
      const playersCopy = [...players]
      
      const editedPlayer: PlayerType = {
        key: actualPlayer!.key,
        name: actualPlayer!.name,
        points: actualPlayer!.points + sum
      }
      
      playersCopy.splice(index, 1, editedPlayer)
      setPlayers(playersCopy)
      setSum(0)
    }
  }

  return (
    
    <View style={styles.container}>
      <View style={styles.line}/>
      
      <View style={styles.buttonsContainer}>
        <View style={styles.points}>
          <TextShownArea color={theme.color.softGrey} width={150} height={32}>
            <Text style={styles.font24}>{sum}</Text>
          </TextShownArea>

          <Button color={theme.color.redCancel} width={60} press={() => {setSum(0)}}>
            <Text style={styles.font16}>Cancel</Text>
          </Button>

          <Button color={theme.color.greenAddButton} width={60} press={() => addScore()}>
            <Text style={styles.font16}>Sumar</Text>
          </Button>
        </View>

        <ButtonsSum total={sum} setTotal={setSum}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  font16: {
    fontSize: theme.fontSize.F16,
    lineHeight: 20
  },
  font24: {
    fontSize: theme.fontSize.F24,
    lineHeight: 28
  },
  line: {
    height: 1,
    marginHorizontal: 10,
    borderColor: theme.color.black,
    borderWidth: 0.8
  },
  buttonsContainer: {
    paddingHorizontal: 40,
    paddingVertical: 8,
  },
  points: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
    marginBottom: 8
  }
})
