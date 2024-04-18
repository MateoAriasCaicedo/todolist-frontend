async function singUp(firstName, lastName, userName, email, password) {
  const user = { firstName, lastName, userName, email, password };

  const response = await fetch("http://localhost:8080/users/singup", {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
    },
    method: "POST",
    body: JSON.stringify(user),
  });

  const json = await response.json();

  if (json.createdID == null) {
    throw new Error(json.message);
  }

  return json.createdID;
}

export default singUp;
