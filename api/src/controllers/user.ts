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
