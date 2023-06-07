function FormInput(props) {

  return (
    <>
      <label htmlFor="email-input" className="forminput__label">{props.label}</label>
      <input id="email-input" type={props.type} name={props.name} className={`forminput`} minLength="8" maxLength="30" required />      
    </>
  )
}

export default FormInput;