import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import { Search } from "../../components/Search.tsx";
import { BlogContainer } from "./styles.ts";


export function Blog() {
   
  return(
    <div>
      <Header/>
      <BlogContainer>
      <Modal/>
      <Search/>
      </BlogContainer>
    </div>
  )
   
}