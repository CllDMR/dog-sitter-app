import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "@typings/MyRedux";
import {
  ServiceTopics as Component,
  ServiceTopicsProps,
  ServiceTopicsLinkStateProps,
  ServiceTopicsLinkDispatchProps
} from "@components/services/ServiceTopics";

const mapStateToProps = (
  state: RootState,
  _ownProps: ServiceTopicsProps
): ServiceTopicsLinkStateProps => ({
  topics: state.service.topics
});

const mapDispatchToProps = (
  _dispatch: Dispatch,
  _ownProps: ServiceTopicsProps
): ServiceTopicsLinkDispatchProps => ({});

export const ServiceTopics = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default ServiceTopics;
