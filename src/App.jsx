import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const urlPosts = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

  const [postRiceved, setPostRiceved] = useState([
    {
      author: "",
      title: "",
      body: "",
      public: "",
      id: 0,
    },
  ]);

  useEffect(() => {
    axios.post(urlPosts).then((response) => {
      console.log(response);
      setPostRiceved(response.data);
    });
  }, []);

  return (
    <>
      <div className="container">
        <h1>Post Form</h1>
        <form className="form-post" onSubmit={""} name="">
          <label htmlFor="post-author">
            <h3>Autore del post</h3>
            <input
              type="text"
              placeholder="post-author"
              value={postRiceved.author}
            />
          </label>

          <label htmlFor="">
            <h3>Codice identificativo</h3>
            <input
              type="number"
              placeholder="post-title"
              value={postRiceved.id}
            />
          </label>
          <label htmlFor="post-title">
            <h3>Titolo del post</h3>
            <input
              type="text"
              placeholder="post-title"
              value={postRiceved.title}
            />
          </label>
          <label htmlFor="post-body">
            <h3>Contenuto del post</h3>

            <textarea
              cols="100"
              rows="10"
              className="text-area-post-body"
              name="post-body"
              id=""
              placeholder="inserisci il testo del post"
              value={postRiceved.body}
            ></textarea>
          </label>
          <label htmlFor="post-public">
            <h3>Post pubblicato</h3>
            <input type="checkbox" onClick={""} name={postRiceved.public} />
          </label>
          <button className="btn">Condividi</button>
        </form>
      </div>
    </>
  );
}

export default App;
