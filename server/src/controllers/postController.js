import * as postService from '../services/postService.js';
import HttpError from '../errors/HttpError.js';

// GET /api/posts
export async function list(req, res) {
  const posts = await postService.getPosts();
  res.json(posts);
}

// GET /api/posts/:id
export async function detail(req, res) {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) {
    throw new HttpError(400, '잘못된 게시글 번호입니다.');
  }
  const post = await postService.getPost(id);
  res.json(post);
}