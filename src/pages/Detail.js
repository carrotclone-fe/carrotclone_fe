import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Button,
  Grid,
  Image,
  Text,
  Dgrid,
  Buttons,
  CardGrid,
} from "../elements/index";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import styled from "styled-components";
import { BiArrowBack, BiHomeAlt, BiDotsVerticalRounded } from "react-icons/bi";
import { BsShare } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { IoMdArrowRoundBack, IoMdHome } from "react-icons/io";
import { IoEllipsisVertical } from "react-icons/io5";
import { history } from "../redux/configStore";
import SlideImage from "../components/SlideImage";
import ReactModal from "react-modal";

import { actionsCreators as EtcActions } from "../redux/modules/etc_mod";
import { actionCreators as poseActions } from "../redux/modules/Post";

export default function Detail(props) {
  const param = useParams();
  const dispatch = useDispatch();
  const username = useSelector((state) => state.User.user);
  const [ModalState, setModalState] = React.useState(false);
  const [likeState, setLikeState] = useState();
  const detailList = useSelector((state) => state.Post.detailList);

  const statusFix = (e) => {
    if (!e.target.value) return;

    dispatch(EtcActions.status_DB(parseInt(param.postid), e.target.value));
  };

  const likeToggle = (e) => {
    dispatch(EtcActions.like_DB(param.postid, username));
  };

  useEffect(() => {
    dispatch(poseActions.getDetailDB(param.postid));
  }, []);

  return (
    <DetailWrap>
      <Grid flex="1">
        <div style={{ display: "flex", width: "95%" }}>
          <Button
            fs="20px"
            width="5%"
            margin="0 15px 0 10px"
            _onClick={() => history.goBack()}
            hoverbg="null"
            bg="white"
          >
            <IoMdArrowRoundBack />
          </Button>
          <Button
            fs="20px"
            width="5%"
            _onClick={() => history.push("/main")}
            hoverbg="null"
            bg="white"
          >
            <IoMdHome />
          </Button>
        </div>
        <CardGrid
          _onClick={() => {
            setModalState(true);
          }}
          margin="10px"
        >
          <IoEllipsisVertical />
        </CardGrid>
      </Grid>

      {/* {is_login === detail_data.username && ( 
              <button
                  type={"button"}
                  className={"more-btn"}
                  onClick={handleOpenOtpModal}
              >
                <BiDotsVerticalRounded className={"more-icon"}/>
                {opt_modal_open && (
                    <div className={`opt-modal`}>
                      <div
                          type={"button"}
                          className={"opt-btn"}
                          onClick={() => handleClickModifyBtn(detail_data.postId)}
                      >
                        수정
                      </div>
                      <div
                          type={"button"}
                          className={"opt-btn"}
                          onClick={() => handleClickRemoveBtn(detail_data.postId)}
                      >
                        삭제
                      </div>
                    </div>
                )}
              </button>
          )} */}
      {/* </div>
        </Dgrid>
      </nav> */}

      <div className={"detail-cont"}>
        <Dgrid is_container>
          <div className={"prd-img"}>
            <div className={"ratio-box"}>
              <SlideImage />
            </div>
          </div>
        </Dgrid>

        <Dgrid is_container padding={"0 16px"}>
          <div className={"user-box"}>
            <div className={"user-profile"}>
              <img
                className={"user-img"}
                src={
                  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHBg8SBw4PEhATDg0PFRAPEA8ODQ0RFREWFhURExYYKCggGBslHRUfITEhJSkrLi4uFx8zODMtNyg5OisBCgoKDg0OFw8QGjIlHSItNy0tKy4tKzctLy0tKzgtLS0tLSstLi0rNy0tLC0tKy0rOC0tKy03LS0rLTctKy0rN//AABEIAOAA4QMBIgACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAABAUCAwYB/8QANhABAAECAgYIBAUFAQAAAAAAAAECAwQRBSExUWFxEhMiMkGRocEzcoGxNFJiotEUQoLh8SP/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAwIBBAX/xAAdEQEBAQEAAgMBAAAAAAAAAAAAAQIRAzESIUET/9oADAMBAAIRAxEAPwDrAH0XzQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe00zVPZiZ5a26nB3KtlE/XKHOu8aBInBXI/s8piWmuiaJ7cTHOMjsOViA64AAAAAAAAAAAAAAAAAAAAAAJ+F0f0ozv6v0+P1Z6OwuURXcjX4Ru4rBLW/yK5x+1jbtxbjKiIjkyBNQeVUxVGVURMcXoCBidHRMZ2NU/l8J5KyqOjOVW10SHj8L1tHSojtR+6FM7/KnrH7FSAqkAAAAAAAAAAAAAAAAAANuEtddfiPDbPKGpYaIo7VU8oZ1eRrM7VlGqNQCC4AAAAACm0hZ6rETlsnXHujLTS1Gdqmd1WXnCrXzexDU5QBpkAAAAAAAAAAAAAAAAWeiPhVfNH2VifomvK5VG+Iny/wCs79N49rMBBYAAAAABE0p+F/ypVCz0tX2KaeOfkrFsekd+wBtgAAAAAAAAAAAAAAAAZ2LnU3YqjwnzhgDroaKorpiadkxm9VOAxfUz0bnd3/l/0tonONSGpxfN7ABl0AAJnKNYrdIYzOJotTzn2h2TrlvEXGXuvvzMbNkcmkF4hQB1wAAAAAAAAAAAAAAAAAASMNjKrGqNdO6fZHHLOuy8XNrHUXNs5Tun+UiKoq2TDniJy2MXxtzyOimctrRdxdFrbVE8I1ypJnPaH8y+RLxOOqvRlR2afWUQG5OMW9AHXAAAAAAAAAAAAAAAAAAAZ2bNV6rK3H8Qs8Po+m3rudqf2s3UjUzarLdmq7P/AJ0zP2Srejaqu/MR6ytYjKNQnd1SYiDToymO9VVPLKGcaOo/V5pY58q18YiTo6jj5sKtGUz3aqo55SnB8qfGKq5oyqO5MT6Si3bNVr4lMx9l+TGca3Zus3Ec6Le/o+m58Pszw2eSsv2KrFWVyPr4SpNSp3NjWA0yAAAAAAAAAAAAAAJGDwk4ic51U79/CHmDw/8AUXOEbZ9l1RTFFMRTGUQxrXPpTOe/by3bi1RlbjKGQIqgAAAAAAADG5RFynKuM4ZAKfGYObE5066fWOaK6GqOlTlVsU2Nw39PX2e7OzhwVzrv1UtZ59xHAUTAAAAAAAAAACmOlVEU7Z1Cbou10rs1TsjZzly3kdk7eLDDWYsWoiPrO+W0HnegAAAAAAAAAAAAYX7UXrUxV4+k72YDnrlE265irbE5PFhpWzlMVRyn2V70S9iFnKAOsgAAAAAAAC60fb6GFp46/NS7XQ0R0aIiPCIhPyVTxx6AkqAAAAAAAAAAAAAA1Yu31uHqjhn9YULo3P3aehdqjdVMeqvjqfkjEBRIAAAAAAABlajO7T80fd0Cgs/Gp+an7r9LyK+MATUAAAAAAAAAAAAAAFHjIyxVfzLxR438XXz9lPH7Y8nppAVRAAAAf//Z"
                }
                alt={""}
              />
              <div className={"user-info"}>
                <div className={"user-name"}>{detailList.username}</div>
                <div className={"user-area"}>항해동</div>
              </div>
            </div>

            <div className={"user-rating"}>
              <Grid flex_space>
                <span className={"rating-num"}>36.5 °C</span>
                <span className={"rating-icon"}></span>
              </Grid>

              <div className={"rating-guide"}>매너온도</div>
            </div>
          </div>
        </Dgrid>

        <Dgrid is_container padding={"16px"}>
          <div className={"cont-title"}>
            <h2 className={"subject"}>{detailList.title}</h2>
            <span className={"category"}>{detailList.categoryName}</span>
            <span className={"datetime"}>{detailList.createdAt}</span>
          </div>
          <div className={"cont-desc"}>{detailList.content}</div>
        </Dgrid>

        <Dgrid is_container padding={"16px"}>
          <div className={"veiws-count"}>관심 {detailList.loveCnt}</div>
          <button type={"button"} className={"singo-btn"}>
            이 게시글 신고하기
          </button>
        </Dgrid>
      </div>

      <div className={"detail-ctrl"}>
        <Dgrid
          is_container
          is_flex
          flex_justify={"space-between"}
          flex_align={"center"}
          _className={"ctrl-inner"}
          padding={"16px"}
        >
          <button
            type={"button"}
            className={"like-btn"}
            // onClick={() => handleClickLikeBtn(detail_data.postId)}
          >
            <AiFillHeart />
          </button>

          <div className={"price-opt"}>
            <strong className={"price"}>{detailList.price}원</strong>
            <button type={"button"} className={"nego-btn"}>
              가격 제안하기
            </button>
          </div>

          <Buttons version={"orange"} _className={"chat-btn"}>
            채팅으로 거래하기
          </Buttons>
        </Dgrid>
      </div>
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
          <CardGrid>판매상태 변경</CardGrid>
          <CardGrid>게시글 수정</CardGrid>
          <CardGrid>삭제</CardGrid>
        </CardGrid>
      </ReactModal>
    </DetailWrap>
  );
}

const DetailWrap = styled.section`
  padding-bottom: 100px;
  .detail-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    z-index: 9999;
    border-bottom: 1px solid hsl(0deg 0% 0% / 0%);
    background-color: hsl(0deg 0% 100% / 0%);
    color: hsl(0deg 0% 100%);
    &.off {
      border-bottom: 1px solid hsl(0deg 0% 0% / 4%) !important;
      background-color: #fff !important;
      color: var(--main-font-color) !important;
    }
  }
  .not-exist-post {
    padding-top: 56px;
    .guide-txt {
      text-align: center;
      padding: 80px 0;
    }
    .alt-title {
      font-size: 18px;
      margin-bottom: 10px;
    }
    .alt-list {
    }
  }
  .nav-btns {
    display: flex;
    justify-content: space-between;
    .devider {
      display: flex;
    }
    button {
      color: inherit;
      cursor: pointer;
      font-size: 20px;
      border: 0;
      background: none;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .back-btn {
      font-size: 22px;
    }
    .share-btn {
      font-size: 17px;
    }
    .more-btn {
      font-size: 26px;
      position: relative;
    }
  }
  .opt-modal {
    position: absolute;
    border-radius: 6px;
    top: 50%;
    right: 50%;
    background-color: #fff;
    border: 1px solid var(--border-color);
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
    display: block;
    .opt-btn {
      width: auto;
      height: auto;
      word-break: keep-all;
      padding: 10px 24px;
      font-size: 13px;
      color: var(--main-font-color);
      border-bottom: 1px solid var(--border-color);
      &:last-child {
        border-bottom: 0;
      }
      &:hover {
        background-color: #efefef;
      }
    }
  }
  .veiws-count {
    font-size: 11px;
    color: var(--sub-font-color);
    margin-bottom: 16px;
  }
  .singo-btn {
    cursor: pointer;
    border: 0;
    width: 100%;
    text-align: left;
    font-weight: bold;
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    background: none;
    padding: 16px 0;
  }
  .detail-ctrl {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    border-top: 1px solid var(--border-color);
    background-color: #fff;
    .like-btn {
      cursor: pointer;
      border: 0;
      background: none;
      width: 40px;
      height: 40px;
      font-size: 24px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      &.on {
        color: var(--point-color);
      }
      &::after {
        content: "";
        display: block;
        width: 1px;
        height: 80%;
        background-color: #ddd;
        position: absolute;
        right: -10px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .price-opt {
      display: flex;
      flex-direction: column;
      .price {
        font-weight: bold;
        margin-bottom: 2px;
      }
      .nego-btn {
        cursor: pointer;
        border: 0;
        background: none;
        font-weight: bold;
        text-decoration: underline;
        color: #ccc;
        &.on {
          color: var(--point-color);
        }
      }
    }
    .chat-btn {
      margin-left: auto;
    }
  }
  .detail-cont {
    .prd-img {
      position: relative;
      padding-bottom: 90%;
      overflow: hidden;
      width: 100%;
      max-width: 900px;
      .ratio-box {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
  .user-box {
    font-size: 13px;
    display: flex;
    padding: 16px 0;
    justify-content: space-between;
    border-bottom: 1px solid var(--border-color);
    .user-profile {
      display: flex;
      align-items: center;
      .user-img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 10px;
        object-fit: cover;
      }
      .user-info {
        .user-name {
          font-weight: bold;
          margin-bottom: 2px;
        }
        .user-area {
        }
      }
    }
    .user-rating {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      .rating-temp {
        display: flex;
        align-items: center;
        margin-bottom: 2px;
        &.face-1 {
          .rating-num {
            color: #1c466e;
          }
          .rating-icon {
            background-position: 0 -27px;
          }
        }
        &.face-2 {
          .rating-num {
            color: #577795;
          }
          .rating-icon {
            background-position: 0 -51px;
          }
        }
        &.face-3 {
          .rating-num {
            color: #286eb1;
          }
          .rating-icon {
            background-position: 0 -75px;
          }
        }
        &.face-4 {
          .rating-num {
            color: #3fa551;
          }
          .rating-icon {
            background-position: 0 -99px;
          }
        }
        &.face-5 {
          .rating-num {
            color: #e5a328;
          }
          .rating-icon {
            background-position: 0 -123px;
          }
        }
        &.face-6 {
          .rating-num {
            color: #e16716;
          }
          .rating-icon {
            width: 29px;
            height: 27px;
            background-position: 0 0;
          }
        }
      }
      .rating-num {
        font-size: 16px;
        font-weight: bold;
      }
      .rating-icon {
        margin-left: 5px;
        width: 24px;
        height: 24px;
        background-position: 0 -123px;
        background-size: 29px 147px;
        background-image: url("https://d1unjqcospf8gs.cloudfront.net/assets/home/articles/face-icon-set-0cffc52be32961b0bb4a308c272d8f526ddcdeda66dbde6eb32618eeb22b74e6.png");
      }
      .rating-guide {
        font-size: 11px;
        text-decoration: underline;
        color: var(--sub-font-color);
      }
    }
  }
  .cont-title {
    margin-bottom: 20px;
    .subject {
      font-weight: bold;
    }
    .category,
    .datetime {
      font-size: 11px;
      color: var(--sub-font-color);
    }
    .category {
      margin-right: 10px;
      text-decoration: underline;
    }
  }
  .cont-desc {
    font-size: 14px;
  }
`;
