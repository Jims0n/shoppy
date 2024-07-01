import React from 'react'

const RegisterForm = () => {
  return (
    <div className=' py-6 px-6 lg:px-8 text-left'>
        <h3 className="mb-4 text-xl font-medium text-gray-50">
            Sign in 
        </h3>
        <form className="space-y-6" action="#">
            <div>
                <label 
                
                 className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Your email
                </label>
                <input
                type='email'
                name='email'
                id='email'
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                 placeholder="email"
                 required
                />
            </div>
            <div>
                <label 
                
                 className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Your password
                </label>
                <input
                type='password'
                name='password'
                id='password'
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                 placeholder="........"
                 required
                />
            </div>
            <div className="flex justify-between">
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input
                type='checkbox'
                value=""
                id='remember'
                className=" w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
                 required
                />
                    </div>
                    <label className="ml-2 text-sm font-medium text-gray-900">
                        Remember me
                    </label>
                </div>
                <a href='#' className="text-sm text-blue-700">
                    Lost password
                </a>
            </div>
            <button className="w-full text-white bg-blue-700 hover:bg-blue-400 focus:ring-4
             focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Login to your account
            </button>
        </form>
    </div>
  )
}

export default RegisterForm