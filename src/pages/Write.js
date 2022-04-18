import React from "react";
import { Button, Grid, Image, Input, Text } from "../elements/index";

export default function Write(props) {
  return (
    <React.Fragment>
      <Grid flex_space>
        <div style={{ display: "flex" }}>
          <Button width="100px">back</Button>
          <Grid flex_col margin="5px 0 0 10px">
            <Text size="20px">중고거래 글쓰기</Text>
          </Grid>
        </div>
        <Button width="100px">완료</Button>
      </Grid>
      <hr></hr>
      <Grid flex_space width="160px" height="20vh">
        <Image></Image>
      </Grid>

      <hr></hr>

      <Grid>
        <Grid padding="16px">
          <Input
            bg="grey"
            color="white"
            placeholder="글 제목"
            size="30px"
          ></Input>
        </Grid>
        <hr></hr>
        <Grid padding="16px">
          <Input
            bg="grey"
            color="white"
            placeholder="카테고리 선택"
            size="30px"
          ></Input>
        </Grid>
        <hr></hr>
        <Grid padding="16px">
          <Input
            bg="grey"
            color="white"
            placeholder="가격 (선택사항)"
            size="30px"
          ></Input>
        </Grid>
        <hr></hr>
        <Grid padding="16px">
          <Input
            multiLine
            bg="grey"
            color="white"
            placeholder="게더동에 올릴 게시글 내용을 작성해 주세요.(가품 및 판매금지품목은 게시가 제한될 수 있어요.)"
            size="30px"
          ></Input>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
