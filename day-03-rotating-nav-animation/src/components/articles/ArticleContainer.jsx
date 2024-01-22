import React from 'react'

const ArticleContainer = ({
    children
}) => {
  return (
    <div className="article__container">
      {children}
    </div>
  )
}

export default ArticleContainer
