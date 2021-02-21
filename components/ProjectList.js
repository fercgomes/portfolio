import Link from "next/link";
import styled from "styled-components";
import { Container } from "./Container";

const PostContainer = styled.div``;

const PostItem = styled.div`
  &:hover {
    background-color: #505050;
  }

  width: 400px;
  border: 1px solid white;
  padding: 12px;
`;

const Title = styled.h2`
  margin: 0;
  padding: 0;
`;

const Description = styled.p`
  margin: 0;
`;

export default function ProjectList({ posts: projects }) {
  if (projects === "undefined") return null;

  return (
    <Container>
      {!projects && <div>No posts!</div>}
      <PostContainer>
        {projects &&
          projects.map((project) => {
            return (
              <PostItem key={project.slug}>
                <Title>
                  <Link href={{ pathname: `/project/${project.slug}` }}>
                    <a>{project.frontmatter.title}</a>
                  </Link>
                </Title>
                <Description>{project.frontmatter.description}</Description>
              </PostItem>
            );
          })}
      </PostContainer>
    </Container>
  );
}
