import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");

  const handleFormSubmit = () => {
    // e.preventDefault();
    const formData = {
      email,
      passWord,
    };
    console.log(formData);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen  bg-gray-100 font-roboto">
      <form
        action=""
        onSubmit={handleFormSubmit}
        className="flex flex-col bg-white shadow-xl text-xl rounded-2xl p-8 w-full gap-3  max-w-md "
      >
        <h1 className="text-3xl font-semibold text-center mb-4">
          Login to Exam Portal
        </h1>
        <label className="cursor-pointer" htmlFor="email">
          Email :-{" "}
        </label>
        <input
          placeholder="enter email"
          className="border-white hover:bg-gray-300  p-1.5 rounded-md bg-gray-200"
          id="email"
          type="text"
          required
          autoComplete="on"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label className="cursor-pointer" htmlFor="password">
          Password :-{" "}
        </label>
        <input
          placeholder="enter password"
          className="border-white  hover:bg-gray-300  p-1.5 rounded-md bg-gray-200"
          id="password"
          type="password"
          required
          autoComplete="on"
          value={passWord}
          onChange={(e) => {
            setPassWord(e.target.value);
          }}
        />
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-400 cursor-pointer w-full hover:bg-blue-500 p-2 flex justify-center text-white rounded-lg"
          >
            Login
          </button>
        </div>
      </form>
      <div className="mt-3 text-xl">
        <h1>
          New User?{" "}
          <a
            className="text-blue-500  hover:text-blue-700 hover:underline"
            href=""
          >
            Register Here
          </a>
        </h1>
      </div>
    </div>
  );
};
 
export default LoginForm;
