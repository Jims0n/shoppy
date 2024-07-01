import React from 'react';
import Link from 'next/link';
//import RegisterForm from './RegisterForm';
import { RxCross1 } from 'react-icons/rx';
import RegisterForm from './RegisterForm';


const Register = ({setShowRegiter}: any) => {
    
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        <div className='w-[600px] flex flex-col'>
            <button  className=' text-white text-xl place-self-end' onClick={() => setShowRegiter(false) }>
                    X
            </button>
            <div className=' bg-white p-2 rounded'>
            <div className=" text-center mb-30">
                  <h3 className="">Sign Up Shofy.</h3>
                  <p>
                    Already have an account?{" "}
                    <span>
                      <Link href="/login">Sign In</Link>
                    </span>
                  </p>
                </div>
            </div>
            <RegisterForm />
        </div>
    </div>
  )
}

export default Register