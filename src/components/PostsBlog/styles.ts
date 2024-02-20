import styled from "styled-components";



export const Posts = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap:32px;
    margin-top: 48px;
    margin-bottom: 234px; 
    text-decoration: none;
  `

export const CardStyle = styled.div`
      padding: 32px;
      background-color:${props => props.theme['base-post']};
      border-radius: 10px;
      border: 1px solid transparent;
      height:260px ;
      text-decoration: none !important;


      &:hover {
      border: 1px solid ${props => props.theme["base-label"]};
    }

      h1{
      font-size: 20px;
      font-weight: 700;
      color: ${props => props.theme['base-title']};
      margin-bottom:20px ;
      text-decoration: none;
    }

    p{
      font-size: 14px;
      font-weight: 400;
      color: ${props => props.theme['base-text']};
      line-height: 25.6px;
      text-decoration: none;
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