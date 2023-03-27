import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

/*

SiteName

- SearchBar
- MyInfo
    - LogOut

*/

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: black;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  font-size: 20px;
  margin-right: 20px;
`;
const Search = styled.span`
  color: white;
  svg {
    height: 25px;
  }
`;

const User = styled.span`
  color: white;
  svg {
    height: 25px;
  }
`;

function TsbComponent() {
  return (
    <Nav>
      <Column>
        <Items>
          <Item>Awesome Note</Item>
        </Items>
      </Column>
      <Column>
        <Search>
          <input type="text" />
        </Search>
      </Column>
      <Column>
        <User>
          <FontAwesomeIcon icon={faUser} />
        </User>
      </Column>
    </Nav>
  );
}

export default TsbComponent;
