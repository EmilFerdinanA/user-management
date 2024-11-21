const Content = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Daftar Pengguna</h2>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 mb-4">
        Tambah User
      </button>

      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-600">
            <th className="px-6 py-3 text-left">ID</th>
            <th className="px-6 py-3 text-left">Nama</th>
            <th className="px-6 py-3 text-left">Email</th>
            <th className="px-6 py-3 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:bg-gray-50">
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">John Doe</td>
            <td className="px-6 py-4">john.doe@example.com</td>
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
          <tr className="border-b hover:bg-gray-50">
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">Jane Smith</td>
            <td className="px-6 py-4">jane.smith@example.com</td>
            <td className="px-6 py-4 text-center">
              <a
                href="update_user.html?id=2"
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600"
              >
                Update
              </a>
              <a
                href="delete_user.html?id=2"
                className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 ml-2"
              >
                Delete
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Content;
