import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";

type Props = {
  selected: boolean;
  onPress: () => void;
};

export default function CustomRadio({ selected, onPress }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View
        style={[
          styles.radioCircle,
          { backgroundColor: selected ? "#1380ed" : "transparent" },
        ]}
      >
        {selected && <View style={styles.radioDot} />}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#1380ed",
    alignItems: "center",
    justifyContent: "center",
  },
  radioDot: {
    width: 7,
    height: 7,
    borderRadius: 6,
    backgroundColor: "#ffffff",
  },
});
