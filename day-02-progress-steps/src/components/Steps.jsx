import React, {useState, useEffect} from 'react'; 
import Step from './Step';
import Button from './Button';

const Steps = () => {
    const [activeStep, setActiveStep] = useState(1);
    const [progressWidth, setProgressWidth] = useState(0);
    const steps = [1, 2, 3, 4];
    const step_click = (element) => {
        if(element.id === 'btn-next') {
            if(activeStep <= steps.length) {
                setActiveStep(activeStep + 1);
                setProgressWidth(progressWidth + 33.3);
                document.querySelector(`#step-${activeStep + 1}`).classList.add('active');
            }
            if(activeStep === steps.length) {
                element.disabled = true;
                
            }
        }
        else if(element.id === 'btn-prev') {

            if(activeStep > 1) {
                setActiveStep(activeStep - 1);
                setProgressWidth(progressWidth - 33.3);
                document.querySelector(`#step-${activeStep}`).classList.remove('active');
            }
            
            if(activeStep === 1) {
                element.disabled = true;
            }
        }    
    }

    return (
        <>
            <div className="stepper__main-container">
                <div className="stepper__progress" style={{ width: `${progressWidth}%` }}></div>
                {steps && steps.map((item, index) => {
                    return <Step 
                        key={index}
                        id={`step-${item}`}
                        className={`stepper__item${ item === 1 ? ' active' : '' }`}
                        label={item}
                    />
                })}
            </div>
            <div className="stepper__button-container">
                <Button 
                    id="btn-prev"
                    label="Prev"
                    className={`btn`}
                    type="button"
                    disabled={activeStep === 1 ? true : false}
                    on_click={(e) => step_click(e.target)}
                />
                <Button 
                    id="btn-next"
                    label="Next"
                    className={`btn`}
                    disabled={activeStep === steps.length ? true : false}
                    type="button"
                    on_click={(e) => step_click(e.target)}
                />
            </div>
        </>
    )
}

export default Steps
