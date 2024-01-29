import React from 'react'

const SplitContent = ({
    background, 
    classes,
    headerLabel, 
    buttonLabel = "Buy Now", 
    buttonUrl = "#", 
    mouseEnter, 
    mouseLeave,
    dataClass
}) => {
  return (
    <section 
        className={`split__content ${classes}`}
        style={{
            backgroundImage: `url(${background})`
        }}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        data-class={dataClass}
    >
        <h2 className="split__content--header">{headerLabel}</h2>
        <a 
            href={buttonUrl} 
            className="split__content--link"
        >
            {buttonLabel}
        </a>
    </section>
  )
}

export default SplitContent
