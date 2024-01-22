import React from 'react'

const ArticleContent = ({
    children
}) => {
  return (
    <p className="article__content">
      {children}
    </p>
  )
}

export default ArticleContent
