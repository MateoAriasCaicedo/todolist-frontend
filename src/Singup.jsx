import { useContext, useState } from "react";
import singUp from "./js/singUp";
import ErorrPopup from "./ErrorPopup";
import { AuthContext } from "./App";
import { useNavigate } from "react-router";

function Singup() {
  const [singupError, setSingupError] = useState(false);
  const authContext = useContext(AuthContext);
  const navigation = useNavigate();

  async function handleOnSubmit(event) {
    event.preventDefault();

    const firstName = event.target[0].value;
    const lastName = event.target[1].value;
    const userName = event.target[2].value;
    const email = event.target[3].value;
    const password = event.target[4].value;

    try {
      const result = await singUp(
        firstName,
        lastName,
        userName,
        email,
        password
      );
      authContext.setAuthContext({ userID: result });
      navigation("/dashboard");
    } catch (error) {
      console.log(error.message);
      setSingupError(true);
    }
  }

  return (
    <>
      {singupError ? <ErorrPopup message="error!" /> : false}
      <form className="form-registrer" onSubmit={handleOnSubmit}>
        <div className="nombre-apellidos-container">
          <input
            className="controls"
            type="text"
            name="text"
            id="nombres"
            placeholder="your name"
            required
            minLength="3"
          />
          <input
            className="controls"
            type="text"
            name="text"
            id="apellidos"
            placeholder="your last name"
            required
            minLength="3"
          />
        </div>
        <input
          className="controls"
          type="text"
          name="text"
          id="nombreUsuario"
          placeholder="your user name"
          required
          minLength="3"
        />
        <input
          className="controls"
          type="text"
          name="email"
          id="correo"
          placeholder="your email"
        />
        <input
          className="controls"
          type="password"
          name="password"
          id="contraseña"
          placeholder="your password"
        />
        <input className="botons" type="submit" value="create an acount" />
        <p>
          <a href="link"> Do you already have an account?</a>
        </p>
      </form>
    </>
  );
}

export default Singup;
