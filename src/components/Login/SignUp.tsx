import { useState } from 'react'
import agent from '../../api/agent'

const SignUp = () => {

    const [state , setState] = useState({
        email:"",
        password : "",
        firstName : "",
        lastName : "",
        mobile:"",
        countryId:"",
        aId:"",
        signUpId:"cc",
       
    })

    const handleSubmit = (e:any) => {
        e.preventDefault()
        if(state.email.length && state.password.length && state.firstName.length && state.lastName.length) {
           
            const user = {
             func:'RegisterNewCustomer',
             params: `Email=${state.email}&Password=${state.password}
             &FirstName=${state.firstName}&LastName=${state.lastName}
             &Mobile=${state.mobile}&CountryID=${parseInt( state.countryId)}
             &aID=${parseInt(state.aId)}&SignupIP=${state.signUpId}`
            };

            let form = new FormData();
            debugger
            form.append('func', user.func);
            form.append('params', user.params);
            console.log(form);
            
            
            agent.Login.create(form)
               .then(function (response) {
                console.log(JSON.parse(response.ret).ResultCode);
                    
                        
                    
                })
                .catch(function (error) {
                    console.log(error);
                });    
        } 
        
    }


    return (
        <div className='container-fluid'>
      {/* <form >
      <h3><label className="d-flex justify-content-center">Sign Up</label></h3>
        <div   className="form-group">
          <label>Email address</label>
          <input
            type="text"
            className="form-control"
            value={state.email}
            onChange={e => setState({...state, email: e.target.value})}
            placeholder="Enter Email Address"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={state.password}
            onChange={e => setState({...state, password: e.target.value})}
            placeholder="Enter Password"
          />
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            value={state.firstName}
            onChange={e => setState({...state, firstName: e.target.value})}
            placeholder="Enter First Name"
          />
        </div>
        <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            value={state.lastName}
            onChange={e => setState({...state, lastName: e.target.value})}
            placeholder="Enter Last Name"
          />
        </div>
        <div className="form-group">
          <label>Mobile</label>
          <input
            type="text"
            className="form-control"
            value={state.mobile}
            onChange={e => setState({...state, mobile: e.target.value})}
            placeholder="Enter Mobile"
          />
        </div>
        <div className="form-group">
          <label>Country Id</label>
          <input
            type="number"
            className="form-control"
            value={state.countryId}
            onChange={e => setState({...state, countryId: e.target.value})}
            placeholder="Enter Country Id"
          />
        </div>
        <div className="form-group">
          <label>AId</label>
          <input
            type="number"
            className="form-control"
            value={state.aId}
            onChange={e => setState({...state, aId: e.target.value})}
            placeholder="Enter AID"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-secondary" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
        
      </form> */}

      <div className="card border-secondary mb-3 w-full">
       <div className="card-header text-center fs-4 fw-bold">Sign Up</div>
        <div className="card-body text-secondary">
        <form >
        <div   className="form-group">
          <label>Email address</label>
          <input
            type="text"
            className="form-control"
            value={state.email}
            onChange={e => setState({...state, email: e.target.value})}
            placeholder="Enter Email Address"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={state.password}
            onChange={e => setState({...state, password: e.target.value})}
            placeholder="Enter Password"
          />
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            value={state.firstName}
            onChange={e => setState({...state, firstName: e.target.value})}
            placeholder="Enter First Name"
          />
        </div>
        <div className="form-group">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            value={state.lastName}
            onChange={e => setState({...state, lastName: e.target.value})}
            placeholder="Enter Last Name"
          />
        </div>
        <div className="form-group">
          <label>Mobile</label>
          <input
            type="text"
            className="form-control"
            value={state.mobile}
            onChange={e => setState({...state, mobile: e.target.value})}
            placeholder="Enter Mobile"
          />
        </div>
        <div className="form-group">
          <label>Country Id</label>
          <input
            type="number"
            className="form-control"
            value={state.countryId}
            onChange={e => setState({...state, countryId: e.target.value})}
            placeholder="Enter Country Id"
          />
        </div>
        <div className="form-group">
          <label>AId</label>
          <input
            type="number"
            className="form-control"
            value={state.aId}
            onChange={e => setState({...state, aId: e.target.value})}
            placeholder="Enter AID"
          />
        </div>
        <div className="d-grid mt-4 mx-auto w-75">
          <button type="submit" className="btn btn-secondary" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
        
      </form>
  </div>
</div>
      </div>
    )
}
export default SignUp;