import * as postRepository from '../repositories/postRepository.js';
import HttpError from '../errors/HttpError.js';

export async function getPosts() {
  return postRepository.findAll();
}

export async function getPost(id) {
  const post = await postRepository.findById(id);
  if (!post) {
    throw new HttpError(404, '게시글을 찾을 수 없습니다.');
  }
  return post;
}