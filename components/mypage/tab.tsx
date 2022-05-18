import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { media } from "../../styles/theme";

export default function MyPageTab(isLoggedIn){
  return(
    <Tab>
      <ContentBox>
        <Img>
          <Image 
            src='/images/background/4ugq4vz121x44362cq87.png' 
            alt=''
            width={1000}
            height={1200}
            onClick={()=>{console.log(isLoggedIn);}}
          />
        </Img>
        <Name>크리스탈</Name>
      </ContentBox>
      <TabBox>
        <Link href={"/"}>
          <TabTitle>나의 쇼핑정보</TabTitle>
        </Link>
        <Link href={"/"}>
          <TabSub>주문배송조회</TabSub>
        </Link>
        <Link href={"/"}>
          <TabSub>취소/교환/반품 내역</TabSub>
        </Link>
        <Link href={"/"}>
          <TabSub>상품 리뷰</TabSub>
        </Link>
        <Link href={"/"}>
          <TabTitle>나의 계정설정</TabTitle>
        </Link>
        <Link href={"/mypage/update"}>
          <TabSub>회원정보수정</TabSub>
        </Link>
        <Link href={"/"}>
          <TabSub>회원등급</TabSub>
        </Link>
        <Link href={"/"}>
          <TabSub>마일리지현황</TabSub>
        </Link>
        <Link href={"/"}>
          <TabSub>쿠폰</TabSub>
        </Link>
        <Link href={"/"}>
          <TabTitle>고객센터</TabTitle>
        </Link>
        <Link href={"/"}>
          <TabSub>1:1 문의내역</TabSub>
        </Link>
        <Link href={"/"}>
          <TabSub>공지사항</TabSub>
        </Link>
        <Link href={"/"}>
          <TabSub>FAQ</TabSub>
        </Link>
        <Link href={"/"}>
          <TabSub>고객의소리</TabSub>
        </Link>
      </TabBox>
    </Tab>
  )
}

const Tab = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  ${media.xltablet}{
    width: auto;
    min-width: auto;
    margin-right: 30px;
  }
  ${media.tablet}{
    display: none;
  }
`
const Img = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 224px;
  height: 224px;
  border-radius: 50%;
  border: 0px solid ${props => props.theme.color.darkGray2};
  overflow: hidden;
  ${media.xltablet}{
    width: 200px;
    height: 200px;
  }
`
const ContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 34px;
`
const Name = styled.span`
  font-family: 'NEXON Lv1 Gothic OTF Bold';
  font-size: 3rem;
`
const TabBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
const TabTitle = styled.p`
  margin-top: 45px;
  font-family: 'NEXON Lv1 Gothic OTF Bold';
  font-size: 1.7rem;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  :hover{
    color: ${props => props.theme.color.darkGray};
  }
`
const TabSub = styled.p`
  margin-top: 18px;
  font-family: 'NEXON Lv1 Gothic OTF';
  font-size: 1.5rem;
  transition: all 0.1s ease-in-out;
  color: ${props => props.theme.color.darkGray};
  cursor: pointer;
  :hover{
    color: ${props => props.theme.color.darkGreen};
  }
`