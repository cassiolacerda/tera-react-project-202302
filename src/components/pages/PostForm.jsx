import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Default from "../templates/Default";
import AppLoading from "../organisms/AppLoading";

export default function PostForm() {
  const { userId } = useParams();

  const [isLoading, setIsLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);

    fetch(`https://63cf09718a780ae6e6710dbe.mockapi.io/users/${userId}/posts`, {
      method: "POST",
      body: JSON.stringify({ title: title, content: content }),
      headers: { "Content-type": "application/json" },
    }).then(() => {
      setIsLoading(false);
      setTitle("");
      setContent("");
    });
  };

  return isLoading ? (
    <AppLoading />
  ) : (
    <Default>
      <div className="create-post">
        <h1>Criar</h1>

        <form onSubmit={handleFormSubmit} className="create-post__form">
          <div className="create-post__form-name">
            <label htmlFor="name">Título</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>

          <div className="create-post__form-content">
            <label htmlFor="content">Conteúdo</label>
            <textarea
              name="content"
              id="content"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            ></textarea>
          </div>

          <button className="button-primary">Salvar</button>
        </form>
      </div>
    </Default>
  );
}
