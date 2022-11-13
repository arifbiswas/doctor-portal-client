import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
    const { register,  formState: { errors }, handleSubmit } = useForm();
  const handleRegister = data =>{
    console.log(data);
    
  }
    return (
        <div className="h-[800px] flex justify-center items-center">
        <div className="w-96 shadow-lg py-12 px-5">
          <h1 className="text-2xl text-center">Register</h1>
          <form onSubmit={handleSubmit(handleRegister)}>
  
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-lg ml-1 -mb-1">Name</span>
              </label>
              <input
                type="text"
                {...register("name" , {
                  required: "name is required"  
                  
              })}
                className="input input-bordered w-full "
              />
                {errors.name && <p className="text-red-600 mt-2">{errors.name?.message}</p>}
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-lg ml-1 -mb-1">Email</span>
              </label>
              <input
                type="email"
                {...register("email" , {
                  required: "Email Address is required"  
                  
              })}
                className="input input-bordered w-full "
              />
                {errors.email && <p className="text-red-600 mt-2">{errors.email?.message}</p>}
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-lg ml-1 -mb-1">Password</span>
              </label>
              <input
                type="password"
                {...register("password" , {
                  minLength : {value : 8 , message : "Password must be 8 characters"},
                  required : "Password is required",
              })}
                className="input input-bordered w-full "
              />
              {errors.password && <p className="text-red-600 mt-2">{errors.password?.message}</p>}
              <label className="label">
                <span className="label-text text-xs ml-1">Forget Password?</span>
              </label>
            </div>
            <div>
            <input className="btn my-3 btn-accent text-[16px] w-full" type="submit" value={"Register"}/>
            </div>
          </form>
            <div className="text-sm text-center mb-2">
              <h3 ><span className="text-secondary"><Link to="/login">Already have an account</Link></span></h3>
            </div>
            <div className="divider">OR</div>
            <div>
              <button className="btn btn-outline w-full text-lg mt-2">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
      </div>
    );
};

export default Register;