import React from "react";
import { Button, Grid, Image, Input, Text } from "../elements";


export default function Write(props) {

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <React.Fragment>
            <Grid flex_space>
                <Button width='100px'>back</Button>
                <Button width='100px'>완료</Button>
            </Grid>
            <Grid></Grid>
            <Grid width='100px'>
                <Image></Image>
            </Grid>

            <hr></hr>

            <div>
                <p>Choose the size of the t-shirt</p>
                <select onChange={(e) => handleChange(e)}>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
            </div>

            <Grid>
                <Input placeholder='글 제목' size='30px'></Input>
                <hr></hr>
                <Input placeholder='카테고리 선택' size='30px'></Input>
                <hr></hr>
                <Input placeholder='가격 (선택사항)' size='30px'></Input>
                <hr></hr>
                <Input placeholder='게더동에 올릴 게시글 내용을 작성해 주세요.(가품 및 판매금지품목은 게시가 제한될 수 있어요.)' size='30px'></Input>
            </Grid>

        </React.Fragment>
    )
}
