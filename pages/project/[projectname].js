import matter from "gray-matter";
import ReactMarkdownWithHtml from "react-markdown/with-html";
import styled from "styled-components";
import Layout from "../../components/Layout";

const StyledArticle = styled.article`
  width: 50%;
  margin: auto;
`;

const PostTitle = styled.h1`
  font-size: 2em;
  margin: 0;
`;

const PostDescription = styled.p`
  margin: 0;
`;

const PostContent = styled.div`
  margin: 24px 0;
`;

const Container = styled.div`
  margin: 36px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>;

  return (
    <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
      <Container>
        <StyledArticle>
          <PostTitle>{frontmatter.title}</PostTitle>
          <PostDescription>{frontmatter.description}</PostDescription>

          <PostContent style={{ marginTop: 64 }}>
            <ReactMarkdownWithHtml source={markdownBody} allowDangerousHtml />
          </PostContent>
        </StyledArticle>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { projectname } = ctx.params;

  const content = await import(`../../projects/${projectname}.md`);
  const config = await import(`../../siteconfig.json`);
  const data = matter(content.default);

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  const projectSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);

      return slug;
    });
    return data;
  })(require.context("../../projects", true, /\.md$/));

  const paths = projectSlugs.map((slug) => `/project/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
