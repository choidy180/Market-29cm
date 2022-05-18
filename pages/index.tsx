import type { NextPage } from "next";
import styled from "styled-components";
import Image from "next/image";
import { media } from "../styles/theme";
import Nav from "../components/nav";

const Home: NextPage = (props) => {
  console.log(props);
  return (
    <>
      <Nav isLoggedIn={props}/>
      <Container>
        <Left>
          <Image 
            src='/images/main/8e57be06db834caaad570b2b5d208a38_20220504201124.jpg' 
            alt=''
            width={1000}
            height={1200}
          />
          <Image 
            src='/images/main/8a0b876907e14030aad6eb00716a05b6_20220504165423.jpg' 
            alt=''
            width={1000}
            height={1200}
          />
          <Image 
            src='/images/main/117d6fbfc5744063a6fa9653bd151aed_20220503175454.jpg' 
            alt=''
            width={1000}
            height={1200}
          />
          <Image 
            src='/images/main/e4cf26e6405240f083c09cd92dfab186_20220504201057.jpg' 
            alt=''
            width={1000}
            height={1200}
          />
          <Image 
            src='/images/main/ce34023d647b4fbda5f8721d6b5564f5_20220504201013.jpg' 
            alt=''
            width={1000}
            height={1200}
          />
        </Left>
        <Center>
          <Image 
            src='/images/main/main-image2.jpg' 
            alt=''
            width={720}
            height={1296}
          />
          <ImageTop/>
          <Image 
            src='/images/main/main-image5.jpg' 
            alt=''
            width={800}
            height={800}
          />
          <ImageContent>
            <h3>내 마음, 당신에게 전할 수 있다면</h3>
            <p>오브제에 나의 마음을 담아 누군가에게 전할 수 있다면, 
              그것만큼 멋진 메시지가 있을까요? 아이헤이트먼데이와 
              아트 컴퍼니 핀즐이 함께 만든 패밀리 삭스를 29CM 단독 30% 할인가에 선보여요. 
              마음을 전할 수 있는 방법이 하나 더늘었네요.</p>
          </ImageContent>
          <ImageTop/>
          <Image 
            src='/images/main/7469841a9beb476bb2924198dca5a181_20220506185856.jpg' 
            alt=''
            width={800}
            height={800}
          />
          <ImageContent>
            <h3>편안한 내 발을 위해</h3>
            <p>이 여름을 책임질 믿음직스러운 토앤토의 플립플랍을 추천합니다.
              서서 일할 때도, 가족끼리 산책하러 갈 때도 언제든 편하게 신어보세요.</p>
          </ImageContent>
          <ImageTop/>
          <Image 
            src='/images/main/5865d6b2636b4e788970a9911ae5d9d8_20220506170058.png' 
            alt=''
            width={800}
            height={800}
          />
          <ImageContent>
            <h3>일상 속 액자에 카드를 담다</h3>
            <p>신용카드와 멤버십 카드를 자그마한 액자에 넣는 것처럼 나만의
              아이덴티티를 보여줄 수 있는 프레임바이의 프레임 케이스를 소개합니다.
              취향 따라 카드 따라 자신만의 스타일로 꾸며보세요.</p>
          </ImageContent>
          <ImageTop/>
          <Image 
            src='/images/main/8ff8a265337c4674ac7b9a511f840529_20220412105554.png' 
            alt=''
            width={800}
            height={800}
          />
          <ImageContent>
            <h3>한 가지 색상의 티셔츠만 보고 싶다면?</h3>
            <p>그럴 땐 이렇게 하시면 됩니다. 검색창에 &quot;티셔츠&quot; 키워들 
              입력한 뒤, 결과 페이지의 &apos;상세 필터&apos;를 탭하고 원하는 컬러를 
              선택하면 끝! 참 쉽죠? 이제 원하는 컬러만 골라서 모아보고 편하게 쇼핑하세요!</p>
          </ImageContent>
        </Center>
        <Right>
          <Image 
            src='/images/main/main-image3.jpg' 
            alt=''
            width={720}
            height={1296}
          />
          <ImageTop/>
          <Image 
            src='/images/main/40f97e6076d54bee938692674bdc4b68_20220506170424.jpeg' 
            alt=''
            width={800}
            height={800}
          />
          <ImageContent>
            <h3>29DAYS with 롱블랙</h3>
            <p>24시간이 지나면 사라지는 지식 구독서비스 롱블랙과 함께하는 
              29일간의 여정에 초대합니다. 하루에 한 번 노트를 읽는 습관을 만들어주고, 
              열람 기한이 끝난 롱블랙의 아카이브에서 내 취향이 맞는 노트를 추가로 
              읽을 수 있어요. 롱블랙에서 어떤 인사이트를 얻을 수 있는지 궁금하다면 
              29CM에서 한 달간 무료로 공개하는 노트들을 확인해보세요!</p>
          </ImageContent>
          <ImageTop/>
          <Image 
            src='/images/main/1b19c15cd90a4ea988e8371e3dc57469_20220506170352.jpg' 
            alt=''
            width={800}
            height={800}
          />
          <ImageContent>
            <h3>그로브의 스포츠클럽으로 초대합니다</h3>
            <p>1960년대 오리지널 빈티지를 재해석하여 많은 사랑을 받은 
              그로브의 22SS 전 상품 10% 할인 소식입니다. 그로브만의 시각으로
              스포티즘을 재해석한 이번 컬렉션으로 여러분을 초대할게요!</p>
          </ImageContent>
          <ImageTop/>
          <Image 
            src='/images/main/da6e9f3e96494390826f625b20d4d912_20220504175902.png' 
            alt=''
            width={800}
            height={800}
          />
          <ImageContent>
            <h3>시원한 단잠을 만나는 방법</h3>
            <p>마틸다의 여름 침구 72시간 특가를 시작합니다. 사각거리는 청량한 촉감과
              강력한 통기성을 자랑하는 디어썸머 차렵이불을 46% 할인 혜택으로 준비했어요.</p>
          </ImageContent>
          <ImageTop/>
          <Image 
            src='/images/main/af2e869e317a4693ae7c308360754ef1_20220506170300.png' 
            alt=''
            width={800}
            height={800}
          />
          <ImageContent>
            <h3>오랫동안 사랑받는 샌들</h3>
            <p>오랫동안 인기 있는 버켄스탁의 매력에 동참해보세요. 유행을 타지 않는
              디자인과 편안한 착용감을 갖춘 버켄스탁의 신발은 여러분과 오랫동안 함께할 거예요.</p>
          </ImageContent>
        </Right>
      </Container>
    </>
  )
}
const Container = styled.div`
  position: absolute;
  z-index: 10;
  width: 100vw;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  ${media.tablet}{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const Left = styled.div`
  width: 38%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 2%;
  ${media.tablet}{
    width: 100%;
    margin-right: 0;
  }
`
const Center = styled.div`
  padding: 0 30px 30px 30px;
  width: calc(30% - 60px);
  min-height: calc(100vh - 30px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  ${media.tablet}{
    margin-top: 40px;
    width: calc(90% - 60px);
    border: none;
  }
`
const Right = styled.div`
  padding: 0 30px 30px 30px;
  width: calc(30% - 60px);
  min-height: calc(100vh - 30px);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${media.tablet}{
    width: calc(90% - 60px);
    border: none;
  }
`
const ImageTop = styled.div`
  margin-top:80px;
  display: block;
  width: 100%;
  padding-bottom: 10px;
  ::before{
    content: "　　　　　　　　　　　　　　　";
    width: 100px;
    height: 2px;
    border-top: 4px solid black;
    margin: 20px 0px;
  }
  ${media.xltablet}{
    margin-top:40px;
  }
`
const ImageContent = styled.div`
  padding-top: 20px;
  h3{
    font-family: 'GmarketSansMedium';
    margin: 0;
    padding: 0;
    font-size: 2rem;
  }
  p {
    margin-top: 10px;
    font-family: 'NEXON Lv2 Gothic';
    font-size: 1.8rem;
    line-height: 2rem;
    letter-spacing: -.4px;
  }
  ${media.xltablet}{
    p{
      font-size: 1.4rem;
    }
  }
  ${media.tablet}{
    h3{
      font-size: 2.4rem;
    }
    p{
      font-size: 2rem;
      line-height: 2.3rem;
    }
  }
`

export default Home;