import pg from 'pg';
// PostgreSQL 연결을 위한 설정 파일 (Spring의 DataSource 역할)

// Pool = 커넥션 풀 (Spring의 HikariCP 같은 것)
const pool = new pg.Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default pool;