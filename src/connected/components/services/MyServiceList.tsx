import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "@typings/MyRedux";
import {
  MyServiceList as Component,
  MyServiceListProps,
  MyServiceListLinkStateProps,
  MyServiceListLinkDispatchProps
} from "@components/services/MyServiceList";

const mapStateToProps = (
  state: RootState,
  _ownProps: MyServiceListProps
): MyServiceListLinkStateProps => ({
  myServices: state.service.myServices
});

const mapDispatchToProps = (
  _dispatch: Dispatch,
  _ownProps: MyServiceListProps
): MyServiceListLinkDispatchProps => ({});

export const MyServiceList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default MyServiceList;
