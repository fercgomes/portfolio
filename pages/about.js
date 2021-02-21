import { Container } from "../components/Container";
import Layout from "../components/Layout";

export default function About({ title, description, ...props }) {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <Container>
          <p className="description">{description}</p>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const configData = await import("../siteconfig.json");

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
