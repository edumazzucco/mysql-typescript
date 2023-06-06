import { db } from "../lib/db";

export const getUsers = (_: any, res: any) => {
  const q = "SELECT * FROM users";

  db.query(q, (err: NodeJS.ErrnoException | null, data: any[]) => {
    if (err) {
      console.error("Error executing the query:", err);
      return res
        .status(500)
        .json({ error: "An error occurred while executing the query." });
    }
    return res.status(200).json(data);
  });
};

export const addUser = (req: any, res: any) => {
  const { name, email, phone, birth_date } = req.body;

  const q =
    "INSERT INTO users(`name`, `email`, `phone`, `birth_date`) VALUES (?, ?, ?, ?)";

  db.query(
    q,
    [name, email, phone, birth_date],
    (err: NodeJS.ErrnoException | null) => {
      if (err) {
        console.error("Error executing the query:", err);
        return res
          .status(500)
          .json({ error: "An error occurred while saving." });
      }
      return res.status(200).json("User saved successfully.");
    }
  );
};

export const updateUser = (req: any, res: any) => {
  const { name, email, phone, birth_date } = req.body;
  const { id } = req.params;

  const q =
    "UPDATE users SET `name` = ?, `email` = ?, `phone` = ?, `birth_date` = ? WHERE id = ?";

  db.query(
    q,
    [name, email, phone, birth_date, id],
    (err: NodeJS.ErrnoException | null) => {
      if (err) {
        console.error("Error executing the query:", err);
        return res
          .status(500)
          .json({ error: "An error occurred while updating." });
      }
      return res.status(200).json("User updated successfully.");
    }
  );
};

export const deleteUser = (req: any, res: any) => {
  const { id } = req.params;

  const q = "DELETE FROM users WHERE id = ?";

  db.query(q, [id], (err: NodeJS.ErrnoException | null) => {
    if (err) {
      console.error("Error executing the query:", err);
      return res
        .status(500)
        .json({ error: "An error occurred while deleting." });
    }
    return res.status(200).json("User deleted successfully.");
  });
};
