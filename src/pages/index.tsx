import Grid from "@/components/Grid";
import Form from "../components/Form";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export default function Home() {
  const [users, setUsers] = useState<string[]>([]);
  const [onEdit, setOnEdit] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8080");
        setUsers(res.data.sort((a: any, b: any) => (a.name > b.name ? 1 : -1)));
        toast.success("Retrived users from DB!");
      } catch (error) {
        console.error(error);
        toast.error("Failed to retrive users from DB. Try again later!");
      }
    };
    if (!mounted) {
      getUsers();
      setMounted(true);
    }
  }, [mounted]);

  console.log("users: ", users);

  return (
    <main>
      <Form />
      <Grid users={users} />
    </main>
  );
}
