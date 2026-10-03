import { Routes, Route, Link } from 'react-router-dom'
// 라우터 관련 컴포넌트 임포트
import PostList from './pages/PostList.jsx'
import PostDetail from './pages/PostDetail.jsx'

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <Link to="/" className="logo">게시판</Link>
      </header>

      <Routes>
        <Route path="/" element={<PostList />} />
        {/* 글 목록 페이지 라우트 */}
        <Route path="/posts/:id" element={<PostDetail />} />
        {/* 글 상세 페이지 라우트 */}
        <Route path="*" element={<p className="message">페이지를 찾을 수 없습니다.</p>} />
        {/* 404 페이지 라우트 */}
      </Routes>
    </div>
  )
}