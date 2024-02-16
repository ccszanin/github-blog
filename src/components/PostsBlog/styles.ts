import styled from "styled-components";



export const Posts = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap:32px;
    margin-top: 48px;
    margin-bottom: 234px; 
  `

export const Card = styled.div`
      padding: 32px;
      background-color:${props => props.theme['base-post']};
      border-radius: 10px;
      border: 1px solid transparent;
     
      &:hover {
      border: 1px solid ${props => props.theme["base-label"]};
    }



      h1{
      font-size: 20px;
      font-weight: 700;
      color: ${props => props.theme['base-title']};
      margin-bottom:20px ;
    }

    p{
      font-size: 14px;
      font-weight: 400;
      color: ${props => props.theme['base-text']};
      line-height: 25.6px;
    }

    span{
      font-size: 14px;
      font-weight: 400;
      color: ${props => props.theme['base-span']};
      white-space: nowrap;
    }

`

  export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  
  `