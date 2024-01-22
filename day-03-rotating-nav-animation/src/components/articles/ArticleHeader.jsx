import React from 'react'

const ArticleHeader = ({
    children
}) => {
  return (
    <h1 className="article__header">
        {children}
    </h1>
  )
}

export default ArticleHeader
