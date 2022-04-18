import React, { useState } from "react";
import { CardGrid, Image } from "../elements";
import { BiX } from "react-icons/bi";
import styled from "styled-components";
import { HiUpload } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { imgActions } from "../redux/modules/image";

const Upload = () => {
  const dispatch = useDispatch();
  const [imgPreview, setImgPreview] = useState([]);
  const [postFiles, setPostFiles] = useState([]);

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
    setImgPreview(imgPreview.filter((b, idx) => idx !== id));
  };

  // return (
  //   <>
  //     <div>
  //       <label htmlFor="files" onChange={uploadFile}>
  //         <input type="file" id="files" multiple="multiple" />
  //       </label>
  //       {imgPreview.map((image, id) => {
  //         return (
  //           <div key={id}>
  //             <but
  //               type="button"
  //               onClick={() => {
  //                 handleDeleteImage(id);
  //               }}
  //             >
  //               X
  //             </but>

  //             <Image src={`${image}`} alt={`${image}-${id}`} />
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </>
  // );
  // };

  // CSS준 버전
  return (
    <>
      <CardGrid is_flex width="auto">
        <Labels htmlFor="files" onChange={uploadFile}>
          <HiUpload />
          <Inputs type="file" id="files" multiple="multiple" />
        </Labels>
        {imgPreview.map((image, id) => {
          return (
            <CardGrid key={id} margin="0 50px 50px 0">
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

export default Upload;

const Labels = styled.label`
  display: block;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  width: 50px;
  height: 50px;
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
  background-size: cover;
  position: relative;
`;
