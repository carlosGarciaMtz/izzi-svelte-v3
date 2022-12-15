export const postLogin = async (user, pass) => {
  let myHeaders = new Headers();
  myHeaders.append("x-access-origin", "IZZI");
  myHeaders.append("x-access-channel", "PORTALOC");
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    usuario: user,
    contrasena: pass,
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };
  requestOptions.redirect = "follow";

  let endpoint = `${import.meta.env.VITE_API_URL}/auth/loginOC`;

  const resp = await fetch(endpoint, requestOptions)
    .then((response) => response.json())
    .then((result) => result.response)
    .catch((error) => console.error("error", error));

  return resp;
};
