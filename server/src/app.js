import express from 'express';
import pool from './db.js';
import postRoutes from './routes/postRoutes.js';

const app = express();
const PORT = process.env.PORT || 4000;

// 요청 body의 JSON을 읽을 수 있게 해주는 설정 (Spring의 @RequestBody 역할)
app.use(express.json());

// 서버 상태 확인용 엔드포인트 (Spring의 @GetMapping("/health") 역할)
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// /api/posts로 시작하는 요청은 postRoutes가 처리
// (Spring의 클래스 위 @RequestMapping("/api/posts"))
app.use('/api/posts', postRoutes);

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