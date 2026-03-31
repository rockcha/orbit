# Orbit - React Mini Project

### 🚀 프로젝트 개요

`Orbit`는 React, Vite, TailwindCSS 기반의 학습용 미니 프로젝트입니다. 우주 탐사 테마를 적용하여 다음 기능을 구현합니다:

- 행성 목록 탐색 및 선택
- 우주선 상태(충전, 수리) 관리
- 여행 기록(로그) 생성 및 보관
- 마크다운 미로 UI/UX

### 🧩 기술 스택

- React 19
- Vite
- TailwindCSS
- React Router DOM
- @tanstack/react-query
- json-server (로컬 API 모킹)

### 📁 주요 폴더 구조

- `src/pages` : 페이지 컴포넌트
- `src/layouts` : 레이아웃 및 공통 UI
- `src/services/api.js` : API 호출 정의
- `src/commons/hooks` : 커스텀 훅
- `src/constants` : 라우트 메타, 상수

### ▶️ 설치 및 실행

```bash
npm install
npm run server # json-server로 API 로컬 실행 (기본 포트 3001)
npm run dev
```

브라우저에서 `http://localhost:5173` 방문.

### 🧪 테스트 및 린트

```bash
npm run lint
```

### 🛠 개발 주의

- `db.json`에 탐사 로그가 저장됩니다.
- `src/services/api.js`에서 CRUD API 함수가 정의되어 있어 `react-query`와 함께 사용됩니다.

### ✅ 배포

빌드:

```bash
npm run build
```

---

### 📝 커밋/푸시 작업 확인

이 저장소에서 `README.md`를 갱신하고, 기존 변경 사항을 커밋/푸시합니다.
