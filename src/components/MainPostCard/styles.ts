import styled from "styled-components";




export const HeaderModal = styled.section`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`


export const ElementsModal = styled.div`
  display: flex;
  gap:8px;
  border-bottom: 1px solid transparent;
   cursor: pointer;
    &:hover {
      border-bottom: 1px solid ${props => props.theme["blue"]};
    }

 a {
  font-weight: 700;
  font-size: 12px;
  line-height: 19.2px;
  text-transform: uppercase;
  align-items: center;
  color: ${props => props.theme["blue"]};
  text-decoration: none;


 }

`
export const CardStyles = styled.section`
    width: 100%;
    max-width: 864px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    margin-top: -5rem;
    background:  ${props => props.theme['base-profile']};
    border-radius: 6px;
    padding: 2rem;
    box-shadow: 0px 2px 28px 0px #00000033;

    h1 {
      font-size: 24px;
      font-weight: 700;
      line-height: 31.2px;
      color: ${props=> props.theme['base-title']};
    }

    p{
      font-size: 16px;
      font-weight: 400;
      line-height: 25.6px;
      color: ${props=> props.theme['base-span']};
    }
`


export const Social = styled.div`
  display: flex;
  gap:32px ;
 
`
export const SocialItems =  styled.div`
display: flex;
 gap: 8px ;
align-items: center;
padding-top:8px ;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
    width: 880px !important;

    * {
  color: ${props => props.theme['base-text']};
}


    p{
      font-size: 16px;
      font-weight: 400;
      line-height: 25.6px;
      color: ${props => props.theme['base-text']};
    }  

    h1, h2, h3, li, code{
      color: ${props => props.theme['base-text']};
    }

    h2{
      padding-top: 40px;
      padding-bottom: 10px;
    }

    h3{
      padding-top: 30px;
      padding-bottom: 10px;
    }
    code{
    gap:8px;
    }

    pre{
    margin-top: 40px;
    background-color: ${props => props.theme['base-post']}; 
    border-radius: 2px;
    padding:16px;
    }
   

    img{
      padding-top: 40px;
      max-width:800px ;
    }
    ; 
  `