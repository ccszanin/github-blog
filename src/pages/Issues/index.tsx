import { Header } from "../../components/Header";
import { MainPostCard } from "../../components/MainPostCard";
import { PostContent } from "../../components/PostContent";

import { BlogContainer } from "../Blog/styles";

export default function Issues() {
 return(
  <>
 <Header/>
 <BlogContainer>  
 <MainPostCard/>
 <PostContent/>
 </BlogContainer>
 </>
 )

}