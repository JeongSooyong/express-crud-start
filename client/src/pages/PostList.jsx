import { useEffect, useState } from 'react'
// 화면에 글 목록을 보여주는 컴포넌트

import { fetchPosts, getErrorMessage } from '../api/posts.js'
// API 통신 관련 함수 임포트

import { formatDate } from '../utils.js'
// 날짜를 보기 좋은 형식으로 변환해주는 함수 임포트

export default function PostList() {
  // 화면에 필요한 상태 3개
  const [posts, setPosts] = useState([])        // 글 목록
  const [loading, setLoading] = useState(true)  // 불러오는 중인지
  const [error, setError] = useState('')        // 에러 메시지

  // 화면이 처음 열릴 때 한 번 목록 불러오기
  useEffect(() => {
    fetchPosts()
    // 서버에 글 목록을 요청
      .then(setPosts)
      // 서버에서 받은 글 목록을 상태에 반영
      .catch((err) => setError(getErrorMessage(err)))
      // 에러 발생시 상태에 반영
      .finally(() => setLoading(false))
      // 로딩 상태를 false로 변경
  }, [])

  // 상태에 따라 다른 화면 보여주기
  if (loading) return <p className="message">불러오는 중...</p>
  if (error) return <p className="message error">{error}</p>

  return (
    <section>
      <h2>글 목록</h2>

      {posts.length === 0 ? (
        <p className="message">아직 글이 없습니다.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th className="col-num">번호</th>
              <th>제목</th>
              <th className="col-author">작성자</th>
              <th className="col-date">작성일</th>
              <th className="col-num">조회</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td className="col-num">{post.id}</td>
                <td>{post.title}</td>
                <td className="col-author">{post.author}</td>
                <td className="col-date">{formatDate(post.created_at)}</td>
                <td className="col-num">{post.view_count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  )
}