import { data } from 'autoprefixer';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../hooks/useToken';




import { AuthContext } from './Contexts/Context';
import { toast } from 'react-hot-toast';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const {  loginUser, googleSignIn } = useContext(AuthContext)
    // password na milar error
    const [loginError, setLoginError] = useState('')

    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail)



    // login korle koi redirect hobe
    const location = useLocation()


    const navigate = useNavigate()


    const from = location.state?.from?.pathname || '/'


    if (token) {
        navigate(from, { replace: true })
    }


    const handleLogin = data => {
        console.log(data)
        setLoginError('')
        loginUser(data.email, data.password)
        .then((result) => {
            const user = result.user;
            console.log(user)
            toast.success(`Welcome back.`)
            setLoginUserEmail(data.email)
        
        })
        .catch((error) => { 
            console.log(error.message)
            setLoginError(error.message)
        });

    }
    const handleGoogle = data => {
        
        setLoginError('')
        googleSignIn()
        .then((result) =>{
            const user  = result.user
            console.log(user)
            toast.success(`Welcome back`)
            navigate(from, {replace: true}) 
           
        })
        .catch((error) => { 
            console.log(error)
            setLoginError(error)
        })
       
    }




    return (
        <div className='h-[800px]  flex justify-center text-white items-center '>
            <div className='w-1/3 p-10 bg-gradient-to-r from-primary to-secondary rounded shadow-lg shadow-teal-300'>
                <h2 className='text-2xl font-bold uppercase '>Log in</h2>
                <form onSubmit={handleSubmit(handleLogin)} >

                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input text-slate-800 type='email' className=' text-slate-800 input text-slate-800-bordered' {...register("email", { required: "Email address is required" })} />
                        {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-white ">Password</span>
                        </label>
                        <input text-slate-800 type='password' className='input text-slate-800 input text-slate-800-bordered' {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters long" } })} />
                        {errors.password && <p className='text-error'>{errors.password?.message}</p>}

                        {/* <label className="label">
                        <span className="label-text">Forget Password ?</span>
                    </label> */}
                    </div>

                    {/* <p>{data}</p> */}
                    <input className='btn btn-neutral  w-full text-white mt-4' value='Submit' type="submit" />
                    {loginError && <p className='text-errors'>{loginError}</p>}
                    <p>New To This Page ?<Link className='text-green-300' to='/signup'> Create New Account</Link></p>
                    <div className='divider'>OR</div>
                    <input onClick={handleGoogle} className='btn w-full text-white ' value='Continue With Goggle' />
                </form>

            </div>


        </div>
    );
};

export default Login;