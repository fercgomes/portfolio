import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 5px;
  justify-content: center;
`;

const StyledLinkItem = styled.div`
  margin-left: 10px;
  padding: 10px;
  font-weight: bold;
`;

export default function Header() {
  return (
    <header>
      <StyledNav>
        <StyledLinkItem>
          <Link href="/">
            <a>HOME</a>
          </Link>
        </StyledLinkItem>

        <StyledLinkItem>
          <Link href="/about">
            <a>ABOUT ME</a>
          </Link>
        </StyledLinkItem>
      </StyledNav>
    </header>
  );
}
