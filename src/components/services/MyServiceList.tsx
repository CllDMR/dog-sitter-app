import React, { FC } from "react";
import { StyleSheet, Dimensions, View } from "react-native";

import { MyServiceType } from "@typings/Service/state";

const { width } = Dimensions.get("window");

export type MyServiceListProps = {};

export type MyServiceListLinkStateProps = {
  myServices: MyServiceType[];
};

export type MyServiceListLinkDispatchProps = {};

type Props = MyServiceListProps &
  MyServiceListLinkStateProps &
  MyServiceListLinkDispatchProps;

export const MyServiceList: FC<Props> = ({}) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  card: {
    flexBasis: width / 2 - 40,
    height: 75,
    marginBottom: 10,
    padding: 10,
    justifyContent: "space-between",
    backgroundColor: "white",
    borderColor: "lightgray",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 15
  }
});

export default MyServiceList;
