import React from "react";
import { Button, Grid, Input, Text, Image } from "../elements/index";
import { history } from "../redux/configStore";


export default function Signup(props) {
    return (
        <Grid flex_col margin='150px auto' width='50%'>

            <Grid flex_space margin='0 0 50px 0'>
                <Grid width='15%'><Image src={'https://www.daangn.com/logo.png'} /></Grid>
                <Text size='50px'>회원가입</Text>
                <Grid width='15%'><Image src={'https://www.daangn.com/logo.png'} /></Grid>
            </Grid>

            <Grid flex_col margin='20px auto'>
                <Grid margin='20px'><Input bg='#f60' color='white' placeholder='아이디' /></Grid>
                <Grid margin='20px'><Input bg='#f60' color='white' type='password' placeholder='비밀번호' /></Grid>
                <Grid margin='20px'><Input bg='#f60' color='white' type='password' placeholder='비밀번호확인' /></Grid>
                <Button fs='30px' bg='#0a0' margin='20px' _onClick={() => history.push('/signup')}>회원가입</Button>
            </Grid>
        </Grid>
    )
}
