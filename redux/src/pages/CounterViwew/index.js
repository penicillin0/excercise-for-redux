import { connect } from "react-redux";
import { CounterView as Component } from "./CounterViwew";
import { increment, decrement } from "../../store/modules/counter/actions"

const mapStateToProps = state => {
    return {
        count: state.counter.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement())
    };
};

export const CounterView = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);