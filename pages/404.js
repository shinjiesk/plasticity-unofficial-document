import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const HomeLink = styled.a`
  padding-top: 5rem;
  display: block;
`;

export default function Custom404() {
  return (
    <Container>
      <Image src="/img/404.png" alt="404" width={422} height={294} />
      <Link href="/">
        <HomeLink>Back to home</HomeLink>
      </Link>
    </Container>
  );
}
