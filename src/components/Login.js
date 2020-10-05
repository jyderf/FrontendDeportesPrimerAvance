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
    
      
    
    <div class="container">
    <form action="">
        <br/>
        <div class="form-row">
        
            <div class="form-group col-md-5">
                    <input class="form-control form-control-sm " type="text" {...username} autoComplete="new-password" placeholder="email"/>
            </div>

            <div class="form-group col-md-5">        
                <input class="form-control form-control-sm" type="password" {...password} autoComplete="new-password" placeholder="password" />
                
            </div>

            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}

            <div class="form-group col-md-1">

                <input class="btn btn-outline-success btn-sm " type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} />
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