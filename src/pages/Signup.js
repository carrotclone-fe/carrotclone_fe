import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Grid, Input, Text, Image } from "../elements/index";
import { history } from "../redux/configStore";
import { actionsCreators as UserActions } from "../redux/modules/user";
import regCheck from "../shared/regcheck";


export default function Signup(props) {

    const [userId, setUserId] = useState('')
    const [userPw, setUserPw] = useState('')
    const [validPw, setValidPw] = useState('')

    const dispatch = useDispatch()

    const signup = () => {
        console.log(userId, userPw, validPw)

        if (!regCheck(userId, 'id'))
            return window.alert('아이디는 2~10자 사이 입니다')
        if (!regCheck(userPw, 'pw'))
            return window.alert('비밀번호는 4~20자 사이 입니다')
        if (userPw !== validPw)
            return window.alert('비밀번호가 같지 않습니다')

        dispatch(UserActions.Sign_upAXI('seong', '1234', '1234'))
    }

    return (
        <Grid flex_col margin='150px auto' width='50%'>

            <Grid flex_space margin='0 0 50px 0'>
                <Grid width='15%'><Image src={'https://www.daangn.com/logo.png'} /></Grid>
                <Text size='50px'>회원가입</Text>
                <Grid width='15%'><Image src={'https://www.daangn.com/logo.png'} /></Grid>
            </Grid>

            <Grid flex_col margin='20px auto'>
                <Grid margin='20px'><Input bg='#f60' color='white' placeholder='아이디' _onChange={e => setUserId(e.target.value)} /></Grid>
                <Grid margin='20px'><Input bg='#f60' color='white' type='password' placeholder='비밀번호' _onChange={e => setUserPw(e.target.value)} /></Grid>
                <Grid margin='20px'><Input bg='#f60' color='white' type='password' placeholder='비밀번호확인' _onChange={e => setValidPw(e.target.value)} /></Grid>
                <Button fs='30px' bg='#0a0' margin='20px' _onClick={signup}>회원가입</Button>
            </Grid>
        </Grid>
    )
}
