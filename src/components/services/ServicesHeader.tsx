import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Colors } from "@constants/Theme";

export type ServicesHeaderProps = {};

export const ServicesHeader: FC<ServicesHeaderProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Services</Text>
      <Text style={styles.viewText}>View All</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 20
  },
  viewText: {
    color: Colors.orange,
    fontSize: 16
  }
});

export default ServicesHeader;
