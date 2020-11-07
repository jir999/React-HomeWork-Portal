import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const root = document.body;
const htmlEl = document.createElement("h4");
htmlEl.innerHTML = "afterUseEffect";

const Portal = ({ children, container = root }) => {
  // console.log(container);
  useEffect(() => {
    container.append(htmlEl);
    return () => {
      console.log("removed");
      container.removeChild(htmlEl);
    };
  }, [container]);

  return createPortal(children, container);
};

export default Portal;
