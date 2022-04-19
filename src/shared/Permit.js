import { useDispatch } from "react-redux";
import { history } from "../redux/configStore";
import { actionsCreators as UserActions } from "../redux/modules/user";
import { getCookie } from "./Cookie";

const Permit = (props) => {
    const is_cookie = document.cookie;
    const dispatch = useDispatch()

    if (is_cookie) {
        dispatch(UserActions.loginCheck(getCookie()))
        return true
    }
    else {
        window.alert('로그인을 해주세요')
        history.replace('/')
    }
}

export default Permit;