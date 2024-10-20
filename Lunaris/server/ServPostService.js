import Post from "./Post.js"; // Импорт модели Post

class PostService {
  async create(postData) {
    // Создает новый пост
    const post = new Post(postData);
    await post.save();
    return post;
  }

  async getAll(limit = 10, page = 1, sort = "id", order = "asc") {
    console.log(
      `Параметры запроса: limit=${limit}, page=${page}, sort=${sort}, order=${order}`
    );

    const sortOrder = order === "desc" ? -1 : 1;

    const posts = await Post.find()
      .sort({ [sort]: sortOrder })
      .limit(limit)
      .skip((page - 1) * limit);

    console.log("Полученные посты:", posts);
    return posts;
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
