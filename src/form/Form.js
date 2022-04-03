import React, { useState } from 'react'
import { formvalidation } from './formvalidation'
function Form({setUser}) {

    const [errorMessage, setErrorMessage] = useState('')
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        password: '',
        email: '',
    })

    


    const handleSubmit=(e)=>{
        e.preventDefault();
       
        const error=formvalidation(formData);

        if(error){
            setErrorMessage(error);
            return
        }

        setUser(true);
    }
    const handleInputs=(e)=>{
        const {placeholder,value}=e.target;
        setErrorMessage('');
        setFormData({...formData,[placeholder]:value});
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='firstName' name='firstName' value={formData.firstName} onChange={e=>handleInputs(e)} />
          
            <input type="text" placeholder='lastName' name='lastName' value={formData.lastName} onChange={e=>handleInputs(e)} />
            
            <input type="password" placeholder='password' name='password' value={formData.password} onChange={e=>handleInputs(e)} />
            
            
            <input type="email" placeholder='email' name='email' value={formData.email} onChange={e=>handleInputs(e)} />

            <button>onSubmit</button>
            
            <p data-testid="error">{errorMessage}</p>

        </form>


    </div>
  )
}
export default Form;