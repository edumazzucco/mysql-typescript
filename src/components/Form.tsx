import { useRef } from "react";

export default function Form() {
  const ref = useRef<HTMLFormElement>(null);
  const inputArea = "flex flex-col gap-4";
  return (
    <form className="flex flex-col gap-4 p-8" ref={ref}>
      <div className="flex gap-4">
        <div className={inputArea}>
          <label>Name</label>
          <input type="text" name="name" />
        </div>
        <div className={inputArea}>
          <label>Email</label>
          <input type="email" name="email" />
        </div>
        <div className={inputArea}>
          <label>Phone</label>
          <input type="tel" name="phone" />
        </div>
        <div className={inputArea}>
          <label>Birthday</label>
          <input type="date" name="birthday" />
        </div>
      </div>
      <button type="submit">Save</button>
    </form>
  );
}
