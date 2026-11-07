/**
 * Schuna Engineering & Project Command Center — Master Data
 * 9 Core Repositories, Category Ecosystem, Status/To-Do Tracking,
 * Local Environment Sync Diagnostics & Static Build Deployment Review
 */

window.SCHUNA_HUB_DATA = {
  profile: {
    username: "schuna",
    title: "Schuna Engineering & Project Hub",
    subtitle: "AI 에이전트 거버넌스 · 반도체/고속 인터페이스 · 인터랙티브 러닝 · 스포츠 데이터 애널리틱스",
    bio: "단일 세션 AI의 한계를 넘는 멀티 에이전트 오케스트레이션(Squadron, CodexWorkFlow, ClaudeLearn)부터 반도체 신호 무결성 시뮬레이션(DfeLearn, SemiLearn), 인메모리 실습 플랫폼(RegexLearn, DockerLearn), 그리고 웨어러블·웨이트 피트니스 데이터 파이프라인(workout_coach, suunto-fit-analytics)까지 9개 핵심 엔지니어링 프로젝트를 통합 관리하는 관제 허브입니다.",
    githubUrl: "https://github.com/schuna",
    pagesUrl: "https://schuna.github.io/",
    lastInspected: "2026-11-07",
    localRuleNote: "로컬 개발 환경 규칙: Node.js v14.15.1 호환 유지 · 5173 포트 충돌 회피 (대체 포트: 5188 / 3200 / 8080 / 8000)"
  },

  categories: [
    {
      id: "all",
      name: "전체 프로젝트",
      shortName: "전체",
      icon: "layers",
      color: "indigo",
      description: "9개 핵심 레포지터리 전체 현황 및 할 일 요약"
    },
    {
      id: "ai-workflow",
      name: "AI 에이전트 & 워크플로우",
      shortName: "🤖 AI & 워크플로우",
      icon: "cpu",
      color: "violet",
      description: "Claude CLI / OpenAI Codex / Google Antigravity 기반 토큰 최적화, 상태 벡터(PROGRESS.md) 관리 및 3계층 멀티 에이전트 교차 검증 플랫폼",
      synergy: "ClaudeLearn(토큰 압축·코칭) + CodexWorkFlow(작업 단위 상태·검증 루프)의 핵심 아키텍처가 Squadron(이종 멀티 에이전트 3계층 거버넌스)으로 통합·진화합니다."
    },
    {
      id: "sw-learning",
      name: "SW & 인프라 인터랙티브 학습",
      shortName: "💻 SW & DevOps 학습",
      icon: "terminal",
      color: "emerald",
      description: "Learn Git Branching 벤치마킹 기반 100% 클라이언트 사이드(In-Memory) 시각적 디버거 및 단계별 미션 해결 웹 플랫폼",
      synergy: "백엔드 서버 없이 브라우저 단독으로 동작하는 AST 트레이서(RegexLearn)와 인메모리 가상 도커 엔진(DockerLearn)으로 언제 어디서나 실습 가능한 웹 교육 도구를 지향합니다."
    },
    {
      id: "semiconductor",
      name: "반도체 & 고속 I/O 시뮬레이션",
      shortName: "⚡ 반도체 & 하드웨어",
      icon: "zap",
      color: "amber",
      description: "기초 반도체 물성·소자 원문/번역 실험실(SemiLearn) 및 JEDEC JESD79-5 규격 DDR5 DFE 신호 무결성 시뮬레이터(DfeLearn)",
      synergy: "SemiLearn에서 P-N 접합·트랜지스터·연산증폭기 기초 물리를 다지고, DfeLearn에서 6.4Gbps+ 고속 메모리 채널의 ISI 왜곡 보정 및 2D Shmoo 마진 분석으로 심화 연결됩니다."
    },
    {
      id: "fitness-analytics",
      name: "피트니스 & 스포츠 애널리틱스",
      shortName: "🏃‍♂️ 피트니스 & 데이터",
      icon: "activity",
      color: "rose",
      description: "체육관 현장용 모바일 PWA 웨이트 코치(workout_coach)와 2년 7개월 치 Suunto 스마트워치 데이터 통합 분석 대시보드(suunto-fit-analytics)",
      synergy: "workout_coach에서 기록·동기화한 세트별 무게·1RM 데이터(Google Sheets)와 Suunto 워치의 심박·수면·회복·TSS(PMC) 지표를 결합해 정밀한 훈련 부하 관리를 완성합니다."
    }
  ],

  ecosystemFlows: [
    {
      track: "AI Agent Governance Track",
      badge: "AI 오케스트레이션 계보",
      color: "violet",
      nodes: ["ClaudeLearn", "CodexWorkFlow", "Squadron"],
      summary: "단일 에이전트 토큰 절감(80~90%) 및 상태 벡터(PROGRESS.md) 관리 기법을 확립한 뒤, Codex(구현) + Antigravity(크로스 리뷰) 이종 멀티 에이전트 거버넌스로 확장"
    },
    {
      track: "Interactive EdTech & Hardware Track",
      badge: "시각화 시뮬레이션 엔진",
      color: "amber",
      nodes: ["RegexLearn", "DockerLearn", "SemiLearn", "DfeLearn"],
      summary: "100% 브라우저 인메모리 엔진과 Canvas/React Flow 시각화를 통해 정규식 AST 추적, 가상 컨테이너 네트워크, 반도체 캐리어 이동, DDR5 4-Tap DFE 파형을 실시간 시뮬레이션"
    },
    {
      track: "Quantified-Self Fitness Track",
      badge: "스포츠 데이터 파이프라인",
      color: "rose",
      nodes: ["workout_coach", "suunto-fit-analytics"],
      summary: "모바일 PWA 현장 웨이트 트레이닝 트래커(무게·휴식·1RM·구글시트 연동)와 2,228세션 FIT/GPX/NDJSON 고속 인덱싱 대시보드(CTL/ATL/TSB)의 상호 보완"
    }
  ],

  repositories: [
    {
      id: "squadron",
      name: "Squadron",
      title: "Squadron (스쿼드론)",
      subtitle: "이종(Heterogeneous) AI 에이전트 통합 관제 및 3계층 하이브리드 거버넌스 플랫폼",
      category: "ai-workflow",
      categoryLabel: "🤖 AI & 워크플로우",
      visibility: "private",
      language: "Python",
      techStack: ["Python 3.10+", "FastAPI", "Docker Sandbox", "OpenAI Codex CLI", "Google Antigravity", "Matrix ChatOps", "Higress Gateway"],
      repoUrl: "https://github.com/schuna/Squadron",
      liveUrl: null,
      deployType: "local-server",
      statusBadge: "Phase 3 완료 · 테스트 27/27 통과",
      statusLevel: "completed",
      progress: 90,
      lastUpdated: "2026-10-28",
      summary: "단일 AI 벤더 종속과 자체 리뷰 편향을 극복하기 위해 OpenAI Codex CLI(TDD 자율 구현)와 Google Antigravity(심층 아키텍처 조사 & 교차 코드 리뷰)를 페어로 구성하고, 인간 승인(HITL) 및 예산/DLP 통제를 결합한 3계층 엔터프라이즈 거버넌스 시스템입니다.",
      highlights: [
        "Layer 1 거버넌스: 이원화 예산 Hard-Cap 차단기(BudgetManager) 및 민감정보 자동 마스킹(DLPFilter)",
        "Layer 2 오케스트레이션: 5단계 파이프라인, 최대 2회 자율 치유(Self-Healing) 루프, Matrix #squadron-ops 실시간 승인 봇 데몬",
        "Layer 3 샌드박스 & 검증: --network none 일회용 격리 Verifier, TOCTOU 해시 대조 후 git apply 및 GitHub PR 자동 생성",
        "단위 및 E2E 테스트 27개 전항목 통과 + GitHub Actions CI 매트릭스 구축 완료"
      ],
      relationNote: "CodexWorkFlow의 격리 실행·검증 루프와 ClaudeLearn의 토큰 예산 거버넌스 개념을 멀티 에이전트 아키텍처로 집대성한 상위 플랫폼입니다.",
      todos: [
        { id: "sq-1", text: "로컬 Docker 샌드박스 이미지(Dockerfile.codex / verifier) 빌드 및 실전 태스크 E2E 드라이런", priority: "high", done: false },
        { id: "sq-2", text: "Matrix #squadron-ops 실서버(Synapse 등) 계정 연결 및 !approve / !reject 웹훅 실전 테스트", priority: "medium", done: false },
        { id: "sq-3", text: "FastAPI 컨트롤 플레인(8000 포트) 상태 모니터링용 경량 웹 대시보드 UI 추가 검토", priority: "low", done: false }
      ],
      localLaunch: {
        path: "C:\\Gemini\\Squadron",
        port: "8000",
        command: "cd C:\\Gemini\\Squadron\npython -m pytest tests -vv\npython -m uvicorn squadron_core.server:app --reload --port 8000",
        note: "Python 3.10+ 환경 · FastAPI 컨트롤 플레인 기본 포트 8000"
      }
    },
    {
      id: "codex-workflow",
      name: "CodexWorkFlow",
      title: "CodexWorkFlow",
      subtitle: "작업 단위 상태 벡터(PROGRESS.md) 기반 Codex CLI & 로컬 GUI 실행·검증 워크플로우",
      category: "ai-workflow",
      categoryLabel: "🤖 AI & 워크플로우",
      visibility: "public",
      language: "Python",
      techStack: ["Python", "Vanilla JS", "Codex CLI", "Unittest (58 tests)", "PowerShell"],
      repoUrl: "https://github.com/schuna/CodexWorkFlow",
      liveUrl: null,
      deployType: "local-app",
      statusBadge: "P1~P3 구현 · 회귀 58/58 통과",
      statusLevel: "active",
      progress: 68,
      lastUpdated: "2026-11-01",
      summary: "장기 대화 세션에서 발생하는 컨텍스트 오염과 토큰 급증을 막기 위해, 목표 분할 → 작업별 격리 실행 → 검증 명령 자동 확인 → 상태 벡터(PROGRESS.md) 인계로 이어지는 Codex 실사용 워크플로우 도구입니다.",
      highlights: [
        "P1 상태 코어(.codex-workflow & PROGRESS.md) 원자적 저장, 잠금(execution.lock) 및 복구 계약 구현",
        "P2 CLI 실행기 및 P3 로컬 웹 GUI(프로젝트 선택 → 계획 검토 → 실행 → 결과 확인) 구축 완료",
        "문서·수용표 정합화 완료 및 회귀 테스트 58/58(100%) 통과, Windows 수용 체크리스트(W01~W10) 수립",
        "원클릭 PowerShell 런처(start-workflow.ps1) 제공"
      ],
      relationNote: "ClaudeLearn과 동일한 '작업 단위 상태 인계' 철학을 OpenAI Codex 환경에 맞게 구현했으며, 후속 실험(P4)을 통해 정량적 토큰 절감 효과를 실측합니다.",
      todos: [
        { id: "cw-1", text: "[followup-windows] 격리 Windows 환경에서 실패·권한·인코딩·중단 복구(W01~W06) 실환경 시험", priority: "high", done: false },
        { id: "cw-2", text: "[followup-usability] 첫 사용자 3명 대상 무설명 사용성 평가 및 막힘 지점 개선", priority: "high", done: false },
        { id: "cw-3", text: "[followup-comparison] P4 동일 조건 장기 대화 vs 작업별 인계 토큰·성공률 비교 실험", priority: "medium", done: false },
        { id: "cw-4", text: "[followup-policy & release] P5 실측 기반 운영 정책 정비 및 클린 Windows 설치 최종 수용 검증", priority: "medium", done: false },
        { id: "cw-5", text: "[로컬 환경] C:\\Gemini\\CodexWorkFlow 경로로 원격 저장소 클론 동기화", priority: "high", done: false }
      ],
      localLaunch: {
        path: "C:\\Gemini\\CodexWorkFlow",
        port: "Local GUI",
        command: "git clone https://github.com/schuna/CodexWorkFlow.git C:\\Gemini\\CodexWorkFlow\ncd C:\\Gemini\\CodexWorkFlow\npython -m unittest discover -s tests -v\n.\\start-workflow.ps1",
        note: "현재 C:\\Gemini 내 미클론 상태 — 첫 줄 명령어로 클론 후 바로 실행 가능"
      }
    },
    {
      id: "claude-learn",
      name: "ClaudeLearn",
      title: "ClaudeLearn (cx + Control Center)",
      subtitle: "WSL Ubuntu & Docker 컨테이너용 Claude CLI 토큰 80~90% 절감 스마트 래퍼 및 웹 컨트롤 센터",
      category: "ai-workflow",
      categoryLabel: "🤖 AI & 워크플로우",
      visibility: "private",
      language: "JavaScript",
      techStack: ["Node.js (v14+)", "Bash (WSL)", "Docker CLI", "SVG Telemetry Chart", "Zero-Dependency Server"],
      repoUrl: "https://github.com/schuna/ClaudeLearn",
      liveUrl: null,
      deployType: "local-server",
      statusBadge: "Phase 1~4 전구간 완료 (원격 반영)",
      statusLevel: "completed",
      progress: 92,
      lastUpdated: "2026-10-31",
      summary: "상시 구동 중인 프로젝트별 Docker 컨테이너 환경에서 CLAUDE.md(4-Block 거버넌스) + PROGRESS.md(1,000 토큰 상태 벡터) + /clear(톱니바퀴 리셋) 워크플로우를 단축 명령어(cx)와 로컬 웹 대시보드(3200 포트)로 자동화·습관화하는 통합 솔루션입니다.",
      highlights: [
        "5단계 스마트 래퍼(cx init / plan / save / resume / -p): 접속 전 Pre-Flight 브리핑 및 종료 후 토큰 영수증 출력",
        "실시간 과열 경고 상태줄(statusline-hook.sh): 12턴 또는 20k 토큰 초과 시 즉각 압축·/clear 경고 배지 노출",
        "웹 컨트롤 센터(Port 3200): 1,000 토큰 예산 게이지, PROGRESS.md 인터랙티브 체크리스트, 원클릭 거버넌스 배포",
        "실제 ~/.claude JSONL 로그 파싱 기반 톱니바퀴 절감 차트 및 AI 워크플로우 습관 점수(Habit Score 100점 만점) 코칭"
      ],
      relationNote: "Docker 컨테이너 기반 개발 환경에서 Claude CLI 비용을 극적으로 낮추는 핵심 도구로, 로컬 C:\\Gemini\\ClaudeLearn 폴더에 git pull만 수행하면 최신 본이 반영됩니다.",
      todos: [
        { id: "cl-1", text: "[완료] C:\\Gemini\\ClaudeLearn 에서 git pull origin main 실행하여 Phase 1~4 구현본 로컬 반영", priority: "high", done: true },
        { id: "cl-2", text: "WSL Ubuntu ~/.bashrc 에 bash ./bin/install-wsl.sh 실행하여 cx 별칭 상시 등록", priority: "medium", done: false },
        { id: "cl-3", text: "실제 구동 컨테이너 장기 세션 JSONL 데이터를 통한 Habit Score 가중치 미세 튜닝", priority: "low", done: false }
      ],
      localLaunch: {
        path: "C:\\Gemini\\ClaudeLearn",
        port: "3200",
        command: "cd C:\\Gemini\\ClaudeLearn\ngit pull origin main\nnpm test\nnpm start",
        note: "외부 패키지 설치 불필요 (Node v14 내장 모듈) · http://localhost:3200 접속"
      }
    },
    {
      id: "regex-learn",
      name: "RegexLearn",
      title: "RegexLearn (PyRegex Studio v2.0)",
      subtitle: "Step-by-Step AST 매칭 트레이서 & 월드맵 기반 Python re 정규표현식 시각적 학습 웹앱",
      category: "sw-learning",
      categoryLabel: "💻 SW & DevOps 학습",
      visibility: "public",
      language: "JavaScript",
      techStack: ["React 18", "Vite 2.9", "Tailwind CSS", "Generator AST Tracer", "Lucide Icons"],
      repoUrl: "https://github.com/schuna/RegexLearn",
      liveUrl: "https://schuna.github.io/RegexLearn/",
      liveStatus: "live",
      deployType: "static-webapp",
      statusBadge: "v2.0 메이저 완료 · Live 배포 중",
      statusLevel: "completed",
      progress: 98,
      lastUpdated: "2026-11-07",
      summary: "Python(re 모듈) 정규표현식을 기초부터 전후방 탐색·명명된 그룹·백트래킹 최적화까지 체계적으로 체득할 수 있도록, 제너레이터 기반 Step-by-Step 디버거와 시각적 Goal Diff 뷰어를 결합한 인터랙티브 학습 플랫폼입니다.",
      highlights: [
        "Step-by-Step 매칭 트레이서: 토큰 포인터, 텍스트 커서, Zero-width(|) 포인터, 백트래킹 과정을 스텝 단위로 재생 및 슬라이더 탐색",
        "Goal Diff 비교 뷰어 & Before/After 개념 시연 위젯: 과다 매칭(Over-matching)·누락 매칭(Under-matching) 실시간 진단",
        "5단계 커리큘럼 스테이지 월드맵 & 정량적 마스터 별점(★) 보상 + Python 코드 원클릭 복사",
        "실무 프리셋 3대 카테고리(서버 로그 분석, 개인정보 마스킹, CSV/HTML 데이터 정제) 및 치트시트 내장"
      ],
      relationNote: "DockerLearn과 함께 'Learn Git Branching'의 시각적 디버깅 UX를 벤치마킹한 대표적인 100% 클라이언트 사이드 교육용 웹앱입니다.",
      todos: [
        { id: "rl-1", text: "[완료] vite.config.js에 base: './' 추가 및 GitHub Pages 정적 빌드 배포 완료", priority: "high", done: true },
        { id: "rl-2", text: "[완료] 저장소 Public 전환 및 메인 허브 Live Demo 버튼 활성화", priority: "medium", done: true },
        { id: "rl-3", text: "사용자 커스텀 정규식 퀴즈 JSON 공유 기능 및 ReDoS 백트래킹 심화 미션 추가 검토", priority: "low", done: false }
      ],
      localLaunch: {
        path: "C:\\Gemini\\RegexLearn",
        port: "Live / 5188",
        command: "cd C:\\Gemini\\RegexLearn\nnpm run dev",
        note: "온라인 배포본 즉시 사용 가능: https://schuna.github.io/RegexLearn/ (로컬: 5188 포트)"
      }
    },
    {
      id: "docker-learn",
      name: "DockerLearn",
      title: "DockerLearn (Virtual Docker Studio v3.0)",
      subtitle: "인메모리 가상 도커 엔진 & React Flow 실시간 토폴로지 시각화 학습 플랫폼",
      category: "sw-learning",
      categoryLabel: "💻 SW & DevOps 학습",
      visibility: "public",
      language: "TypeScript",
      techStack: ["React 18", "TypeScript", "React Flow", "Zustand", "Tailwind CSS", "Vite 2.9"],
      repoUrl: "https://github.com/schuna/DockerLearn",
      liveUrl: "https://schuna.github.io/DockerLearn/",
      liveStatus: "live",
      deployType: "static-webapp",
      statusBadge: "v3.0 완료 · Live 배포 중",
      statusLevel: "completed",
      progress: 98,
      lastUpdated: "2026-11-07",
      summary: "백엔드 서버나 실제 Docker 데몬 없이 웹 브라우저 메모리 상에서 컨테이너·이미지 레이어·볼륨·브리지 네트워크 라이프사이클을 완벽히 시뮬레이션하고 React Flow 캔버스에 실시간 애니메이션으로 시각화하는 학습 플랫폼입니다.",
      highlights: [
        "100% 클라이언트 가상 도커 엔진 + 최대 20스텝 상태 스냅샷 타임머신(undo / redo) 및 화이트리스트 CLI 파서",
        "React Flow 커스텀 노드(Container, ImageStack, Volume, NetworkGroup) 및 포트/볼륨 트래픽 발광 파티클 엣지",
        "가상 Bash 터미널(방향키 히스토리, Tab 자동완성, 힌트 알약) + 내장 Dockerfile / compose.yaml 탭 에디터",
        "초보·중급·고급 3단계 9개 미션 커리큘럼 및 실제 엔진 상태를 채점하는 부분 일치(Subset Matching) 검증기"
      ],
      relationNote: "서버리스 인메모리 시뮬레이션 구조 덕분에 GitHub Pages 정적 호스팅만으로 전 세계 어디서나 무료 도커 실습 환경을 제공할 수 있습니다.",
      todos: [
        { id: "dl-1", text: "[완료] vite.config.ts에 base: './' 설정 및 프로덕션 빌드(dist) GitHub Pages 배포 완료", priority: "high", done: true },
        { id: "dl-2", text: "[완료] 저장소 Public 전환 완료 (추후 PWA Service Worker 오프라인 확장 검토)", priority: "medium", done: true },
        { id: "dl-3", text: "커스텀 실습 시나리오 JSON 에디터 및 다국어(i18n) 확장 검토", priority: "low", done: false }
      ],
      localLaunch: {
        path: "C:\\Gemini\\DockerLearn",
        port: "Live / 5188",
        command: "cd C:\\Gemini\\DockerLearn\nnpm run dev",
        note: "온라인 배포본 즉시 사용 가능: https://schuna.github.io/DockerLearn/ (로컬: 5188 포트)"
      }
    },
    {
      id: "dfe-learn",
      name: "DfeLearn",
      title: "DfeLearn (DDR5 DFE Platform v2.1)",
      subtitle: "JEDEC JESD79-5 규격 기반 DDR5 Decision Feedback Equalizer 인터랙티브 시뮬레이터",
      category: "semiconductor",
      categoryLabel: "⚡ 반도체 & 하드웨어",
      visibility: "private",
      language: "TypeScript",
      techStack: ["TypeScript", "React", "Vite 2.9", "HTML5 Canvas", "JEDEC JESD79-5 DB"],
      repoUrl: "https://github.com/schuna/DfeLearn",
      liveUrl: "https://schuna.github.io/DfeLearn/",
      liveStatus: "live",
      deployType: "static-webapp",
      statusBadge: "v2.1 완료 · Live 배포 중 (dist 호스팅)",
      statusLevel: "completed",
      progress: 98,
      lastUpdated: "2026-11-07",
      summary: "고속 DDR5 메모리 인터페이스(6.4Gbps+)의 채널 손실(ISI)과 반사 노이즈를 보정하는 4-Tap DFE 아키텍처, 위상 인터리빙(1/2/4-way), JEDEC 모드 레지스터(MR111~MR255) 제어 및 2D Eye Shmoo 플롯을 웹에서 직접 조작하며 학습하는 전문 시뮬레이터입니다.",
      highlights: [
        "초급 모듈: 전송선 삽입 손실(dB)·스텁 반사 슬라이더, CTLE(노이즈 증폭 부작용) vs DFE(순수 ISI 차감) A/B 비교 및 논문 프리셋",
        "중급 모듈: 4-Tap DFE 계수 제어(Tap1~4, 1.0X/2.0X 벤더 배율), 슬라이서 연산 추적기, 1/2/4-way 위상 구조 및 tDFE 타이밍 시뮬레이션",
        "고급 & 챌린지 모듈: MR111 극성 반전 함정(0B=Enabled) 반영, 18개 핀 그룹(DML/DMU/DQL/DQU) 개별 레지스터 디코딩 및 2D Shmoo 플롯",
        "TypeScript 에러 0건, 프로덕션 Gzip 번들 67.57 KiB 초경량 빌드 달성"
      ],
      relationNote: "JEDEC 표준 문서 PDF 보호를 위해 원본 레포지터리는 Private으로 유지하고, 컴파일된 정적 번들(dist)만 https://schuna.github.io/DfeLearn/ 에 안전하게 배포했습니다.",
      todos: [
        { id: "df-1", text: "[완료] JEDEC 표준 PDF(24MB) 비공개 보호를 위해 원본 저장소 Private 유지 + dist 산출물만 정적 배포 완료", priority: "high", done: true },
        { id: "df-2", text: "[완료] vite.config.ts에 base: './' 반영 및 온라인 Live Demo (https://schuna.github.io/DfeLearn/) 오픈", priority: "high", done: true },
        { id: "df-3", text: "DDR5 JEDEC 차기 개정판(6.8Gbps+ 규격) 수치 업데이트 및 Touchstone(.s4p) 파일 파서 확장 검토", priority: "low", done: false }
      ],
      localLaunch: {
        path: "C:\\Gemini\\DfeLearn",
        port: "Live / 5188",
        command: "cd C:\\Gemini\\DfeLearn\nnpm run dev",
        note: "온라인 배포본 즉시 사용 가능: https://schuna.github.io/DfeLearn/ (로컬: 5188 포트)"
      }
    },
    {
      id: "semi-learn",
      name: "SemiLearn",
      title: "SemiLearn (반도체 인터랙티브 학습 플랫폼)",
      subtitle: "Lessons In Electric Circuits Vol. III 기반 반도체 이론 요약 · 원문/번역 병렬 열람 · Canvas 실험실",
      category: "semiconductor",
      categoryLabel: "⚡ 반도체 & 하드웨어",
      visibility: "public",
      language: "JavaScript",
      techStack: ["HTML5", "Vanilla JS", "Tailwind CDN", "KaTeX", "Canvas Simulation", "Playwright"],
      repoUrl: "https://github.com/schuna/SemiLearn",
      liveUrl: "https://schuna.github.io/SemiLearn/",
      liveStatus: "live",
      deployType: "static-webapp",
      statusBadge: "Phase 1 & Ch 1 번역 파일럿 · Live 배포 중",
      statusLevel: "active",
      progress: 55,
      lastUpdated: "2026-11-07",
      summary: "Tony R. Kuphaldt의 명저(CC BY 4.0) 13개 챕터를 바탕으로 핵심 개념 요약, 전자/정공 이동 및 정류 회로 Canvas 시뮬레이션, KaTeX 수식 분석, 그리고 영어 원문·한국어 문단 대조 읽기 탭을 제공하는 정적 웹 플랫폼입니다.",
      highlights: [
        "13개 챕터 내비게이션 셸 및 5대 학습 탭(핵심 요약 / 인터랙티브 랩 / 심층 탐구 / 교재 원문·번역 / 추천 보충 자료) 구축",
        "Ch 1~3 Canvas 시뮬레이터: 신호 증폭·클리핑·dB 계산기(Ch1), 에너지 밴드갭·P-N 접합(Ch2), 브리지 정류 도통 경로·RC 평활·쇼클리 I-V 곡선(Ch3)",
        "Ch 1(증폭기와 능동 소자) 1.1~1.7절 원문·한국어 병렬 번역 및 Analog Devices/Keysight 보충 해설 파일럿 탑재",
        "별도 번들/빌드 과정 없이 순수 정적 파일로 즉시 호스팅 가능한 구조"
      ],
      relationNote: "로컬 최신 수정본(Ch 1 원문·번역 리더 및 테스트 스위트)을 원격에 동기화하고 GitHub Pages(https://schuna.github.io/SemiLearn/)를 활성화 완료했습니다.",
      todos: [
        { id: "sl-1", text: "[완료] C:\\Gemini\\SemiLearn 폴더 .git 연결 복구 및 로컬 최신 파일(ch1-reader.js 등) 원격 푸시 완료", priority: "high", done: true },
        { id: "sl-2", text: "[완료] GitHub Pages 활성화하여 https://schuna.github.io/SemiLearn/ 라이브 오픈 완료", priority: "high", done: true },
        { id: "sl-3", text: "Phase 1 마감 검증: Ch 2/3 그래픽 결함 수정본 Playwright 재캡처(npm run capture:phase1) 및 외부 PhET/Falstad 링크 실브라우저 확인", priority: "medium", done: false },
        { id: "sl-4", text: "Ch 1 잔여 문단·수식·그림 대조 완료 후 Phase 2(Ch 4~6: BJT, JFET, MOSFET) 시뮬레이터 및 번역 착수", priority: "medium", done: false }
      ],
      localLaunch: {
        path: "C:\\Gemini\\SemiLearn",
        port: "Live / 8000",
        command: "cd C:\\Gemini\\SemiLearn\npython -m http.server 8000",
        note: "온라인 배포본 즉시 사용 가능: https://schuna.github.io/SemiLearn/ (로컬: 8000 포트)"
      }
    },
    {
      id: "workout-coach",
      name: "workout_coach",
      title: "Workout Coach (웨이트 트레이닝 어시스턴트)",
      subtitle: "실시간 세트 가이드 · 절대시간 휴식 타이머 · 1RM 추적 · 구글 시트 양방향 연동 모바일 PWA",
      category: "fitness-analytics",
      categoryLabel: "🏃‍♂️ 피트니스 & 데이터",
      visibility: "public",
      language: "HTML",
      techStack: ["HTML5 / JS", "PWA (Service Worker)", "Screen Wake Lock API", "Google Apps Script", "SVG Charts"],
      repoUrl: "https://github.com/schuna/workout_coach",
      liveUrl: "https://schuna.github.io/workout_coach/",
      liveStatus: "live",
      deployType: "static-webapp",
      statusBadge: "Step 3 프로덕션 배포 중 (Live)",
      statusLevel: "completed",
      progress: 96,
      lastUpdated: "2026-11-06",
      summary: "스마트폰 홈 화면에 설치해 체육관 오프라인 환경에서도 즉시 실행되는 웨이트 트레이닝 전용 PWA입니다. 지난 기록 원터치 불러오기, 오차 없는 타임스탬프 휴식 타이머, Epley 1RM 실시간 계산, 운동 잔디 히트맵, 구글 스프레드시트 자동 동기화를 지원합니다.",
      highlights: [
        "PWA 오프라인 캐시 & Screen Wake Lock API: 운동 중 화면 꺼짐 완벽 차단 및 네이티브 앱 풀스크린 UX",
        "점진적 과부하 가이드: 종목 선택 시 최근 수행 무게·횟수 배너 표시 및 [⚡ 불러오기] 원터치 세트 복사 + Epley 추정 1RM 트래킹",
        "절대시간(Date.now) 기반 휴식 카운트다운 타이머(백그라운드 오차 제로, 비프음·차임벨·진동 피드백)",
        "구글 스프레드시트 양방향 동기화(클라이언트 중복 업로드 락, synced 상태 관리, Apps Script 중복 행 자동 제거 헬퍼 완비)"
      ],
      relationNote: "현재 https://schuna.github.io/workout_coach/ 에서 성황리에 라이브 운영 중이며, 축적된 웨이트 기록은 suunto-fit-analytics의 심박·회복 지표와 상호 보완됩니다.",
      todos: [
        { id: "wc-1", text: "체육관 실사용 데이터 기반 분할 루틴(예: 무분할 / 2분할 / 3분할) 원터치 묶음 불러오기 템플릿 검토", priority: "medium", done: false },
        { id: "wc-2", text: "종목별 최고 추정 1RM 장기 성장 추이 라인 차트 대시보드 탭 보강 검토", priority: "low", done: false }
      ],
      localLaunch: {
        path: "C:\\Gemini\\workout_coach",
        port: "Live / 8081",
        command: "cd C:\\Gemini\\workout_coach\npython -m http.server 8081",
        note: "온라인 배포본 즉시 사용 가능: https://schuna.github.io/workout_coach/"
      }
    },
    {
      id: "suunto-fit-analytics",
      name: "suunto-fit-analytics",
      title: "Suunto Fit Analytics & Dashboard",
      subtitle: "2년 7개월(2,228 세션) Suunto 워치 운동·수면·회복·훈련부하(PMC) 초고속 파이썬 분석 대시보드",
      category: "fitness-analytics",
      categoryLabel: "🏃‍♂️ 피트니스 & 데이터",
      visibility: "private",
      language: "Python",
      techStack: ["Python 3.10+", "FastAPI", "SQLite (2.8MB)", "Pure-Python FIT/GPX Parser", "Chart.js", "Leaflet Map"],
      repoUrl: "https://github.com/schuna/suunto-fit-analytics",
      liveUrl: null,
      deployType: "local-server",
      statusBadge: "대시보드 & 2,228세션 DB 구축 완료",
      statusLevel: "completed",
      progress: 88,
      lastUpdated: "2026-11-04",
      summary: "Suunto 9 Peak Pro / 5 Peak 스마트워치에서 내보낸 .fit, .gpx, 수면·회복·활동량 NDJSON 데이터를 외부 무거운 라이브러리 없이 순수 Python으로 초고속 파싱·인덱싱하고, 러닝(4,808km)·웨이트(405세션)·PMC 훈련부하를 인터랙티브하게 분석하는 웹 대시보드입니다.",
      highlights: [
        "Pure-Python 고속 바이너리 파서(etl.py): 2,228개 운동 세션 및 954일 치 일별 생체 데이터를 2.8MB SQLite DB로 인덱싱",
        "누적 분석 하이라이트: 러닝 853세션(4,808km, 평균 페이스 6:40/km, 최고 VO2max 52.8), 웨이트 405세션(291.2시간), 더블데이 208일",
        "스포츠 과학 지표: 일별 훈련 부하(TSS) 기반 체력(CTL), 피로(ATL), 컨디션(TSB) PMC 차트 및 수면·회복 상관관계 분석",
        "원클릭 실행 배치파일(run_dashboard.bat) 및 8080 포트 FastAPI + Leaflet GPS 경로 지도 UI"
      ],
      relationNote: "workout_coach의 세트별 정밀 중량 데이터와 Suunto 워치의 심박·칼로리·수면·TSB 컨디션 지표를 연결하는 개인 피트니스 데이터 웨어하우스입니다.",
      todos: [
        { id: "sf-1", text: "[로컬 환경] 필요 시 C:\\Gemini\\suunto-fit-analytics 경로로 클론 또는 기존 Fit 작업 폴더와 원격 동기화 점검", priority: "medium", done: false },
        { id: "sf-2", text: "신규 Suunto Export 압축파일 드롭 시 변경분만 반영하는 증분 ETL(Incremental Indexing) 스크립트 고도화", priority: "medium", done: false },
        { id: "sf-3", text: "workout_coach 구글 시트 TSV/JSON 데이터와 Suunto Gym 세션을 타임스탬프로 매칭하는 통합 뷰 기획", priority: "low", done: false }
      ],
      localLaunch: {
        path: "C:\\Gemini\\suunto-fit-analytics",
        port: "8080",
        command: "git clone https://github.com/schuna/suunto-fit-analytics.git C:\\Gemini\\suunto-fit-analytics\ncd C:\\Gemini\\suunto-fit-analytics\\dashboard\npython -m uvicorn server:app --host 127.0.0.1 --port 8080 --reload",
        note: "5173 포트 회피 준수 · http://localhost:8080 접속 (run_dashboard.bat 더블클릭 가능)"
      }
    }
  ],

  syncDiagnostics: [
    {
      repo: "ClaudeLearn",
      localPath: "C:\\Gemini\\ClaudeLearn",
      status: "ok",
      statusLabel: "동기화 완료 (Phase 1~4 Pull 반영)",
      detail: "원격(GitHub main)의 Phase 1~4 전체 구현본(4,499줄)을 로컬 C:\\Gemini\\ClaudeLearn 폴더에 Fast-forward 병합 완료했습니다.",
      fixCommand: "cd C:\\Gemini\\ClaudeLearn ; git status"
    },
    {
      repo: "SemiLearn",
      localPath: "C:\\Gemini\\SemiLearn",
      status: "ok",
      statusLabel: ".git 복구 및 최신본 푸시 완료",
      detail: "로컬 폴더 .git 연결을 복구하고, 로컬에 있던 Ch 1 원문·번역 리더(ch1-reader.js) 및 테스트 스위트를 origin/main에 푸시 완료했습니다.",
      fixCommand: "cd C:\\Gemini\\SemiLearn ; git status"
    },
    {
      repo: "CodexWorkFlow",
      localPath: "C:\\Gemini\\CodexWorkFlow (미클론)",
      status: "info",
      statusLabel: "원격 전용 (클론 가능)",
      detail: "GitHub 원격(Public)에 최신 커밋이 보관되어 있으며 현재 C:\\Gemini 하위에 클론본이 없습니다.",
      fixCommand: "git clone https://github.com/schuna/CodexWorkFlow.git C:\\Gemini\\CodexWorkFlow"
    },
    {
      repo: "suunto-fit-analytics",
      localPath: "C:\\Gemini\\suunto-fit-analytics (미클론)",
      status: "info",
      statusLabel: "원격 전용 (클론 가능)",
      detail: "GitHub 원격(Private)에 최신 DB와 대시보드 코드가 보관되어 있으며 C:\\Gemini 하위에 클론본이 없습니다.",
      fixCommand: "git clone https://github.com/schuna/suunto-fit-analytics.git C:\\Gemini\\suunto-fit-analytics"
    },
    {
      repo: "workout_coach / Squadron / RegexLearn / DockerLearn / DfeLearn",
      localPath: "C:\\Gemini\\*",
      status: "ok",
      statusLabel: "동기화 정상 (Clean)",
      detail: "5개 레포지터리 모두 로컬 C:\\Gemini 폴더와 GitHub 원격 main 브랜치가 최신 상태로 일치합니다.",
      fixCommand: "# 모두 최신 상태입니다 (Working tree clean)"
    }
  ],

  learningAppsDeployReview: {
    title: "🌐 인터랙티브 웹 학습 앱 4종 Public 전환 & 정적 빌드 배포 검토서",
    summary: "workout_coach에 이어 SemiLearn, RegexLearn, DockerLearn, DfeLearn 4종의 웹 학습 앱을 온라인 Live Demo로 즉시 체험할 수 있도록 전환하는 구체적인 기술 검토 및 실행 가이드입니다.",
    strategies: [
      {
        name: "전략 A · 개별 레포지터리 Public 전환 + GitHub Pages 활성화 (정석 권장)",
        pros: "각 레포지터리 URL이 https://schuna.github.io/<RepoName>/ 형태로 깔끔하게 분리되며 오픈소스 포트폴리오 가치가 극대화됩니다.",
        cons: "저장소 내 민감 문서나 저작권 PDF(예: DfeLearn의 JEDEC 스펙 PDF)를 사전에 정리해야 합니다."
      },
      {
        name: "전략 B · 원본 레포지터리는 Private 유지 + schuna.github.io 내부에 빌드 산출물(dist)만 호스팅 (하이브리드)",
        pros: "원본 기획서·설계보고서·참고 PDF가 담긴 소스 저장소를 Private으로 안전하게 유지하면서도, 70~200KB 크기의 컴파일된 정적 웹앱만 https://schuna.github.io/apps/<name>/ 으로 즉시 공개할 수 있습니다.",
        cons: "앱 업데이트 시 빌드 산출물을 메인 허브 저장소에 복사·푸시하는 1줄 스크립트 실행이 필요합니다."
      }
    ],
    apps: [
      {
        name: "SemiLearn",
        currentVisibility: "Public (Live 배포 중)",
        buildType: "No-Build 순수 정적 (HTML + Vanilla JS + CDN)",
        readiness: "🟢 Live 배포 완료 (https://schuna.github.io/SemiLearn/)",
        precaution: "로컬 .git 복구 및 Ch 1 원문·번역 리더 최신본 푸시 후 GitHub Pages 활성화 완료. 클릭 시 즉시 실행됩니다.",
        command: "# 라이브 접속 URL:\nStart-Process \"https://schuna.github.io/SemiLearn/\""
      },
      {
        name: "RegexLearn (PyRegex Studio v2.0)",
        currentVisibility: "Public (전환 및 Live 배포 완료)",
        buildType: "Vite 2.9 + React 18 (base: './' 정적 번들링)",
        readiness: "🟢 Live 배포 완료 (https://schuna.github.io/RegexLearn/)",
        precaution: "vite.config.js에 base: './' 적용, 저장소 Public 전환 및 schuna.github.io/RegexLearn/ 정적 빌드 배포가 모두 완료되었습니다.",
        command: "# 라이브 접속 URL:\nStart-Process \"https://schuna.github.io/RegexLearn/\""
      },
      {
        name: "DockerLearn (Virtual Docker v3.0)",
        currentVisibility: "Public (전환 및 Live 배포 완료)",
        buildType: "Vite 2.9 + React + TypeScript (base: './' 정적 번들링)",
        readiness: "🟢 Live 배포 완료 (https://schuna.github.io/DockerLearn/)",
        precaution: "vite.config.ts에 base: './' 적용, 저장소 Public 전환 및 schuna.github.io/DockerLearn/ 정적 빌드 배포가 모두 완료되었습니다.",
        command: "# 라이브 접속 URL:\nStart-Process \"https://schuna.github.io/DockerLearn/\""
      },
      {
        name: "DfeLearn (DDR5 DFE Platform v2.1)",
        currentVisibility: "Private 유지 + Live Demo 공개 (전략 B 적용 완료)",
        buildType: "Vite 2.9 + React + TypeScript (Gzip 67.5KB)",
        readiness: "🟢 Live 배포 완료 (https://schuna.github.io/DfeLearn/)",
        precaution: "✅ JEDEC 표준 문서 PDF(24MB) 보호를 위해 원본 레포지터리(schuna/DfeLearn)는 Private으로 안전하게 유지하고, 컴파일된 dist/ 정적 번들만 schuna.github.io/DfeLearn/ 에 호스팅하여 안전하게 Live Demo를 오픈했습니다.",
        command: "# 라이브 접속 URL:\nStart-Process \"https://schuna.github.io/DfeLearn/\""
      }
    ]
  }
};
