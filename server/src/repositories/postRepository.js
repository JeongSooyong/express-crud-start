import pool from '../db.js';
// 게시글 관련 데이터베이스 접근 로직 (Spring의 Repository 역할)

// 글 목록 조회
export async function findAll() {
    // SQL 쿼리 작성 및 실행
  const sql = `
    SELECT id, title, author, view_count, created_at
      FROM posts
     ORDER BY id DESC
  `;
  const result = await pool.query(sql);
  // 결과 반환
  return result.rows; // 조회된 행들 (배열)
}

// 글 상세 조회
export async function findById(id) {
  const sql = `
    SELECT id, title, content, author, view_count, created_at, updated_at
      FROM posts
     WHERE id = $1
  `;
  const result = await pool.query(sql, [id]);
  return result.rows[0]; 
}