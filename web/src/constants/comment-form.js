import React, { useState } from "react";
import firebase from "../utils/firebase";
 // Путь к вашему файлу firebase.js

function CommentForm() {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const commentData = {
        text: comment,
        author: "Имя автора", // Замените на имя автора
        // Другие поля вашего комментария
      };

      // Добавить комментарий в коллекцию "comments" в Firestore
      await addCommentToFirestore(commentData);

      alert("Комментарий успешно отправлен на сервер!");
      setComment(""); // Очистить поле ввода после отправки
    } catch (error) {
      console.error("Ошибка при отправке комментария на сервер:", error);
      alert("Произошла ошибка при отправке комментария на сервер.");
    }
  };

  // Функция для добавления комментария в Firestore
  const addCommentToFirestore = (commentData) => {
      const db = firebase.firestore();
      console.log("Firestore initialized:", db);  
    return db
      .collection("comments")
      .add(commentData)
      .then((docRef) => {
        console.log("Комментарий успешно добавлен с ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Ошибка при добавлении комментария: ", error);
      });
  };

  return (
    <div>
      <h2>Оставить комментарий</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='comment'>Комментарий:</label>
          <textarea
            id='comment'
            name='comment'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows='4'
          />
        </div>
        <div>
          <button type='submit'>Отправить</button>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
