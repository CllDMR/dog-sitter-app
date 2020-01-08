import React, { FC } from "react";
import { StyleSheet, Dimensions, View, Text } from "react-native";
import { FontAwesome, Feather, Entypo, Foundation } from "@expo/vector-icons";

import { TopicType } from "@typings/Service/state";

const { width } = Dimensions.get("window");

type IconProps = {
  name: string;
  library: string;
  color: string;
};

const Icon: FC<IconProps> = ({ name, library, color }) => {
  switch (library) {
    case "FontAwesome":
      return <FontAwesome name={name} color={color} size={20} />;

    case "Feather":
      return <Feather name={name} color={color} size={20} />;

    case "Entypo":
      return <Entypo name={name} color={color} size={20} />;

    case "Foundation":
      return <Foundation name={name} color={color} size={20} />;

    default:
      return <FontAwesome name={"power-off"} color={"red"} size={20} />;
  }
};

type TopicProps = {
  title: string;
  icon: IconProps;
};

const Topic: FC<TopicProps> = ({ title, icon }) => {
  return (
    <View style={styles.card}>
      <Icon {...icon} />
      <Text>{title}</Text>
    </View>
  );
};

export type ServiceTopicsProps = {};

export type ServiceTopicsLinkStateProps = { topics: TopicType[] };

export type ServiceTopicsLinkDispatchProps = {};

type Props = ServiceTopicsProps &
  ServiceTopicsLinkStateProps &
  ServiceTopicsLinkDispatchProps;

export const ServiceTopics: FC<Props> = ({ topics }) => {
  return (
    <View style={styles.container}>
      {topics.map(({ title, icon }, index) => (
        <Topic key={`card-${index}`} title={title} icon={icon} />
      ))}
    </View>
  );
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

export default ServiceTopics;
