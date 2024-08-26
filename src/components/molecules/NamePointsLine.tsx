import React from 'react'
import { View } from 'react-native'

type NamePointsLineProps = {
  children: React.ReactNode
}

export default function NamePointsLine({children}: NamePointsLineProps) {
  return (
    <View
      style={{
        padding: 4,
        paddingHorizontal: 14,
        flexDirection: 'row',
        justifyContent: "space-between"
      }}
    >
      {children}
    </View>
  )
}
