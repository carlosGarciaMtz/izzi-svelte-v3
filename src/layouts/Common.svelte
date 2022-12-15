<script>
  import { postLogin } from "../client/ClientLogin";
  import { navigate } from "svelte-routing";
  import { store } from "../Store.svelte";
  let user = "";
  let password = "";

  const submitHandler = async () => {
    if (user === "" || password === "") {
      alert("parametros vacios");
      return;
    }

    let access = await postLogin(user, password);
    $store.user = access;
    navigate("/auth", { replace: true });
  };
</script>

<main class="login-page d-flex justify-content-center alling-content-center">
  <div class="pure-u-1-2">
    <div class="panel text-center">
      <form on:submit|preventDefault={submitHandler}>
        <div class="ctrl-holder m-b-15">
          <label for="user" class="placeholder">Usuario</label>
          <input name="user" type="text" bind:value={user} />
        </div>

        <div class="ctrl-holder m-b-15">
          <label for="user" class="placeholder">Contraseña</label>
          <input name="user" type="pass" bind:value={password} />
        </div>

        <button type="submit" class="pure__button pure__button--primary">
          Iniciar sesión
        </button>
      </form>
    </div>
  </div>
</main>
