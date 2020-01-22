import {
  ListComponent as Component,
  ListComponentProps
} from "@components/services/ListComponent";
import { RootState } from "MyTypes";
import { connect } from "react-redux";
import { Dispatch } from "redux";

export type ListComponentLinkStateProps = ReturnType<typeof mapStateToProps>;
export type ListComponentLinkDispatchProps = ReturnType<
  typeof mapDispatchToProps
>;

const mapStateToProps = (
  _state: RootState,
  _ownProps: ListComponentProps
) => ({});

const mapDispatchToProps = (
  _dispatch: Dispatch,
  _ownProps: ListComponentProps
) => ({});

export const ListComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default ListComponent;
