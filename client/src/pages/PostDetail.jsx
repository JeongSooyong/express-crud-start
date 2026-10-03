import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchPost, getErrorMessage } from '../api/posts.js'
import { formatDate } from '../utils.js'

export default function PostDetail() {
  const { id } = useParams() // 주소의 :id 값 꺼내기
  const [post, setPost] = useState(null)
  const [error, setError] = useState('')

  // 화면이 열릴 때(그리고 id가 바뀔 때) 글 불러오기
  useEffect(() => {
    fetchPost(id)
      .then(setPost)
      .catch((err) => setError(getErrorMessage(err)))
  }, [id])

  if (error) {
    return (
      <div>
        <p className="message error">{error}</p>
        <Link to="/" className="button secondary">목록으로</Link>
      </div>
    )
  }
  if (!post) return <p className="message">불러오는 중...</p>

  return (
    <article className="detail">
      <h2>{post.title}</h2>
      <p className="meta">
        {post.author} · {formatDate(post.created_at)} · 조회 {post.view_count}
      </p>
      <div className="content">{post.content}</div>
      <Link to="/" className="button secondary">목록으로</Link>
    </article>
  )
}