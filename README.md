# 🚀 Schuna Engineering & Project Hub (`schuna.github.io`)

**https://schuna.github.io/** 메인 포트폴리오 및 9개 핵심 레포지터리 통합 관제 허브 저장소입니다.

---

## 📦 관리 대상 레포지터리 (4대 카테고리 · 총 10개)

### 1. 🤖 AI 에이전트 & 워크플로우 엔지니어링
- **[Squadron](https://github.com/schuna/Squadron)** (`Private` · Python/FastAPI/Docker): OpenAI Codex CLI + Google Antigravity 이종 멀티 에이전트 교차 검증 및 3계층 하이브리드 거버넌스 플랫폼
- **[CodexWorkFlow](https://github.com/schuna/CodexWorkFlow)** (`Public` · Python/JS): 작업 단위 상태 벡터(`PROGRESS.md`) 기반 Codex CLI & 로컬 GUI 실행·검증 워크플로우
- **[ClaudeLearn](https://github.com/schuna/ClaudeLearn)** (`Private` · Node.js/Bash): WSL Ubuntu & Docker 컨테이너용 Claude CLI 토큰 80~90% 절감 스마트 래퍼(`cx`) 및 웹 컨트롤 센터 (`Port 3200`)

### 2. 💻 SW · 인프라 & 어학 인터랙티브 학습
- **[EnglishStudio](https://github.com/schuna/EnglishStudio)** (`Public` · HTML/JS/Web Speech API · **[🚀 Live Demo](https://schuna.github.io/EnglishStudio/)**): *Media English Review Studio* — 스트리밍·더빙·몰아보기·여행 6대 테마 24문장 유연 채점 타이핑, 실시간 AI 음성 스피킹(STT) 및 3D 플래시카드 어학 스튜디오
- **[RegexLearn](https://github.com/schuna/RegexLearn)** (`Public` · React/Vite · **[🚀 Live Demo](https://schuna.github.io/RegexLearn/)**): *PyRegex Studio v2.0* — Step-by-Step AST 매칭 트레이서, Goal Diff 뷰어 및 5단계 월드맵 기반 Python `re` 정규표현식 학습 웹앱 (`Port 5188`)
- **[DockerLearn](https://github.com/schuna/DockerLearn)** (`Public` · TypeScript/React Flow · **[🚀 Live Demo](https://schuna.github.io/DockerLearn/)**): *Learn Git Branching* 벤치마킹 기반 100% 인메모리 가상 도커 엔진 & React Flow 시각화 학습 플랫폼 (`Port 5188`)

### 3. ⚡ 반도체 & 고속 I/O 시뮬레이션
- **[DfeLearn](https://github.com/schuna/DfeLearn)** (`Private (dist Live)` · TypeScript/Vite · **[🚀 Live Demo](https://schuna.github.io/DfeLearn/)**): JEDEC JESD79-5 규격 기반 DDR5 DFE (Decision Feedback Equalizer) 인터랙티브 시뮬레이터 (`Port 5188`)
- **[SemiLearn](https://github.com/schuna/SemiLearn)** (`Public` · Vanilla JS/Canvas/KaTeX · **[🚀 Live Demo](https://schuna.github.io/SemiLearn/)**): *Lessons In Electric Circuits Vol. III* 기반 반도체 이론 요약, 영어 원문·한국어 병렬 번역 및 Canvas 실험실 (`Port 8000`)

### 4. 🏃‍♂️ 피트니스 & 스포츠 데이터 애널리틱스
- **[workout_coach](https://github.com/schuna/workout_coach)** (`Public` · HTML/JS PWA · **[🚀 Live Demo](https://schuna.github.io/workout_coach/)**): 실시간 세트 가이드, 절대시간 휴식 타이머, 1RM 추정, 잔디 히트맵, 구글 시트 양방향 동기화 모바일 웨이트 코치
- **[suunto-fit-analytics](https://github.com/schuna/suunto-fit-analytics)** (`Private` · Python/FastAPI/SQLite): Suunto 스마트워치 2년 7개월(2,228 세션) 러닝·웨이트·수면·회복·훈련부하(PMC) 분석 대시보드 (`Port 8080`)

---

## 🛠️ 페이지 구조 및 로컬 실행

Jekyll 빌드 의존성을 완전히 제거한 순수 모던 정적 웹 애플리케이션(`.nojekyll`)입니다.

```text
schuna.github.io/
├── .nojekyll               # Jekyll 파이프라인 비활성화 (즉시 정적 배포)
├── index.html              # 메인 대시보드 UI
├── css/
│   └── style.css           # 커스텀 스타일 및 다크/라이트 테마 트랜지션
└── js/
    ├── projects-data.js    # 9개 레포지터리 메타데이터, 상태, To-Do, 배포 검토 마스터 데이터
    └── app.js              # 카테고리/상태 필터, 검색, 인터랙티브 체크리스트(localStorage), 명령어 복사
```

로컬에서 미리보기:
```powershell
cd C:\Gemini\schuna.github.io
python -m http.server 8090
# 브라우저에서 http://localhost:8090 접속
```
