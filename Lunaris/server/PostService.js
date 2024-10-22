import pool from "./db.js";

class PostService {
  async create(postData) {
    const { title, description, body, image } = postData;

    const query = `
      INSERT INTO posts (title, description, body, image)
      VALUES ($1, $2, $3, $4) RETURNING *;`;

    const newPost = await pool.query(query, [title, description, body, image]);

    return newPost.rows[0]; // Возвращаем созданный пост
  }

  async getAll(limit, page, sort, order) {
    const offset = (page - 1) * limit;

    const query = `
      SELECT * FROM posts
      ORDER BY ${sort} ${order}
      LIMIT $1 OFFSET $2;`;

    const posts = await pool.query(query, [limit, offset]);

    return posts.rows; // Возвращаем посты
  }

  async getTotalCount() {
    const query = "SELECT COUNT(*) FROM posts;";

    const result = await pool.query(query);

    return parseInt(result.rows[0].count); // Возвращаем количество постов
  }

  async getOne(id) {
    const query = "SELECT * FROM posts WHERE id = $1;";

    const post = await pool.query(query, [id]);

    return post.rows[0]; // Возвращаем найденный пост или undefined, если не найден
  }

  async update(id, postData) {
    const { title, description, body, image } = postData;

    const query = `
      UPDATE posts 
      SET title = $1, description = $2, body = $3, image = $4 
      WHERE id = $5 RETURNING *;`;

    const updatedPost = await pool.query(query, [
      title,
      description,
      body,
      image,
      id,
    ]);

    return updatedPost.rows[0]; // Возвращаем обновленный пост или undefined, если не найден
  }

  async delete(id) {
    const query = "DELETE FROM posts WHERE id = $1 RETURNING *;";

    const deletedPost = await pool.query(query, [id]);

    return deletedPost.rows[0]; // Возвращаем удаленный пост или undefined, если не найден
  }
}

export default new PostService();
