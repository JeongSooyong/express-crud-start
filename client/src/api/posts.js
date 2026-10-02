import axios from 'axios'
// axios는 AJAX를 더 쉽게 사용할 수 있게 해주는 라이브러리.

// 모든 요청 앞에 /api를 붙여줌 → Vite 프록시가 4000번 서버로 전달
// 서버와 클라이언트를 연결해주는 역할
const api = axios.create({ baseURL: '/api' })

// 글 목록: GET /api/posts
export async function fetchPosts() {
  const res = await api.get('/posts')
  return res.data
}
// Spring으로 치면 Controller 역할을 하는 부분이다.
// function의 이름 뒤에는 파라미터가 온다. 예: fetchPost(id)

// 글 상세: GET /api/posts/:id
export async function fetchPost(id) {
  const res = await api.get(`/posts/${id}`)
  return res.data
}

// 서버가 보낸 에러 메시지 꺼내기
export function getErrorMessage(err) {
  return err.response?.data?.message ?? '서버에 연결할 수 없습니다.'
}