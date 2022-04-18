import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Image, Input, Text } from "../elements";
import { history } from "../redux/configStore";
import Permit from "../shared/Permit";
import Upload from "../shared/Upload";
import { actionCreators as postActions } from "../redux/modules/Post";

export default function Write(props) {
  const dispatch = useDispatch();
  const imageList = useSelector((state) => state.image.files);
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [content, setContent] = useState();

  Permit();

  const Upload_Post = () => {
    history.push("/main");
    dispatch(postActions.addPostDB(title, imageList, category, price, content));
  };

  return (
    <React.Fragment>
      <Grid flex_space>
        <div style={{ display: "flex" }}>
          <Button
            width="100px"
            _onClick={() => {
              history.goBack();
            }}
          >
            back
          </Button>
          <Grid flex_col margin="5px 0 0 10px">
            <Text size="20px">중고거래 글쓰기</Text>
          </Grid>
        </div>
        <Button width="100px" _onClick={Upload_Post}>
          완료
        </Button>
      </Grid>
      <hr></hr>
      <Grid flex="1">
        <Upload />
      </Grid>

      <hr></hr>

      <Grid>
        <Grid padding="16px">
          <Input
            bg="grey"
            color="white"
            placeholder="글 제목"
            size="30px"
            value={title}
            _onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></Input>
        </Grid>
        <hr></hr>
        <Grid padding="16px">
          <select
            style={{ width: "30%", fontSize: "2.5vw", textAlign: "center" }}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value=""></option>
            <option value="디지털기기">디지털기기</option>
            <option value="의류">의류</option>
            <option value="생활가전">생활가전</option>
          </select>
        </Grid>
        <hr></hr>
        <Grid padding="16px">
          <Input
            bg="grey"
            color="white"
            placeholder="가격 (선택사항)"
            size="30px"
            value={price}
            _onChange={(e) => {
              setPrice(e.target.value);
            }}
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
            value={content}
            _onChange={(e) => {
              setContent(e.target.value);
            }}
          ></Input>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
