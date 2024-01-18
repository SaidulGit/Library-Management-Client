import React, { useContext } from 'react'
import { useForm,} from "react-hook-form"
import { AuthContext } from '../AuthProvider/Context'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Login = () => {
  const {signIn } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  
  const onSubmit = (data) => {
    console.log(data.email)
    signIn(data.email,data.password)
    .then(res => res.user)
    .catch(error => console.error(error))
    Swal.fire({
      title: "SussessFul Login",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
    navigate(from, { replace: true })

  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    <img className='w-4/6 h-4/6 ml-10' src="https://i.ibb.co/rdzknHL/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cl.jpg" alt="" />
    </div>
    <div  className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <h2 className='text-3xl text-center font-bold'>Login </h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email",{ required: true })} type="email" placeholder="email" className="input input-bordered" required />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register("password")} type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
          </label>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Login</button>
        </div>
        <h2>Don't have an account?<Link to="/signUp"><p className='text-blue-600 font-bold inline ml-2'>Register</p></Link></h2>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login