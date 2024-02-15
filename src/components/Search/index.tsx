import { SearchContainer} from "./styles";
import { Text } from "./styles";


export function Search() {
  return (
   <>
    <Text>
      <h1>Publicações</h1>
      <p>6 publicações</p>
    </Text>
    <SearchContainer>
      <input
        type="text"
        placeholder="Busque por transações"
        
      />
    </SearchContainer>
    </>
   );
  }