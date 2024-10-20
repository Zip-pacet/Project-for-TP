import axios from "axios";

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    console.log(
      `Запрос к API: http://localhost:3001/posts?_limit=${limit}&_page=${page}&_sort=id&_order=desc`
    );

    try {
      const response = await axios.get("http://localhost:3001/api/posts", {
        params: {
          _limit: limit,
          _page: page,
          _sort: "id", // Сортировка по 'id'
          _order: "desc", // По убыванию
        },
      });
      console.log("Ответ от API:", response.data);
      return response.data; // Вернем только данные
    } catch (error) {
      console.error(
        "Ошибка при получении постов:",
        error.response?.data || error.message
      );
      throw error; // Бросим ошибку дальше, чтобы ее можно было обработать
    }
  }

  static async getById(id) {
    console.log(`Запрос на получение поста с ID: ${id}`);

    try {
      const response = await axios.get(`http://localhost:3001/api/posts/${id}`);
      console.log("Ответ от API на получение поста:", response.data);
      return response.data; // Вернем только данные
    } catch (error) {
      console.error(
        `Ошибка при получении поста с ID ${id}:`,
        error.response?.data || error.message
      );
      throw error; // Бросим ошибку дальше, чтобы ее можно было обработать
    }
  }

  static async getImageById(id) {
    console.log(`Запрос на получение изображения с ID: ${id}`);

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );
    console.log("Ответ от API на получение изображения:", response.data);
    return response.data; // Вернем только данные
  }

  static async createPost(postData) {
    console.log("Создание поста с данными:", postData);

    const response = await axios.post(
      "http://localhost:3001/api/posts",
      postData
    );
    console.log("Ответ от API на создание поста:", response.data);
    return response.data; // Вернем только данные
  }
}
