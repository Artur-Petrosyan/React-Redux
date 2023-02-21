import { connect } from "react-redux";
import Counter from "../pages/Counter";
import { decrement, increment } from "../redux/actions/counter";

const mapStateToProps = ({ counter }) => {
    return { counter }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment)
        },
        decrement:
            () => {
                dispatch(decrement)
            }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);