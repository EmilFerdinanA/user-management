import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/auth";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", password: "" });

  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { users } = useSelector((state: RootState) => state.user);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const payload = { ...form, users };
    dispatch(login(payload));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex flex-col gap-8 justify-center items-center bg-gray-500">
      <img className="h-36 w-auto" src="logo.png" alt="logo" />
      <h4 className="text-5xl font-semibold">Log in to your account</h4>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <input
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
          required
          className="border border-gray-300 bg-white rounded-sm px-[1.2rem] py-[0.8rem] shadow-sm"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="border border-gray-300 bg-white rounded-sm px-[1.2rem] py-[0.8rem] shadow-sm"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-sm hover:bg-blue-700 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
