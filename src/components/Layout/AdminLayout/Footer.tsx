import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="footer">
        <p>© 2025 Kahn Mouse</p>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  .footer {
    width: 100%;
    background-color: black;
    color: gray;
    text-align: center;
    padding: 20px 0;

    p {
      margin: 0;
    }
  }
`;
