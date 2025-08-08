import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterWrapper>
      <footer>
        <p>© 2025 Kahn Mouse</p>
      </footer>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  margin-top: 40px;

  footer {
    background-color: black;
    color: gray;
    text-align: center;
    padding: 20px 0;

    p {
      margin: 0;
    }
  }
`;
