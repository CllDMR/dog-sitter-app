import React, { FC, useEffect } from "react";
import { createAppContainer } from "react-navigation";
import { connect } from "react-redux";
import { RootState } from "MyTypes";
import { Dispatch, bindActionCreators } from "redux";
import Main from "./stacks";
import { initExample } from "@redux/features/example/actions";
import { init as initImageCache } from "@redux/features/imageCache/actions";
import { initAsync as initMyServices } from "@redux/features/myServices/actions";

const AppContainer = createAppContainer(Main);

type Props2 = ReturnType<typeof mapDispatchToProps>;

const AppContainer2: FC<Props2> = ({
  initExample,
  initMyServices,
  initImageCache
}) => {
  useEffect(() => {
    // initExample();
    initMyServices.request();
    initImageCache();
  }, []);
  return <AppContainer />;
};

const mapStateToProps = (_state: RootState) => ({});

// INITIAL EPIC ACTIONS CAN INITIALIZE IN HERE

const mapDispatchToProps = (dispatch: Dispatch) => ({
  initExample: bindActionCreators(initExample, dispatch),
  initMyServices: bindActionCreators(initMyServices, dispatch),
  initImageCache: bindActionCreators(initImageCache, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer2);
