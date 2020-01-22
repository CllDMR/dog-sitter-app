import PetsScreen, { PetsScreenProps } from "@screens/Pets";
import { RootState } from "MyTypes";
import { connect } from "react-redux";
import { Dispatch } from "redux";

export type PetsScreenLinkStateProps = ReturnType<typeof mapStateToProps>;
export type PetsScreenLinkDispatchProps = ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = (_state: RootState, _ownProps: PetsScreenProps) => ({});

const mapDispatchToProps = (
  _dispatch: Dispatch,
  _ownProps: PetsScreenProps
) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PetsScreen);
