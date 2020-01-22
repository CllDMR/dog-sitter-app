import WalkersScreen, { WalkersScreenProps } from "@screens/Walkers";
import { RootState } from "MyTypes";
import { connect } from "react-redux";
import { Dispatch } from "redux";

export type WalkersScreenLinkStateProps = ReturnType<typeof mapStateToProps>;
export type WalkersScreenLinkDispatchProps = ReturnType<
  typeof mapDispatchToProps
>;

const mapStateToProps = (
  _state: RootState,
  _ownProps: WalkersScreenProps
) => ({});

const mapDispatchToProps = (
  _dispatch: Dispatch,
  _ownProps: WalkersScreenProps
) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(WalkersScreen);
