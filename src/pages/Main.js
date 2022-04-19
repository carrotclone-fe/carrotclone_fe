import React from "react";
import styled from "styled-components";
import { Grid, Image, Text, CardGrid } from "../elements";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { HiOutlineSearch, HiOutlineBell } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import MainCard from "../components/MainCard";
import { BsPlusLg } from "react-icons/bs";
import Permit from "../shared/Permit";
import { deleteCookie } from "../shared/Cookie";
import { history } from "../redux/configStore";

const Main = () => {

  Permit()

  const logOut = () => {
    deleteCookie('token')
    history.replace('/')
  }

  return (
    <>
      <CardGrid height="70px">
        <MenuTop>
          <Grid is_container padding={"0 15px"}>
            <div className="nav-top-bx">
              <h2>
                항해동
                <MdOutlineKeyboardArrowDown className="arrow-down" />
              </h2>
              <Grid is_container _className="top-btns">
                <button>
                  <HiOutlineSearch />
                </button>
                <button>
                  <MdOutlineMenu />
                </button>

                <button onClick={logOut}>
                  <FiLogOut />
                </button>
              </Grid>
            </div>
          </Grid>
        </MenuTop>
        <hr />
      </CardGrid>
      <CardGrid>
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </CardGrid>
      <Btn>
        <BsPlusLg />
      </Btn>
    </>
  );
};

export default Main;

const MenuTop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  /* height: 40px; */
  border-bottom: 1px solid var(--border-color);
  background: #fff;

  .nav-top-bx {
    display: flex;
    align-items: center;

    h2 {
      width: 100%;
      font-size: 20px;
      cursor: pointer;
    }

    .arrow-down {
      vertical-align: middle;
    }
  }

  .top-btns {
    display: flex;
    justify-content: flex-end;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border: none;
      background: none;
      font-size: 24px;
      cursor: pointer;
    }
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
    }
  }
`;

const Btn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #ee8525;
  color: #fff;
  background-color: #ee8525;
  font-size: 30px;
  transition: ease-in-out 0.5s;
  cursor: pointer;
  &:hover {
    background-color: #ee8525;
    color: #fff;
    transform: rotateZ(180deg);
  }
`;
