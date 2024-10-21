import PostService from "./PostService.js";
import FileService from "./fileService.js";

class PostController {
  async create(req, res) {
    try {
      if (!req.files || !req.files.picture) {
        return res.status(400).json({ message: "Файл не найден" });
      }

      const pictureName = await FileService.saveFile(req.files.picture);
      const post = await PostService.create({
        ...req.body,
        picture: pictureName,
      });

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
      const limit = parseInt(req.query._limit) || 5;
      const page = parseInt(req.query._page) || 1;
      const sort = req.query._sort || "id";
      const order = req.query._order === "desc" ? "desc" : "asc";

      const posts = await PostService.getAll(limit, page, sort, order);
      const totalCount = await PostService.getTotalCount();

      res.set("x-total-count", totalCount.toString());
      return res.json(posts);
    } catch (e) {
      console.error("Ошибка при получении постов:", e);
      return res
        .status(500)
        .json({ message: "Ошибка получения постов", error: e.message });
    }
  }

  async getOne(req, res) {
    try {
      const postId = req.params.id;
      const post = await PostService.getOne(postId);
      if (!post) {
        return res.status(404).json({ message: "Пост не найден" });
      }

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

      let pictureName;
      if (req.files && req.files.picture) {
        pictureName = await FileService.saveFile(req.files.picture);
        req.body.picture = pictureName;
      }

      const updatedPost = await PostService.update(req.params.id, req.body);
      if (!updatedPost) {
        return res.status(404).json({ message: "Пост не найден" });
      }

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
      const post = await PostService.delete(postId);
      if (!post) {
        return res.status(404).json({ message: "Пост не найден" });
      }

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
