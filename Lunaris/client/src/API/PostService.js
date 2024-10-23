import axios from "axios";

export default class PostService {
  static async getAll(limit = 5, page = 1) {
    try {
      const response = await axios.get("http://localhost:3001/api/posts", {
        params: {
          _limit: limit,
          _page: page,
          _sort: "id",
          _order: "desc",
        },
      });

      const { posts, totalCount, currentPage, totalPages } = response.data;

      console.log("Общее количество постов:", totalCount);
      console.log("Текущая страница:", currentPage);
      console.log("Общее количество страниц:", totalPages);

      return response.data;
    } catch (error) {
      console.error(
        "Ошибка при получении постов:",
        error.response?.data || error.message
      );
      throw error;
    }
  }

  static async getById(id) {
    console.log(`Запрос на получение поста с ID: ${id}`);

    try {
      const response = await axios.get(`http://localhost:3001/api/posts/${id}`);
      console.log("Ответ от API на получение поста:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        `Ошибка при получении поста с ID ${id}:`,
        error.response?.data || error.message
      );
      throw error;
    }
  }

  static async createPost(postData) {
    console.log("Создание поста с данными:", postData);

    const response = await axios.post(
      "http://localhost:3001/api/posts",
      postData
    );
    console.log("Ответ от API на создание поста:", response.data);
    return response.data;
  }
}
