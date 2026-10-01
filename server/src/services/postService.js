import * as postRepository from '../repositories/postRepository.js';
// 게시글 관련 비즈니스 로직 (Spring의 Service 역할)

// 게시글 목록 조회 (비즈니스 로직)
export async function getPosts() {
  return postRepository.findAll();
}