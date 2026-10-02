import { Router } from 'express';
// 게시글 관련 라우팅 설정 (Spring의 @RestController 역할)
import * as postController from '../controllers/postController.js';
// 게시글 관련 라우팅 모듈 (Spring의 @RequestMapping 역할)

const router = Router();

router.get('/', postController.list); // GET /api/posts
router.get('/:id', postController.detail);

export default router;