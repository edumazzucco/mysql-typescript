import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Grid({ users, setUsers, setOnEdit }: any) {
  const handleEdit = async (user: any) => {
    setOnEdit(user);
  };

  const handleDelete = async (id: string) => {
    await axios
      .delete(`http://localhost:8080/` + id)
      .then(({ data }) => {
        const newArray = users.filter((user: any) => user.id !== id);
        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));
  };

  return (
    <table className="flex flex-col w-full justify-between text-center">
      <thead className="flex w-full justify-between text-gray-700 text-sm">
        <tr className="flex w-full justify-between">
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Birthday</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody className="flex flex-col w-full justify-between">
        {users &&
          users.map((user: any, index: number) => (
            <tr key={index} className="flex w-full justify-between">
              <td>{user?.name}</td>
              <td>{user?.email}</td>
              <td>{user?.phone}</td>
              <td>{new Date(user?.birth_date).toLocaleDateString()}</td>
              <td>
                <FaEdit onClick={() => handleEdit(user)} />
              </td>
              <td>
                <FaTrash onClick={() => handleDelete(user?.id)} />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
