import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import Cards from "../../components/PostsBlog/index.tsx";
import { Search } from "../../components/Search/index.tsx";
import { BlogContainer } from "./styles.ts";
import axios from "axios";
import { Posts } from "../../components/PostsBlog/styles.ts";

interface Issue {
  id: number;
  title: string;
  date:string;
  body: string;
  // Adicione mais propriedades conforme necessário
}


export function Blog() {
  const [dados, setDados] = useState<Issue[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Issue[]>('https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues');
        setDados(response.data);
      } catch (error) {
        console.error('Erro ao obter dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <BlogContainer>
        <Modal />
        <Search />
       
        <Posts>
        {dados && dados.map((issue) => (

          <Cards  key={issue.id} body={issue.body} date={issue.date} title={issue.title} />

        ))}
      </Posts> 

      </BlogContainer>

    </div>
  );
}