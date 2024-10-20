import Post from "./Post.js";
import fileService from "./fileService.js";

class PostService {
  async create(postData) {
    try {
      const post = new Post(postData);
      return await post.save(); // Здесь могут возникнуть проблемы с валидацией
    } catch (e) {
      console.error("Ошибка при сохранении поста:", e); // Отладочное сообщение
      throw e; // Пробрасываем ошибку выше
    }
  }

  async getAll() {
    const posts = await Post.find();
    return posts;
  }
  async getOne(id) {
    if (!id) {
      throw new Error("не указан ID");
    }
    const post = await Post.findById(id);
    return post;
  }

  async update(id, postData) {
    try {
      // Найдите и обновите пост
      const updatedPost = await Post.findByIdAndUpdate(id, postData, {
        new: true,
      }); // { new: true } вернёт обновлённый документ
      if (!updatedPost) {
        throw new Error("Пост не найден");
      }
      return updatedPost;
    } catch (e) {
      console.error("Ошибка при обновлении поста:", e);
      throw e; // Пробрасываем ошибку выше
    }
  }

  async delete(id) {
    if (!id) {
      throw new Error("не указан ID");
    }
    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}

export default new PostService();
