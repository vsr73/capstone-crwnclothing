import {FormInputLabel,Group,Input} from  './form-input.sytles';

const FormInput=({label,...otherProps})=>{
        return(
        <Group>
            <Input {...otherProps} />
            <FormInputLabel shrink={otherProps.value.length}>
                {label}
            </FormInputLabel>
            {/* <input className="form-input" {...otherProps} /> */}
        </Group>
    )
}

export default FormInput;