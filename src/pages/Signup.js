import React from "react";
import { Button, Grid, Input } from "../elements";
import { history } from "../redux/configStore";


export default function Signup(props) {
    return (
        <Grid flex_col margin='200px auto' width='70%'>
            <Grid margin='20px'><Input bg='#f60' placeholder='아이디' /></Grid>
            <Grid margin='20px'><Input bg='#f60' placeholder='비밀번호' /></Grid>
            <Grid margin='20px'><Input bg='#f60' placeholder='비밀번호확인' /></Grid>
            <Button fs='30px' bg='#0a0' margin='20px' _onClick={() => history.push('/signup')}>회원가입</Button>
        </Grid>
    )
}
