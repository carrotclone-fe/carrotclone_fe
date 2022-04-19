import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Grid, Image, Text } from "../elements/index";
import { IoHeartOutline, IoHeart } from "react-icons/io5";

import { history } from "../redux/configStore";

import { actionsCreators as EtcActions } from "../redux/modules/etc_mod";

export default function Detail(props) {
    const param = useParams()
    const dispatch = useDispatch()
    const username = useSelector((state)=>state.User.user)
    const [likeState, setLikeState] = useState()

    const statusFix = (e) => {
        if(!e.target.value)
            return

        dispatch(EtcActions.status_DB(parseInt(param.postid), e.target.value))
    }

    const likeToggle = (e) => {
        dispatch(EtcActions.like_DB(param.postid, username))
    }

  return (
    <React.Fragment>
      <Grid>
        <Grid flex="1">
          <div style={{ display: "flex", width: "60%" }}>
            <Button
              fs="20px"
              width="20%"
              margin="0 10px 0 0"
              _onClick={() => history.goBack()}
            >
              back
            </Button>
            <Button
              fs="20px"
              width="20%"
              margin="0 10px 0 0"
              _onClick={() => history.push("/")}
            >
              Home
            </Button>
          </div>
          <div style={{ right: "0px", width: "60%", textAlign: "right" }}>
            <Button fs="2vw" width="10%">
              ...
            </Button>
          </div>
        </Grid>
        <Grid padding="0 20px">
          <Grid width="15%" min_width="150px" margin="auto">
            <Image></Image>
          </Grid>
          <Grid flex_space width="60%" margin="auto" bg="grey" padding="10px">
            <Grid flex_space width="100%">
              <Grid width="80%">
                <Image
                  src={
                    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHBg8SBw4PEhATDg0PFRAPEA8ODQ0RFREWFhURExYYKCggGBslHRUfITEhJSkrLi4uFx8zODMtNyg5OisBCgoKDg0OFw8QGjIlHSItNy0tKy4tKzctLy0tKzgtLS0tLSstLi0rNy0tLC0tKy0rOC0tKy03LS0rLTctKy0rN//AABEIAOAA4QMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAABAUCAwYB/8QANhABAAECAgYIBAUFAQAAAAAAAAECAwQRBSExUWFxEhMiMkGRocEzcoGxNFJiotEUQoLh8SP/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAwIBBAX/xAAdEQEBAQEAAgMBAAAAAAAAAAAAAQIRAzESIUET/9oADAMBAAIRAxEAPwDrAH0XzQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe00zVPZiZ5a26nB3KtlE/XKHOu8aBInBXI/s8piWmuiaJ7cTHOMjsOViA64AAAAAAAAAAAAAAAAAAAAAAJ+F0f0ozv6v0+P1Z6OwuURXcjX4Ru4rBLW/yK5x+1jbtxbjKiIjkyBNQeVUxVGVURMcXoCBidHRMZ2NU/l8J5KyqOjOVW10SHj8L1tHSojtR+6FM7/KnrH7FSAqkAAAAAAAAAAAAAAAAAANuEtddfiPDbPKGpYaIo7VU8oZ1eRrM7VlGqNQCC4AAAAACm0hZ6rETlsnXHujLTS1Gdqmd1WXnCrXzexDU5QBpkAAAAAAAAAAAAAAAAWeiPhVfNH2VifomvK5VG+Iny/wCs79N49rMBBYAAAAABE0p+F/ypVCz0tX2KaeOfkrFsekd+wBtgAAAAAAAAAAAAAAAAZ2LnU3YqjwnzhgDroaKorpiadkxm9VOAxfUz0bnd3/l/0tonONSGpxfN7ABl0AAJnKNYrdIYzOJotTzn2h2TrlvEXGXuvvzMbNkcmkF4hQB1wAAAAAAAAAAAAAAAAAASMNjKrGqNdO6fZHHLOuy8XNrHUXNs5Tun+UiKoq2TDniJy2MXxtzyOimctrRdxdFrbVE8I1ypJnPaH8y+RLxOOqvRlR2afWUQG5OMW9AHXAAAAAAAAAAAAAAAAAAAZ2bNV6rK3H8Qs8Po+m3rudqf2s3UjUzarLdmq7P/AJ0zP2Srejaqu/MR6ytYjKNQnd1SYiDToymO9VVPLKGcaOo/V5pY58q18YiTo6jj5sKtGUz3aqo55SnB8qfGKq5oyqO5MT6Si3bNVr4lMx9l+TGca3Zus3Ec6Le/o+m58Pszw2eSsv2KrFWVyPr4SpNSp3NjWA0yAAAAAAAAAAAAAAJGDwk4ic51U79/CHmDw/8AUXOEbZ9l1RTFFMRTGUQxrXPpTOe/by3bi1RlbjKGQIqgAAAAAAADG5RFynKuM4ZAKfGYObE5066fWOaK6GqOlTlVsU2Nw39PX2e7OzhwVzrv1UtZ59xHAUTAAAAAAAAAACmOlVEU7Z1Cbou10rs1TsjZzly3kdk7eLDDWYsWoiPrO+W0HnegAAAAAAAAAAAAYX7UXrUxV4+k72YDnrlE265irbE5PFhpWzlMVRyn2V70S9iFnKAOsgAAAAAAAC60fb6GFp46/NS7XQ0R0aIiPCIhPyVTxx6AkqAAAAAAAAAAAAAA1Yu31uHqjhn9YULo3P3aehdqjdVMeqvjqfkjEBRIAAAAAAABlajO7T80fd0Cgs/Gp+an7r9LyK+MATUAAAAAAAAAAAAAAFHjIyxVfzLxR438XXz9lPH7Y8nppAVRAAAAf//Z"
                  }
                ></Image>
              </Grid>
              <Grid margin="0 0 0 20%">
                <Text size="2vw">아이디</Text>
                <Text size="2vw">항해동</Text>
              </Grid>
            </Grid>
            <Grid flex_col margin="0 0 0 20%">
              <Text size="2vw">36.5</Text>
              <Grid width="20%">
                <Image></Image>
              </Grid>
            </Grid>
            <Grid width="20%">
              <Image
                src={
                  "https://us.123rf.com/450wm/gmast3r/gmast3r1706/gmast3r170601559/81128972-%EB%85%B8%EB%9E%80%EC%83%89-%EC%8A%A4%EB%A7%88%EC%9D%BC-%EB%A7%8C%ED%99%94-%EC%96%BC%EA%B5%B4-%EC%88%98%EC%A4%8D%EC%9D%80-%EB%8B%AB%ED%9E%8C-%EB%90%9C-%EB%88%88-%EC%9D%B4%EB%AA%A8%ED%8B%B0-%EC%82%AC%EB%9E%8C%EC%9D%B4-%EA%B0%90%EC%A0%95-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%94%8C%EB%9E%AB-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98.jpg?ver=6"
                }
              ></Image>
            </Grid>
          </Grid>
        </Grid>
        <hr></hr>
        <Grid width="70%" margin="auto">
          <Grid>
            <Grid flex="1">
              <Grid margin="0 0 3% 10%">
                <select
                  style={{
                    width: "30%",
                    fontSize: "2.5vw",
                    textAlign: "center",
                  }}
                  onChange={statusFix}
                >
                  <option value=""></option>
                  <option value='판매중'>판매 중</option>
                  <option value='예약중'>예약 중</option>
                  <option value='거래완료'>거래완료</option>
                </select>
              </Grid>
            </Grid>
            <Grid>
              <Grid>
                <Grid flex_space width="80%" margin="auto">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "40%",
                      textAlign: "left",
                    }}
                  >
                    <Text size="2vw">제목</Text>
                    <Text size="2vw">카테고리</Text>
                  </div>
                </Grid>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    width: "60%",
                    margin: "0 10% 5% auto",
                  }}
                >
                  <Text size="2vw">
                    게시글 내용 asdofj oaj foijsfoja asjdfo jaowej f;oaiwej
                    f;oiawj efoiawj e;foiajw eflaiwje fliuj
                  </Text>
                </div>
              </Grid>

              <Grid flex_space width="90%" margin="auto">
                <Grid width="10%">
                  <Button bg="white" hoverbg="white" _onClick={likeToggle}>
                    {likeState ? <IoHeart /> : <IoHeartOutline />}
                  </Button>
                </Grid>
                <Grid width="20%">
                  <Text size="2vw">4,234,553</Text>
                  <Text underLine size="2vw">
                    가격제안하기
                  </Text>
                </Grid>
                <div style={{ width: "20%" }}>
                  <Button width="100%" fs="2vw">
                    채팅하기
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
