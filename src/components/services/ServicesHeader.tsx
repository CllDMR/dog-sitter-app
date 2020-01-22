import React, { FC } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Colors } from "@constants/Theme";

export type ServicesHeaderProps = {
  onPressViewAll: () => void;
};

export const ServicesHeader: FC<ServicesHeaderProps> = ({ onPressViewAll }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Services</Text>
      <TouchableOpacity
        activeOpacity={1.0}
        onPress={onPressViewAll}
        hitSlop={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <Text style={styles.viewAllText}>View All</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontSize: 20
  },
  viewAllText: {
    color: Colors.orange,
    fontSize: 16
  }
});

export default ServicesHeader;
