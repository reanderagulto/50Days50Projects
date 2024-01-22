import React from 'react'

const ArticleImage = ({
    url, 
    alt
}) => {
  return (
    <img 
      src={url} 
      alt={alt} 
      className="article__image" 
    />
  )
}

export default ArticleImage