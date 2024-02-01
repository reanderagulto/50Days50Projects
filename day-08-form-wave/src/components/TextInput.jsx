import React from 'react'

const TextInput = ({
    type,
    name, 
    id,
    classes = "",
    label,
}) => {
    
    let delay = 0;
    return (
        <div className={`form-control ${classes}`}>
            <input 
                type={type} 
                className='form-control__input' 
                name={name} 
                id={id} 
            />
            <label className="form-control__label">
                {[...label].map((item, index) => {
                    const currentDelay = delay;
                    delay += 50;
                    return (
                        <span 
                            key={index}
                            style={{
                                transitionDelay: `${currentDelay}ms`
                            }}
                        >
                            {item}
                        </span>
                    );
                })}
            </label>
        </div>
    )
}

export default TextInput
