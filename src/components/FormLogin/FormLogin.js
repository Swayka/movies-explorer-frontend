import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";

function FormLogin(props){
    
    return (
      <form className="formlogin" name={props.name} noValidate>
        <fieldset className="formlogin__input-container">
          <FormInput type="text" name="name" label="E-mail"/>
          <FormInput type="email" name="email" label="Пароль"/>
        </fieldset>
        <fieldset className="formlogin__handlers">
          <FormButton submitValue={props.submitValue}/>
        </fieldset>    
      </form>                
    )
  }
  
  export default FormLogin;