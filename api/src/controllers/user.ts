import { db } from "../lib/db";

export const getUsers = (_: any, res: any) => {
    const q = "SELECT * FROM users";

    db.query(q, (err: Error, data: string) => {
        if (err) {
            console.error("Error executing the query:", err);
            return res.status(500).json({ error: "An error occurred while executing the query." });
        }
        return res.status(200).json(data);
    });
};

export const addUser = (req: any, res: any) => {
    const { name, email, phone, birth_date } = req.body;

    const q = "INSERT INTO users(`name`, `email`, `phone`, `birth_date`) VALUES (?)";

    // const values = [
    //     req.body.name,
    //     req.body.email,
    //     req.body.phone,
    //     req.body.birth_date
    // ];

    db.query(q, [name, email, phone, birth_date], (err) => {
        if (err) return res.status(500).json({ error: "An error occurred while saving." })
        return res.status(200).json("User saved successfully.");
    });
}

export const updateuser = (req: any, res: any) => {
    const { name, email, phone, birth_date } = req.body;
    const { id } = req.params.id;

    const q = "UPDATE users SET `name` = ?, `email` = ?, `phone` = ?, `birth_date` = ? WHERE id = ?";

    db.query(q, [name, email, phone, birth_date, id], (err) => {
        if (err) return res.status(500).json({ error: "An error occurred while saving." })
        return res.status(200).json("User updated successfully.");
    });
}

export const deleteUser = (req: any, res: any) => {
    const { id } = req.params.id;

    const q = "DELETE FROM users WHERE id = ?";

    db.query(q, [id], (err) => {
        if (err) return res.status(500).json({ error: "An error occurred while deleting." })
        return res.status(200).json("User deleted successfully.");
    });
}
