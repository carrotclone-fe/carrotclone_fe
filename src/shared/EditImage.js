import React, { useEffect, useState } from "react";
import { CardGrid, Image } from "../elements";
import { BiX } from "react-icons/bi";
import styled from "styled-components";
import { HiUpload } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { imgActions } from "../redux/modules/image";

const EditUpload = (props) => {
  let EditImage = props.image;
  const dispatch = useDispatch();
  const [imgPreview, setImgPreview] = useState([]);

  const uploadFile = (e) => {
    const imageList = e.target.files;
    let imageUrlList = [...imgPreview];

    for (let i = 0; i < imageList.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageList[i]);
      imageUrlList.push(currentImageUrl);
    }
    if (imageUrlList.length > 10) {
      imageUrlList = imageUrlList.slice(0, 10);
    }
    setImgPreview(imageUrlList);

    let imgList = [];

    for (const key in imageList) {
      if (Object.hasOwnProperty.call(imageList, key)) {
        imgList.push(imageList[key]);
      }
    }
    dispatch(imgActions.setPre(imgList));
  };

  const handleDeleteImage = (id) => {
    dispatch(imgActions.deletePre(id));
    setImgPreview(imgPreview.filter((b, idx) => idx !== id));
  };

  return (
    <>
      <CardGrid is_flex width="auto" margin='20px 0 0 30px'>
        {EditImage?.map((a, id) => {
          return (
            <CardGrid key={id} margin="0px 25px 25px 0">
              {/* <BiX
                type="button"
                onClick={() => {
                  handleDeleteImage(id);
                }}
              /> */}
              <ImageList src={`${a}`} alt={`${a}-${id}`} />
            </CardGrid>
          );
        })}
        {imgPreview.map((image, id) => {
          return (
            <CardGrid key={id} margin="0px 25px 25px 0">
              <BiX
                type="button"
                onClick={() => {
                  handleDeleteImage(id);
                }}
              />
              <ImageList src={`${image}`} alt={`${image}-${id}`} />
            </CardGrid>
          );
        })}
      </CardGrid>
    </>
  );
};

export default EditUpload;

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
