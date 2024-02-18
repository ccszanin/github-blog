import { useEffect, useState } from "react";
import { Header } from "../../components/Header/index.tsx";
import Cards from "../../components/PostsBlog/index.tsx";
import { Search } from "../../components/Search/index.tsx";
import { BlogContainer } from "./styles.ts";
import axios from "axios";
import { Posts } from "../../components/PostsBlog/styles.ts";
import MainCard from "../../components/MainCard/index.tsx";

interface Issue {
  id: number;
  title: string;
  date: string;
  body: string;
}

interface User {
  id:number;
  login: string;
  followers: number;
}

const Blog = () => {
  const [issues, setIssues] = useState<Issue[] | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get<Issue[]>('https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues');
        setIssues(response.data);
      } catch (error) {
        console.error('Erro ao obter issues:', error);
      }
    };

    fetchIssues();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get<User>('https://api.github.com/users/ccszanin');
        setUser(response.data);
      } catch (error) {
        console.error('Erro ao obter dados do usuário:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <Header />
      <BlogContainer>
      {user &&  (
        <MainCard key={user.id} login={user.login} followers={user.followers}/>
        )}
        <Search />
        <Posts>
          {issues && issues.map((issue) => (
            <Cards key={issue.id} body={issue.body} date={issue.date} title={issue.title} />
          ))}
        </Posts>
      </BlogContainer>
    </div>
  );
};

export default Blog;