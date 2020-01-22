import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "MyTypes";
import {
  ServiceTopics as Component,
  ServiceTopicsProps
} from "@components/services/ServiceTopics";
import { loadTopicsAsync } from "@redux/features/topic/actions";

export type ServiceTopicsLinkStateProps = ReturnType<typeof mapStateToProps>;
export type ServiceTopicsLinkDispatchProps = ReturnType<
  typeof mapDispatchToProps
>;

const mapStateToProps = (state: RootState, _ownProps: ServiceTopicsProps) => ({
  topics: state.topic.topics
});

const mapDispatchToProps = (
  dispatch: Dispatch,
  _ownProps: ServiceTopicsProps
) => ({
  fetchTopics: () => dispatch(loadTopicsAsync.request())
});

export const ServiceTopics = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default ServiceTopics;
