import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

interface User {
  name?: string;
  email?: string;
  phone?: string;
  birth_date?: string;
}

export default function Form({ onEdit, setOnEdit, getUsers }: any) {
  const ref = useRef<HTMLFormElement>(null);
  const inputArea = "flex flex-col gap-4";

  const [formData, setFormData] = useState<User>({});

  const handleSubmit = async (e: any, form: HTMLFormElement | null) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user?.name.valueOf ||
      !user?.email.valueOf ||
      !user?.phone.valueOf ||
      !user?.birth_date.valueOf
    ) {
      return toast.warn("Please fill all fields!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8080/" + onEdit.id, {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          birth_date: formData.birth_date,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8080/", {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          birth_date: formData.birth_date,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    // Clear form
    form?.reset();
    setFormData({});
    setOnEdit(null);
    getUsers();
  };

  useEffect(() => {
    if (onEdit) {
      setFormData(onEdit);
    }
  }, [onEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      className="flex flex-col gap-4 p-8"
      ref={ref}
      onSubmit={(e) => handleSubmit(e, ref.current)}
    >
      <div className="flex gap-4">
        <div className={inputArea}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
          />
        </div>
        <div className={inputArea}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
          />
        </div>
        <div className={inputArea}>
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone || ""}
            onChange={handleChange}
          />
        </div>
        <div className={inputArea}>
          <label>Birthday</label>
          <input
            type="date"
            name="birth_date"
            value={formData.birth_date || ""}
            onChange={handleChange}
          />
        </div>
      </div>
      <button type="submit">Save</button>
    </form>
  );
}
