import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import { PostsBlog } from "../../components/PostsBlog/index.tsx";
import { Search } from "../../components/Search/index.tsx";
import { BlogContainer } from "./styles.ts";


export function Blog() {
   
  return(
    <div>
      <Header/>
      <BlogContainer>
      <Modal/>
      <Search/>
      <PostsBlog/>
      </BlogContainer>
    </div>
  )
   
}