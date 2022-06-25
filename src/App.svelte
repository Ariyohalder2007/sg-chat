<script>
  import { auth, googleProvider, db } from "./firebase";
  import ChatMessage from "./components/ChatMessage.svelte";
  import Profile from "./components/Profile.svelte";
  let user;
  let messagesList = [];
  let messageRef = db.collection("messages");
  let message = "Some thing";
  let unsubscribe;
  auth.onAuthStateChanged((usr) => {
    user = usr;
    if (user) {
      unsubscribe = messageRef
        .orderBy("createdAt")
        .onSnapshot((querySnapshot) => {
          messagesList = querySnapshot.docs.map((doc) => {
            return doc.data();
          });
        });
    } else {
      unsubscribe && unsubscribe();
    }
  });
  function login() {
    auth.signInWithPopup(googleProvider);
  }
  function sendMsg() {
    if (user && message) {
      messageRef.add({
        message: message,
        sender: {
          displayName: user.displayName,
          photoUrl: user.photoURL,
          uid: user.uid,
        },
        createdAt: Date.now(),
      });
      message = "";
    }
  }
</script>

{#if user}
  <!-- <ul>
      {#if messagesList}
        {#each messagesList as msg}
          <ChatMessage message={msg} />
        {/each}
      {/if}
    </ul>

    <div class="d-flex fixed-bottom">
      <input type="text" class="form-control m-2" bind:value={message} />
      <button class="btn btn-outline-primary m-2" on:click={sendMsg}
        >Send🕊️</button
      >
    </div> -->

  <section style="background-color: #eee;">
    <div class="container py-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-6">
          <div class="card" id="chat2">
            <Profile {user} />

            <div
              class="card-body overflow-auto"
              data-mdb-perfect-scrollbar="true"
              style=" height: 70vh"
            >
              {#if messagesList}
                {#each messagesList as msg}
                  <ChatMessage
                    message={msg}
                    isMine={msg.sender.uid == user.uid}
                  />
                {/each}
              {/if}
            </div>
            <div
              class="card-footer text-muted d-flex justify-content-start align-items-center p-3"
            >
              <img
                src={user.photoURL}
                alt="avatar"
                class="rounded-circle mx-2"
                style="width: 40px; height: 100%;"
              />
              <input
                type="text"
                class="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Type message"
                bind:value={message}
              />

              <button class="ms-3 btn btn-outline-primary" on:click={sendMsg}
                >Send🕊️</button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
{:else}
  <button class="btn btn-primary" on:click={login}>Login with Google</button>
{/if}

<style>
  #chat2 .form-control {
    border-color: transparent;
  }

  #chat2 .form-control:focus {
    border-color: transparent;
    box-shadow: inset 0px 0px 0px 1px transparent;
  }
</style>
