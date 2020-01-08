import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

export type StackHeaderProps = {
  title: string;
};

export const StackHeader: FC<StackHeaderProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={{ transform: [{ rotate: "270deg" }] }}>
        <Feather name="bar-chart-2" size={25} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    fontSize: 25
  }
});

export default StackHeader;
