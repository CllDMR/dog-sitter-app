import UpdatesScreen, { UpdatesScreenProps } from "@screens/Updates";
import { RootState } from "MyTypes";
import { connect } from "react-redux";
import { Dispatch } from "redux";

export type UpdatesScreenLinkStateProps = ReturnType<typeof mapStateToProps>;
export type UpdatesScreenLinkDispatchProps = ReturnType<
  typeof mapDispatchToProps
>;

const mapStateToProps = (
  _state: RootState,
  _ownProps: UpdatesScreenProps
) => ({});

const mapDispatchToProps = (
  _dispatch: Dispatch,
  _ownProps: UpdatesScreenProps
) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UpdatesScreen);
