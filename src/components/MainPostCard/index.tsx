import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ElementsModal, HeaderModal, Social, SocialItems } from "./styles";
import { Link } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { CardStyles } from "./styles";

export function MainPostCard() {
  return (
    <CardStyles>
      <HeaderModal>
        <ElementsModal>
          <FontAwesomeIcon
            color="#3294F8"
            width={12}
            height={12}
            icon={faChevronLeft}
          />
          <Link to="/">Voltar</Link>
        </ElementsModal>
        <ElementsModal>
          <a href="https://github.com/ccszanin">GITHUB</a>

          <FontAwesomeIcon
            color="#3294F8"
            width={12}
            height={12}
            icon={faArrowUpRightFromSquare}
          />
        </ElementsModal>
      </HeaderModal>
      <div>
        <h1>JavaScript data types and data structures</h1>
      </div>
      <Social>
        <SocialItems>
          <FontAwesomeIcon
            width={18}
            height={18}
            color="#7B96B2"
            icon={faGithub}
          />
          <p>ccszanin</p>
        </SocialItems>
        <SocialItems>
          <FontAwesomeIcon
            width={18}
            height={18}
            color="#7B96B2"
            icon={faCalendarDay}
          />
          <p>há 1 dia</p>
        </SocialItems>
        <SocialItems>
          <FontAwesomeIcon
            width={18}
            height={18}
            color="#7B96B2"
            icon={faComment}
          />
          <p>5 comentários</p>
        </SocialItems>
      </Social>
    </CardStyles>
  );
}
