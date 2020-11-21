import React from "react";

export default function ex4_destructuring({
  usernameHint,
  passwordHint,
  handleSubmit,
}) {
  const product = { name: "React", price: 1000 };
  const { name, price } = product;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="usrname"
          id="username"
          placeholder={usernameHint}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          placeholder={passwordHint}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h1>
        Name: {name} Price: {price}
        {/* Name: {product.name} Price: {product.price}  */}
      </h1>
    </div>
  );
}
