import Post from "./Post.js";
import PostService from "./ServPostService.js";
import FileService from "./fileService.js";

class PostController {
  async create(req, res) {
    try {
      if (!req.files || !req.files.picture) {
        return res.status(400).json({ message: "Файл не найден" });
      }

      console.log("Файл для сохранения:", req.files.picture);
      const pictureName = await FileService.saveFile(req.files.picture);
      console.log("Имя сохранённого файла:", pictureName);

      const post = await PostService.create({
        ...req.body,
        picture: pictureName,
      });

      console.log("Созданный пост:", post);
      res.status(201).json(post);
    } catch (e) {
      console.error("Ошибка при создании поста:", e);
      res
        .status(500)
        .json({ message: "Ошибка создания поста", error: e.message });
    }
  }

  async getAll(req, res) {
    try {
      // Извлекаем параметры запроса
      const limit = parseInt(req.query._limit) || 10; // По умолчанию 10
      const page = parseInt(req.query._page) || 1; // По умолчанию 1
      const sort = req.query._sort || "id"; // По умолчанию по id
      const order = req.query._order === "desc" ? "desc" : "asc"; // Сортировка по убыванию или возрастанию

      console.log(
        `Получение постов: limit=${limit}, page=${page}, sort=${sort}, order=${order}`
      );

      // Получаем посты из сервиса
      const posts = await PostService.getAll(limit, page, sort, order);

      console.log("Посты получены:", posts);
      return res.json(posts);
    } catch (e) {
      console.error("Ошибка при получении постов:", e);
      res
        .status(500)
        .json({ message: "Ошибка получения постов", error: e.message });
    }
  }

  async getOne(req, res) {
    try {
      const postId = req.params.id;
      console.log(`Запрос на получение поста с ID: ${postId}`);

      const post = await PostService.getOne(postId);
      if (!post) {
        return res.status(404).json({ message: "Пост не найден" });
      }

      console.log("Пост найден:", post);
      return res.json(post);
    } catch (e) {
      console.error(`Ошибка при получении поста с ID ${req.params.id}:`, e);
      res
        .status(500)
        .json({ message: "Ошибка получения поста", error: e.message });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ message: "ID поста не указан" });
      }
      if (!req.body) {
        return res.status(400).json({ message: "Нет данных для обновления" });
      }

      let pictureName;
      if (req.files && req.files.picture) {
        pictureName = await FileService.saveFile(req.files.picture);
        req.body.picture = pictureName;
      }

      const updatedPost = await PostService.update(req.params.id, req.body);
      if (!updatedPost) {
        return res.status(404).json({ message: "Пост не найден" });
      }

      console.log("Обновленный пост:", updatedPost);
      return res.json(updatedPost);
    } catch (e) {
      console.error("Ошибка при обновлении поста:", e);
      res
        .status(500)
        .json({ message: "Ошибка обновления поста", error: e.message });
    }
  }

  async delete(req, res) {
    try {
      const postId = req.params.id;
      console.log(`Запрос на удаление поста с ID: ${postId}`);

      const post = await PostService.delete(postId);
      if (!post) {
        return res.status(404).json({ message: "Пост не найден" });
      }

      console.log("Пост удален:", post);
      return res.json({ message: "Пост удален" });
    } catch (e) {
      console.error("Ошибка удаления поста:", e);
      res
        .status(500)
        .json({ message: "Ошибка удаления поста", error: e.message });
    }
  }
}

export default new PostController();
