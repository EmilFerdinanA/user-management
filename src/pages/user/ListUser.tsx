import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";

const ListUser = () => {
  const navigate = useNavigate();
  const { users } = useSelector((state: RootState) => state.user);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Daftar Pengguna</h2>
      <button
        onClick={() => navigate("/create")}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 mb-4"
      >
        Tambah User
      </button>

      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-600">
            <th className="px-6 py-3 text-left">No</th>
            <th className="px-6 py-3 text-left">Username</th>
            <th className="px-6 py-3 text-left">Role</th>
            <th className="px-6 py-3 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{user.username}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4 text-center">
                  <a
                    href="update_user.html?id=1"
                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600"
                  >
                    Update
                  </a>
                  <a
                    href="delete_user.html?id=1"
                    className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 ml-2"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListUser;