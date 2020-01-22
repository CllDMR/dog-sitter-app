import { loadAsync, refreshAsync } from "@redux/features/myServices/actions";
import MyServicesScreen, { MyServicesScreenProps } from "@screens/MyServices";
import { RootState } from "MyTypes";
import { connect } from "react-redux";
import { Dispatch } from "redux";

export type MyServicesScreenLinkStateProps = ReturnType<typeof mapStateToProps>;
export type MyServicesScreenLinkDispatchProps = ReturnType<
  typeof mapDispatchToProps
>;

const mapStateToProps = (
  state: RootState,
  _ownProps: MyServicesScreenProps
) => ({
  isRefreshing: state.myService.isRefreshing,
  isLoading: state.myService.isLoading,
  myServices: state.myService.myServices
});

const mapDispatchToProps = (
  dispatch: Dispatch,
  _ownProps: MyServicesScreenProps
) => ({
  refreshMyServices: () => dispatch(refreshAsync.request()),
  loadMyServices: ({ page }: { page: number }) =>
    dispatch(loadAsync.request({ page }))
});

export default connect(mapStateToProps, mapDispatchToProps)(MyServicesScreen);
