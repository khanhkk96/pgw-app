import styled from 'styled-components';

export default function Articles() {
  return (
    <ArticlePage>
      <div className="article-list">
        <div className="article-item">Article 1</div>
        <div className="article-item">Article 2</div>
        <div className="article-item">Article 3</div>
        <div className="article-item">Article 4</div>
        <div className="article-item">Article 5</div>
      </div>
    </ArticlePage>
  );
}

const ArticlePage = styled.div``;
