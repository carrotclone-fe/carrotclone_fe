import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Grid, Image, Input, Text } from "../elements/index";
import { history } from "../redux/configStore";
import { actionsCreators as UserActions } from "../redux/modules/user";


export default function Login(props) {

    const [userId, setUserId] = useState('')
    const [userPw, setUserPw] = useState('')

    const dispatch = useDispatch()

    const login = () => {
        console.log(userId, userPw)

        dispatch(UserActions.Log_inAXI('seong', '1234'))
    }

    return (
        <React.Fragment>
            <Grid flex_col margin='150px auto' width='50%'>
                <Grid flex_space margin='0 0 50px 0'>
                    <Grid width='15%'><Image src={'https://www.daangn.com/logo.png'} /></Grid>
                    <Text size='50px'>로그인</Text>
                    <Grid width='15%'><Image src={'https://www.daangn.com/logo.png'} /></Grid>
                </Grid>

                <Grid flex_col margin='20px auto'>
                    <Grid margin='20px'><Input bg='#f60' color='white' placeholder='아이디' _onChange={e => setUserId(e.target.value)} /></Grid>
                    <Grid margin='20px'><Input bg='#f60' color='white' type='password' placeholder='비밀번호' _onChange={e => setUserPw(e.target.value)} /></Grid>
                    <Button fs='30px' bg='#0a0' margin='20px' _onClick={login}>로그인</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
