import React, { useEffect, useState } from "react";
import { CardGrid, Image } from "../elements";
import { BiX } from "react-icons/bi";
import styled from "styled-components";
import { HiUpload } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { imgActions } from "../redux/modules/image";

const Upload = (image) => {
  const eddit = image.image;
  const dispatch = useDispatch();
  const [imgPreview, setImgPreview] = useState([]);

  const uploadFile = (e) => {
    const imageList = e.target.files;
    let imageUrlList = [...imgPreview];
    // 파일들을 URL로 만듬
    for (let i = 0; i < imageList.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageList[i]);
      imageUrlList.push(currentImageUrl);
    }

    // 10개로 갯수 정함
    if (imageUrlList.length > 10) {
      imageUrlList = imageUrlList.slice(0, 10);
    }
    setImgPreview(imageUrlList);

    let imgList = [];

    // 파일들을 꺼내 배열안에 넣어줌
    for (const key in imageList) {
      if (Object.hasOwnProperty.call(imageList, key)) {
        imgList.push(imageList[key]);
      }
    }

    dispatch(imgActions.setPre(imgList));
  };

  useEffect(() => {
    let editPree = [];
    // 서버에서 받은 URL을 PreView에 넣어줌
    for (let i = 0; i < eddit.length; i++) {
      editPree.push(eddit[i]);
    }
    setImgPreview(editPree);
    // 리덕스에 files 인덱스를 맞추기 위해 URL도 같이 넣우줌
    dispatch(imgActions.setPre(editPree));
  }, [eddit]);

  const handleDeleteImage = (x, id) => {
    // 서버에서 준 URL 버킷 이름을 기준으로 찾아
    if (x.indexOf("hyemco-butket") !== -1) {
      dispatch(imgActions.editUrl(x));
      // URL을 따로 저장
      dispatch(imgActions.deletePre(id));
      // 리덕스 files에 있는 URL 삭제 (배열을 맞추기 위함)
    } else {
      // 리덕스에 files 삭제
      dispatch(imgActions.deletePre(id));
    }
    // 프리뷰 삭제
    setImgPreview(imgPreview.filter((b, idx) => idx !== id));
  };

  return (
    <>
      <CardGrid is_flex width="auto">
        <Labels htmlFor="files" onChange={uploadFile}>
          <HiUpload />
          <Inputs type="file" id="files" multiple="multiple" />
        </Labels>
        {imgPreview.map((image, id) => {
          return (
            <CardGrid key={id} margin="0px 25px 25px 0">
              <BiX
                type="button"
                onClick={() => {
                  handleDeleteImage(image, id);
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

export default Upload;

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
