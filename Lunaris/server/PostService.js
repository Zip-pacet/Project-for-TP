import Post from "./Post.js";

class PostService {
  async create(postData) {
    const { title, content, picture } = postData;
    const post = await Post.create({ title, content, picture });
    return post;
  }

  async getAll(limit, page, sort, order) {
    const offset = (page - 1) * limit;
    const posts = await Post.findAll({
      limit,
      offset,
      order: [[sort, order]],
    });
    return posts;
  }

  async getTotalCount() {
    const count = await Post.count();
    return count;
  }

  async getOne(id) {
    const post = await Post.findByPk(id);
    return post;
  }

  async update(id, postData) {
    const { title, content, picture } = postData;
    await Post.update({ title, content, picture }, { where: { id } });
    return this.getOne(id);
  }

  async delete(id) {
    const post = await this.getOne(id);
    await Post.destroy({ where: { id } });
    return post;
  }
}

export default new PostService();
