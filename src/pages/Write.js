import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Image, Input, Text } from "../elements";
import { history } from "../redux/configStore";
import Upload from "../shared/Upload";
import { actionCreators as postActions } from "../redux/modules/Post";

export default function Write(props) {
  const dispatch = useDispatch();

  const imageList = useSelector((state) => state.Image.files);
  const [title, setTitle] = useState();
  const [categoryid, setCategory] = useState();
  const [price, setPrice] = useState();
  const [content, setContent] = useState();

  const username = useSelector((state) => state.User.user);

  const Upload_Post = () => {
    // history.push("/main");
    dispatch(
      postActions.addPostDB(
        title,
        imageList,
        categoryid,
        price,
        content,
        username
      )
    );
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
            style={{
              width: "100%",
              fontSize: "20px",
              textAlign: "center",
              backgroundColor: "gray",
              color: "white",
              height: "50px",
            }}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="">카테고리를 골라주세요!</option>
            <option value="1">디지털기기</option>
            <option value="2">의류</option>
            <option value="3">생활가전</option>
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
            width="100%"
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
