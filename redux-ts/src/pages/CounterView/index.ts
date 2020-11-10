import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../store";
import { increment, decrement } from "../../store/modules/counter/actions";
import { CounterView as Component } from "./CounterView";

const mapStateToProps = (state: RootState) => {
    return {
        count: state.counter.count
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement())
    };
};

export const CounterView = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);