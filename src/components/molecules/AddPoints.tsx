import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import theme from '../../theme/theme'
import TextShownArea from '../atoms/TextShownArea'
import Button from '../atoms/Button'
import ButtonsSum from './ButtonsSum'

export default function AddPoints() {
  const [sum, setSum] = useState(0)

  return (
    
    <View style={styles.container}>
      <View style={styles.line}/>
      
      <View style={styles.buttonsContainer}>
        <View style={styles.points}>
          <TextShownArea color={theme.color.softGrey} width={180} height={32}>
            <Text style={styles.font24}>{sum}</Text>
          </TextShownArea>

          <Button color={theme.color.base} width={60} press={() => {}}>
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
