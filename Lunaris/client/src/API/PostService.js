import axios from "axios";

export default class PostService {
  static async getAll(limit = 5, page = 1) {
    try {
      const response = await axios.get(
        `${window.SERVER_IP}/api/posts`, // Используем глобальную переменную
        {
          params: {
            _limit: limit,
            _page: page,
            _sort: "id",
            _order: "desc",
          },
        }
      );

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
      const response = await axios.get(
        `${window.SERVER_IP}/api/posts/${id}` // Используем глобальную переменную
      );
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
        `${window.SERVER_IP}/api/posts`, // Используем глобальную переменную
        postData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
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

  static async updatePost(id, postData) {
    console.log(`Обновление поста с ID: ${id} и данными:`, postData);

    try {
      const response = await axios.put(
        `${window.SERVER_IP}/api/posts/${id}`, // Используем глобальную переменную
        postData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Ответ от API на обновление поста:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        `Ошибка при обновлении поста с ID ${id}:`,
        error.response?.data || error.message
      );
      throw error;
    }
  }

  static async deletePost(id) {
    console.log(`Запрос на удаление поста с ID: ${id}`);

    try {
      const response = await axios.delete(
        `${window.SERVER_IP}/api/posts/${id}` // Используем глобальную переменную
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
