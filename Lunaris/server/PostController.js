import Post from "./Post.js";
import PostService from "./PostService.js";
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
      const post = await PostService.delete(req.params.id);
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
