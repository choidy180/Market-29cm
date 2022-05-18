import { NextPage } from "next"
import { dbService } from "../../firebase/firebaseConfig"
import { collection, getDocs, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import styled from "styled-components";

const ViewIndex: NextPage = (props) => {
  const [content, setContent] = useState("");
  const [ncontents, setNcontents] = useState([]);
  const getNcontents = async () => {
    const content = await getDocs(collection(dbService, "Content"));
    content.forEach((document) => {
      const contentObject = {
        ...document.data(),
        id: document.id,
      };
      setNcontents((prev) => [contentObject, ...prev]);
    });
  }
  useEffect(()=>{
    getNcontents();
    onSnapshot(collection(dbService, "Content"), (snapshot) => {
      const ContentArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNcontents(ContentArray);
    })
  },[]);
  return(
    <>
      {ncontents.map((content, i) =>(
        <div key={content.id} style={{marginBottom: "20px", marginLeft: "20px"}}>
          {ncontents[i]["imageUrl"] && (
            <ImageBox>
              <img src={ncontents[i]["imageUrl"]} alt="" />
            </ImageBox>
          )}
          <p>{content.email}</p>
          <p>{content.title}</p>
          <p>{content.price}</p>
        </div>
      ))}
    </>
  )
}

const Button = styled.button`
  margin: 20px;
  font-family: 'NEXON Lv1 Gothic OTF';
  padding: 12px;
  font-size: 2rem;
`
const ImageBox = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.color.dark};
  cursor: pointer;
  overflow: hidden;
  transition: all .15s ease-in-out;
  :hover{
    transform: translateY(-10px);
  }
  img{
    width: 100%;
  }
`

export default ViewIndex;