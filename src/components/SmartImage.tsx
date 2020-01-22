import React, { FC, useEffect } from "react";
import {
  SmartImageLinkDispatchProps,
  SmartImageLinkStateProps
} from "@connected/components/SmartImage";
import { Image, ImageStyle, StyleSheet } from "react-native";

interface Styles {
  imageStyle: ImageStyle;
}

const styles = StyleSheet.create<Styles>({
  imageStyle: {}
});

export type SmartImageProps = {
  source: { uri: string; filename: string };
  height: number | string;
  width: number | string;
  imageStyle: ImageStyle;
};

type Props = SmartImageProps &
  SmartImageLinkStateProps &
  SmartImageLinkDispatchProps;

export const SmartImage: FC<Props> = ({
  imageCacheFetch,
  source,
  localUri = null,
  height,
  width,
  imageStyle
}) => {
  // TODO:  IMAGE_CACHING SYSTEM WITH REDUX

  useEffect(() => {
    imageCacheFetch(source);
  }, [localUri]);

  const getSource = () => {
    if (!localUri) return require("@assets/images/placeholder-img.png");
    return { uri: localUri };
  };

  return (
    <Image
      source={getSource()}
      style={[styles.imageStyle, { width, height }, imageStyle]}
    />
  );
};

export default SmartImage;

// export default connect(
//   (state, props) => {
//     const { loading, loaded } = state.imageCache;
//     return {
//       loading: loading.includes(props.source.uri),
//       localUri: loaded[props.source.uri]
//     };
//   },
//   dispatch => ({
//     imageCacheAction: bindActionCreators(ImageCacheAction, dispatch)
//   })
// )(SmartImage);
