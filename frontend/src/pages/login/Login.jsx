

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-W-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-green-500">ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-gray-100 label-text">Username</span>
            </label>
            <input type="text" placeholder="Enter username" className="w-full input bg-gray-700 input-bordered h-10" />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-gray-100 label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter pasword" className="w-full input bg-gray-700 input-bordered h-10" />
          </div>
          <a href="#" className="text-sm text-gray-100 hover:underline hover:text-blue-600 mt-4 inline-block">
            { "Don't" } have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2 bg-gray-700 border-gray-700">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login