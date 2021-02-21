import Layout from "../components/Layout";

export default function About({ title, description, ...props }) {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <h1 className="h1">Welcome to my blog</h1>

        <p className="description">{description}</p>

        <p>balbal lorem</p>
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
