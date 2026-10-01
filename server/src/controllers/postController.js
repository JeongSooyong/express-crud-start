import * as postService from '../services/postService.js';
// 게시글 관련 요청 처리 로직 (Spring의 Controller 역할)

// GET /api/posts
export async function list(req, res) {
  const posts = await postService.getPosts();
  res.json(posts);
}