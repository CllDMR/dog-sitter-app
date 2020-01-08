import { connect } from "react-redux";
import PetsScreen from "@screens/Pets";
// import { RootState } from "@typings/MyRedux";

// const mapStateToProps = (state: RootState) => ({});
const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PetsScreen);
