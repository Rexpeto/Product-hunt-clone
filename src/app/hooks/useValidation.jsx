"use client";
import { useEffect, useState } from "react";

const useValidation = (validation, fn) => {
    const [value, setValue] = useState({});
    const [submitForm, setSubmitForm] = useState(false);
    const [error, setError] = useState({});

    useEffect(() => {
        if (submitForm) {
            const notError = Object.keys(error).length === 0;

            if (notError) {
                fn();
                setSubmitForm(true);
                return;
            }

            setSubmitForm(false);
        }
    }, [error]);

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errorValitadtion = validation(value);
        setError(errorValitadtion);
        setSubmitForm(true);
    };

    const handleBlur = () => {
        const errorValitadtion = validation(value);
        setError(errorValitadtion);
    };

    return {
        value,
        error,
        submitForm,
        handleChange,
        handleSubmit,
        handleBlur,
    };
};

export default useValidation;
