import React, { FC } from "react";
import { Entypo, Feather, FontAwesome, Foundation } from "@expo/vector-icons";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import {
  ServiceTopicsLinkStateProps,
  ServiceTopicsLinkDispatchProps
} from "@connected/components/services/ServiceTopics";

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

export type ServiceTopicsProps = {};

type Props = ServiceTopicsProps &
  ServiceTopicsLinkStateProps &
  ServiceTopicsLinkDispatchProps;

export const ServiceTopics: FC<Props> = ({ topics, fetchTopics }) => {
  // useEffect(() => {
  //   fetchTopics();
  // }, []);

  return (
    <View style={styles.container}>
      {topics.map(({ title, icon }, index) => (
        <View key={`card-${index}`} style={styles.card}>
          <Icon {...icon} />
          <Text>{title}</Text>
        </View>
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
