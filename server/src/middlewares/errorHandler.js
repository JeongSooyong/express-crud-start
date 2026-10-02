// 인자가 4개면 Express가 "에러 처리용"으로 인식함
export default function errorHandler(err, req, res, next) {
  const status = err.status || 500;

  if (status === 500) {
    console.error(err); // 예상 못 한 에러는 서버 로그에 남김
  }

  res.status(status).json({
    message: status === 500 ? '서버 오류가 발생했습니다.' : err.message,
  });
}