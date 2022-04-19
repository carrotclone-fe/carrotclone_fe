import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Grid, Input, Text, Image } from "../elements/index";
import { history } from "../redux/configStore";
import { actionsCreators as UserActions } from "../redux/modules/user";
import { actionsCreators as EtcActions } from "../redux/modules/etc_mod";
import regCheck from "../shared/regcheck";

export default function Signup(props) {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [validPw, setValidPw] = useState("");

  const dispatch = useDispatch();

  const signup = () => {
    console.log(userId, userPw, validPw);

    if (!regCheck(userId, "id")) return;
    if (!regCheck(userPw, "pw")) return;
    if (userPw !== validPw) return;

    dispatch(UserActions.Sign_upDB(userId, userPw, validPw));
  };

  return (
    <Grid flex_col margin="150px auto" width="50%">
      <Grid flex_space margin="0 0 50px 0">
        <Grid width="15%">
          <Image src={"https://www.daangn.com/logo.png"} />
        </Grid>
        <Text size="50px">회원가입</Text>
        <Grid width="15%">
          <Image src={"https://www.daangn.com/logo.png"} />
        </Grid>
      </Grid>

      <Grid flex_col margin="20px auto">
        <Grid margin="20px">
          <Input
            bg="#f60"
            color="white"
            placeholder="아이디"
            _onChange={(e) => setUserId(e.target.value)}
          />
        </Grid>
        {!regCheck(userId, "id") ? (
          <Grid>
            <Text color="red">아이디는 2~10자 사이입니다 !</Text>
          </Grid>
        ) : (
          ""
        )}
        <Grid margin="20px">
          <Input
            bg="#f60"
            color="white"
            type="password"
            placeholder="비밀번호"
            _onChange={(e) => setUserPw(e.target.value)}
          />
        </Grid>
        {!regCheck(userPw, "pw") ? (
          <Grid>
            <Text color="red">
              비밀번호는 6~20자 사이, 알파벳, 숫자 포함입니다 !
            </Text>
          </Grid>
        ) : (
          ""
        )}
        <Grid margin="20px">
          <Input
            bg="#f60"
            color="white"
            type="password"
            placeholder="비밀번호확인"
            _onChange={(e) => setValidPw(e.target.value)}
          />
        </Grid>
        {userPw !== validPw ? (
          <Grid>
            <Text color="red">비밀번호가 같지 않습니다 !</Text>
          </Grid>
        ) : (
          ""
        )}
        <Button fs="30px" bg="#0a0" margin="20px" _onClick={signup} disabled>
          회원가입
        </Button>
      </Grid>
    </Grid>
  );
}
