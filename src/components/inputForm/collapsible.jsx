import { useState } from "react";

export default function Collapsible({ name, index = "", ...others }) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <button onClick={toggle}>
        Toggle {name} {index}
      </button>
      {open && <div>{others.children}</div>}
    </div>
  );
}
