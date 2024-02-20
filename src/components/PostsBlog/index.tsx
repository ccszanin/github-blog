import Markdown from "react-markdown";
import { CardStyle, Title } from "./styles";


export interface CardsProps {
  title: string;
  date: string;
  body: string | null | undefined;
  maxBodyLength?: number; 
}

const Cards = ({ title, date, body, maxBodyLength = 150 }: CardsProps) => {
  const limitarString = (texto: string | null | undefined, limite: number) => {
    if (texto && texto.length > limite) {
      return texto.substring(0, limite) + '...';
    }
    return texto || ''; 
  };


  const bodyLimitado = limitarString(body, maxBodyLength);

  return (
    <CardStyle>
      <Title>
        <h1>{title}</h1>
        <span>{date}</span>
      </Title>
      <Markdown>
      {bodyLimitado}
      </Markdown>
    </CardStyle>
  );
};

export default Cards;