import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrUpdate } from "../../store/user";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../store";

const Update = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state: RootState) => state.user);
  const { id } = useParams();

  const [form, setForm] = useState({
    id: 0,
    username: "",
    password: "",
    role: "admin",
  });

  useEffect(() => {
    const user = users.find((user) => user.id === +id!);
    if (user) setForm(user);
  }, [id, users]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(createOrUpdate(form));
    navigate("/", { replace: true });
  };

  return (
    <div className="font-sans h-screen">
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-6">Tambah User</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-semibold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Masukkan username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-gray-700 font-semibold mb-2"
            >
              Role
            </label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="admin">Admin</option>
              <option value="customer">Customer</option>
            </select>
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              value={form.password}
              onChange={handleChange}
              name="password"
              placeholder="Masukkan password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4 text-center">
            <button
              onClick={handleSubmit}
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Tambah User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
