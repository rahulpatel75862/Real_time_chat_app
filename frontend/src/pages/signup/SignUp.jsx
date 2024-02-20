import GenderCheckBox from "./GenderCheckBox"


const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-green-500 ml-2">ChatApp</span>
        </h1>
        <form>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-gray-100 label-text">Full Name</span>
            </label>
            <input type="text" placeholder="John Doe" className="w-full input bg-gray-700 input-bordered h-10" />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-gray-100 label-text">username</span>
            </label>
            <input type="text" placeholder="johndoe" className="w-full input bg-gray-700 input-bordered h-10" />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-gray-100 label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter pasword" className="w-full input bg-gray-700 input-bordered h-10" />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-gray-100 label-text"> Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm pasword" className="w-full input bg-gray-700 input-bordered h-10" />
          </div>
          <GenderCheckBox/>
          <a href="#" className="text-sm text-gray-100 hover:underline hover:text-blue-600 mt-2 inline-block">
            { "Already" } have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2 bg-gray-700 border-gray-700">SignUp</button>
          </div>
        </form>
        </form>
      </div>
    </div>
  )
}

export default SignUp