import { useState } from "react";

const SignUpForm = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    userName: "",
    passWord: "",
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-200">
      <form
        className="border-white gap-3 flex max-w-xl w-full shadow-2xl pl-4 flex-col rounded-xl p-4 bg-white"
        action=""
        onSubmit={handleFormSubmit}
      >
        <h1 className="text-center font-medium text-3xl  pb-3 ">
          Create Account
        </h1>
        <label className="text-lg cursor-pointer" htmlFor="fullname">
          Full Name :-
        </label>
        <input
          value={user.fullName}
          onChange={handleInputChange}
          name="fullName"
          className="border-white hover:bg-gray-300 bg-gray-200 rounded-md p-2 "
          type="text"
          placeholder="enter fullname"
          id="fullname"
          autoComplete="on"
          required
        />
        <label className="text-lg cursor-pointer" htmlFor="email">
          Email :-
        </label>
        <input
          className="border-white bg-gray-200  hover:bg-gray-300 rounded-md p-2 "
          type="text"
          placeholder="enter email"
          id="email"
          value={user.email}
          onChange={handleInputChange}
          name="email"
          autoComplete="on"
          required
        />
        <label className="text-lg cursor-pointer" htmlFor="username">
          User Name :-
        </label>
        <input
          className="border-white bg-gray-200  hover:bg-gray-300 rounded-md p-2 "
          type="text"
          placeholder="enter username"
          id="username"
          value={user.userName}
          onChange={handleInputChange}
          name="userName"
          autoComplete="on"
          required
        />
        <label className="text-lg cursor-pointer" htmlFor="password">
          Password :-
        </label>
        <input
          className="border-white bg-gray-200  hover:bg-gray-300 rounded-md p-2 "
          type="password"
          placeholder="enter password"
          id="password"
          value={user.passWord}
          onChange={handleInputChange}
          name="passWord"
          autoComplete="on"
          required
        />
        <div className="flex justify-center">
          <button className="bg-blue-500 cursor-pointer text-white hover:bg-blue-600 text-xl p-1.5 px-4 mt-3  rounded ">
            Register
          </button>
        </div>
      </form>
      <div className="mt-3 text-xl">
        <h1>
          Already have an account?{" "}
          <a
            className="text-blue-600 hover:underline hover:text-blue-800"
            href="#"
          >
            Login Here
          </a>
        </h1>
      </div>
    </div>
  );
};

export default SignUpForm;
