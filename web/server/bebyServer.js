const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser"); 

const app = express();

// Разрешаем все запросы с любого источника
app.use(cors());

// Это ваш существующий код
app.use(bodyParser.json()); // Позволяет парсить JSON в запросах

// Обработчик POST-запроса для комментариев
app.post("/api/comments", (req, res) => {
  const comment = req.body.comment; // Получаем комментарий из тела запроса
  // Делаем что-то с комментарием, например, сохраняем его в базе данных
  // ...

  // Отправляем ответ об успешном создании комментария
  res.status(201).json({ message: "Comment created successfully" });
});

// Запускаем сервер на порту 80 (или любом другом порту)
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
