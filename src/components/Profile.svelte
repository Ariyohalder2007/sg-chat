<script>
  export let user;
  import { auth } from "./../firebase";
</script>

<div class="card-header d-flex justify-content-between align-items-center p-3">
  <h5 class="mb-0">{user.displayName}</h5>
  <button
    type="button"
    class="btn btn-danger btn-sm"
    data-mdb-ripple-color="dark"
    on:click={() => {
      auth.signOut();
    }}>Sign Out</button
  >
</div>
