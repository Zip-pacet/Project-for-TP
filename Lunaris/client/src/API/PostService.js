import axios from "axios";

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit: limit,
          _page: page,
          _sort: "id", // Sort by 'id'
          _order: "desc", // In descending order
        },
      }
    );
    return response;
  }

  static async getById(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response;
  }

  static async getImageById(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );
    return response;
  }

  static async createPost(postData) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      postData
    );
    return response;
  }
}
