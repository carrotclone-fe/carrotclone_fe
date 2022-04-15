import React from "react";
import { Button, Grid, Image, Input, Text } from "../elements/index";
import { history } from "../redux/configStore";


export default function Login(props) {
    return (
        <React.Fragment>
            <Grid flex_col>
                <Grid width='30%'><Image src={'https://www.daangn.com/logo.png'} /></Grid>
                <Grid flex_col margin='20px auto'>
                    <Grid margin='5px'><Input width='70%' bg='#f60' placeholder='아이디' /></Grid>
                    <Grid margin='5px'><Input width='70%' bg='#f60' placeholder='비밀번호' /></Grid>
                    <Button fs='30px' bg='#0a0' width='70%' margin='20px' _onClick={() => history.push('/signup')}>로그인</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
