import React from "react";
import styled from "styled-components";
import { CardGrid, Grid, TextLabel } from "../elements";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { IoEllipsisVertical } from "react-icons/io5";
import { CgMoreVerticalAlt } from "react-icons/cg";
import "../shared/App.css";
import ReactModal from "react-modal";
import { history } from "../redux/configStore";
import { getCookie } from "../shared/Cookie";
import { useDispatch } from "react-redux";
import { actionsCreators as EtcActions } from "../redux/modules/etc_mod";
import { actionCreators as PostActions } from "../redux/modules/Post";

const MainCard = (props) => {
  const dispatch = useDispatch();
  const { page } = props;

  const [ModalState, setModalState] = React.useState(false);
  const [likeState, setLikeState] = React.useState(false);

  const postId = props.postid;

  const editPost = () => {
    history.push(`/write/${props.postid}`);
  };
  const statEdit = (e) => {
    dispatch(EtcActions.status_DB(props.postid, e.target.value));
  };
  const deletePost = () => {
    dispatch(PostActions.deletePostDB(postId));
    setModalState(false);
  };

  return (
    <React.Fragment>
      <CardGrid
        B_bottom="1px solid rgba(0,0,0,0.07)"
        padding="15px"
        gap="15px"
        is_flex
        align_items="flex-start"
        position="relative"
      >
        <CardGrid
          width="20%"
          _onClick={() => {
            history.push(`/detail/${props.postid}`);
          }}
          hover
        >
          <AspectInner src={props.image} />
        </CardGrid>
        <CardGrid
          is_flex
          flex_direction="column"
          align_items="flex-start"
          gap="5px"
          width="60%"
          _onClick={() => {
            history.push(`/detail/${props.postid}`);
          }}
        >
          <TextLabel F_size="17px" F_weight="bold">
            {props.title}
          </TextLabel>
          <TextLabel F_color="#4D5159">항해동 {props.createdAt}</TextLabel>
          <CardGrid is_flex gap="10px">
            {props.status && (
              <CardGrid
                width="auto"
                BG_c="rgba(0,0,0,0.6)"
                padding="1px 10px 3px 10px"
                B_radius="3px"
              >
                <TextLabel F_weight="bold" F_color="white" F_size="12px">
                  {props.status}
                </TextLabel>
              </CardGrid>
            )}
            <TextLabel F_weight="bold">{props.price}원</TextLabel>
          </CardGrid>
        </CardGrid>
        <CardGrid
          position="absolute"
          right="10px"
          bottom="10px"
          is_flex
          gap="5px"
        >
          <IoHeartOutline />
          <TextLabel>{props.loveCnt}</TextLabel>
        </CardGrid>

        <CardGrid position="absolute" top="15px" right="10px">
          {page === "like" ? (
            <CardGrid
              font_size="23px"
              color={likeState ? "#ff7e36" : "#4D5159"}
            >
              {likeState ? <IoHeart /> : <IoHeartOutline />}
            </CardGrid>
          ) : (
            <CardGrid
              _onClick={() => {
                setModalState(true);
              }}
              hover
            >
              {props.username === getCookie() ? <IoEllipsisVertical /> : null}
            </CardGrid>
          )}
        </CardGrid>
      </CardGrid>

      {/* 수정 모달 & 좋아요 기능 */}
      <ReactModal
        state={ModalState}
        isOpen={ModalState}
        ariaHideApp={false}
        onRequestClose={() => setModalState(false)}
        closeTimeoutMS={200}
        style={{
          overlay: {
            zIndex: 3,
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          content: {
            borderRadius: 0,
            top: "calc(100% - 200px)",
            height: "200px",
            width: "100%",
            left: 0,
            padding: 0,

            transition: "0.3s",
          },
        }}
      >
        <CardGrid
          is_flex
          flex_direction="column"
          justify_content="space-around"
          align_items="flex-start"
          padding="20px"
          height="100%"
          font_size="16px"
          font_weight="550"
        >
          <select
            onChange={(e) => {
              statEdit(e);
            }}
          >
            <option value="">거래 상태 변경</option>
            <option value="판매중">판매 중</option>
            <option value="예약중">예약 중</option>
            <option value="거래완료">거래완료</option>
          </select>

          <CardGrid _onClick={editPost} hover>게시글 수정</CardGrid>
          <CardGrid _onClick={deletePost} hover>삭제</CardGrid>
        </CardGrid>
      </ReactModal>
    </React.Fragment>
  );
};

const AspectInner = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  border-radius: 10px;
`;

export default MainCard;
