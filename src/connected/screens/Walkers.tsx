import { connect } from "react-redux";
import WalkersScreen from "@screens/Walkers";
// import { RootState } from "@typings/MyRedux";

// const mapStateToProps = (state: RootState) => ({});
const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WalkersScreen);
