import React, {Fragment, useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router";
import InputField from "./InputField";
import {update_user} from '../features/userSlice';
import {useDispatch} from "react-redux";
import * as Yup from 'yup';

const Form = () => {
  const [userDetails, setUserDetails] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movie = location.state && location.state.movie;
  const [errors, setErrors] = useState(false);

  const firstNameValidationSchema = {'First Name': Yup.string().required()};
  const lastNameValidationSchema = {'Last Name': Yup.string().required()};
  const emailValidationSchema = {'Email Address': Yup.string().required().email()};
  let validators = {
    ...firstNameValidationSchema,
    ...lastNameValidationSchema,
    ...emailValidationSchema,
  }
  const validationSchema = Yup.object({
    ...validators
  })

  const handleFormValues = (event) => {
    setUserDetails({...userDetails, [event.target.name]: event.target.value})
  }
  const saveData = () => {
    dispatch(update_user({...userDetails}))
    navigate(`../email_sent`);
  }

  useEffect(() => {
    const validateFields = () => {
      validationSchema
        .isValid({
          'First Name': userDetails.first_name,
          'Last Name': userDetails.last_name,
          'Email Address': userDetails.email,
        })
        .then(res => {
          setErrors(!res);
        })
    }
    validateFields();
  }, [userDetails, validationSchema]);

  return (
    <Fragment>
      <div className="app">
        <div>
          <img className="movie" src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
               alt={movie.Title}/>
        </div>
        <h2 style={{marginTop: '30px'}}>Enter your details in order to download the movie: {movie.Title}</h2>
        <div className={"container"}>
          <InputField
            size=''
            id='first_name'
            label='First Name'
            value={userDetails.first_name}
            onChange={handleFormValues}
            autoComplete={'off'}
            validationSchema={Yup.object(firstNameValidationSchema)}
            requiredIcon
          />
          <InputField
            size=''
            id='last_name'
            label='Last Name'
            value={userDetails.last_name}
            onChange={handleFormValues}
            autoComplete={'off'}
            validationSchema={Yup.object(lastNameValidationSchema)}
            requiredIcon
          />
          <InputField
            size=''
            id='email'
            label='Email Address'
            value={userDetails.email}
            onChange={handleFormValues}
            autoComplete={'off'}
            validationSchema={Yup.object(emailValidationSchema)}
            requiredIcon
          />
        </div>
        <button
          style={{marginTop: '40px'}}
          className="btn x-smaller fill cardinal"
          type={"submit"}
          disabled={errors}
          onClick={() => saveData()}
        >
          Submit
        </button>
      </div>
    </Fragment>
  );
};

export default Form;
