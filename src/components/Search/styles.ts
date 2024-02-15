import styled from 'styled-components';



export const Text = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 76px;
  h1{
    font-weight: 700;
    font-size: 18px;
    color: ${props => props.theme['base-subtitle']};
  }

  p{
    font-weight:400 ;
    font-size: 14px;
    color: ${props => props.theme['base-span']};
  }

  `

export const SearchContainer = styled.form`
  display: flex;
  gap: 1rem;
 padding-top: 12px;
  input {
  flex: 1;
  border-radius: 6px;
  border: 1px solid ${props => props.theme['base-border']};
  background: ${props => props.theme['base-input']};
  color: ${props => props.theme['base-title']};
  padding: 1rem;

  &::placeholder{
    color: ${props => props.theme['base-label']};
  }


  &:focus {
  outline: 1px solid ${props => props.theme['blue']};
}

}
`

