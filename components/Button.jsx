import { Text, View, Pressable, useState, StyleSheet } from 'react-native';
import React from 'react'
import * as Tone from 'tone'

const Trigger = () => {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "GT.wav",

    },
    // release: 1,
    baseUrl: "D:\Users\Dopest\Documents\GitHub\MPC\assets\drums",
  }).toDestination();
  const play = () => {
    Tone.loaded().then(() => {
      sampler.triggerAttackRelease('C4',now);
    })
  }

  return (
    <View>
      <Pressable style={styles.button} onPress={play}  />
    </View>
  )
}
const styles = StyleSheet.create({

  button: {
    width: 100,
    height: 100,
    // backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'black'
  },
  triggered: {
    width: 110,
    height: 110,
    // backgroundColor: 'black',
    borderWidth: 3,
    borderColor: 'black'
  }
});
export default Trigger



