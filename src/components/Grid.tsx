import { FaTrash, FaEdit } from "react-icons/fa";

export default function Grid({ users }: any) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Birthday</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((user: any, index: number) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.birthday}</td>
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
