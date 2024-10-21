import axios from "axios";

export default class PostService {
  static async getAll(limit = 5, page = 1) {
    console.log(
      `Запрос к API: http://backend:3001/posts?_limit=${limit}&_page=${page}&_sort=id&_order=desc`
    );

    try {
      const response = await axios.get("http://backend:3001/api/posts", {
        params: {
          _limit: limit,
          _page: page,
          _sort: "id",
          _order: "desc",
        },
      });
      console.log("Ответ от API:", response.data);
      console.log("Заголовки ответа:", response.headers);
      return response;
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
      const response = await axios.get(`http://backend:3001/api/posts/${id}`);
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
      "http://backend:3001/api/posts",
      postData
    );
    console.log("Ответ от API на создание поста:", response.data);
    return response.data;
  }
}
