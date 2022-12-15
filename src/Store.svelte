<script context="module">

  import {writable} from 'svelte/store'

  export const store = writable({
    user:null,
    cunter:0,
  })

  store.subscribe((value) =>{
    localStorage.setItem('store', JSON.stringify(value))
  })

</script>