import { refreshAsync } from "@redux/features/myServices/actions";
import ServicesScreen, { ServicesScreenProps } from "@screens/Services";
import { RootState } from "MyTypes";
import { connect } from "react-redux";
import { Dispatch } from "redux";

export type ServicesScreenLinkStateProps = ReturnType<typeof mapStateToProps>;
export type ServicesScreenLinkDispatchProps = ReturnType<
  typeof mapDispatchToProps
>;

const mapStateToProps = (state: RootState, _ownProps: ServicesScreenProps) => ({
  isRefreshing: state.myService.isRefreshing,
  myServices: state.myService.myServices.slice(0, 5)
});

const mapDispatchToProps = (
  dispatch: Dispatch,
  _ownProps: ServicesScreenProps
) => ({
  refreshMyServices: () => dispatch(refreshAsync.request())
});

export default connect(mapStateToProps, mapDispatchToProps)(ServicesScreen);
