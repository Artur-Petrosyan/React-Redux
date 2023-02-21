import { useSelector, useDispatch } from "react-redux";
import { increment } from "../redux/actions/counter";
import { makeDark, makeLight } from "../redux/actions/settings";
const Settings = () => {

    const dispatch = useDispatch()

    const changeToLight = () => {
        dispatch(makeLight)
    }

    const changeToDark = () => {
        dispatch(makeDark)
    }
    return (
        <div>
            <button onClick={changeToLight}>Light</button>
            <button onClick={changeToDark}>Dark</button>
        </div>
    )
}

export default Settings;