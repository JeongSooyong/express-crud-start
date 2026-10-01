server\
├─ .env
├─ package.json
└─ src\
   ├─ app.js                         ← 서버 시작 (Application.java)
   ├─ db.js                          ← DB 연결 (DataSource)
   ├─ routes\postRoutes.js           ← URL 매핑 (@GetMapping 등)
   ├─ controllers\postController.js  ← 요청/응답 처리 (@RestController)
   ├─ services\postService.js        ← 비즈니스 로직 (@Service)
   └─ repositories\postRepository.js ← SQL 실행 (Mapper / DAO)
