import React, { useState, useEffect } from 'react';
import { View, Pressable, Animated, StyleSheet } from 'react-native';

const CustomSwitch = ({ value, onValueChange }) => {
  const [animValue] = useState(new Animated.Value(value ? 1 : 0));

  useEffect(() => {
    Animated.timing(animValue, {
      toValue: value ? 1 : 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }, [value]);

  const translateX = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 26], // ajuste para o movimento da bolinha
  });

  const backgroundColor = value ? '#1380ed' : '#e4e6eb';

  return (
    <Pressable onPress={() => onValueChange(!value)} style={styles.container}>
      <View style={[styles.track, { backgroundColor }]}>
        <Animated.View style={[styles.thumb, { transform: [{ translateX }] }]} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 25,
  },
  track: {
    flex: 1,
    borderRadius: 15,
  },
  thumb: {
    width: 21,
    height: 21,
    backgroundColor: 'white',
    borderRadius: 13,
    position: 'absolute',
    top: 2,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
});

export default CustomSwitch;
