import {
  ListComponentLinkDispatchProps,
  ListComponentLinkStateProps
} from "@connected/components/services/ListComponent";
import SmartImage from "@connected/components/SmartImage";
import { MyService } from "MyModels";
import React, { FC } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");

const imageRatio = 2 / 4;
const imageWidth = width - 40;
const imageHeight = imageWidth * imageRatio;

export type ListComponentProps = { item: MyService };

type Props = ListComponentProps &
  ListComponentLinkStateProps &
  ListComponentLinkDispatchProps;

export const ListComponent: FC<Props> = ({ item }) => {
  const source = {
    filename: item.filename,
    uri: `https://picsum.photos/${item.width}/${item.height}?image=${item.id}`
  };

  return (
    <View key={item.id} style={styles.card}>
      <SmartImage
        source={source}
        imageStyle={styles.imageStyle}
        height={imageHeight}
        width={imageWidth}
      />
      <Text>{item.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    alignItems: "center"
  },
  card: {
    padding: 15,
    backgroundColor: "white",
    marginVertical: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  imageStyle: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: -15,
    marginLeft: -15,
    marginRight: -15,
    marginBottom: 10
  }
});

export default ListComponent;
