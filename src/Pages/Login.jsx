import React from "react";

const login = () => {
  const [formData , setFormData] = React.useState({
    email : "",
    password : ""
  });

  const handleChanges = async ()=>{
    
  }
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center md:text-2xl text-xl">
            Login{" "}
          </h2>
          <div className="my-5">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-xl ">Email : </span>
              </div>
              <input
                type="text"
                placeholder="user@gmail.com"
                value = {formData.email}
                onChange={(e)=>setFormData({...formData, email:e.target.value})}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-xl ">Password : </span>
              </div>
              <input
                type="password"
                placeholder="********"
                value = {formData.password}
                onChange = {(e)=> setFormData({...formData, password:e.target.value})}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            
          </div>
          <div className="card-actions justify-center ">
            <button className="btn btn-primary px-5 text-[15px]">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
