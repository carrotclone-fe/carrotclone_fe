import React from "react";
import { Button, Grid, Image, Text } from "../elements/index";

import { BsEmojiSmile } from "react-icons/bs";
import { history } from "../redux/configStore";

export default function Detail(props) {
    return (
        <React.Fragment>
            <Grid flex_space width='10%'>
                <Button fs='30px' margin='0 10px 0 0' _onClick={() => history.goBack()}>←</Button>
                <Button fs='30px' margin='0 10px 0 0' _onClick={() => history.push('/')}>◎</Button>
            </Grid>
            <Grid padding='100px 200px'>
                <Grid flex_col>
                    <Grid width='20%'><Image></Image></Grid>
                    <Grid flex_space bg='grey' margin='20px'>
                        <Grid flex_space>
                            <Grid width='20%' margin='auto'><Image></Image></Grid>
                            <Grid flex_col>
                                <Text size='20px'>아이디</Text>
                                <Text size='20px'>항해동</Text>
                            </Grid>
                            <Grid flex_col>
                                <Text size='16px'>36.5</Text>
                                <Grid width='10%'><Image></Image></Grid>
                            </Grid>
                            <Grid><BsEmojiSmile /></Grid>
                        </Grid>
                    </Grid>

                </Grid>
                <hr style={{margin:'10px 0 30px 0'}}></hr>
                <Grid>
                    <Grid flex_space width='30%'>
                        <Button fs='20px' margin='0 5px 0 0'>거래완료</Button>
                        <Button fs='20px' margin='0 5px 0 0'>거래중</Button>
                        <Button fs='20px' margin='0 5px 0 0'>예약중</Button>
                    </Grid>
                    <Grid flex_space>
                        <div style={{ display: 'flex', flexDirection: 'column', float: 'left', margin: '0 0 80px 0' }}>
                            <Text size='24px'>제목</Text>
                            <Text size='24px'>카테고리 createdAt</Text>
                        </div>
                        <Grid width='60%' margin='0 100px 0 0'>
                            <Text size='20px' margin='50px 0 50px 0'>게시글 내용flksjafklajsdfl lasldkjf aklsjd flkj aewlkjf ajwiejfoawiejfoa wejfo awejfoi a;ofiaj eorijg ;aeorijg aoeirjg ao;ejir flaeirjg aiwuejfv ieirjcg welriujflivuewjilsnerjhlvis uerfhlciuer flvisuhe rlfciuher vuiher lciuwehr lifuhvaw ecfiuarefi hawireufhaliweru fhaliurhf lare</Text>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid flex_space bg='grey' height='80px'>
                    <Button width='10%' height='50px' margin='0 0 0 20px'>♥</Button>
                    <div style={{ display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: 'center'}}>
                        <Text size='20px'>4000000</Text>
                        <Text size='20px'>가격제안하기</Text>
                    </div>
                    <Button width='10%' height='50px' margin='0 20px 0 0'>채팅하기</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}


