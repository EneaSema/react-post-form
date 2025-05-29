import { useState, useEffect } from "react";
import axios from "axios";

const urlPosts = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

function App() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });
  console.log(formData);

  ("author");

  // useEffect(() => {
  //   axios.post(urlPosts).then((response) => {
  //     console.log(response);
  //     setFormData(response.data);
  //   });
  // }, []);

  return (
    <>
      <div className="container">
        <h1>Post Form</h1>
        <h1>{JSON.stringify(formData)}</h1>
        <form
          className="form-post"
          onSubmit={(event) => {
            event.preventDefault();
            console.log("clicked submit");
          }}
          name=""
        >
          <label htmlFor="post-author">
            <h3>Autore del post</h3>

            <input
              onChange={(e) => {
                const newValue = e.target.value;
                setFormData({
                  ...formData,
                  author: newValue,
                });
              }}
              required
              type="text"
              placeholder="post-author"
              value={formData.author}
            />
          </label>

          <label htmlFor="post-title">
            <h3>Titolo del post</h3>
            <input
              onChange={(e) => {
                const newValue = e.target.value;
                setFormData({
                  ...formData,
                  title: newValue,
                });
              }}
              required
              type="text"
              placeholder="post-title"
              value={formData.title}
            />
          </label>
          <label htmlFor="post-body">
            <h3>Contenuto del post</h3>

            <textarea
              cols="100"
              rows="10"
              onChange={(e) => {
                const newValue = e.target.value;
                setFormData({
                  ...formData,
                  body: newValue,
                });
              }}
              className="text-area-post-body"
              name="post-body"
              placeholder="inserisci il testo del post"
              required
              value={formData.body}
            ></textarea>
          </label>
          <label htmlFor="post-public">
            <h3>Post pubblicato</h3>
            <input
              onChange={(e) => {
                const newValue = e.target.value;
                setFormData({
                  ...formData,
                  public: newValue,
                });
              }}
              type="checkbox"
              onClick={(event) => {
                event.preventDefault();
                console.log("clicked submit");
              }}
              name={formData.public}
            />
          </label>
          <button className="btn">Condividi</button>
        </form>
      </div>
    </>
  );
}

export default App;
