import React, { useState } from 'react';
 
function Login(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
 
  // handle button click of login form
  const handleLogin = () => {
    props.history.push('/dashboard');
  }
 
  return (
    
      
    
    <div class="container bg-info  ">
    <form action="">
        <div class="form-col">

            <div class="form-group ">
                <p >REGISTRO DE USUARIOS</p>
            </div>
        
            <div class="form-group ">
                    <input class="form-control form-control-sm" type="number"   placeholder="Identificación"/>
            </div>

            <div class="form-group ">
            <p>Tipo de Documento</p>
                
            <select class="selectpicker form-control form-control-sm" data-live-search="true">
                <option data-tokens="">--select--</option>
                <option data-tokens="masc"> CC </option>
                <option data-tokens="fem"> TI </option>
                <option data-tokens="fem"> CE </option>
            </select>

            </div>

            <div class="form-group ">
                <input class="form-control form-control-sm" type="text"  placeholder="Nombre 1"/>
            </div>

            <div class="form-group ">
                <input class="form-control form-control-sm" type="text"  placeholder="Nombre 2"/>
            </div>

            <div class="form-group ">
                <input class="form-control form-control-sm" type="text"  placeholder="Apellido 1"/>
            </div>

            <div class="form-group ">
                <input class="form-control form-control-sm" type="text" placeholder="Apellido 2"/>
            </div>

            <div class="form-group ">
                <input class="form-control form-control-sm" type="text"  placeholder="e-mail"/>
            </div>

            <div class="form-group ">
                <input class="form-control form-control-sm" type="text"  placeholder="Celular"/>
            </div>

            <div class="form-group ">
                <p6>Fecha de Nacimiento</p6>

                <input class="form-control form-control-sm"  type = "date"  placeholder="Fecha Nacimiento"/>
            </div>
            
            <div class="form-group ">
            <p6>Sexo</p6>
                
            <select class="selectpicker form-control form-control-sm" data-live-search="true">
                <option data-tokens="">--select--</option>
                <option data-tokens="masc">Masculino</option>
                <option data-tokens="fem">Femenino</option>
            </select>

            </div>

            <div class="form-group ">
            
                <input class="form-control form-control-sm" type="password" placeholder="password" />
                
            </div>

            

            <div class="form-group ">
                <input class="btn btn-success btn-block" type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} />
            </div>
        </div>
    </form>
    </div>
   
      
      
  );
}
 
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
 
export default Login;