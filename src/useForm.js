import {useState, useEffect} from 'react'

export const useForm = (validate) => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const {name, value} = e.target;
        console.log(name, value)
        setErrors(validate(values))
        setValues({
            ...values, 
            [name]: value
        });
    }
   
    return { handleChange, values, setValues, errors, setErrors };
}

export default useForm;
