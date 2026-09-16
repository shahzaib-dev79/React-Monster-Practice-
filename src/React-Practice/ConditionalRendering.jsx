export default function PasswordValidation({ isValid }) {
  return isValid ? <h1>Password is Valid</h1> : <h1>Invalid Password</h1>;
}

export function AndOperatorRendering() {
  const items = ["bag", "Ball", "Nail Paint"];
  return (
    <div>
      <h1>Cart</h1>
      {items.length > 0 && <h2>You have {items.length} items in your Cart</h2>}
      <h4>Products</h4>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function Weather({ temp }) {
  if (temp < 15) {
    return <h1>It's too cold outside</h1>;
  } else if (temp >= 15 && temp < 25) {
    return <h1>It's Nice Outside</h1>;
  }
  return <h1>it's hot Outside</h1>;
}

export function UserStatus({ isAdmin, loggedIn }) {
  return isAdmin && loggedIn ? (
    <h1>Welcome Admin</h1>
  ) : !isAdmin && loggedIn ? (
    <h1>Welcome User</h1>
  ) : (
    <h1>UnAuthorized</h1>
  );
}
