import styled from 'styled-components';

interface HeaderContentProps {
  backgroundImage: string;
}

export const HeaderContent = styled.div<HeaderContentProps>`
  height: 296px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: url(${props => props.backgroundImage}) center/cover no-repeat;
`;
