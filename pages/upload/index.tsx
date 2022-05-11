import { NextPage } from "next"
import Nav from "../../components/nav";
import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import { media } from "../../styles/theme";


const Upload: NextPage = (props) => {
  const [imageLoad, setImageLoad] = useState();
  const onFileChange = (e) => {
    const {
      target: { files },
    } = e;
    const theFile = files[0];
    const reader = new FileReader();
    // 완료후 finishedEvent 받기
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget : { result },
      } = finishedEvent;
      setImageLoad(result)
    }
    // 여기서 파일읽기 시작
    reader.readAsDataURL(theFile);
  }
  return(
    <>
      <Container>
        <Nav isLoggedIn={props}/>
        <Box>
          <ImageBox
            htmlfor="inputImage"
          >
            <Image 
              id="exam_img"
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
            />
            <PriceBox>
              <Price
                type="text"
                placeholder="가격을 입력하세요"
                maxLength="999"
              />
              <Own>원</Own>
            </PriceBox>
            <TextContent
              placeholder="추가설명을 입력하세요"
            />
            <Button>물건 등록하기</Button>
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
  ${media.tablet}{
    flex-direction: column;
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
  ${media.xltablet}{
    width: 300px;
    height: 337.5px;
  }
  ${media.tablet}{
    width: 362px;
    height: 300px;
  }
  ${media.mobile}{
    width: calc(100% - 80px);
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

export default Upload;