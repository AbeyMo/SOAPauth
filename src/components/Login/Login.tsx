import { useState } from "react";
import { Alert } from "react-bootstrap";
import agent from "../../api/agent";

const Login = () => {
  const [state, setState] = useState({
    userName: "",
    password: "",
    IPs: "",
  });
  const [resultCode, setResultCode] = useState('');
  const [resultMessage, setResultMessage] = useState();
  const [resultId, setResultId] = useState();
  const [resultEmail, setResultEmail] = useState();
  const [resultFirst, setResultFirst] = useState();
  const [resultLast, setResultLast] = useState();
  const [resultMobile, setResultMobile] = useState();
  const [resultCountry,setResultCountry] = useState();
  const [success, setSuccess] = useState('')
  let tog=0;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (state.userName.length && state.password.length) {
      const user = {
        func: "Login",
        params: `UserName=${state.userName}&Password=${state.password}&IPs=${state.IPs}`,
      };
      let form = new FormData();
  
      form.append("func", user.func);
      form.append("params", user.params);
      agent.Login.create(form)
        .then(function (response) {
          let code = JSON.parse(response.ret).ResultCode;
          let detail=JSON.parse(response.ret).ResultMessage;
          let id =JSON.parse(response.ret).EntityId;
          let email =JSON.parse(response.ret).Email; 
          let fname =JSON.parse(response.ret).FirstName;
          let lname =JSON.parse(response.ret).LastName;
          let mobile =JSON.parse(response.ret).Mobile;
          let country =JSON.parse(response.ret).CountryID;
           
          console.log(JSON.parse(response.ret).EntityId);
          if (JSON.parse(response.ret).EntityId) {
            setResultCode('success');
          }
          if (code) {
            setResultCode('failed');
            tog=-1;
          }
          if(detail){
            setResultMessage(detail);
          }
          if(email){
            tog=1;
            setResultId (id);
            setResultEmail(email);
            setResultFirst(fname);
            setResultLast(lname);
            setResultMobile(mobile);
            setResultCountry(country);
          }
          
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    
    <div className="container bg-transparent rounded justify-content-center w-full col-sm-7 col-md-8  col-lg-5">
      
      {resultCode == 'failed' ? (
        <div className="" >
          {["danger"].map((variant) => (
            <Alert key={variant} variant={variant}>
              {resultMessage}
             
            </Alert>
          ))}{" "}
        </div>
      ) : resultCode == 'success' ? (
        <div className="">
          {" "}
          {["success"].map((variant) => (
            <Alert key={variant} variant={variant}>
              EntityId = {resultId}<br></br>
              Email  =  {resultEmail}<br></br>
              FirstName = {resultFirst}<br></br>
              LastName = {resultLast}<br></br>
              Mobile = {resultMobile}<br></br>
              Country ID = {resultCountry} <br></br>
            </Alert>
          ))}
        </div>
      ): null}
      <div className="card border-secondary mb-3  ">
       <div className="card-header text-center fs-4 fw-bold">Sign In</div>
        <div className="card-body text-secondary justify-content-center ">
     <form>
        <div className="mb-3">
          <label>User Name</label>
          <input
            type="text"
            className="form-control"
            value={state.userName}
            onChange={(e) => setState({ ...state, userName: e.target.value })}
            placeholder="Enter username"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={state.password}
            onChange={(e) => setState({ ...state, password: e.target.value })}
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary align-items-center w-75 mx-auto"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
  </div>
</div>
     
    </div>
  );
};
export default Login;
