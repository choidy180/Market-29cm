import { NextPage } from "next";
import Nav from "../../components/nav";
import styled from "styled-components";
import { media } from "../../styles/theme";
import Image from "next/image";
import { useEffect, useState } from "react";
import { dbService, storageService } from "../../firebase/firebaseConfig";
import { updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

const MyPageUpdate: NextPage = (props) => {
  const [email, setEmail] = useState(""); 
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [imageLoad, setImageLoad] = useState();
  const getMyInfo = async () => {
    await setEmail(props["userObj"] != null ? props["userObj"]["email"] : "");
    await setName(props["userObj"] != null ? props["userObj"]["displayName"] : "");
  };
  useEffect(() => {
    getMyInfo();
    setEmail(props["userObj"] != null ? props["userObj"]["email"] : "");
  },[]);
  const onChangeValue = (event) => {
    const {
      target: {name, value},
    } = event;
    if(name === "name"){
      setName(value);
    } else if(name==="phonNumber"){
      setPhoneNumber(value);
    }
  }
  const onFileChange = async (event) => {
    const {
      target: { files },
    } = event;
    const reader = new FileReader();
    let UploadImageUrl = "";
    // // 완료되면 finidhedEvent를 받는다.
    reader.onloadend = (finishedEvent) => {
      setImageLoad(finishedEvent.currentTarget["result"]);
    }
    reader.readAsDataURL(files[0]);
    // 파일 참조 경로 만들기
    const ImageRef = ref(storageService, `${props["userObj"]["uid"]}/${uuidv4()}}`);
    // storage 참조 경로로 파일 업로드 하기
    const uploadImage = await uploadString(ImageRef, imageLoad, "data_url");
    UploadImageUrl = await getDownloadURL(uploadImage.ref);
  }
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(props["userObj"]);
    // updateProfile(props["userObj"], {displayName: newDisplayName});
  }
  return (
    <Container>
      <Nav isLoggedIn={props}/>
        <Box onSubmit={onSubmit}>
          <Title>개인정보 수정</Title>
          <Img>
            <Image 
              src='/images/background/4ugq4vz121x44362cq87.png' 
              alt=''
              width={1000}
              height={1200}
            />
          </Img>
          <ImgButton htmlFor="picture">
            <UploadImageButton 
              id="picture" 
              type="file" 
              accept="image/*"
              onChange={onFileChange}
            />
            프로필 이미지 수정
          </ImgButton>
          <ContentBox>
            <HeadBox>
              <Head>아이디</Head>
              <Head>이름</Head>
              <Head>생년월일</Head>
              <Head>연락처</Head>
            </HeadBox>
            <Content>
              <ContentInput
                type="text"
                name="email"
                placeholder="example@email.com"
              />
              <ContentInput
                type="text"
                name="name"
                placeholder={name}
                value={name}
                onChange={onChangeValue}
              />
              <ContentInput
                type="text"
                placeholder="2000-01-01"
              />
              <LastContentInput
                type="text"
                name="phonNumber"
                placeholder="010-0000-0000"
                onChange={onChangeValue}
              />
            </Content>
          </ContentBox>
          <Button type="submit">정보수정하기</Button>
        </Box>
    </Container>
  )
};

const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  height: auto;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;
const Box = styled.form`
  width: 100%;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 2.9rem;
  ${media.mobile}{
    font-size: 2.4rem;
  }
`;
const Img = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 0px solid ${props => props.theme.color.darkGray2};
  margin-top: 24px;
  overflow: hidden;
  ${media.mobile}{
    width: 180px;
    height: 180px;
  }
`;
const ImgButton = styled.label`
  margin-top: 27px;
  padding: 14px 22px;
  font-size: 1.6rem;
  border: 1px solid ${props => props.theme.color.darkGray};
  cursor: pointer;
  font-family: 'NEXON Lv1 Gothic OTF';
  line-height: 1.5rem;
  border-radius: 6px;
  ${media.mobile}{
    font-size: 1.5rem;
    padding: 12px 18px;
  }
`;
const UploadImageButton = styled.input`
  display: none;
`;
const ContentBox = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-top: 1px solid rgb(200, 214, 229);
  border-bottom: 1px solid rgb(200, 214, 229);
  margin-top: 20px;
  ${media.mobile}{
    max-width: 100vw;
    overflow: hidden;
  }
`;
const HeadBox = styled.div`
  width: 165px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-right: 1px solid rgb(200, 214, 229);
  ${media.mobile}{
    width: 130px;
  }
`;
const Head = styled.div`
  width: calc(100% - 50px);
  padding: 18px 30px 18px 20px;
  font-family: 'NEXON Lv1 Gothic OTF';
  font-size: 1.7rem;
  border-top: 1px solid white;
  margin: 0;
  ${media.mobile}{
    width: calc(100% - 40px);
    padding: 13px 15px 13px 25px;
  }
`;
const Content = styled.div`
  width: calc(100% - 166px);
  display: flex;
  flex-direction: column;
  ${media.mobile}{
    width: calc(100% - 130px);
  }
`;
const ContentInput = styled.input`
  width: calc(100% - 50px);
  padding: 17px 30px 17px 20px;
  font-family: 'NEXON Lv1 Gothic OTF';
  font-size: 1.7rem;
  border: none;
  border-bottom: 1px solid rgb(200, 214, 229);
  outline: none;
  margin: 0px;
  ${media.mobile}{
    width: 100%;
    padding: 12px 25px 12px 15px;
  }
`;
const LastContentInput = styled.input`
  width: calc(100% - 50px);
  padding: 17px 30px 17px 20px;
  font-family: 'NEXON Lv1 Gothic OTF';
  font-size: 1.7rem;
  border: none;
  outline: none;
  margin: 0;
  ${media.mobile}{
    padding: 12px 25px 12px 15px;
  }
`;
const Button = styled.button`
  margin-top: 30px;
  min-width: 300px;
  padding: 14px 30px;
  background-color: ${props => props.theme.color.darkGray};
  font-family: 'GmarketSansMedium';
  font-size: 2rem;
  color: white;
  border-radius: 14px;
  cursor: pointer;
  transition: all .15s ease-in-out;
  :hover{
    background-color: ${props => props.theme.color.darkGray2};
  }
  ${media.mobile}{
    padding: 11px 20px 11px 10px;
    min-width: 250px;
    font-size: 1.8rem;
  }
`;
export default MyPageUpdate;