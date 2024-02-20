import { useEffect, useState } from "react";
import { Header } from "../../components/Header/index.tsx";
import Cards from "../../components/PostsBlog/index.tsx";
import { BlogContainer, SearchContainer, Text } from "./styles.ts";
import axios from "axios";
import { Posts } from "../../components/PostsBlog/styles.ts";
import MainCard from "../../components/MainCard/index.tsx";
import { Link } from "react-router-dom";

//Pegar o valor do input através da propriedade onChange e criar uma função que recebe esse valor e faz uma requisição m para api passando o parametro de texto (q) 

//salvar o retorno no issues set issues

interface Issue {
  number: number;
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
  const [searchText, setSearchText] = useState<string>('');
  const [debouncedSearchText, setDebouncedSearchText] = useState<string>('');
  const [allIssues, setAllIssues] = useState<Issue[] | null>(null);
  // const [filteredIssues, setFilteredIssues] = useState<Issue[] | null>(null);
  const [user, setUser] = useState<User | null>(null);


  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get<Issue[]>('https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues');
        setAllIssues(response.data);
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

useEffect(() => {
  const debounceTimeout = setTimeout(() => {
    setDebouncedSearchText(searchText);
  }, 500);

  return () => {
    clearTimeout(debounceTimeout);
  };
}, [searchText]);

useEffect(() => {
  const fetchSearchResults = async (searchText: string) => {
    try {
      console.log('Iniciando busca:', searchText);
      if (searchText.trim() !== '') {
        try {
          const response = await axios.get<Issue[]>(`https://api.github.com/search/issues?q=${searchText}%20repo:rocketseat-education/reactjs-github-blog-challenge`);
          setAllIssues(response.data);
          console.log(searchText);
        } catch (error) {
          console.log('Erro na busca:', error);
        }
      }
    } catch (error) {
      console.error('Erro na busca de issues:', error);
    }
  };

  fetchSearchResults(debouncedSearchText);
}, [debouncedSearchText]);


return (
  <div>
    <Header />
      <BlogContainer>
        {user && (
          <MainCard key={user.id} login={user.login} followers={user.followers} />
        )}
        <Text>
          <h1>Publicações</h1>
          <p>6 publicações</p>
        </Text>
        <SearchContainer>
          <input
            type="text"
            placeholder="Busque por transações"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </SearchContainer>

        <Posts>
          {allIssues?.map((issue) => (
                <Link to={`/Issues/${issue.number}`} key={issue.id} style={{ textDecoration: 'none' }}>
                  <Cards key={issue.number} body={issue.body} date={issue.date} title={issue.title} />
                </Link>
              ))}
        </Posts>
      </BlogContainer>
  </div>
);
};

export default Blog;