import React from "react";
import { Grid, Image, Text, Button } from "../elements/index";
import { history } from "../redux/configStore";
import Upload from "../shared/Upload";

export default function Start(props) {

    return (
        <Grid flex_col margin='50px 0 0 0'>
            <Grid width='25%' min_width='200px'><Image src={'https://www.daangn.com/logo.png'} /></Grid>
            <Grid flex_col margin='20px auto'>
                <Text size='50px' bold>당신 근처의 당근 마켓</Text>
                <Text size='30px'>중고 거래부터 동네 정보까지,</Text>
                <Text size='30px'>지금 내 동네를 선택하고 시작해보세요!</Text>
            </Grid>

            <Grid flex_col width='30%' min_width='400px'>
                <Button fs='30px' bg='#f60' margin='20px' _onClick={() => history.push('/signup')}>시작하기</Button>
                <div style={{ display: 'flex' }}>
                    <Text size='20px'>이미 계정이 있나요?</Text>
                    <Text underLine size='20px' margin='5px 0 0 10px' _onClick={() => history.push('/login')}>로그인</Text>
                </div>
            </Grid>
        </Grid>
    )
}
