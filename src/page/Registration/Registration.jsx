import { Link } from "react-router-dom";


const Registration = () => {
    return (
        <div className="flex justify-center my-10">
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Registration now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <form>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" required className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" required className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-secondary">Registration</button>
          <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Already have an account?
           <Link to="/login">
           <a
              className="font-medium text-pink-500 transition-colors hover:text-blue-700"
              href="#"
            >
            Login
            </a>
           </Link>
          </p>
        </div>
      </form>
      </div>
    </div>
  </div>
</div>
       </div>
    );
};

export default Registration;