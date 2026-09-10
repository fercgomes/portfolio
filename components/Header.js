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
  const captureNavigationClick = (destination) => {
    if (
      process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN &&
      process.env.NEXT_PUBLIC_POSTHOG_HOST
    ) {
      import("posthog-js").then(({ default: posthog }) => {
        posthog.capture("navigation_clicked", { destination });
      });
    }
  };

  return (
    <header>
      <StyledNav>
        <StyledLinkItem>
          <Link href="/">
            <a onClick={() => captureNavigationClick("home")}>HOME</a>
          </Link>
        </StyledLinkItem>

        <StyledLinkItem>
          <Link href="/about">
            <a onClick={() => captureNavigationClick("about")}>ABOUT ME</a>
          </Link>
        </StyledLinkItem>
      </StyledNav>
    </header>
  );
}
