import React from 'react';
import ArticleContainer from '../components/articles/ArticleContainer';
import ArticleContent from '../components/articles/ArticleContent';
import ArticleHeader from '../components/articles/ArticleHeader';
import ArticleSubtitle from '../components/articles/ArticleSubtitle';
import ArticleSubheader from '../components/articles/ArticleSubheader';
import ArticleImage from '../components/articles/ArticleImage';

const Article = ({
    data
}) => {
  return (
    <ArticleContainer>
        <ArticleHeader>{data.title}</ArticleHeader>
        <ArticleSubtitle>{data.subtitle}</ArticleSubtitle>
        <ArticleContent>
            {data.paragraphs[0]}
        </ArticleContent>
        <ArticleSubheader>{data.subheader}</ArticleSubheader>
        <ArticleImage 
            url={data.image.url}
            alt={data.image.alt}
        />
        <ArticleContent>
            {data.paragraphs[0]}
        </ArticleContent>
    </ArticleContainer>
  )
}

export default Article
