import './form-input.sytles.scss';

const FormInput=({label,...otherProps})=>{
        return(
        <div className='group'>
            <input className="form-input" {...otherProps} />
            <label className={`${otherProps.value.length ? 'shrink':''} form-input-label`}>{label}</label>
            {/* <input className="form-input" {...otherProps} /> */}
        </div>
    )
}

export default FormInput;