import {
  SmartImage as Component,
  SmartImageProps
} from "@components/SmartImage";
import { fetch } from "@redux/features/imageCache/actions";
import { RootState } from "MyTypes";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

export type SmartImageLinkStateProps = ReturnType<typeof mapStateToProps>;
export type SmartImageLinkDispatchProps = ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = (state: RootState, ownProps: SmartImageProps) => ({
  loading: state.imageCache.loading.includes(ownProps.source.uri),
  localUri: state.imageCache.loaded[ownProps.source.uri]
});

const mapDispatchToProps = (
  dispatch: Dispatch,
  _ownProps: SmartImageProps
) => ({
  imageCacheFetch: bindActionCreators(fetch, dispatch)
});

export const SmartImage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default SmartImage;
