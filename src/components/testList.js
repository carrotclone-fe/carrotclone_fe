import React, { useEffect, useState } from "react";
import { CardGrid, Image } from "../elements";
import { BiX } from "react-icons/bi";
import styled from "styled-components";
import { HiUpload } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { imgActions } from "../redux/modules/image";

const TestList = () => {
  const test = useSelector((state) => state.Image.files);
  const dispatch = useDispatch();
  const [imgPreview, setImgPreview] = useState([]);

  const handleDeleteImage = (id) => {
    dispatch(imgActions.deletePre(id));
    setImgPreview(imgPreview.filter((b, idx) => idx !== id));
  };

  return (
    <>
      <CardGrid is_flex width="auto">
        {test
          ? test.map((image, id) => {
              return (
                <CardGrid key={id} margin="0px 25px 25px 0">
                  <BiX
                    type="button"
                    onClick={() => {
                      handleDeleteImage(id);
                    }}
                  />

                  <ImageList src={`${image}`} />
                </CardGrid>
              );
            })
          : null}
      </CardGrid>
    </>
  );
};

export default TestList;

const Labels = styled.label`
  display: block;
  text-align: center;
  align-items: center;
  justify-content: center;
  line-height: 100px;
  font-size: 18px;
  width: 150px;
  height: 100px;
  margin: 0 25px 0 25px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 3px;
`;

const Inputs = styled.input`
  display: none;
`;

const ImageList = styled.div`
  width: 150px;
  height: 100px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 3px;
  background-image: url("${(props) => props.src}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;
