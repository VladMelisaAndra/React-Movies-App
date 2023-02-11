import React, {useEffect, useState} from "react";

export default function InputField(props) {

  const [value, setValue] = useState(props.value);
  const [error, setError] = useState('');

  useEffect(() => {
    setValue(props.value)
  }, [props.value])

  const onBlurField = (event) => {
    setError('')
    if (!props.validationSchema) return
    props.validationSchema
      .validate({
        [props.label]: event.target.value
      })
      .catch(err => {
        setError(err.errors.join('\n'));
      });
  }

  const handleChangeValue = (event) => {
    setValue(event.target.value);

    if (props.validationSchema) {
      props.validationSchema
        .isValid({
          [props.id]: event.target.value
        })
        .then(valid => {
          if (valid)
            setError('');
          props.onChange(event);
        });
    } else {
      props.onChange(event);
    }
  }

  return (
    <div style={props.style} className={`create_input ${props.size} ${error && ' is-error'}`}>
      <div className='row'>
        <div className='col is-full'>
          <label className='white' htmlFor={props.id}>
            {props.label} {props.requiredIcon && <i className="light_red">*</i>}
          </label>
          <input className={"input"}
                 type={props.type ? props.type : 'text'}
                 id={props.id}
                 value={value || ''}
                 name={props.id}
                 onChange={(event) => handleChangeValue(event)}
                 onBlur={(event) => onBlurField(event)}
                 autoComplete={props.autoComplete === undefined ? '' : props.autoComplete}
                 disabled={props.disabled}
          />
          <span className={`light_red error ${props.size}`}>{error || ''}</span>
        </div>
      </div>
    </div>
  );
}
