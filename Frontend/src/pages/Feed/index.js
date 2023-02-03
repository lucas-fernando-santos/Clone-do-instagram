import React, { Component, useEffect, useState } from "react";
import api from "../../services/api";
import "./style.css";
import Header from "../../components/header";
import Like from "../../assets/like.svg";
import io from "socket.io-client";
import Likeactived from "../../assets/coracao.png";
import comment from "../../assets/comment.svg";
import send from "../../assets/send.svg";

const Feed = () => {
  const [feed, setFeed] = useState([]);
  const [like, setLike] = useState(0);
  const [click, SetClick] = useState(0);

  const action = {
    likeactive: Likeactived,
    likedesativ: Like,
  };
  const setliked = () => {
    setLike(3);
    setTimeout(() => {
      setLike(0);
    }, 500);
  };

  const fetchPosts = async () => {
    const response = await api.get("posts");
    console.log(response);
    setFeed(response.data);
  };
  const teste = () => {
    console.log(feed.data.map);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  const handleLike = (id) => {
    registerToSocket();
    api.post(`/posts/${id}/like`);
    setliked();
  };
  const registerToSocket = () => {
    const socket = io("http://192.168.149.82:3333");
    socket.on("post", (newPost) => {
      setFeed({ feed: [newPost, ...feed] });
    });
    socket.on("like", ({ post: likedPost }) => {
      console.log(likedPost);
      const newfeed = feed.map((post) => {
        return post.id === likedPost.id ? likedPost : post;
      });
      setFeed(newfeed);
    });
  };
  const likedClick = () => {
    console.log((alert = "funcionando"));
    SetClick(2);
    setTimeout(() => {
      SetClick(0);
    }, 500);
  };
  return (
    <>
      <Header />
      <section className="postList">
        {feed.length > 0 &&
          feed.map((post) => (
            <article key={post.__id}>
              <header>
                <div className="user-info">
                  <div className="name">
                    <span>{post.author}</span>
                  </div>
                  <div className="city">
                    <span className="place">{post.place}</span>
                  </div>
                </div>
                <span>...</span>
              </header>
              <button
                onDoubleClick={() => {
                  likedClick();
                  handleLike(post._id);
                }}
              >
                {click > 1 && <div className="likedPostClick">🤍</div>}
                <img
                  src={`http://192.168.149.82:3333/files/${post.image}`}
                  className="imageFeed"
                />
              </button>
              <footer>
                <div className="actions">
                  <button onClick={() => handleLike(post._id)}>
                    <img
                      src={like > 1 ? action.likeactive : action.likedesativ}
                    />
                  </button>
                  <img src={comment} alt="" />
                  <img src={send} alt="" />
                </div>
                <strong>{post.likes}likes</strong>
                <p>
                  {post.description}
                  <span>{post.hashtags}</span>
                </p>
              </footer>
            </article>
          ))}
      </section>
    </>
  );
};

export default Feed;
/* */
