import React from "react";
import { Button, Grid, Image, Text } from "../elements/index";

import { BsEmojiSmile } from "react-icons/bs";
import { history } from "../redux/configStore";

export default function Detail(props) {
    return (
        <React.Fragment>
            <Grid>
                <Grid flex='1' border='1px solid red'>
                    <Button>back</Button>
                    <Button>Home</Button>
                </Grid>
                <Grid padding='0 100px'>
                    <Grid border='1px solid red' width='20%' margin='10px auto'>
                        <Image></Image>
                    </Grid>
                    <Grid border='1px solid red' flex_space>
                        <Grid flex_space width='100%' margin='0 100px 0 0'>
                            <Grid width='100%'><Image></Image></Grid>
                            <Grid>
                                <Text size='30px'>아이디</Text>
                                <Text size='30px'>항해동</Text>
                            </Grid>
                        </Grid>
                        <Grid flex_col margin='0 0 0 40%'>
                            <Text size='20px'>36.5</Text>
                            <Grid width='30%'><Image></Image></Grid>
                        </Grid>
                        <Grid width='30%'><Image></Image></Grid>
                    </Grid>
                </Grid>
                <hr></hr>
                <Grid>
                    <Grid>
                        <Grid flex='1' margin='0 40px'>
                            <Button width='10%' height='60px' margin='0 5px'>거래완료</Button>
                            <Button width='10%' height='60px' margin='0 5px'>거래 중</Button>
                            <Button width='10%' height='60px' margin='0 5px'>예약 중</Button>
                        </Grid>
                        <Grid>
                            <Grid flex_space width='80%' margin='auto'>
                                <div style={{ display: "flex", flexDirection: "column", width: '20%', margin: '20px 0 20px 0', textAlign: "left" }}>
                                    <Text size='20px'>제목</Text>
                                    <Text size='20px'>카테고리</Text>
                                </div>
                            </Grid>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '60%', margin:'20px 0 50px 30%' }}>
                                <Text size='20px'>게시글 내용 asdofj oaj foijsfoja sodfij asoidfj ;aosdf jaoiwje f;oaiwje f;oaiwje foawije fo;awiejfo aiwjrgoiaerj goaiejrf awekjf oaiwje foaiwje foiajw efoajw e;foaew</Text>
                            </div>
                            <Grid border='1px solid red' flex_space padding='0 20px' width='90%' margin='auto'>
                                <Grid width='10%'><Image></Image></Grid>
                                <Grid>
                                    <Text>4,234,553</Text>
                                    <Text>가격제안하기</Text>
                                </Grid>
                                <div style={{ width: '20%' }}>
                                    <Button width='100%'>채팅하기</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>






            {/* <Grid flex_space width='10%'>
                <Button fs='30px' margin='0 10px 0 0' _onClick={() => history.goBack()}>←</Button>
                <Button fs='30px' margin='0 10px 0 0' _onClick={() => history.push('/')}>◎</Button>
            </Grid>
            <Grid padding='100px 200px'>
                <Grid flex_col>
                    <Grid width='20%'><Image></Image></Grid>
                    <Grid flex_space bg='grey' margin='20px'>
                        <Grid flex_space padding='0 20px'>
                            <div style={{ display: 'flex' }}>
                                <Grid width='10vw'><Image></Image></Grid>
                                <div style={{ display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center", padding:'50px 0' }}>
                                    <Grid width='10vw'><Text size='30px'>아이디</Text></Grid>
                                    <Grid width='10vw'><Text size='30px'>항해동</Text></Grid>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent:"center" }}>
                                <Grid flex_col flex='1'>
                                    <Text size='30px'>36.5</Text>
                                    <Grid width='100%'><Image></Image></Grid>
                                </Grid>
                                <Grid width='100px'><Image></Image></Grid>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>

                <hr style={{ margin: '10px 0 30px 0' }}></hr>
                <Grid>
                    <Grid flex_space width='30%'>
                        <Button fs='20px' margin='0 5px 0 0'>거래완료</Button>
                        <Button fs='20px' margin='0 5px 0 0'>거래중</Button>
                        <Button fs='20px' margin='0 5px 0 0'>예약중</Button>
                    </Grid>
                    <Grid flex_space height='20vh'>
                        <div style={{ display: 'flex', flexDirection: 'column', float: 'left', margin: '0 0 100px 0', width: '20%' }}>
                            <Text size='24px'>제목</Text>
                            <Text size='24px'>카테고리</Text>
                        </div>
                        <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', width: '70%', margin: 'auto' }}>
                            <Text size='20px'>게시글 내용flksjafklajsdfl lasldkjf aklsjd flkj aewlkjf ajwiejfoawiejfoa wejfo awejfoi a;ofiaj eorijg ;aeorijg aoeirjg ao;ejir flaeirjg aiwuejfv ieirjcg welriujflivuewjilsnerjhlvis uerfhlciuer flvisuhe rlfciuher vuiher lciuwehr lifuhvaw ecfiuarefi hawireufhaliweru fhaliurhf lare</Text>
                        </div>
                    </Grid>
                </Grid>
                <Grid flex_space bg='grey' height='80px'>
                    <Button width='10%' height='50px' margin='0 0 0 20px'>♥</Button>
                    <div style={{ display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: 'center' }}>
                        <Text size='20px'>4000000</Text>
                        <Text size='20px'>가격제안하기</Text>
                    </div>
                    <Button width='10%' height='50px' margin='0 20px 0 0'>채팅하기</Button>
                </Grid>
            </Grid> */}
        </React.Fragment>
    )
}


