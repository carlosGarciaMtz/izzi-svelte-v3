<script>
  import { Router, Link, Route } from "svelte-routing";
  import { navigate } from "svelte-routing";
  import { store } from "../Store.svelte";
  import Blog from "../views/Blog.svelte";
  import Counter from "../views/Counter.svelte"

  $:if(!$store.user && !$store.user?.token) {
    navigate("/common",{replace:false})
  }

</script>

<div>
  <nav>
    <Link to="/common">login</Link>
    <Link to="/auth/about">About</Link>
    <Link to="/auth/counter">counter</Link>
  </nav>
  <main>
    <Router url="auth">
      <Route path="blog" component="{Blog}" />
      <Route path="counter" component="{Counter}" />
    </Router>
  </main>
</div>