import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import MainPostCard from "../../components/MainPostCard";
import { BlogContainer } from "../Blog/styles";
import { useEffect, useState } from "react";
import axios from "axios";


export interface Issue {
  login: string;
  comments: number;
  title: string;
  body:string;
  created_at:string;
}



const Issues =  () => {
  const { issueNumber } = useParams();
  const [issueDetail, setIssueDetail] = useState<Issue | null>(null);

  useEffect(() => {
    const fetchIssueDetail = async () => {
      try {
        const response = await axios.get<Issue>(`https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${issueNumber}`);
        setIssueDetail(response.data);
      } catch (error) {
        console.error('Erro ao obter detalhes da issue:', error);
      }
    };

    fetchIssueDetail();
  }, [issueNumber]);

 return(
  <>
  <Header />
  <BlogContainer>
    {issueDetail && (
      <MainPostCard login={issueDetail.login} comments={issueDetail.comments} title={issueDetail.title} body={issueDetail.body} created_at={issueDetail.created_at} />
    )}
  </BlogContainer>
</>
);
};

export default Issues;