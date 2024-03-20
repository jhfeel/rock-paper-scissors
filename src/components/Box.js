import React from "react";

const initialImg =
  "https://plus.unsplash.com/premium_photo-1678048604398-f42dda6997bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cXVlc3Rpb24lMjBtYXJrfGVufDB8fDB8fHww";

const Box = (props) => {
  return (
    <div className={`box box-${props.result}`}>
      <h1>{props.title}</h1>
      <img
        className="item-img"
        src={props.item ? props.item.img : initialImg}
        alt="가위바위보"
      />
      <h2>{props.result}</h2>
    </div>
  );
};

export default Box;
