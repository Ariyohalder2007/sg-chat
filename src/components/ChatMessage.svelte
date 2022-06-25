<script>
  export let message;
  export let isMine;
  console.log(isMine);
</script>

<!-- <li>
  <img width="32" src={message.sender.photoUrl} alt="" />

  <h4>{message.sender.displayName} : {message.message}</h4>
</li> -->

<div
  class={`d-flex flex-row justify-content-${
    isMine ? "end" : "start"
  } mb-4 pt-1`}
>
  <img
    src={message.sender.photoUrl}
    alt="avatar"
    class="rounded-circle"
    style="width: 45px; height: 100%;"
  />
  <div>
    <p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7;">
      {message.message}
    </p>

    <!-- <p class="small ms-3 mb-3 rounded-3 text-muted">23:58</p> -->
  </div>
</div>
