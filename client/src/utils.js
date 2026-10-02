// "2026-10-02T04:21:00.000Z" → "2026-10-02 13:21"
// 글 작성일시를 보기 좋은 형식으로 반환해주는 함수 작성
export function formatDate(value) {
  const d = new Date(value)
  const pad = (n) => String(n).padStart(2, '0')
  // 1자리 숫자를 2자리로 맞추기 위해 padStart 사용 ex) 1 -> 01
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`
  // 최종적으로 "YYYY-MM-DD HH:mm" 형식의 문자열 반환
}