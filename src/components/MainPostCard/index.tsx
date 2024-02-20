import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Content, ElementsModal, HeaderModal, Social, SocialItems } from "./styles";
import { Link, useParams } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { CardStyles } from "./styles";
import { useEffect, useState} from "react";
import axios from "axios"
import ReactMarkdown from 'react-markdown'

interface AuthorType {
  login: string;
}


export interface PostProps {
  comments: number;
  title: string;
  body: string;
  created_at: string;
}
export interface Issue {
  login: string;
  user?: AuthorType;
  comments: number;
  title: string;
  body:string;
  created_at:string;
}


const MainPostCard = ({ comments, title, body, created_at }: PostProps) => {
  const { issueNumber } = useParams();
  const [issueDetail, setIssueDetail] = useState<Issue | null>(null);

  useEffect(() => {
    const fetchIssueDetail = async () => {
      try {
        const response =  await axios.get<Issue>(`https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${issueNumber}`);
         setIssueDetail(response.data);
      } catch (error) {
        console.error('Erro ao obter detalhes da issue:', error);
      }
    };

    fetchIssueDetail();
  }, [issueNumber]);


  return (
    <>
    <CardStyles>
      <HeaderModal>
        <ElementsModal>
          <FontAwesomeIcon
            color="#3294F8"
            width={12}
            height={12}
            icon={faChevronLeft}
          />
          <Link to="/">Voltar</Link>
        </ElementsModal>
        <ElementsModal>
        <a href={`https://github.com/rocketseat-education/reactjs-github-blog-challenge/issues/${issueNumber}`} target="_blank">GITHUB</a>
          <FontAwesomeIcon
            color="#3294F8"
            width={12}
            height={12}
            icon={faArrowUpRightFromSquare}
          />
        </ElementsModal>
      </HeaderModal>
      <div>
        <h1>{title}</h1>
      </div>
      <Social>
        <SocialItems>
          <FontAwesomeIcon
            width={18}
            height={18}
            color="#7B96B2"
            icon={faGithub}
          />
          
          {issueDetail?.user?.login && (
              <p>{issueDetail.user.login}</p>
            )}
        </SocialItems>
        <SocialItems>
          <FontAwesomeIcon
            width={18}
            height={18}
            color="#7B96B2"
            icon={faCalendarDay}
          />
          <p>{created_at}</p>
        </SocialItems>
        <SocialItems>
          <FontAwesomeIcon
            width={18}
            height={18}
            color="#7B96B2"
            icon={faComment}
          />
          <p>{comments}</p>
        </SocialItems>
      </Social>
    </CardStyles>
    
    <Content>
      <ReactMarkdown>
     {body}
    </ReactMarkdown>
  </Content>
 </>
  );
}
export default MainPostCard;