import matter from "gray-matter";
import Layout from "../components/Layout";
import ProjectList from "../components/ProjectList";

export default function Index({ title, description, posts, ...props }) {
  return (
    <Layout pageTitle={title}>
      {/* <h1 className="title">Welcome</h1>
      <p className="description">{description}</p> */}

      <ProjectList posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../projects", true, /\.md$/));

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
