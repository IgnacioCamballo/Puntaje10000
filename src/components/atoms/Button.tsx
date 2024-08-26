import React from 'react'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import theme from '../../theme/theme'

type ButtonProps = {
  children: React.ReactNode,
  press?: () => void,
  color?: string,
  width?: number
}

export default function Button({children, press, color, width}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={press}
      style={{
        width: width,
        alignItems: "center",
        paddingVertical: 4,
        paddingHorizontal: 4,
        backgroundColor: color,
        borderColor: theme.color.black,
        borderWidth: 1,
        borderRadius: 10
      }}
    >
      {children}
    </TouchableOpacity>
  )
}