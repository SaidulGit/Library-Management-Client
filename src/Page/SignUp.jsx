import React from 'react'
import { NavLink } from 'react-router-dom'
import { useForm } from "react-hook-form"

const SignUp = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data)
// const handleSignUp = event => {
//     event.preventDefault();
//     const form = event.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     const user = {email,password};
//     console.log(user);

    
// }


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
        <h1 className="text-5xl font-bold mb-4 text-green-400">Sign Up now!</h1>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register("name")} type="text" name='name' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email", { required: true })} type="email" name='email' placeholder="email" className="input input-bordered" />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register("password",{ required: true ,
          minLength: 6,
          maxLength:20,
          pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
            })} type="password" name='password' placeholder="password" className="input input-bordered" />
          {errors.password?.type === "required" && <span className='text-red-500 text-lg' >Password is required</span>}
          {errors.password?.type === "minLength" && <span className='text-red-500 text-lg'>Password must be 6  character </span>}
          {errors.password?.type === "pattern" && <span className='text-red-500 text-lg'>Password must be one Uppercase,one special character </span>}
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-success" type="submit" value="Sign Up" />
          <p className='mt-2 text-center'>Allready have an account?<NavLink className='text-base font-bold text-sky-500' to='/signin'>Login</NavLink> </p>

        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default SignUp