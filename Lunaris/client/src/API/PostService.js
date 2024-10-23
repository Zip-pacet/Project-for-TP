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

    try {
      const response = await axios.post(
        "http://localhost:3001/api/posts",
        postData, // postData is expected to be FormData
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
          },
        }
      );
      console.log("Ответ от API на создание поста:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Ошибка при создании поста:",
        error.response?.data || error.message
      );
      throw error;
    }
  }

  static async deletePost(id) {
    console.log(`Запрос на удаление поста с ID: ${id}`);

    try {
      const response = await axios.delete(
        `http://localhost:3001/api/posts/${id}`
      );
      console.log("Ответ от API на удаление поста:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        `Ошибка при удалении поста с ID ${id}:`,
        error.response?.data || error.message
      );
      throw error;
    }
  }
}
