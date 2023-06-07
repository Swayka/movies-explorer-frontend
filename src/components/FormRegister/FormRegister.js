import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";

function FormRegister(props){
    
    return (
      <form className="formlogin" name={props.name} noValidate>
        <fieldset className="formregister__input-container">
          <FormInput type="text" name="name" label="Имя"/>
          <FormInput type="email" name="email" label="E-mail"/>
          <FormInput type="password" name="password" label="Пароль"/>
        </fieldset>
        <span className={`forminput__error forminput__error-${props.name}`}>Что-то пошло не так...</span>
        <fieldset className="formregister__handlers">
          <FormButton submitValue={props.submitValue}/>
        </fieldset>    
      </form>                
    )
}
  
export default FormRegister;