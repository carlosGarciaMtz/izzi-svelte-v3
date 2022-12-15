<script>
  import { Router, Route } from "svelte-routing";
  import Common from "./layouts/Common.svelte";
  import Auth from './layouts/Auth.svelte';

  export let url = "";
</script>

<Router url="{url}">
    <Route path="/common" component="{Common}"/>
    <Route path="auth/*auth" component="{Auth}"/>
</Router>