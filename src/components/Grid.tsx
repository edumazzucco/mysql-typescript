import { FaTrash, FaEdit } from "react-icons/fa";

export default function Grid({ users }: any) {
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
      <tbody className="flex w-full justify-between">
        {users &&
          users.map((user: any, index: number) => (
            <tr key={index} className="flex w-full justify-between">
              <td>{user?.name}</td>
              <td>{user?.email}</td>
              <td>{user?.phone}</td>
              <td>{new Date(user?.birth_date).toLocaleDateString()}</td>
              <td>
                <FaEdit />
              </td>
              <td>
                <FaTrash />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
