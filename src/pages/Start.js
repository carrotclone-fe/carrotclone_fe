import React from "react";
import { Grid, Image, Text, Button } from "../elements/index";
import { history } from "../redux/configStore";


export default function Start(props) {

    return (
        <Grid flex_col>
            <Grid width='30%'><Image src={'https://www.daangn.com/logo.png'} /></Grid>
            <Grid flex_col margin='20px auto'>
                <Text size='40px' bold>당신 근처의 당근 마켓</Text>
                <Text size='25px'>중고 거래부터 동네 정보까지,</Text>
                <Text size='25px'>지금 내 동네를 선택하고 시작해보세요!</Text>
            </Grid>
            <Button fs='30px' bg='#f60' width='500px' margin='20px' _onClick={() => history.push('/signup')}>시작하기</Button>
            <div style={{ display: 'flex' }}>
                <Text size='20px'>이미 계정이 있나요?</Text>
                <Text underLine size='20px' margin='5px 0 0 10px' _onClick={() => history.push('/login')}>로그인</Text>
            </div>
        </Grid>
    )
}
