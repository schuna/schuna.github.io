/**
 * Schuna Engineering & Project Command Center — Master Data (v3.1)
 * 13 Core Repositories (All synced in C:\Gemini\*),
 * 7 Live Web Apps Showcase, Category Ecosystem & Actionable To-Do Tracking
 */

window.SCHUNA_HUB_DATA = {
  profile: {
    username: "schuna",
    title: "Schuna Engineering & Project Hub",
    subtitle: "AI 에이전트 거버넌스 · 2D 쿼터뷰 게임 엔진 · 반도체 시뮬레이션 · 인터랙티브 러닝 · 피트니스 애널리틱스",
    bio: "멀티 에이전트 오케스트레이션 및 클라우드 자동화(Squadron, CodexWorkFlow, ClaudeLearn, GoogleDriveManager), 1993 클래식 쿼터뷰 무협 액션 RPG 웹 엔진(SwordsMan, CrimsonCore), 반도체 신호 무결성 시뮬레이션(DfeLearn, SemiLearn), 인메모리 실습 및 어학 스튜디오(EnglishStudio, RegexLearn, DockerLearn), 그리고 웨이트·웨어러블 데이터 파이프라인(workout_coach, suunto-fit-analytics)까지 13개 핵심 프로젝트를 통합 관리해요.",
    githubUrl: "https://github.com/schuna",
    pagesUrl: "https://schuna.github.io/",
    lastInspected: "2026-11-18",
    localRuleNote: "로컬 개발 환경 규칙: Node.js v14.15.1 호환 유지 · 5173 포트 충돌 회피 (대체 포트: 5188 / 3200 / 8080 / 8000)"
  },

  liveWebApps: [
    {
      id: "swords-man",
      repoName: "SwordsMan",
      name: "SwordsMan (청운강호전 웹/모바일 RPG)",
      subtitle: "12챕터 장편 서사 · 프로시저럴 2D 도트 · AdLib 5음계 신스 무협 액션 RPG",
      badge: "무협 액션 RPG",
      tech: "TypeScript · HTML5 2D Canvas · Web Audio Synth · PWA",
      url: "https://schuna.github.io/SwordsMan/",
      repoUrl: "https://github.com/schuna/SwordsMan",
      description: "외부 이미지나 음원 파일 없이 100% 자체 생성 2D 도트 그래픽과 Web Audio 5음계 신스로 작동하는 1993년 감성 쿼터뷰 무협 액션 RPG예요.",
      keyPoints: [
        "창작 오리지널 12챕터 장편 시나리오 및 선택에 따른 4종 멀티 엔딩 수록",
        "3단계 공격 프레임, 저스트 패링(Q), 경공 도약(X), 5대 무공(1~5) 및 보스 예고 장판 전투",
        "TileAtlas 오프스크린 베이킹 60fps 최적화 및 모바일 터치 D-Pad·오프라인 PWA 지원"
      ],
      accent: "indigo"
    },
    {
      id: "workout-coach",
      repoName: "workout_coach",
      name: "Workout Coach",
      subtitle: "슈퍼세트 동시 진행 · 휴식 타이머 · 구글 시트 연동 모바일 웨이트 PWA",
      badge: "피트니스 PWA",
      tech: "HTML5 · Vanilla JS · PWA v2 · Google Sheets",
      url: "https://schuna.github.io/workout_coach/",
      repoUrl: "https://github.com/schuna/workout_coach",
      description: "체육관 현장에서 스마트폰으로 바로 쓰는 웨이트 트레이닝 어시스턴트예요. 2~3개 종목 묶음(슈퍼세트·순차 진행)과 라이트/다크 테마 전환을 지원해요.",
      keyPoints: [
        "운동 선택 바구니(Dock) 기반 2~3종목 슈퍼세트·순차 진행 및 지난 기록 원터치 불러오기",
        "백그라운드 오차 없는 절대시간 휴식 카운트다운 타이머 및 화면 꺼짐 방지(Wake Lock)",
        "라이트/다크 모드 전환, 최근 10주 운동 잔디 히트맵, 구글 시트 양방향 동기화"
      ],
      accent: "rose"
    },
    {
      id: "english-studio",
      repoName: "EnglishStudio",
      name: "EnglishStudio (미디어 & 여행 영어 스튜디오)",
      subtitle: "38개 핵심 표현 · 유연 채점 타이핑 · AI 음성 스피킹(STT) · 3D 플래시카드",
      badge: "미디어·여행 영어",
      tech: "HTML5 · OKLCH Adaptive Theme · Web Speech API (STT/TTS)",
      url: "https://schuna.github.io/EnglishStudio/",
      repoUrl: "https://github.com/schuna/EnglishStudio",
      description: "스트리밍·리부트·더빙·자막·몰아보기·해외여행 6대 테마 38개 핵심 영어 문장을 타이핑, 음성 발화 인식, 플래시카드로 복습하는 스튜디오예요.",
      keyPoints: [
        "해외여행 실전 표현 14문장 신규 추가(총 38문장) 및 라이트/다크 테마 토글 지원",
        "단어별 Diff 비교 타이핑 연습과 Web Speech API 마이크 실시간 발음 정확도(STT) 채점",
        "3D 회전 플래시카드, 원어민 TTS 속도 조절(0.8x~1.2x), 셔플 및 중요 문장 북마크"
      ],
      accent: "indigo"
    },
    {
      id: "regex-learn",
      repoName: "RegexLearn",
      name: "RegexLearn (PyRegex v2.0)",
      subtitle: "Python 정규표현식 시각적 디버거 & 실습",
      badge: "정규식 트레이서",
      tech: "React 18 · Vite · AST Step Tracer",
      url: "https://schuna.github.io/RegexLearn/",
      repoUrl: "https://github.com/schuna/RegexLearn",
      description: "복잡한 Python(re 모듈) 정규표현식이 텍스트를 어떻게 탐색하고 백트래킹하는지 눈으로 보면서 익히는 인터랙티브 학습 웹앱이에요.",
      keyPoints: [
        "Step-by-Step 매칭 트레이서: 정규식 포인터와 커서 이동을 스텝별 애니메이션으로 재생",
        "Goal Diff 뷰어: 목표 매칭 영역과 내 패턴의 과다·누락 매칭을 색상으로 즉시 진단",
        "기초부터 전후방 탐색까지 5단계 스테이지 월드맵 & 실무 로그·마스킹 프리셋"
      ],
      accent: "emerald"
    },
    {
      id: "docker-learn",
      repoName: "DockerLearn",
      name: "DockerLearn (Virtual Docker v3.0)",
      subtitle: "인메모리 가상 도커 & 토폴로지 시각화 실습",
      badge: "가상 도커 엔진",
      tech: "React · TypeScript · React Flow",
      url: "https://schuna.github.io/DockerLearn/",
      repoUrl: "https://github.com/schuna/DockerLearn",
      description: "Docker 설치나 서버 없이 브라우저 메모리 상에서 docker 명령어와 Compose를 실행하고 컨테이너·볼륨·네트워크 연결 구조를 실시간 그래프로 실습해요.",
      keyPoints: [
        "100% 인메모리 가상 도커 엔진 & 최대 20단계 상태 타임머신(Undo / Redo)",
        "React Flow 캔버스: 컨테이너 기동·포트 바인딩·볼륨 트래픽 파티클 실시간 렌더링",
        "가상 터미널 + Dockerfile/Compose 에디터 + 초보·중급·고급 9개 미션 자동 채점"
      ],
      accent: "sky"
    },
    {
      id: "dfe-learn",
      repoName: "DfeLearn",
      name: "DfeLearn (DDR5 DFE v2.1)",
      subtitle: "JEDEC DDR5 고속 신호 무결성 시뮬레이터",
      badge: "DDR5 신호 무결성",
      tech: "TypeScript · HTML5 Canvas · JEDEC DB",
      url: "https://schuna.github.io/DfeLearn/",
      repoUrl: "https://github.com/schuna/DfeLearn",
      description: "6.4Gbps+ 고속 DDR5 메모리 채널의 신호 왜곡(ISI)을 보정하는 Decision Feedback Equalizer(DFE) 회로와 아이 다이어그램을 시뮬레이션해요.",
      keyPoints: [
        "채널 손실 슬라이더 및 CTLE(노이즈 증폭) vs DFE(순수 ISI 차감) 파형 A/B 비교",
        "4-Tap DFE 계수 조절, 슬라이서 연산 추적기 및 1/2/4-way 위상 구조 비교",
        "JEDEC MR111~MR255 레지스터 제어 콘솔 & 실시간 2D Eye Shmoo 마진 플롯"
      ],
      accent: "amber"
    },
    {
      id: "semi-learn",
      repoName: "SemiLearn",
      name: "SemiLearn (반도체 실험실)",
      subtitle: "반도체 소자 이론 · 원문/번역 리더 · Canvas 랩",
      badge: "반도체 물리·회로",
      tech: "Vanilla JS · Canvas · KaTeX",
      url: "https://schuna.github.io/SemiLearn/",
      repoUrl: "https://github.com/schuna/SemiLearn",
      description: "Lessons In Electric Circuits Vol. III 교재를 기반으로 반도체 소자 핵심 요약, 영어 원문·한국어 문단 병렬 번역, 인터랙티브 회로 실험실을 제공해요.",
      keyPoints: [
        "Ch 1~3 인터랙티브 랩: 증폭기 클리핑/dB 계산, 에너지 밴드갭 & P-N 접합, 브리지 정류기",
        "교재 영어 원문과 한국어 번역 문단 1:1 병렬 읽기 탭 및 전문 기술 보충 해설",
        "KaTeX 수식 실시간 렌더링 및 모바일/데스크톱 반응형 다크 모드 지원"
      ],
      accent: "violet"
    }
  ],

  categories: [
    {
      id: "all",
      name: "전체 프로젝트",
      shortName: "전체",
      icon: "layers",
      color: "indigo",
      description: "13개 핵심 레포지터리 전체 현황과 할 일 요약"
    },
    {
      id: "ai-workflow",
      name: "AI 에이전트 & 클라우드 자동화",
      shortName: "AI · 자동화",
      icon: "cpu",
      color: "violet",
      description: "멀티 에이전트 거버넌스(Squadron, CodexWorkFlow, ClaudeLearn) 및 Google Drive 시맨틱 자동 분류 대시보드(GoogleDriveManager)",
      synergy: "ClaudeLearn(토큰 압축·코칭)과 CodexWorkFlow(작업 단위 상태·검증 루프)가 Squadron(이종 멀티 에이전트 거버넌스)으로 통합되고, GoogleDriveManager(MCP 기반 시맨틱 분류기)로 클라우드 문서 자산까지 자동 관리해요."
    },
    {
      id: "game-engine",
      name: "클래식 게임 엔진 & 웹 RPG",
      shortName: "게임 엔진 · RPG",
      icon: "gamepad",
      color: "indigo",
      description: "1993년 쿼터뷰 무협 액션 RPG 프로토타입(CrimsonCore)과 자체 프로시저럴 도트·신스 기반 12챕터 퍼블릭 에디션(SwordsMan)",
      synergy: "CrimsonCore에서 확립한 모듈형 2D 아이소메트릭 엔진·저스트 패링 전투·AdLib 신스 아키텍처와 SwordsMan의 12챕터 장편 서사·멀티 엔딩을 결합해 저작권 이슈 없는 경량 웹/모바일 PWA RPG를 완성했어요."
    },
    {
      id: "sw-learning",
      name: "SW · 인프라 & 어학 인터랙티브 학습",
      shortName: "SW · 어학 학습",
      icon: "terminal",
      color: "emerald",
      description: "백엔드 서버 없이 브라우저 단독으로 동작하는 정규식 디버거(RegexLearn), 가상 도커(DockerLearn), AI 음성 영어 스튜디오(EnglishStudio)",
      synergy: "AST 트레이서(RegexLearn), 인메모리 가상 도커 엔진(DockerLearn), Web Speech STT/TTS 기반 미디어·여행 영어 스튜디오(EnglishStudio) 모두 100% 클라이언트 사이드 웹앱으로 즉시 실습할 수 있어요."
    },
    {
      id: "semiconductor",
      name: "반도체 & 고속 I/O 시뮬레이션",
      shortName: "반도체 · 하드웨어",
      icon: "zap",
      color: "amber",
      description: "기초 반도체 물성·소자 원문/번역 실험실(SemiLearn) 및 JEDEC JESD79-5 규격 DDR5 DFE 신호 무결성 시뮬레이터(DfeLearn)",
      synergy: "SemiLearn에서 P-N 접합·트랜지스터·연산증폭기 기초 물리를 다지고, DfeLearn에서 6.4Gbps+ 고속 메모리 채널의 ISI 왜곡 보정 및 2D Shmoo 마진 분석으로 심화 연결돼요."
    },
    {
      id: "fitness-analytics",
      name: "피트니스 & 스포츠 데이터",
      shortName: "피트니스 · 데이터",
      icon: "activity",
      color: "rose",
      description: "슈퍼세트·휴식 타이머 지원 모바일 웨이트 코치(workout_coach)와 2,228세션 Suunto 워치 분석 대시보드(suunto-fit-analytics)",
      synergy: "workout_coach에서 기록·동기화한 세트별 무게·슈퍼세트·1RM 데이터(Google Sheets)와 Suunto 워치의 심박·수면·회복·TSS(PMC) 지표를 결합해 훈련 부하를 정밀하게 관리해요."
    }
  ],

  ecosystemFlows: [
    {
      track: "AI Governance & Cloud Automation",
      badge: "AI 오케스트레이션 & 자동화",
      color: "violet",
      nodes: ["ClaudeLearn", "CodexWorkFlow", "Squadron", "GoogleDriveManager"],
      summary: "단일 에이전트 토큰 절감과 상태 벡터(PROGRESS.md) 관리 기법을 이종 멀티 에이전트 거버넌스(Squadron) 및 Google Drive 시맨틱 자동 분류(GoogleDriveManager)로 확장했어요."
    },
    {
      track: "Isometric RPG & Interactive Web Apps",
      badge: "웹 엔진 & 시뮬레이터 7종",
      color: "amber",
      nodes: ["CrimsonCore", "SwordsMan", "EnglishStudio", "RegexLearn", "DockerLearn", "SemiLearn", "DfeLearn"],
      summary: "프로시저럴 2D 무협 RPG(SwordsMan), 미디어·여행 영어 스튜디오(EnglishStudio), 정규식·도커·반도체·DDR5 시뮬레이터까지 설치 없이 브라우저에서 즉시 실행돼요."
    },
    {
      track: "Quantified-Self Fitness Track",
      badge: "스포츠 데이터 파이프라인",
      color: "rose",
      nodes: ["workout_coach", "suunto-fit-analytics"],
      summary: "슈퍼세트·1RM·구글시트 동기화를 지원하는 모바일 PWA 웨이트 코치와 2,228세션 FIT/GPX/NDJSON 고속 분석 대시보드(CTL/ATL/TSB)가 서로 보완해요."
    }
  ],

  repositories: [
    {
      id: "swords-man",
      name: "SwordsMan",
      title: "SwordsMan (청운강호전 · 1993 무협 액션 RPG)",
      subtitle: "창작 12챕터 시나리오 · 프로시저럴 2D 도트 · Web Audio 5음계 신스 기반 경량 웹/모바일 액션 RPG",
      category: "game-engine",
      categoryLabel: "게임 엔진 · RPG",
      visibility: "public",
      language: "TypeScript",
      techStack: ["TypeScript", "HTML5 2D Canvas", "TileAtlas Baking", "Web Audio Synth", "PWA (sw.js v2)", "GitHub Actions Pages"],
      repoUrl: "https://github.com/schuna/SwordsMan",
      liveUrl: "https://schuna.github.io/SwordsMan/",
      liveStatus: "live",
      deployType: "static-webapp",
      statusBadge: "Phase 5 완료 · Live 배포 중",
      statusLevel: "completed",
      progress: 98,
      lastUpdated: "2026-11-16",
      summary: "1993년 클래식 쿼터뷰 무협 액션 RPG의 감성과 12챕터 장편 서사 구조를 계승하면서, 외부 저작권 이미지·음원 없이 100% 코드로 생성되는 2D 도트 그래픽과 Web Audio 5음계 신스로 구현한 퍼블릭 웹/모바일 액션 RPG예요.",
      highlights: [
        "Phase 5 경량 모듈 아키텍처: content / systems / engine / audio / ui 분리 및 외부 에셋 의존성 0% 달성",
        "창작 오리지널 12챕터 시나리오(청운산문 → 낙양 객잔 → 태행산 → 매화장 결전) 및 4종 멀티 엔딩(em1~3, d9)",
        "고도화된 액션 전투: 3단계 공격 프레임(WINDUP/ACTIVE/RECOVER), 저스트 패링(Q), 경공 도약(X), 5대 무공(1~5), 보스 예고 장판",
        "GitHub Actions 자동 빌드 파이프라인 구축 및 https://schuna.github.io/SwordsMan/ 라이브 배포 완료"
      ],
      relationNote: "CrimsonCore의 프로시저럴 2D 도트·액션 전투 엔진과 초기 리마스터 파이프라인의 12챕터 내러티브 구조를 결합해 완성한 공개 배포용 프로젝트예요.",
      todos: [
        { id: "sm-1", text: "모바일 터치 화면에서 보스전 패링(Q)·경공(X) 연속 입력 시 버튼 피드백 가시성 미세 조정", priority: "low", done: false },
        { id: "sm-2", text: "클리어 후 다회차(New Game+) 무공 숙련도 인계 및 타임어택 통계 모드 검토", priority: "low", done: false }
      ],
      localLaunch: {
        path: "C:\\Gemini\\SwordsMan",
        port: "Live / 5188",
        command: "cd C:\\Gemini\\SwordsMan\nnpm run build\nnpm start",
        note: "온라인 배포본 즉시 실행 가능: https://schuna.github.io/SwordsMan/ (로컬: 5188 포트)"
      }
    },
    {
      id: "crimson-core",
      name: "CrimsonCore",
      title: "CrimsonCore (1993 Classic Isometric Engine)",
      subtitle: "6챕터 1993 시나리오 · 모듈형 아이소메트릭 렌더러 · 로컬 미디어 하이브리드 로더 프로토타입",
      category: "game-engine",
      categoryLabel: "게임 엔진 · RPG",
      visibility: "private",
      language: "TypeScript",
      techStack: ["TypeScript", "Vite 2.9", "HTML5 Canvas", "Procedural Pixel Art", "Web Audio OPL2 Synth"],
      repoUrl: "https://github.com/schuna/CrimsonCore",
      liveUrl: null,
      deployType: "local-server",
      statusBadge: "6챕터 시나리오 & 엔진 구현 완료",
      statusLevel: "completed",
      progress: 94,
      lastUpdated: "2026-11-15",
      summary: "1993년 동방불패(소오강호) DOS판의 쿼터뷰 감성을 현대 웹 기술로 재해석한 코어 엔진 레포지터리예요. 오프스크린 타일 베이킹, 3단계 프레임 전투, 로컬 동영상·음원 하이브리드 로더를 갖추고 있어요.",
      highlights: [
        "제1장 화산파 개국부터 제6장 흑목애 결전까지 6챕터 시나리오, NPC 호위(임평지), 비급 전수 이벤트 구현",
        "ReadOnlyUIState 스냅샷 및 CombatEvent 버스 기반의 깔끔한 로직·UI 분리 설계",
        "public/assets/ 로컬 원작 컷신(.mp4) 및 BGM 존재 시 자동 재생하고 없을 때 프로시저럴 신스로 폴백하는 하이브리드 로더",
        "SwordsMan Phase 5 퍼블릭 경량 엔진 전환의 핵심 레퍼런스 아키텍처 역할 수행"
      ],
      relationNote: "SwordsMan 프로젝트의 전투·렌더링·사운드 합성 코어를 탄생시킨 원형(Prototype) 엔진 저장소예요.",
      todos: [
        { id: "cc-1", text: "SwordsMan Phase 5에서 개선된 모바일 터치 UI 컴포넌트를 CrimsonCore에도 선택적 역이식 검토", priority: "low", done: false }
      ],
      localLaunch: {
        path: "C:\\Gemini\\CrimsonCore",
        port: "5188",
        command: "cd C:\\Gemini\\CrimsonCore\nnpm run dev",
        note: "classic-1993 브랜치 기준 · http://localhost:5188 접속"
      }
    },
    {
      id: "google-drive-manager",
      name: "GoogleDriveManager",
      title: "GoogleDriveManager (시맨틱 탐색기 & 자동 분류기)",
      subtitle: "Google Drive 의미 기반 5대 대분류 구조화 · 10ms 초고속 웹 탐색기 · Inbox 선택형 자동 분류 대시보드",
      category: "ai-workflow",
      categoryLabel: "AI · 자동화",
      visibility: "private",
      language: "Python",
      techStack: ["Python 3.10+", "FastAPI / HTTP Server", "Google Drive API v3", "MCP Server", "Semantic Rule Engine"],
      repoUrl: "https://github.com/schuna/GoogleDriveManager",
      liveUrl: null,
      deployType: "local-server",
      statusBadge: "선택형 Inbox 분류 & 스킬 가이드 완료",
      statusLevel: "completed",
      progress: 95,
      lastUpdated: "2026-11-07",
      summary: "Google Drive에 흩어진 파일들을 의미적 유사성 기준 5대 대분류(개발/AI, 재정/자산, 개인/라이프, 미디어/앨범, 아카이브/백업)로 구조화하고, 10ms 이내 실시간 검색과 Inbox 자동 분류를 제공하는 로컬 웹 대시보드예요.",
      highlights: [
        "초고속 시맨틱 탐색기(localhost:5188): Ctrl+K 즉시 필터링, 카테고리 트리·문서 타입별 필터, 구글 웹 뷰어 원클릭 연결",
        "Inbox 스마트 자동 분류기: DDR5·반도체 등 도메인 규칙 매칭, 하위 폴더 자동 생성, 체크박스 선택형 일괄 이동 지원",
        "무삭제 안전 원칙(삭제 권한 원천 배제) 및 data/operations.jsonl 감사 로그 기반 언제든 원상 복구 가능",
        "Antigravity 연동용 gdrive-manager 스킬 가이드 및 프로젝트 개발 완료 보고서 문서화 완료"
      ],
      relationNote: "로컬 PC(C:\\Gemini)뿐 아니라 클라우드(Google Drive)의 연구·개발 문서 자산까지 AI 규칙 엔진으로 체계화하는 생산성 도구예요.",
      todos: [
        { id: "gd-1", text: "새로 유입되는 프로젝트 문서 키워드 패턴 모니터링 및 시맨틱 분류 룰 주기적 보강", priority: "low", done: false }
      ],
      localLaunch: {
        path: "C:\\Gemini\\GoogleDriveManager",
        port: "5188",
        command: "cd C:\\Gemini\\GoogleDriveManager\n.\\.venv\\Scripts\\python.exe -m webapp.server",
        note: "start_explorer.bat 더블클릭 실행 가능 · http://localhost:5188 접속"
      }
    },
    {
      id: "workout-coach",
      name: "workout_coach",
      title: "Workout Coach (웨이트 트레이닝 어시스턴트)",
      subtitle: "2~3종목 슈퍼세트·순차 진행 · 절대시간 휴식 타이머 · 1RM 추적 · 구글 시트 양방향 연동 모바일 PWA",
      category: "fitness-analytics",
      categoryLabel: "피트니스 · 데이터",
      visibility: "public",
      language: "HTML",
      techStack: ["HTML5 / JS", "PWA (sw.js v2)", "Screen Wake Lock API", "Google Apps Script", "Adaptive Light/Dark UI"],
      repoUrl: "https://github.com/schuna/workout_coach",
      liveUrl: "https://schuna.github.io/workout_coach/",
      liveStatus: "live",
      deployType: "static-webapp",
      statusBadge: "슈퍼세트 & TDS 테마 업데이트 (Live)",
      statusLevel: "completed",
      progress: 98,
      lastUpdated: "2026-11-18",
      summary: "스마트폰 홈 화면에 설치해 체육관 오프라인 환경에서도 바로 쓰는 웨이트 트레이닝 전용 PWA예요. 최근 업데이트로 운동 선택 바구니(Dock) 기반 2~3개 종목 묶음(슈퍼세트·순차 진행)과 라이트/다크 모드 전환이 추가되었어요.",
      highlights: [
        "운동 선택 바구니(Dock) & 다중 종목 진행: 2~3개 종목을 골라 슈퍼세트 또는 순차 진행으로 끊김 없이 수행",
        "클린 라이트/다크 테마 전환 UI 적용 및 PWA Service Worker v2 캐시 자동 갱신",
        "종목별 최근 수행 무게·횟수 원터치 불러오기, Epley 추정 1RM 트래킹, 오차 없는 절대시간 휴식 타이머",
        "구글 스프레드시트 양방향 동기화 및 중복 업로드 방지·중복 행 제거 헬퍼 완비"
      ],
      relationNote: "현재 https://schuna.github.io/workout_coach/ 에서 운영 중이며, 기록된 웨이트 데이터는 suunto-fit-analytics의 심박·회복 지표와 상호 보완돼요.",
      todos: [
        { id: "wc-1", text: "자주 묶어 하는 슈퍼세트 조합 프리셋 저장 기능 검토", priority: "low", done: false },
        { id: "wc-2", text: "종목별 최고 추정 1RM 장기 성장 추이 라인 차트 탭 보강 검토", priority: "low", done: false }
      ],
      localLaunch: {
        path: "C:\\Gemini\\workout_coach",
        port: "Live / 8081",
        command: "cd C:\\Gemini\\workout_coach\npython -m http.server 8081",
        note: "온라인 배포본 즉시 사용 가능: https://schuna.github.io/workout_coach/"
      }
    },
    {
      id: "english-studio",
      name: "EnglishStudio",
      title: "EnglishStudio (미디어 & 여행 영어 복습 스튜디오)",
      subtitle: "6대 테마 38개 핵심 문장 · 유연 채점 타이핑 · Web Speech AI 음성 스피킹(STT) · 3D 플래시카드 웹앱",
      category: "sw-learning",
      categoryLabel: "SW · 어학 학습",
      visibility: "public",
      language: "HTML",
      techStack: ["HTML5 / JS", "OKLCH Adaptive Theme", "Web Speech API (STT/TTS)", "3D CSS Flip", "Zero-Dependency SPA"],
      repoUrl: "https://github.com/schuna/EnglishStudio",
      liveUrl: "https://schuna.github.io/EnglishStudio/",
      liveStatus: "live",
      deployType: "static-webapp",
      statusBadge: "38문장 확장 & 테마 토글 완료 · Live",
      statusLevel: "completed",
      progress: 98,
      lastUpdated: "2026-11-18",
      summary: "스트리밍, 리부트, 더빙, 자막, 몰아보기, 해외여행 등 6개 테마 38개 핵심 영어 표현을 타이핑 연습, 실시간 마이크 음성 발화 인식(STT), 3D 플래시카드, 전체 표현 목록의 4가지 뷰로 입체 학습하는 웹앱이에요.",
      highlights: [
        "해외여행 실전 문장 14개 추가(ID 25~38, 총 38문장) 및 OKLCH 라이트/다크 테마 토글·세그먼트 컨트롤 UI 개편",
        "유연 채점 타이핑 뷰: 대소문자·문장부호 무관 채점, 단어 단위 Diff 비교, 첫 글자/핵심 어휘 힌트 및 표현 해설",
        "Web Speech API 음성 스피킹 뷰: 브라우저 마이크 음성 인식(STT) 연동 실시간 발음 정확도 점수 산출",
        "3D 회전 플래시카드 & 원어민 발음 재생(TTS 0.8x~1.2x 속도 조절), 글로벌 셔플, 중요 문장 북마크 지원"
      ],
      relationNote: "RegexLearn·DockerLearn과 함께 별도 백엔드 없이 브라우저 내장 API만으로 완결된 인터랙티브 학습 경험을 제공해요.",
      todos: [
        { id: "en-1", text: "비즈니스·IT 실무 영어 등 신규 카테고리 문장 팩 확장 검토", priority: "low", done: false },
        { id: "en-2", text: "북마크 및 오답 문장 집중 복습 모드와 PWA 오프라인 캐싱 적용 검토", priority: "low", done: false }
      ],
      localLaunch: {
        path: "C:\\Gemini\\EnglishStudio",
        port: "Live / 8082",
        command: "cd C:\\Gemini\\EnglishStudio\npython -m http.server 8082",
        note: "온라인 배포본 즉시 사용 가능: https://schuna.github.io/EnglishStudio/"
      }
    },
    {
      id: "squadron",
      name: "Squadron",
      title: "Squadron (스쿼드론)",
      subtitle: "이종 AI 에이전트 통합 관제 및 3계층 하이브리드 거버넌스 플랫폼",
      category: "ai-workflow",
      categoryLabel: "AI · 자동화",
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
      summary: "단일 AI 벤더 종속과 자체 리뷰 편향을 극복하기 위해 OpenAI Codex CLI(TDD 자율 구현)와 Google Antigravity(심층 아키텍처 조사 & 교차 코드 리뷰)를 페어로 구성하고, 인간 승인(HITL) 및 예산/DLP 통제를 결합한 3계층 거버넌스 시스템이에요.",
      highlights: [
        "Layer 1 거버넌스: 이원화 예산 Hard-Cap 차단기(BudgetManager) 및 민감정보 자동 마스킹(DLPFilter)",
        "Layer 2 오케스트레이션: 5단계 파이프라인, 최대 2회 자율 치유(Self-Healing) 루프, Matrix 실시간 승인 봇 데몬",
        "Layer 3 샌드박스 & 검증: --network none 일회용 격리 Verifier, TOCTOU 해시 대조 후 git apply 및 GitHub PR 자동 생성",
        "단위 및 E2E 테스트 27개 전항목 통과 + GitHub Actions CI 매트릭스 구축 완료"
      ],
      relationNote: "CodexWorkFlow의 격리 실행·검증 루프와 ClaudeLearn의 토큰 예산 거버넌스 개념을 멀티 에이전트 아키텍처로 통합한 상위 플랫폼이에요.",
      todos: [
        { id: "sq-1", text: "로컬 Docker 샌드박스 이미지(Dockerfile.codex / verifier) 빌드 및 실전 태스크 E2E 드라이런", priority: "high", done: false },
        { id: "sq-2", text: "Matrix #squadron-ops 실서버 계정 연결 및 승인/반려 웹훅 실전 테스트", priority: "medium", done: false },
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
      categoryLabel: "AI · 자동화",
      visibility: "public",
      language: "Python",
      techStack: ["Python", "Vanilla JS", "Codex CLI", "Unittest (58 tests)", "PowerShell"],
      repoUrl: "https://github.com/schuna/CodexWorkFlow",
      liveUrl: null,
      deployType: "local-app",
      statusBadge: "P1~P3 구현 · 회귀 58/58 통과",
      statusLevel: "active",
      progress: 70,
      lastUpdated: "2026-11-07",
      summary: "장기 대화 세션에서 발생하는 컨텍스트 오염과 토큰 급증을 막기 위해, 목표 분할 → 작업별 격리 실행 → 검증 명령 자동 확인 → 상태 벡터(PROGRESS.md) 인계로 이어지는 Codex 실사용 워크플로우 도구예요.",
      highlights: [
        "P1 상태 코어(.codex-workflow & PROGRESS.md) 원자적 저장, 잠금(execution.lock) 및 복구 계약 구현",
        "P2 CLI 실행기 및 P3 로컬 웹 GUI(프로젝트 선택 → 계획 검토 → 실행 → 결과 확인) 구축 완료",
        "문서·수용표 정합화 완료 및 회귀 테스트 58/58(100%) 통과, Windows 수용 체크리스트(W01~W10) 수립",
        "로컬 C:\\Gemini\\CodexWorkFlow 클론 동기화 완료 및 원클릭 런처(start-workflow.ps1) 지원"
      ],
      relationNote: "ClaudeLearn과 동일한 작업 단위 상태 인계 철학을 OpenAI Codex 환경에 맞게 구현했으며, 후속 실험(P4)을 통해 정량적 토큰 절감 효과를 실측해요.",
      todos: [
        { id: "cw-1", text: "[followup-windows] 격리 Windows 환경에서 실패·권한·인코딩·중단 복구(W01~W06) 실환경 시험", priority: "high", done: false },
        { id: "cw-2", text: "[followup-usability] 첫 사용자 3명 대상 무설명 사용성 평가 및 막힘 지점 개선", priority: "high", done: false },
        { id: "cw-3", text: "[followup-comparison] P4 동일 조건 장기 대화 vs 작업별 인계 토큰·성공률 비교 실험", priority: "medium", done: false },
        { id: "cw-4", text: "[followup-policy & release] P5 실측 기반 운영 정책 정비 및 클린 Windows 설치 최종 수용 검증", priority: "medium", done: false }
      ],
      localLaunch: {
        path: "C:\\Gemini\\CodexWorkFlow",
        port: "Local GUI",
        command: "cd C:\\Gemini\\CodexWorkFlow\npython -m unittest discover -s tests -v\n.\\start-workflow.ps1",
        note: "C:\\Gemini\\CodexWorkFlow 클론 완료 · PowerShell 런처로 즉시 실행"
      }
    },
    {
      id: "claude-learn",
      name: "ClaudeLearn",
      title: "ClaudeLearn (cx + Control Center)",
      subtitle: "WSL Ubuntu & Docker 컨테이너용 Claude CLI 토큰 80~90% 절감 스마트 래퍼 및 웹 컨트롤 센터",
      category: "ai-workflow",
      categoryLabel: "AI · 자동화",
      visibility: "private",
      language: "JavaScript",
      techStack: ["Node.js (v14+)", "Bash (WSL)", "Docker CLI", "SVG Telemetry Chart", "Zero-Dependency Server"],
      repoUrl: "https://github.com/schuna/ClaudeLearn",
      liveUrl: null,
      deployType: "local-server",
      statusBadge: "Phase 1~4 전구간 완료 · 동기화됨",
      statusLevel: "completed",
      progress: 94,
      lastUpdated: "2026-11-07",
      summary: "상시 구동 중인 프로젝트별 Docker 컨테이너 환경에서 CLAUDE.md(4-Block 거버넌스) + PROGRESS.md(1,000 토큰 상태 벡터) + /clear(톱니바퀴 리셋) 워크플로우를 단축 명령어(cx)와 로컬 웹 대시보드(3200 포트)로 자동화하는 솔루션이에요.",
      highlights: [
        "5단계 스마트 래퍼(cx init / plan / save / resume / -p): 접속 전 Pre-Flight 브리핑 및 종료 후 토큰 영수증 출력",
        "실시간 과열 경고 상태줄(statusline-hook.sh): 12턴 또는 20k 토큰 초과 시 즉각 압축·/clear 경고 배지 노출",
        "웹 컨트롤 센터(Port 3200): 1,000 토큰 예산 게이지, PROGRESS.md 인터랙티브 체크리스트, 원클릭 거버넌스 배포",
        "실제 ~/.claude JSONL 로그 파싱 기반 톱니바퀴 절감 차트 및 AI 워크플로우 습관 점수(Habit Score 100점 만점) 코칭"
      ],
      relationNote: "Docker 컨테이너 기반 개발 환경에서 Claude CLI 비용을 크게 낮추는 핵심 도구로, 로컬 C:\\Gemini\\ClaudeLearn 동기화까지 모두 완료되었어요.",
      todos: [
        { id: "cl-2", text: "WSL Ubuntu ~/.bashrc 에 bash ./bin/install-wsl.sh 실행하여 cx 별칭 상시 등록", priority: "medium", done: false },
        { id: "cl-3", text: "실제 구동 컨테이너 장기 세션 JSONL 데이터를 통한 Habit Score 가중치 미세 튜닝", priority: "low", done: false }
      ],
      localLaunch: {
        path: "C:\\Gemini\\ClaudeLearn",
        port: "3200",
        command: "cd C:\\Gemini\\ClaudeLearn\nnpm test\nnpm start",
        note: "외부 패키지 설치 불필요 (Node v14 내장 모듈) · http://localhost:3200 접속"
      }
    },
    {
      id: "regex-learn",
      name: "RegexLearn",
      title: "RegexLearn (PyRegex Studio v2.0)",
      subtitle: "Step-by-Step AST 매칭 트레이서 & 월드맵 기반 Python re 정규표현식 시각적 학습 웹앱",
      category: "sw-learning",
      categoryLabel: "SW · 어학 학습",
      visibility: "public",
      language: "JavaScript",
      techStack: ["React 18", "Vite 2.9", "Tailwind CSS", "Generator AST Tracer", "Lucide Icons"],
      repoUrl: "https://github.com/schuna/RegexLearn",
      liveUrl: "https://schuna.github.io/RegexLearn/",
      liveStatus: "live",
      deployType: "static-webapp",
      statusBadge: "v2.0 완료 · Live 배포 중",
      statusLevel: "completed",
      progress: 98,
      lastUpdated: "2026-11-07",
      summary: "Python(re 모듈) 정규표현식을 기초부터 전후방 탐색·명명된 그룹·백트래킹 최적화까지 체계적으로 익힐 수 있도록, 제너레이터 기반 Step-by-Step 디버거와 시각적 Goal Diff 뷰어를 결합한 학습 플랫폼이에요.",
      highlights: [
        "Step-by-Step 매칭 트레이서: 토큰 포인터, 텍스트 커서, Zero-width(|) 포인터, 백트래킹 과정을 스텝 단위로 재생 및 슬라이더 탐색",
        "Goal Diff 비교 뷰어 & Before/After 개념 시연 위젯: 과다 매칭·누락 매칭 실시간 진단",
        "5단계 커리큘럼 스테이지 월드맵 & 정량적 마스터 별점 보상 + Python 코드 원클릭 복사",
        "Public 전환 및 https://schuna.github.io/RegexLearn/ 정적 빌드 배포 완료"
      ],
      relationNote: "DockerLearn과 함께 시각적 디버깅 UX를 적용한 대표적인 100% 클라이언트 사이드 교육용 웹앱이에요.",
      todos: [
        { id: "rl-3", text: "사용자 커스텀 정규식 퀴즈 JSON 공유 기능 및 ReDoS 백트래킹 심화 미션 추가 검토", priority: "low", done: false },
        { id: "rl-4", text: "모바일 작은 화면(360px 이하)에서 트레이서 컨트롤 바 접기/펼치기 UX 개선 검토", priority: "low", done: false }
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
      categoryLabel: "SW · 어학 학습",
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
      summary: "백엔드 서버나 실제 Docker 데몬 없이 웹 브라우저 메모리 상에서 컨테이너·이미지 레이어·볼륨·브리지 네트워크 라이프사이클을 시뮬레이션하고 React Flow 캔버스에 실시간 애니메이션으로 시각화하는 학습 플랫폼이에요.",
      highlights: [
        "100% 클라이언트 가상 도커 엔진 + 최대 20스텝 상태 스냅샷 타임머신(undo / redo) 및 화이트리스트 CLI 파서",
        "React Flow 커스텀 노드(Container, ImageStack, Volume, NetworkGroup) 및 포트/볼륨 트래픽 발광 파티클 엣지",
        "가상 Bash 터미널(방향키 히스토리, Tab 자동완성, 힌트 알약) + 내장 Dockerfile / compose.yaml 탭 에디터",
        "Public 전환 및 https://schuna.github.io/DockerLearn/ 정적 빌드 배포 완료"
      ],
      relationNote: "서버리스 인메모리 시뮬레이션 구조 덕분에 GitHub Pages 정적 호스팅만으로 언제 어디서나 무료 도커 실습 환경을 제공해요.",
      todos: [
        { id: "dl-3", text: "커스텀 실습 시나리오 JSON 에디터 및 다국어(i18n) 확장 검토", priority: "low", done: false },
        { id: "dl-4", text: "PWA(Service Worker) 매니페스트 추가로 오프라인 도커 실습 환경 지원 검토", priority: "low", done: false }
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
      categoryLabel: "반도체 · 하드웨어",
      visibility: "private",
      language: "TypeScript",
      techStack: ["TypeScript", "React", "Vite 2.9", "HTML5 Canvas", "JEDEC JESD79-5 DB"],
      repoUrl: "https://github.com/schuna/DfeLearn",
      liveUrl: "https://schuna.github.io/DfeLearn/",
      liveStatus: "live",
      deployType: "static-webapp",
      statusBadge: "v2.1 완료 · Live 배포 중",
      statusLevel: "completed",
      progress: 98,
      lastUpdated: "2026-11-07",
      summary: "고속 DDR5 메모리 인터페이스(6.4Gbps+)의 채널 손실(ISI)과 반사 노이즈를 보정하는 4-Tap DFE 아키텍처, 위상 인터리빙(1/2/4-way), JEDEC 모드 레지스터(MR111~MR255) 제어 및 2D Eye Shmoo 플롯을 웹에서 직접 조작하며 학습하는 시뮬레이터예요.",
      highlights: [
        "초급 모듈: 전송선 삽입 손실(dB)·스텁 반사 슬라이더, CTLE(노이즈 증폭 부작용) vs DFE(순수 ISI 차감) A/B 비교 및 논문 프리셋",
        "중급 모듈: 4-Tap DFE 계수 제어(Tap1~4, 1.0X/2.0X 벤더 배율), 슬라이서 연산 추적기, 1/2/4-way 위상 구조 및 tDFE 타이밍 시뮬레이션",
        "고급 & 챌린지 모듈: MR111 극성 반전 함정(0B=Enabled) 반영, 18개 핀 그룹(DML/DMU/DQL/DQU) 개별 레지스터 디코딩 및 2D Shmoo 플롯",
        "원본 저장소 Private 유지(JEDEC 표준 PDF 보호) + https://schuna.github.io/DfeLearn/ 정적 번들 Live 배포 완료"
      ],
      relationNote: "SemiLearn의 기초 소자 학습 이후 고속 디지털 I/O 및 메모리 신호 무결성(SI) 엔지니어링으로 넘어가는 심화 플랫폼이에요.",
      todos: [
        { id: "df-3", text: "DDR5 JEDEC 차기 개정판(6.8Gbps+ 규격) 확정 시 수치 업데이트", priority: "low", done: false },
        { id: "df-4", text: "실제 PCB 채널 측정 S-parameter (Touchstone .s4p) 파일 업로드 파서 확장 검토", priority: "low", done: false }
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
      categoryLabel: "반도체 · 하드웨어",
      visibility: "public",
      language: "JavaScript",
      techStack: ["HTML5", "Vanilla JS", "Tailwind CDN", "KaTeX", "Canvas Simulation", "Playwright"],
      repoUrl: "https://github.com/schuna/SemiLearn",
      liveUrl: "https://schuna.github.io/SemiLearn/",
      liveStatus: "live",
      deployType: "static-webapp",
      statusBadge: "Phase 1 & Ch 1 번역 파일럿 · Live",
      statusLevel: "active",
      progress: 55,
      lastUpdated: "2026-11-07",
      summary: "Tony R. Kuphaldt의 교재(CC BY 4.0) 13개 챕터를 바탕으로 핵심 개념 요약, 전자/정공 이동 및 정류 회로 Canvas 시뮬레이션, KaTeX 수식 분석, 그리고 영어 원문·한국어 문단 대조 읽기 탭을 제공하는 정적 웹 플랫폼이에요.",
      highlights: [
        "13개 챕터 내비게이션 셸 및 5대 학습 탭(핵심 요약 / 인터랙티브 랩 / 심층 탐구 / 교재 원문·번역 / 추천 보충 자료) 구축",
        "Ch 1~3 Canvas 시뮬레이터: 신호 증폭·클리핑·dB 계산기(Ch1), 에너지 밴드갭·P-N 접합(Ch2), 브리지 정류 도통 경로·RC 평활·쇼클리 I-V 곡선(Ch3)",
        "Ch 1(증폭기와 능동 소자) 1.1~1.7절 원문·한국어 병렬 번역 및 Analog Devices/Keysight 보충 해설 파일럿 탑재",
        "로컬 .git 복구(.nojekyll 추가) 및 https://schuna.github.io/SemiLearn/ GitHub Pages 라이브 배포 완료"
      ],
      relationNote: "기초 반도체 물성과 아날로그 회로 원리를 다루며, 고속 디지털 신호 무결성을 다루는 DfeLearn과 상호 보완돼요.",
      todos: [
        { id: "sl-3", text: "Phase 1 마감 검증: Ch 2/3 그래픽 결함 수정본 Playwright 재캡처(npm run capture:phase1) 및 외부 링크 확인", priority: "high", done: false },
        { id: "sl-4", text: "Ch 1 잔여 문단(1.3, 1.5~1.7)·수식·그림 대조 완료 후 Ch 1 부분 공개 표기 해제", priority: "high", done: false },
        { id: "sl-5", text: "Phase 2(Ch 4~6: BJT, JFET, MOSFET) 캐리어 흐름·핀치오프·반전층 Canvas 시뮬레이터 및 번역 확장", priority: "medium", done: false }
      ],
      localLaunch: {
        path: "C:\\Gemini\\SemiLearn",
        port: "Live / 8000",
        command: "cd C:\\Gemini\\SemiLearn\npython -m http.server 8000",
        note: "온라인 배포본 즉시 사용 가능: https://schuna.github.io/SemiLearn/ (로컬: 8000 포트)"
      }
    },
    {
      id: "suunto-fit-analytics",
      name: "suunto-fit-analytics",
      title: "Suunto Fit Analytics & Dashboard",
      subtitle: "2년 7개월(2,228 세션) Suunto 워치 운동·수면·회복·훈련부하(PMC) 초고속 파이썬 분석 대시보드",
      category: "fitness-analytics",
      categoryLabel: "피트니스 · 데이터",
      visibility: "private",
      language: "Python",
      techStack: ["Python 3.10+", "FastAPI", "SQLite (2.8MB)", "Pure-Python FIT/GPX Parser", "Chart.js", "Leaflet Map"],
      repoUrl: "https://github.com/schuna/suunto-fit-analytics",
      liveUrl: null,
      deployType: "local-server",
      statusBadge: "대시보드 & 2,228세션 DB 구축 완료",
      statusLevel: "completed",
      progress: 90,
      lastUpdated: "2026-11-07",
      summary: "Suunto 9 Peak Pro / 5 Peak 스마트워치에서 내보낸 .fit, .gpx, 수면·회복·활동량 NDJSON 데이터를 외부 무거운 라이브러리 없이 순수 Python으로 초고속 파싱·인덱싱하고, 러닝(4,808km)·웨이트(405세션)·PMC 훈련부하를 분석하는 대시보드예요.",
      highlights: [
        "Pure-Python 고속 바이너리 파서(etl.py): 2,228개 운동 세션 및 954일 치 일별 생체 데이터를 2.8MB SQLite DB로 인덱싱",
        "누적 분석 하이라이트: 러닝 853세션(4,808km, 평균 페이스 6:40/km, 최고 VO2max 52.8), 웨이트 405세션(291.2시간), 더블데이 208일",
        "스포츠 과학 지표: 일별 훈련 부하(TSS) 기반 체력(CTL), 피로(ATL), 컨디션(TSB) PMC 차트 및 수면·회복 상관관계 분석",
        "로컬 C:\\Gemini\\suunto-fit-analytics 클론 동기화 완료 및 원클릭 실행 스크립트(run_dashboard.bat) 지원"
      ],
      relationNote: "workout_coach의 세트별 중량·슈퍼세트 기록과 Suunto 워치의 심박·칼로리·수면·TSB 컨디션 지표를 연결하는 데이터 웨어하우스예요.",
      todos: [
        { id: "sf-2", text: "신규 Suunto Export 압축파일 드롭 시 변경분만 반영하는 증분 ETL(Incremental Indexing) 스크립트 고도화", priority: "medium", done: false },
        { id: "sf-3", text: "workout_coach 구글 시트 데이터와 Suunto Gym 세션을 타임스탬프로 매칭하는 통합 뷰 기획", priority: "low", done: false }
      ],
      localLaunch: {
        path: "C:\\Gemini\\suunto-fit-analytics",
        port: "8080",
        command: "cd C:\\Gemini\\suunto-fit-analytics\\dashboard\npython -m uvicorn server:app --host 127.0.0.1 --port 8080 --reload",
        note: "5173 포트 회피 준수 · http://localhost:8080 접속 (run_dashboard.bat 더블클릭 가능)"
      }
    }
  ],

  syncDiagnostics: [
    {
      repo: "13개 핵심 레포지터리 전체 (C:\\Gemini\\*)",
      localPath: "C:\\Gemini\\[13개 폴더 전체]",
      status: "ok",
      statusLabel: "13/13 동기화 완료",
      detail: "신규 추가된 SwordsMan(Live 배포), CrimsonCore, GoogleDriveManager 및 최근 업데이트된 workout_coach, EnglishStudio까지 13개 저장소 모두 로컬 C:\\Gemini 폴더와 원격 GitHub 최신 커밋이 일치해요.",
      fixCommand: "Get-ChildItem C:\\Gemini -Directory | ForEach-Object { Write-Host $_.Name; git -C $_.FullName status -s }"
    },
    {
      repo: "SwordsMan & CrimsonCore 무협 RPG 엔진 동기화",
      localPath: "C:\\Gemini\\SwordsMan · CrimsonCore",
      status: "ok",
      statusLabel: "Phase 5 & GitHub Pages 배포 완료",
      detail: "CrimsonCore의 프로시저럴 2D 도트·액션 전투 코어와 SwordsMan의 12챕터 창작 시나리오가 결합되어 https://schuna.github.io/SwordsMan/ 에 정식 배포되었어요.",
      fixCommand: "git -C C:\\Gemini\\SwordsMan log -n 2 --oneline ; git -C C:\\Gemini\\CrimsonCore log -n 2 --oneline"
    },
    {
      repo: "workout_coach & EnglishStudio 최신 업데이트 반영",
      localPath: "C:\\Gemini\\workout_coach · EnglishStudio",
      status: "ok",
      statusLabel: "2026-11-18 최신 커밋 반영",
      detail: "workout_coach(2~3종목 슈퍼세트·순차 진행 바구니 UI, 라이트/다크 테마)와 EnglishStudio(해외여행 14문장 추가 총 38문장, 라이트/다크 테마) 업데이트가 모두 라이브 페이지에 반영되어 있어요.",
      fixCommand: "git -C C:\\Gemini\\workout_coach log -n 2 --oneline ; git -C C:\\Gemini\\EnglishStudio log -n 2 --oneline"
    },
    {
      repo: "웹앱 3종 정적 빌드 재배포 원클릭 스크립트",
      localPath: "RegexLearn · DockerLearn · DfeLearn → schuna.github.io",
      status: "info",
      statusLabel: "업데이트 시 사용",
      detail: "향후 RegexLearn, DockerLearn, DfeLearn 소스 수정 후 Live Demo를 갱신할 때 아래 명령어를 복사해 실행하면 빌드부터 배포까지 한 번에 처리돼요.",
      fixCommand: "foreach ($a in @('RegexLearn','DockerLearn','DfeLearn')) { cd C:\\Gemini\\$a; npm run build; Copy-Item -Recurse -Force dist/* C:\\Gemini\\schuna.github.io\\$a/ }; cd C:\\Gemini\\schuna.github.io; git add .; git commit -m 'chore: update static web app builds'; git push"
    }
  ]
};
