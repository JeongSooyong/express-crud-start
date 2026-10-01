## 📁 프로젝트 구조

```text
server/
├── .env                              # 환경 변수 (DB 접속 정보, Git 제외)
├── package.json                      # 의존성 및 실행 스크립트
└── src/
    ├── app.js                        # 서버 시작(Spring에서 Application.java와 같은 역할)
    ├── db.js                         # DB 연결 
    ├── routes/
    │   └── postRoutes.js             # URL 매핑
    ├── controllers/
    │   └── postController.js         # 요청 / 응답 처리
    ├── services/
    │   └── postService.js            # 비즈니스 로직
    └── repositories/
        └── postRepository.js         # SQL 실행 (Spring에서 Mapper와 같은 역할)
```

### 계층별 역할

| 계층 | 파일 | 역할 | Spring 대응 |
|---|---|---|---|
| Entry | `app.js` | 서버 시작, 미들웨어·라우터 등록 | `Application.java` |
| DB | `db.js` | PostgreSQL 연결 | 
| Route | `routes/` | URL과 HTTP 메서드를 컨트롤러에 연결 | `@GetMapping`, `@PostMapping` |
| Controller | `controllers/` | 요청 파싱, 응답 상태 코드·JSON 반환 | `@RestController` |
| Service | `services/` | 비즈니스 로직, 검증, 권한 체크 | `@Service` |
| Repository | `repositories/` | SQL 실행, DB 결과 반환 | `@Mapper` / DAO |

### 요청 흐름

```mermaid
flowchart LR
    A[Client] --> B[Route]
    B --> C[Controller]
    C --> D[Service]
    D --> E[Repository]
    E --> F[(PostgreSQL)]
