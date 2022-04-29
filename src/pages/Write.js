import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Image, Input, Text } from "../elements";
import { history } from "../redux/configStore";
import Upload from "../shared/Upload";
import { actionCreators as postActions } from "../redux/modules/Post";
import { IoMdArrowRoundBack, IoMdHome } from "react-icons/io";
import { useParams } from "react-router-dom";
import { actionCreators as ImageActions } from "../redux/modules/Post";
import EditUpload from "../shared/EditImage";
import { imgActions } from "../redux/modules/image";
import TestList from "../components/testList";

export default function Write(props) {
  const dispatch = useDispatch();
  const detailList = useSelector((state) => state.Post.detailList);
  // 파일 이미지를 가져옴
  const Files = useSelector((state) => state.Image.files);
  // 파일만 넣을 빈 배열
  let newFiles = [];
  // URL을 분리할 배열
  let reFile = [];

  for (let i = 0; i < Files.length; i++) {
    // 조건을 걸어 파일안에 name이 있으면 파일을 넣음
    if (Files[i].name) {
      newFiles.push(Files[i]);
    } else {
      // URL을 넣음
      reFile.push(Files[i]);
    }
  }
  console.log(newFiles);
  console.log(reFile);

  const param = useParams();

  useEffect(() => {
    if (param.postid) dispatch(ImageActions.getDetailDB(param.postid));
    dispatch(imgActions.test());
  }, []);

  const imageList = useSelector((state) => state.Image.preView);
  const [title, setTitle] = useState();
  const [categoryid, setCategory] = useState();
  const [price, setPrice] = useState();
  const [content, setContent] = useState();

  const username = useSelector((state) => state.User.user);

  const postId = param.postid;

  const Upload_Post = () => {
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
    dispatch(imgActions.initPre());
  };

  const category_name = (cateName) => {
    if (cateName === "생활가전") return 1;
    if (cateName === "여성의류") return 2;
    if (cateName === "남성패션/잡화") return 3;
  };
  const EditPost = () => {
    dispatch(
      postActions.editPostDB(
        title,
        imageList,
        categoryid,
        price,
        content,
        postId
      )
    );
  };

  return (
    <React.Fragment>
      {param.postid ? (
        <>
          <Grid flex_space>
            <div style={{ display: "flex" }}>
              <Button
                fs="20px"
                width="5%"
                margin="0 15px 0 10px"
                _onClick={() => history.push("/main")}
                hoverbg="null"
                bg="white"
              >
                <IoMdArrowRoundBack />
              </Button>
              <Grid flex_col margin="11px 0 0 10px">
                <Text size="20px">중고거래 수정하기</Text>
              </Grid>
            </div>
            <Button width="100px" _onClick={EditPost}>
              수정
            </Button>
          </Grid>
          <hr></hr>
          <Grid flex="1">
            <EditUpload image={detailList.imageList} />
          </Grid>
          <hr></hr>
          <Grid>
            <Grid padding="16px" width="98%" margin="auto">
              <Input
                bg="grey"
                color="white"
                placeholder="글 제목"
                size="30px"
                value={title}
                defaultValue={detailList.title}
                _onChange={(e) => {
                  setTitle(e.target.value);
                }}
              ></Input>
            </Grid>
            <hr></hr>
            <Grid padding="16px" width="98%" margin="auto">
              <select
                style={{
                  width: "100%",
                  fontSize: "20px",
                  textAlign: "center",
                  backgroundColor: "gray",
                  color: "white",
                  height: "50px",
                }}
                defaultValue={category_name(detailList.categoryName)}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option value="">카테고리를 골라주세요!</option>
                <option value="1">생활가전</option>
                <option value="2">여성의류</option>
                <option value="3">남성패션/잡화</option>
              </select>
            </Grid>
            <hr></hr>
            <Grid padding="16px" width="98%" margin="auto">
              <Input
                bg="grey"
                color="white"
                placeholder="가격 (선택사항)"
                size="30px"
                value={price}
                defaultValue={detailList.price}
                width="100%"
                _onChange={(e) => {
                  setPrice(e.target.value);
                }}
              ></Input>
            </Grid>
            <hr></hr>
            <Grid padding="16px" width="98%" margin="auto">
              <Input
                multiLine
                bg="grey"
                color="white"
                placeholder="게더동에 올릴 게시글 내용을 작성해 주세요.(가품 및 판매금지품목은 게시가 제한될 수 있어요.)"
                size="30px"
                value={content}
                defaultValue={detailList.content}
                _onChange={(e) => {
                  setContent(e.target.value);
                }}
              ></Input>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Grid flex_space>
            <div style={{ display: "flex" }}>
              <Button
                fs="20px"
                width="5%"
                margin="0 15px 0 10px"
                _onClick={() => history.push("/main")}
                hoverbg="null"
                bg="white"
              >
                <IoMdArrowRoundBack />
              </Button>
              <Grid flex_col margin="11px 0 0 10px">
                <Text size="20px">중고거래 글쓰기</Text>
              </Grid>
            </div>
            <Button width="100px" _onClick={Upload_Post}>
              완료
            </Button>
          </Grid>
          <hr></hr>
          <Grid flex="1">
            <Upload image={imageList} />
          </Grid>

          <hr></hr>

          <Grid>
            <Grid padding="16px" width="98%" margin="auto">
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
            <Grid padding="16px" width="98%" margin="auto">
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
            <Grid padding="16px" width="98%" margin="auto">
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
            <Grid padding="16px" width="98%" margin="auto">
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
        </>
      )}
    </React.Fragment>
  );
}
