
import { json, Link, useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from './Contexts/Context';
import toast, { Toaster } from 'react-hot-toast';
import useToken from '../hooks/useToken';





const Signup = () => {

    // don't be scared it's going to be fine

    const {createUser, updateUser} = useContext(AuthContext)
    const {register, formState : {errors}, handleSubmit} = useForm()

    // signup error message 
    const [signUpError, setSignUpError] = useState('')

        // token verify kortesi moira jaite mon chay 
        const [createdUserEmail, setCreatedUserEmail] = useState('')
        const [token] = useToken(createdUserEmail)




    // user sign up korar pore koi jabe
    const navigate = useNavigate();


    if(token){
        navigate('/')
    }


    const handleSignup = data => {
        console.log(data)
        setSignUpError('')

        createUser(data.email, data.password)
        .then((result) => {
            const user = result.user;
            console.log(user)
            toast('User crated successfully.')
            const userInfo = {
                displayName : data.name
            }
            updateUser(userInfo)
            .then(() => {
                saveUser(data.name , data.email)
            })
            .catch(error => console.log(error))
        })
        .catch((error) => { 
            console.log(error)
            setSignUpError(error)
        });


        const saveUser = (name, email) => {
            const user = {name, email}
            fetch(`http://localhost:5000/users` , {
                method: "POST" ,
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log("saveUser",data)
                setCreatedUserEmail(email)
            })
        }

    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
        <div className='w-96 p-7'>
             <h2 className='text-xl font-bold'>Sign up</h2>
             <form onSubmit={handleSubmit(handleSignup)}>

          <div className="form-control w-full max-w-xs">
             <label className="label">
                 <span className="label-text">Name</span>
             </label>
             <input type='text'   className='input input-bordered' {...register("name" , {required: "Name is required"})}  />
             {errors.name && <p className='text-error'>{errors.name?.message}</p>}
          </div>

          <div className="form-control w-full max-w-xs">
             <label className="label">
                 <span className="label-text">Email</span>
             </label>
             <input type='text'  className='input input-bordered' {...register("email" , {required: "Email address is required"})}  />
             {errors.email && <p className='text-error'>{errors.email?.message}</p>}
          </div>


          <div className="form-control w-full max-w-xs">
             <label className="label">
                 <span className="label-text">Password</span>
             </label>
             <input type='password' className='input input-bordered' {...register("password", {required: "Password is required", minLength: {value : 6, message: "Password must be at least 6 characters long"},
            pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8}/, message: "Password must be uppercase number & special characters"}})} />
            
             {errors.password && <p className='text-error'>{errors.password?.message}</p>}

             <label className="label">
                 <span className="label-text">Forget Password ?</span>
             </label>
          </div>
         
         {/* <p>{data}</p> */}
         <input className='btn btn-neutral w-full' value='submit' type="submit" />
         {/* {signUpError && <p className='text-error'>{signUpError}</p>} */}
         <Toaster />
         <p>Already have an account?<Link  className='text-secondary font-bold' to='/login'> Login</Link></p>
         <div className='divider'>OR</div>
         <input className='btn btn-outline w-full' value='Continue with Goggle'  />
         </form>
        
        </div>

          
     </div>
    );
};

export default Signup;