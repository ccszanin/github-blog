import { ModalContainer, FlexContainer, Container, Description, HeaderContent, Items } from "./styles";
import perfil from "../../assets/perfil.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

export function Modal() {
  return (
    <ModalContainer>
      <img src={perfil} alt="" />
      <Container>
        <header>
          <h1>Carla Cristine</h1>
          <FlexContainer>
            <HeaderContent>
            <a href="https://github.com/ccszanin">
              GITHUB
            </a>
            
            <FontAwesomeIcon color="#3294F8" width={12} height={12} icon={faArrowUpRightFromSquare} />
            </HeaderContent>
          </FlexContainer>
        </header>

       <Description>
       Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
       </Description>
      
        <FlexContainer>
          <Items>
            <FontAwesomeIcon
              width={18}
              height={18}
              color="#3A536B"
              icon={faGithub}
            />
            <p>@carlacristine_</p>
          </Items>
          <Items>
            <FontAwesomeIcon
              width={18}
              height={18}
              color="#3A536B"
              icon={faUserGroup}
            />
            <p>32 seguidores</p>
          </Items>
        </FlexContainer>
        </Container>
    </ModalContainer>
  );
}
