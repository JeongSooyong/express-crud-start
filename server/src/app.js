import express from 'express';

const app = express();
const PORT = 4000;

// 요청 body의 JSON을 읽을 수 있게 해주는 설정 (Spring의 @RequestBody 역할)
app.use(express.json());

// 서버가 살아있는지 확인하는 API
// Spring의 @GetMapping("/health") 역할
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});