import Head from "next/head";
import styled from "styled-components";
import Header from "./Header";

const Container = styled.div`
  margin: 36px 0;
`;

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" />
        <title>{pageTitle}</title>
      </Head>
      <section className="layout">
        <Header />

        <Container>{children}</Container>
      </section>

      {/* <footer>Made by me</footer> */}
    </>
  );
}
