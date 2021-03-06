import type { NextPage } from "next";
import styled from "styled-components";
import Image from "next/image";
import { media } from "../styles/theme";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GithubAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { authService } from "../firebase/firebaseConfig";
import { useRouter } from "next/router";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Nav from "../components/nav";

const Login: NextPage = (props) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  useEffect(()=>{
    authService.signOut();
  },[]);
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if(name === "email"){
      setEmail(value);
    } else if (name === "password"){
      setPassword(value);
    }
  }
  const typeChange = () => {
    if(newAccount){
      setNewAccount(false);
    } else {
      setNewAccount(true);
    }
  }
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if(newAccount){
        data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        );
      } else {
        data = await signInWithEmailAndPassword(
          authService, 
          email, 
          password
        );
      }
      return router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
  const onSocialClick = async (event) => {
    const {
      target: { id },
    } = event;
    let provider;
    if (id === "google"){
      provider = new GoogleAuthProvider();
    }
    if (id === "github"){
      provider = new GithubAuthProvider();
    }
    const data = await signInWithPopup(authService, provider);
    return router.replace("/");
  }
  return (
    <>
      <Nav isLoggedIn={props}/>
      <Container>
        <Title>{newAccount ? "????????????" : "?????????"}</Title>
        <InputContainer onSubmit={onSubmit}>
          <Input
            name="email"
            type="text"
            placeholder="?????????(?????????)"
            required
            value={email}
            onChange={onChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="????????????"
            required
            value={password}
            onChange={onChange}
          />
          <InputButton
            type="submit"
          >{newAccount ? "??????????????????" : "???????????????"}</InputButton>
        </InputContainer>
        <SnsText>SNS ???????????? ???????????????</SnsText>
        <SnsContainer>
          <Image 
            src='/images/logo/google-brand-black-google-logo-vector-number-symbol-text-trademark-transparent-png-144049.png' 
            alt=''
            id="google"
            width={40}
            height={40}
            style={{cursor:"pointer"}}
            onClick={onSocialClick}
          />
          <Image 
            src='/images/logo/free-icon-github-logo-25231.png' 
            alt=''
            id="github"
            width={40}
            height={40}
            style={{cursor:"pointer"}}
            onClick={onSocialClick}
          />
          <Image 
            src='/images/logo/facebook.png' 
            alt=''
            id="facebook"
            width={40}
            height={40}
            style={{cursor:"pointer"}}
            onClick={onSocialClick}
          />
          <Image 
            src='/images/logo/apple.png' 
            alt=''
            id="apple"
            width={40}
            height={40}
            style={{cursor:"pointer"}}
            onClick={onSocialClick}
          />
        </SnsContainer>
        <JoinText onClick={typeChange}>
          {newAccount ? "?????? 29CM ???????????????????" : "?????? 29CM ????????? ????????????????"}
        </JoinText>
        {/* <JoinButton>????????????</JoinButton> */}
      </Container>
    </>
  )
}

const Container = styled.div`
  position: absolute;
  margin-top: -100px;
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h2`
  margin-top: 30px;
  font-size: 4rem;
  font-family: 'GmarketSansMedium';
  ${media.tablet}{
    margin-top: -100px;
  }
  ${media.mobile}{
    margin-top: 40px;
  }
`;
const InputContainer = styled.form`
  margin-top: 24px;
  padding-top: 30px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-top: 4px solid ${props => props.theme.color.darkGray};
  ${media.mobile}{
    width: calc(100% - 30px);
  }
`;
const Input = styled.input`
  width: calc(100% - 30px);
  padding: 14px 14px 14px 14px;
  font-size: 1.4rem;
  border: 1px solid ${props => props.theme.color.darkGray2};
  font-family: 'GmarketSansMedium';
  transition: all .1s ease-in-out;
  border-radius: 4px;
  :focus{
    border: 1px solid ${props => props.theme.color.darkGreen};
  }
`
const InputButton = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 17px 0 17px 0;
  background-color: ${props => props.theme.color.darkGray2};
  color: white;
  font-size: 1.4rem;
  font-family: 'GmarketSansMedium';
  border-radius: 4px;
  transition: all .1s ease-in-out;
  :hover{
    background-color: ${props => props.theme.color.darkGray};
  }
`
const SnsText = styled.p`
  font-size: 1.4rem;
  font-family: 'GmarketSansMedium';
  margin-top: 32px;
  letter-spacing: -.4px;
`
const SnsContainer = styled.div`
  padding-top: 26px;
  font-size: 2rem;
  display: flex;
  justify-content: space-around;
  gap: 30px;
`
const JoinText = styled.p`
  font-size: 1.5rem;
  font-family: 'NEXON Lv2 Gothic';
  margin-top: 42px;
  letter-spacing: -.4px;
  ${media.mobile}{
    font-size: 1.7rem;
    margin-top: 40px;
  }
  :hover{
    color: ${props => props.theme.color.pink};
    cursor: pointer;
  }
`
const JoinButton = styled.button`
  margin-top: 12px;
  width: 400px;
  padding: 14px 0 14px 0;
  color: ${props => props.theme.color.darkGray2};
  font-size: 1.6rem;
  font-family: 'GmarketSansMedium';
  border: 1px solid ${props => props.theme.color.darkGray2};
  border-radius: 40px;
  transition: all .2s ease-in-out;
  :hover{
    color: ${props => props.theme.color.pink};
  }
  ${media.mobile}{
    width: calc(100% - 30px);
  }
`

export default Login;