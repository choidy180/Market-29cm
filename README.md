<!-- BANNER -->
<p align="center">
  <img src="./public/29cm.jpg" alt="coin Banner" width="200px" />
</p>

<h1 align="center">☕ Market-29</h1>
<p align="center">
  <b>Next.js와 Tailwinds CSS를 이용한 29CM 클론코딩</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/ReactQuery-FF4154?style=flat-square&logo=ReactQuery&logoColor=white"/>
  <img src="https://img.shields.io/badge/ReactRouter-CA4245?style=flat-square&logo=ReactRouter&logoColor=white"/>
  <img src="https://img.shields.io/badge/ApexCharts-0F7BFF?style=flat-square&logo=apachespark&logoColor=white"/>
  <img src="https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=recoil&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=000"/>
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/>
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white"/>
</p>

---

##  기능
- 🌈 29CM 메인화면 및 전체 UI 반응형 구현
- 🔥 FireBase DB 이용한 회원가입 및 상품 등록 및 관리 기능 구현
- 🛒 그 외 서비스 기능 전체구현
---

##  기술 스택
<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
  <img src="https://img.shields.io/badge/ReactRouter-CA4245?style=flat-square&logo=ReactRouter&logoColor=white"/>
  <img src="https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=recoil&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"/>
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/>
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white"/>
</p>



##  Install
```bash
# 1) 레포지토리 복제
git clone https://github.com/choidy180/Market-29cm
cd Market-29cm

# 2) 의존성 설치
npm install

# 3) 개발 서버 실행
npm run dev
# 브라우저에서 http://localhost:3000, http://127.0.0.1:3000 열기
```

## 📡 Example Code (input component)
```bash

import { NextPage } from "next"
import Nav from "../../components/nav";
import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import { media } from "../../styles/theme";
import { dbService, storageService } from "../../firebase/firebaseConfig";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL, ref, uploadString } from "firebase/storage";


const Upload: NextPage = (props) => {
  const [imageLoad, setImageLoad] = useState();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [explain, setExplain] = useState("");
  const [uploadData, setUploadData] = useState();
  const testContent = getDocs(collection(dbService, "content"));
  const onChangeValue = (event) => {
    const {
      target: { name, value },
    } = event;
    if(name === "title"){
      setTitle(value);
    } else if (name === "price"){
      setPrice(value);
    } else if (name === "explane"){
      setExplain(value);
    }
  }
  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const reader = new FileReader();
    // // 완료되면 finidhedEvent를 받는다.
    reader.onloadend = (finishedEvent) => {
      setImageLoad(finishedEvent.currentTarget["result"]);
    }
    reader.readAsDataURL(files[0]);
  }
  const onSubmit =  async (event) => {
    event.preventDefault();
    const dataBase = collection(dbService, "Content");
    let UploadImageUrl = "";
    if(imageLoad != ""){
      // 파일 참조 경로 만들기
      const ImageRef = ref(storageService, `${props["userObj"]["uid"]}/${uuidv4()}}`);
      // storage 참조 경로로 파일 업로드 하기
      const uploadImage = await uploadString(ImageRef, imageLoad, "data_url");
      UploadImageUrl = await getDownloadURL(uploadImage.ref);
    }
    // 게시글 작성시 사진도 같이 firestore 생성
    await addDoc(dataBase, {
      email: props["userObj"]["email"],
      title: title,
      price: price,
      explain: explain,
      imageUrl: UploadImageUrl,
      uploadDate: Date.now(),
    });
    setTitle("");
    setPrice("");
    setExplain("");
    alert("등록완료 되었습니다.");
  }
  return(
    <>
      <Container>
        <Nav isLoggedIn={props}/>
        <Box onSubmit={onSubmit}>
          <ImageBox
            htmlfor="inputImage"
          >
            <Image 
              id="exam_img"
              alt="image"
              src={
                imageLoad ? imageLoad : "/images/main/8a0b876907e14030aad6eb00716a05b6_20220504165423.jpg"
              }
              layout="fill"
              objectFit="cover"
            />
            <ImgButton
              id="inputImage"
              type="file"
              accept="image/*"
              onChange={onFileChange}
            />
          </ImageBox>
          <ContentBox>
            <Title
              type="text"
              placeholder="이름을 입력하세요"
              name="title"
              value={title}
              onChange={onChangeValue}
            />
            <PriceBox>
              <Price
                type="number"
                placeholder="가격을 입력하세요"
                name="price"
                maxLength="14"
                value={price}
                onChange={onChangeValue}
              />
              <Own>원</Own>
            </PriceBox>
            <TextContent
              placeholder="추가설명을 입력하세요"
              name="explane"
              value={explain}
              onChange={onChangeValue}
            />
            <Button type="submit">물건 등록하기</Button>
          </ContentBox>
        </Box>
      </Container>
    </>
  )
};

const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: auto;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
const Box = styled.form`
  position: absolute;
  padding: 20px;
  width: auto;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  ${media.tablet}{
    flex-direction: column;
  }
  ${media.mobile}{
    padding: 0;
  }
`;
const ImageBox = styled.label`
  position: relative;
  width: 400px;
  height: 450px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${media.xltablet}{
    width: 300px;
    height: 337.5px;
  }
  ${media.tablet}{
    max-width: 362px;
    width: 362px;
    height: 300px;
  }
  ${media.mobile}{
    width: calc(100% - 30px);
  }
`;
const ImgButton = styled.input`
  display: none;
`
const ContentBox = styled.div`
  padding: 0px 0px 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  ${media.tablet}{
    margin-top: 12px;
    padding: 0;
    align-items: center;
  }
`;
const Title = styled.input`
  font-family: 'NEXON Lv1 Gothic OTF';
  padding: 11px 12px 11px 16px;
  min-width: calc(400px - 28px);
  outline: none;
  border: 1px solid ${props => props.theme.color.darkGray};
  font-size: 1.4rem;
  border-radius: 4px;
  margin: 0;
  transition: all .15s ease-in-out;
  :focus{
    border: 1px solid ${props => props.theme.color.green};
  }
  ${media.xltablet}{
    padding: 9px 10px 9px 13px;
    min-width: calc(360px - 23px);
    font-size: 1.25rem;
  }
  ${media.mobile}{
    width: calc(100% - 25px);
  }
`;
const PriceBox = styled.div`
  display: flex;
` 
const Price = styled.input`
  font-family: 'NEXON Lv1 Gothic OTF';
  padding: 11px 12px 11px 16px;
  min-width: calc(400px - 28px);
  position: relative;
  z-index: 999;
  outline: none;
  border: 1px solid ${props => props.theme.color.darkGray};
  font-size: 1.4rem;
  border-radius: 4px;
  margin: 0;
  margin-top: 12px;
  background-color: transparent;
  transition: all .15s ease-in-out;
  -webkit-appearance: none;
  :focus{
    border: 1px solid ${props => props.theme.color.green};
  }
  ${media.xltablet}{
    margin-top: 9px;
    padding: 9px 10px 9px 13px;
    min-width: calc(360px - 23px);
    font-size: 1.25rem;
  }
  ${media.mobile}{
    width: calc(100%);
  }
`;
const Own = styled.p`
  margin-top: 12px;
  padding: 13px 20px 12px 10px;
  min-width: calc(400px - 28px);
  position: absolute;
  font-family: 'NEXON Lv1 Gothic OTF';
  font-size: 1.4rem;
  text-align:right;
  transition: all .15s ease-in-out;
  :focus{
    border: 1px solid ${props => props.theme.color.green};
  }
  ${media.xltablet}{
    margin-top: 12px;
    padding: 9px 10px 9px 10px;
    min-width: calc(360px - 23px);
    font-size: 1.25rem;
  }
`;
const TextContent = styled.textarea`
  margin: 0;
  border-radius: 6px;
  padding: 11px 12px 11px 16px;
  min-width: calc(400px - 28px);
  margin-top: 20px;
  outline: none;
  border: 1px solid ${props => props.theme.color.darkGray};
  resize: none;
  min-height: 224px;
  font-family: 'NEXON Lv1 Gothic OTF';
  font-size: 1.4rem;
  :focus{
    border: 1px solid ${props => props.theme.color.green};
  }
  ${media.xltablet}{
    margin-top: 9px;
    padding: 9px 10px 9px 13px;
    min-width: calc(360px - 23px);
    min-height: 164px;
    font-size: 1.25rem;
  }
  ${media.mobile}{
    width: calc(100% - 25px);
    height: auto;
    min-height: 80px;
  }
`;
const Button = styled.button`
margin: 0;
  min-width: 400px;
  padding: 16px 30px;
  background-color: ${props => props.theme.color.darkGray};
  border-radius: 6px;
  color: white;
  margin-top: 14px;
  font-size: 1.4rem;
  transition: all .15s ease-in-out;
  :hover {
    background-color: ${props => props.theme.color.darkGray2};
  }
  ${media.xltablet}{
    margin-top: 12px;
    padding: 9px 10px 9px 10px;
    min-width: 362px;
    font-size: 1.5rem;
  }
  ${media.mobile}{
    font-size: 1.4rem;
  }
`
```

