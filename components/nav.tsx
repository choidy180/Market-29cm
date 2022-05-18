import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faShoppingBag, faRightToBracket, faRightFromBracket, faUpload, faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from "next/router";
import React from 'react'
import Link from "next/link";
import { media } from "../styles/theme";
import { authService } from "../firebase/firebaseConfig";
import { useParams } from "react-router-dom";

export default function Nav({isLoggedIn}){
  const router = useRouter(); 
  const onLogOutClick = () => {
    authService.signOut();
    return router.push("/");
  };
  return(
    <>
    {!router.pathname.includes("/mypage") ?
      <NavContainer>
        <NavBox>
          <NavBoxLeft>
            <Link href={"/"}>
              <LogoText>29CM</LogoText>
            </Link>
          </NavBoxLeft>
          <NavBoxRight>
            {isLoggedIn["isLoggedIn"] ?
              <Link href={"/upload"}>
                <NavText>
                  <FontAwesomeIcon icon={faFolderPlus}/>
                  <span>UPLOAD</span>
                </NavText>
              </Link> : "" 
            }
            {router.pathname === '/mypage' 
              ? ""
              : 
              <Link href={"/mypage"}>
                <NavText>
                  <FontAwesomeIcon icon={faUser}/>
                  <span>MYPAGE</span>
                </NavText>
              </Link>
            }
            <Link href={"/mypage/heart"}>
              <NavText>
                <FontAwesomeIcon icon={faHeart}/>
                <span>HEART</span>
              </NavText>
            </Link>
            <Link href={"/order/cart"}>
              <NavText>
                <FontAwesomeIcon icon={faShoppingBag}/>
                <span>SHOPPING</span>
              </NavText>
            </Link>
            {isLoggedIn["isLoggedIn"] ? 
              <NavText onClick={onLogOutClick}>
                <FontAwesomeIcon icon={faRightFromBracket}/>
                <span>LOGOUT</span>
              </NavText> : 
              <Link href={"/login"}>
                <NavText>
                  <FontAwesomeIcon icon={faRightToBracket}/>
                  <span>LOGIN</span>
                </NavText>
              </Link>
            }
          </NavBoxRight>
        </NavBox>
        {router.pathname === "/login" ? 
          "" : 
          <NavTab>
            <NavItem>
              <NavTabItems>MEN</NavTabItems>
              <NavTabItems>WOMEN</NavTabItems>
              <NavTabItems>HOME</NavTabItems>
              <NavTabItems>TECH</NavTabItems>
              <NavTabItems>BEAUTY</NavTabItems>
              <NavTabItems>LEISURE</NavTabItems>
              <NavTabItems>CURTURE</NavTabItems>
            </NavItem>
            <NavSubTab>
              <NavTabSubItems>Event</NavTabSubItems>
              <NavTabSubItems>Brand</NavTabSubItems>
              <NavTabSubItems>Lookbook</NavTabSubItems>
            </NavSubTab>
          </NavTab>
        }
      </NavContainer> : 
      <MoblieContiner>
        <MLeft>
          <Link href={"/"}>
            <MTitle>29CM</MTitle>
          </Link>
        </MLeft>
        <MRight>
          {isLoggedIn["isLoggedIn"] ? 
            <MNavText onClick={onLogOutClick}>
              <span>LOGOUT</span>
            </MNavText> : 
            <Link href={"/login"}>
              <MNavText>
                <span>LOGIN</span>
              </MNavText>
            </Link>
          }
          <Link href={"/mypage/heart"}>
              <MNavText>
                <span>HEART</span>
              </MNavText>
            </Link>
            <Link href={"/order/cart"}>
              <MNavText>
                <span>SHOPPING</span>
              </MNavText>
            </Link>
        </MRight>
      </MoblieContiner>
      }
    </>
  ) 
}

const NavContainer = styled.div`
  position: absolute;
  z-index: 9999999;
  width: calc(100vw - 96px);
  padding: 34px 48px 40px 48px;
  display: flex;
  flex-direction: column;
  background-color: white;
  ${media.tablet}{
    width: calc(100vw - 50px);
    padding: 20px 25px 20px 25px;
  }
`;

const NavBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const NavBoxLeft = styled.div`
  font-family: 'GmarketSansMedium';
  width: 100%;
  display: flex;
  justify-content: flex-start;
  ${media.tablet}{
    width: auto;
  }
`;
const NavBoxRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  span{
    margin-top: 1px;
    margin-left: 3px;
  }
  ${media.tablet}{
    gap: 1rem;
  }
`;
const LogoText = styled.p`
  font-size: 24px;
  cursor: pointer;
`
const NavText = styled.a`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all ease-in-out 0.1s;
  letter-spacing: -0.5px;
  :hover{
    color: ${props => props.theme.color.pink}
  }
  ${media.tablet}{
    svg{
      display: none;
    }
  }
`;

const NavTab = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
  ${media.tablet}{
    display: none;
  }
`
const NavItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
  padding-top: 20px;
  ${media.tablet}{
    flex-wrap: wrap;
    gap: 12px;
  }
`
const NavTabItems = styled.span`
  font-family: 'GmarketSansBold';
  font-size: 1rem;
  ${media.tablet}{
    font-size: 0.85rem;
  }
`
const NavSubTab = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
  padding-left: 16px;
  padding-top: 20px;
  ${media.tablet}{
    padding-left: 0px;
    padding-top: 0px;
  }
`
const NavTabSubItems = styled.span`
  font-family: 'GmarketSansMedium';
  font-size: 1rem;
`
// 모바일
const MoblieContiner = styled.div`
  padding: 20px;
  background-color: ${props => props.theme.color.dark};
  display: flex;
  justify-content: space-between;
`
const MLeft = styled.div`
  color: white;
`
const MTitle = styled.p`
  font-size: 2rem;
  cursor: pointer;
`
const MRight = styled.div`
  color: white;
  display: flex;
  flex-direction: row-reverse;
  gap: 20px;
`
const MNavText = styled.p`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  span{
    cursor: pointer;
  }
`