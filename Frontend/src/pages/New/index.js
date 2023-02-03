import React, { useState } from "react";
import api from "../../services/api";
import "./style.css";
import Header from "../../components/header";

const Index = () => {
  const [dados, setDados] = useState({
    image: null,
    author: "",
    place: "",
    description: "",
    hashtags: "",
  });
  const handleSubmit = async () => {
    try {
      const data = new FormData();

      data.append("image", dados.image);
      data.append("author", dados.author);
      data.append("place", dados.place);
      data.append("description", dados.description);
      data.append("hashtags", dados.hashtags);

      const response = await api.post("posts", data, {
        transformRequest: [
          function (data, headers) {
            return data;
          },
        ],
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCharge = (e) => {
    console.log(e.target.value);
    setDados({ ...dados, [e.target.name]: e.target.value });
  };
  const handleImage = (e) => {
    setDados({ image: e.target.files[0] });
  };
  return (
    <>
      <Header />
      <div className="new-post">
        <input type="file" onChange={handleImage} />
        <input
          type="text"
          name="author"
          placeholder="Author do post"
          className="text"
          onChange={handleCharge}
          value={dados.author}
        />
        <input
          type="text"
          name="place"
          placeholder="Place do post"
          className="text"
          onChange={handleCharge}
          value={dados.place}
        />
        <input
          type="text "
          className="text"
          name="description"
          placeholder="Description do post"
          onChange={handleCharge}
          value={dados.description}
        />
        <input
          type="text"
          className="text"
          name="hashtags"
          placeholder="Hashtags do post"
          onChange={handleCharge}
          value={dados.hashtags}
        />
        <a href="/">
          <button className="enviar" onClick={handleSubmit}>
            Enviar
          </button>
        </a>
      </div>
    </>
    //aula pausada no minuto 43:04 aula 3
  );
};

export default Index;
