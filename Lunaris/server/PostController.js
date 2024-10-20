import Post from "./Post.js";
import PostService from "./PostService.js";
import FileService from "./fileService.js"; // Путь должен быть корректным

class PostController {
  async create(req, res) {
    try {
      // Проверка на наличие файла
      if (!req.files || !req.files.picture) {
        return res.status(400).json({ message: "Файл не найден" });
      }

      console.log("Файл для сохранения:", req.files.picture); // Отладочное сообщение

      // Сохраняем файл и дожидаемся завершения
      const pictureName = await FileService.saveFile(req.files.picture);
      console.log("Имя сохранённого файла:", pictureName); // Отладочное сообщение

      // Создание поста с использованием данных из тела запроса и имени файла
      const post = await PostService.create({
        ...req.body,
        picture: pictureName,
      });

      console.log("Созданный пост:", post); // Отладочное сообщение
      res.status(201).json(post); // Возвращаем созданный пост с статусом 201
    } catch (e) {
      console.error("Ошибка при создании поста:", e); // Отладочное сообщение
      res
        .status(500)
        .json({ message: "Ошибка создания поста", error: e.message });
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async update(req, res) {
    try {
      const updatedPost = await PostService.update(req.body);
      return res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async delete(req, res) {
    try {
      const post = await PostService.delete(req.params.id); // Исправлено на delete
      if (!post) {
        return res.status(404).json({ message: "Пост не найден" });
      }
      return res.json({ message: "Пост удален" });
    } catch (e) {
      res
        .status(500)
        .json({ message: "Ошибка удаления поста", error: e.message });
    }
  }
}

export default new PostController();
