import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function PresentationalComponent(props) {
  return (
    <View>
        <Text style = {styles.myState}>
            {props.myState}
        </Text>
    </View>
  )
}

export default PresentationalComponent

const styles = StyleSheet.create ({
    myState: {
    marginTop: 20,
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20
    }
})
   
