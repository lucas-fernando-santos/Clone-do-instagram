import React from "react";
import "./style.css";
import Header from "../../components/header";
import like from "../../assets/like.svg";
import comment from "../../assets/comment.svg";
import send from "../../assets/send.svg";

const index = () => {
  return (
    <>
      <Header />
      <section className="postList">
        <article>
          <header>
            <div className="user-info">
              <span>Lucas Fernando</span>
              <span className="place">Maceio</span>
            </div>
            <span>...</span>
          </header>
          <img
            src="http://localhost:3333/files/batata-crua.jpg"
            alt="fotinha"
          />
          <footer>
            <div className="actions">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>
            <strong>900 likes</strong>
            <p>
              batatas apenas
              <span>#nao sei jao</span>
            </p>
          </footer>
        </article>
        <article>
          <header>
            <div className="user-info">
              <span>Lucas Fernando</span>
              <span className="place">Maceio</span>
            </div>
            <span>...</span>
          </header>
          <img
            src="http://localhost:3333/files/batata-crua.jpg"
            alt="fotinha"
          />
          <footer>
            <div className="actions">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>
            <strong>900 likes</strong>
            <p>
              batatas apenas
              <span>#nao sei jao</span>
            </p>
          </footer>
        </article>
      </section>
    </>
  );
};

export default index;
