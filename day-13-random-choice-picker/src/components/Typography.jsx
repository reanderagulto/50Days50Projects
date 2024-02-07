import React from 'react'

const Typography = ({
    type = "paragraph",
    classes = "",
    children,
    id = ""
}) => {
  switch (type) {
    case 'paragraph':
        return (
            <p 
                id={id}
                className={`typography__paragraph ${classes}`}
            >
                {children}
            </p>
        )
    case 'header-1': 
        return (
            <h1 
                id={id}
                className={`typography__header--1 ${classes}`}
            >
                {children}
            </h1>
        )
    case 'header-2': 
        return (
            <h2 
                id={id} 
                className={`typography__header--2 ${classes}`}
            >
                {children}
            </h2>
        )
    case 'header-3': 
        return (
            <h3 
                id={id} 
                className={`typography__header--3 ${classes}`}
            >
                {children}
            </h3>
        )
    case 'header-4':
        return (
            <h4 
                id={id} 
                className={`typography__header--4 ${classes}`}
            >
                {children}
            </h4>
        )
    case 'span':
        return (
            <span 
                id={id} 
                className={`typography__span ${classes}`}
            >
                {children}
            </span>
        )
    default:
        break;
  }
}

export default Typography
