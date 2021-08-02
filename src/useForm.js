import {useState, useEffect} from 'react'

export const useForm = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const {name, value} = e.target;
        console.log(name, value)
        setValues({
            ...values, 
            [name]: value
        });
    }
   
    return { handleChange, values, setValues };
}

export default useForm;
