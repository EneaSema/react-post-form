import { useState } from "react";

function App() {
  const urlPosts = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

  return (
    <>
      <div className="container">
        <h1>Post Form</h1>
        <form className="form-post" onSubmit={""}>
          <label htmlFor="">
            <h3>Autore del post</h3>
            <input type="text" placeholder="post-author" />
          </label>
          <label htmlFor="">
            <h3>Titolo del post</h3>
            <input type="text" placeholder="post-title" />
          </label>
          <label htmlFor="">
            <h3>Contenuto del post</h3>

            <textarea
              name="post-body"
              id=""
              placeholder="inserisci il testo del post"
            ></textarea>
          </label>
          <label htmlFor="">
            <h3>Condividi il post</h3>
            <input type="checkbox" onClick={""} />
          </label>
        </form>
      </div>
    </>
  );
}

export default App;
