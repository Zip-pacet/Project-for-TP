import Post from "./Post.js"; // Импорт модели Post

class PostService {
  async create(postData) {
    // Создает новый пост
    const post = new Post(postData);
    await post.save();
    return post;
  }

  async getAll(limit, page, sort, order) {
    const offset = (page - 1) * limit; // Вычисляем смещение для пагинации
    const posts = await Post.find()
      .sort({ [sort]: order === "desc" ? -1 : 1 }) // Сортировка по полю
      .skip(offset) // Пропустить посты для текущей страницы
      .limit(limit); // Ограничение количества постов
    return posts;
  }

  // Получение общего количества постов
  async getTotalCount() {
    return await Post.countDocuments();
  }

  async getOne(id) {
    // Получает пост по ID
    const post = await Post.findById(id);
    return post;
  }

  async update(id, postData) {
    // Обновляет пост по ID
    const updatedPost = await Post.findByIdAndUpdate(id, postData, {
      new: true,
    });
    return updatedPost;
  }

  async delete(id) {
    // Удаляет пост по ID
    const deletedPost = await Post.findByIdAndDelete(id);
    return deletedPost;
  }
}

export default new PostService();
