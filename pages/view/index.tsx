import { NextPage } from "next"
import { dbService } from "../../firebase/firebaseConfig"
import { collection, getDocs, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"

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
      {ncontents.map((content) =>(
        <div key={content.id} style={{marginBottom: "20px"}}>
          <p>{content.email}</p>
          <p>{content.title}</p>
          <p>{content.price}</p>
        </div>
      ))}
    </>
  )
}

export default ViewIndex;