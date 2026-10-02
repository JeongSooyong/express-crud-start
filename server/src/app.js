import express from 'express';
import pool from './db.js';
import postRoutes from './routes/postRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 4000;

// 요청 body의 JSON 읽기 (Spring의 @RequestBody 역할)
app.use(express.json());

// 서버 상태 확인
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// 게시글 API (/api/posts로 시작하는 요청)
app.use('/api/posts', postRoutes);

// 에러 처리 (반드시 라우터 등록 뒤, 맨 마지막에)
app.use(errorHandler);

// 서버 시작 전에 DB 연결부터 확인
try {
  await pool.query('SELECT 1');
  console.log('DB 연결 성공');
  app.listen(PORT, () => {
    console.log(`서버 실행 중: http://localhost:${PORT}`);
  });
} catch (err) {
  console.error('DB 연결 실패:', err.message);
  process.exit(1);
}