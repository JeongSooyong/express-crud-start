-- 게시판 CRUD를 위한 테이블 생성
CREATE TABLE posts (
  id          SERIAL PRIMARY KEY,
  title       VARCHAR(200) NOT NULL,
  content     TEXT         NOT NULL,
  author      VARCHAR(50)  NOT NULL,
  view_count  INT          NOT NULL DEFAULT 0,
  created_at  TIMESTAMP    NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMP    NOT NULL DEFAULT NOW()
);

-- 더미데이터 INSERT
INSERT INTO posts (title, content, author) VALUES
  ('첫 번째 글', '안녕하세요. 첫 글입니다.', '홍길동'),
  ('두 번째 글', '게시판 CRUD 연습 중입니다.', '김철수'),
  ('세 번째 글', 'PostgreSQL 연결 테스트', '이영희');