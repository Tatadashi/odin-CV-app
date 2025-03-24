import { useState } from "react";

export default function Collapsible({ name, index = "", formName, ...others }) {
  const [open, setOpen] = useState(false);

  const toggle = (e) => {
    e.target.style.display = !open ? "none" : "inline-block";

    //don't want to manipulate same state on multiple forms, will cause confusion
    const buttons = document.querySelectorAll(`ul.${formName} button`);
    buttons.forEach((button) => {
      button.style.display = !open ? "none" : "inline-block";
    });

    //hide padding on the other lists not shown (their buttons are hidden from last step), responsibility is exception since part of same form as experience
    const lists = document.querySelectorAll(
      `ul.${formName} li:not(.responsibilityForm)`
    );
    lists.forEach((list) => {
      if (!open) {
        list.style.padding =
          list.getAttribute("index") == index ? "10px" : "0px";
      } else {
        list.style.padding = "10px";
      }
    });
    setOpen(!open);
  };

  //need dynamic className to simulate click event from dynamic child component
  let camelCaseName = name.replaceAll(" ", "");
  camelCaseName =
    camelCaseName.slice(0, 1).toLowerCase() + camelCaseName.slice(1) + index;
  return (
    <div className={camelCaseName}>
      <button onClick={(e) => toggle(e)}>
        Toggle {name} {index}
      </button>
      {open && <div>{others.children}</div>}
    </div>
  );
}
