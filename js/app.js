/**
 * Schuna Engineering & Project Hub — Main Application Controller (v3.0)
 * Single Brand Blue Accent, Cool-Blue Neutrals, Conversational Copy & Tabular Numerals
 */

(function () {
  "use strict";

  const STORAGE_KEY_TODOS = "schuna_hub_todos_v2";
  const STORAGE_KEY_THEME = "schuna_hub_theme_v3";

  const data = window.SCHUNA_HUB_DATA;
  if (!data) {
    console.error("SCHUNA_HUB_DATA failed to load.");
    return;
  }

  // Application State
  const state = {
    activeCategory: "all",
    activeFilter: "all", // 'all' | 'public' | 'private' | 'webapp'
    searchQuery: "",
    todoFilter: "pending", // 'pending' | 'high' | 'all'
    todoDoneMap: loadTodoState(),
    expandedCmdRepoId: null
  };

  function loadTodoState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_TODOS);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveTodoState() {
    try {
      localStorage.setItem(STORAGE_KEY_TODOS, JSON.stringify(state.todoDoneMap));
    } catch (e) {
      // ignore storage quota errors
    }
  }

  function isTodoDone(todo) {
    if (Object.prototype.hasOwnProperty.call(state.todoDoneMap, todo.id)) {
      return Boolean(state.todoDoneMap[todo.id]);
    }
    return Boolean(todo.done);
  }

  function toggleTodo(todoId) {
    const allTodos = [];
    data.repositories.forEach((r) => r.todos.forEach((t) => allTodos.push(t)));
    const target = allTodos.find((t) => t.id === todoId);
    if (!target) return;

    const current = isTodoDone(target);
    state.todoDoneMap[todoId] = !current;
    saveTodoState();
    renderAll();
    showToast(!current ? "할 일 항목을 완료로 표시했어요" : "할 일 항목을 다시 진행 중으로 바꿨어요");
  }

  function resetTodos() {
    state.todoDoneMap = {};
    saveTodoState();
    renderAll();
    showToast("체크 상태를 처음 기준으로 되돌렸어요");
  }

  // Theme management (Light-first default, adaptive Dark mode supported)
  function initTheme() {
    const saved = localStorage.getItem(STORAGE_KEY_THEME);
    const html = document.documentElement;
    if (saved === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    updateThemeButtonUI();
  }

  function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.classList.toggle("dark");
    localStorage.setItem(STORAGE_KEY_THEME, isDark ? "dark" : "light");
    updateThemeButtonUI();
  }

  function updateThemeButtonUI() {
    const isDark = document.documentElement.classList.contains("dark");
    const iconEl = document.getElementById("theme-toggle-icon");
    if (!iconEl) return;

    if (isDark) {
      iconEl.innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
      `;
    } else {
      iconEl.innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </svg>
      `;
    }
  }

  // Strip inline emoji punctuation and em-dashes from text strings
  function cleanCopy(str) {
    return String(str ?? "")
      .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu, "")
      .replace(/\s*—\s*/g, " · ")
      .replace(/\s{2,}/g, " ")
      .trim();
  }

  // Escape HTML
  function escapeHtml(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function escapeClean(str) {
    return escapeHtml(cleanCopy(str));
  }

  // Curated 24px SVG Icons (1.6px stroke, rounded caps, currentColor inheritance)
  function getAssetIcon(kind) {
    switch (kind) {
      case "english-studio":
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>`;
      case "workout-coach":
      case "fitness-analytics":
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`;
      case "regex-learn":
      case "sw-learning":
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
      case "docker-learn":
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`;
      case "dfe-learn":
      case "semiconductor":
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`;
      case "semi-learn":
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>`;
      case "ai-workflow":
      default:
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`;
    }
  }

  // Copy to Clipboard
  function copyText(text, label) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`${cleanCopy(label || "명령어")}를 복사했어요`);
      }).catch(() => fallbackCopy(text, label));
    } else {
      fallbackCopy(text, label);
    }
  }

  function fallbackCopy(text, label) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      showToast(`${cleanCopy(label || "명령어")}를 복사했어요`);
    } catch (e) {
      showToast("복사하지 못했어요. 직접 선택해서 복사해 주세요");
    }
    document.body.removeChild(ta);
  }

  // Toast Component: grey-900 surface + white label, radius-l (14px), shadow-toast, 20px green-500 check circle
  function showToast(message) {
    const container = document.getElementById("toast-container");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = "toast-enter px-4 py-3 typo-label-s flex items-center gap-2.5";
    toast.innerHTML = `
      <span class="w-5 h-5 rounded-full inline-flex items-center justify-center shrink-0" style="background-color: var(--green-500); color: var(--white);">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </span>
      <span>${escapeClean(message)}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transition = "opacity 200ms cubic-bezier(0.22, 0.61, 0.36, 1)";
      setTimeout(() => toast.remove(), 220);
    }, 2400);
  }

  // Render 4 KPI Summary Cards (Tabular Figures)
  function renderHeroAndKpis() {
    const totalRepos = data.repositories.length;
    const publicCount = data.repositories.filter((r) => r.visibility === "public").length;
    const privateCount = totalRepos - publicCount;
    const liveWebAppsCount = (data.liveWebApps || []).length;
    const completedRepos = data.repositories.filter((r) => r.statusLevel === "completed").length;
    const activeRepos = totalRepos - completedRepos;

    let totalTodos = 0;
    let doneTodos = 0;
    let highPending = 0;

    data.repositories.forEach((r) => {
      r.todos.forEach((t) => {
        totalTodos += 1;
        if (isTodoDone(t)) {
          doneTodos += 1;
        } else if (t.priority === "high") {
          highPending += 1;
        }
      });
    });

    const pendingTodos = totalTodos - doneTodos;

    const kpiContainer = document.getElementById("kpi-summary-grid");
    if (!kpiContainer) return;

    kpiContainer.innerHTML = `
      <div class="surface-card p-5">
        <div class="flex items-center justify-between gap-2">
          <span class="typo-label-s" style="color: var(--grey-600);">전체 레포지터리</span>
          <span class="badge badge-neutral num-tabular">4개 분야</span>
        </div>
        <div class="mt-2.5 flex items-baseline gap-1.5">
          <span class="typo-h1 num-tabular" style="color: var(--grey-900);">${totalRepos}개</span>
        </div>
        <p class="mt-1.5 typo-caption num-tabular" style="color: var(--grey-600);">
          공개 <strong style="color: var(--blue-500); font-weight: 600;">${publicCount}</strong> · 비공개 <strong style="color: var(--grey-800); font-weight: 600;">${privateCount}</strong>
        </p>
      </div>

      <div class="surface-card p-5">
        <div class="flex items-center justify-between gap-2">
          <span class="typo-label-s" style="color: var(--grey-600);">라이브 웹앱</span>
          <span class="badge badge-green">운영 중</span>
        </div>
        <div class="mt-2.5 flex items-baseline justify-between">
          <span class="typo-h1 num-tabular" style="color: var(--blue-500);">${liveWebAppsCount}종</span>
          <a href="#live-demos" class="typo-label-s hover:underline" style="color: var(--blue-500);">바로 보기</a>
        </div>
        <p class="mt-1.5 typo-caption truncate" style="color: var(--grey-600);">
          설치 없이 브라우저에서 실행해요
        </p>
      </div>

      <div class="surface-card p-5">
        <div class="flex items-center justify-between gap-2">
          <span class="typo-label-s" style="color: var(--grey-600);">구현 완료·안정화</span>
          <span class="badge badge-brand num-tabular">진행 중 ${activeRepos}</span>
        </div>
        <div class="mt-2.5 flex items-baseline gap-1.5">
          <span class="typo-h1 num-tabular" style="color: var(--grey-900);">${completedRepos}개</span>
          <span class="typo-caption num-tabular" style="color: var(--grey-500);">/ ${totalRepos}개</span>
        </div>
        <p class="mt-1.5 typo-caption truncate" style="color: var(--grey-600);">
          CodexWorkFlow · SemiLearn 고도화 중
        </p>
      </div>

      <div class="surface-card p-5">
        <div class="flex items-center justify-between gap-2">
          <span class="typo-label-s" style="color: var(--grey-600);">남은 할 일</span>
          <span class="badge badge-red num-tabular">중요 ${highPending}</span>
        </div>
        <div class="mt-2.5 flex items-baseline justify-between">
          <span class="typo-h1 num-tabular" style="color: var(--grey-900);">${pendingTodos}건</span>
          <a href="#action-center" class="typo-label-s hover:underline" style="color: var(--blue-500);">목록 보기</a>
        </div>
        <p class="mt-1.5 typo-caption num-tabular" style="color: var(--grey-600);">
          완료한 항목 ${doneTodos}건
        </p>
      </div>
    `;
  }

  // Render 6 Live Web Apps Grid (44px Avatar Asset, Title-1, Body-2, Brand-Weak & Secondary Buttons)
  function renderLiveWebApps() {
    const container = document.getElementById("live-webapps-grid");
    if (!container || !data.liveWebApps) return;

    container.innerHTML = data.liveWebApps
      .map((app) => {
        const keyPointsHtml = (app.keyPoints || [])
          .map(
            (pt) => `
            <li class="flex items-start gap-2 typo-body-3" style="color: var(--grey-700);">
              <span class="mt-1 w-1.5 h-1.5 rounded-full shrink-0" style="background-color: var(--blue-500);"></span>
              <span>${escapeClean(pt)}</span>
            </li>
          `
          )
          .join("");

        return `
          <div class="surface-card p-5 flex flex-col justify-between">
            <div>
              <!-- Header with 44px Asset Avatar & Badge -->
              <div class="flex items-start justify-between gap-3 mb-3.5">
                <div class="asset-avatar">
                  ${getAssetIcon(app.id)}
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="badge badge-brand">${escapeClean(app.badge)}</span>
                  <span class="badge badge-green">라이브</span>
                </div>
              </div>

              <!-- Title (title-1 18px/600) & Subtitle -->
              <h3 class="typo-title-1" style="color: var(--grey-900);">
                <a href="${escapeHtml(app.url)}" target="_blank" rel="noopener noreferrer" class="hover:underline">
                  ${escapeClean(app.name)}
                </a>
              </h3>
              <p class="typo-label-s mt-1" style="color: var(--blue-500);">
                ${escapeClean(app.subtitle || app.tech)}
              </p>

              <!-- Description (body-2 15px/1.5) -->
              <p class="mt-2.5 typo-body-2" style="color: var(--grey-700);">
                ${escapeClean(app.description)}
              </p>

              <!-- Key Points -->
              <ul class="mt-3.5 pt-3.5 space-y-2 mb-5" style="border-top: 1px solid var(--hairline-border);">
                ${keyPointsHtml}
              </ul>
            </div>

            <!-- Action Buttons (Size M: 40px height, 12px radius) -->
            <div class="pt-3.5 flex items-center gap-2" style="border-top: 1px solid var(--hairline-border);">
              <a href="${escapeHtml(app.url)}" target="_blank" rel="noopener noreferrer"
                class="btn-base btn-m btn-brand-weak flex-1">
                <span>웹앱 열기</span>
              </a>
              <button type="button" data-live-jump-repo="${escapeHtml(app.repoName)}"
                class="btn-base btn-m btn-secondary shrink-0">
                <span>상세 보기</span>
              </button>
              <a href="${escapeHtml(app.repoUrl)}" target="_blank" rel="noopener noreferrer"
                class="btn-base btn-m btn-secondary shrink-0">
                <span>코드</span>
              </a>
            </div>
          </div>
        `;
      })
      .join("");

    container.querySelectorAll("[data-live-jump-repo]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const repoName = btn.getAttribute("data-live-jump-repo");
        jumpToRepoCard(repoName);
      });
    });
  }

  // Render Ecosystem Synergy Tracks
  function renderEcosystem() {
    const container = document.getElementById("ecosystem-tracks");
    if (!container) return;

    container.innerHTML = data.ecosystemFlows
      .map((flow) => {
        const nodesHtml = flow.nodes
          .map(
            (repoName, idx) => `
            <button type="button" data-jump-repo="${escapeHtml(repoName)}"
              class="chip-brand !h-8 !px-3">
              <span>${escapeClean(repoName)}</span>
            </button>
            ${
              idx < flow.nodes.length - 1
                ? `<span class="typo-label-s select-none" style="color: var(--grey-400);">→</span>`
                : ""
            }
          `
          )
          .join("");

        return `
          <div class="surface-card p-5 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-2 mb-3">
                <span class="badge badge-brand">${escapeClean(flow.badge)}</span>
                <span class="typo-caption" style="color: var(--grey-500);">${escapeClean(flow.track)}</span>
              </div>
              <div class="flex flex-wrap items-center gap-1.5 my-3">
                ${nodesHtml}
              </div>
            </div>
            <p class="typo-body-2 mt-2" style="color: var(--grey-700);">
              ${escapeClean(flow.summary)}
            </p>
          </div>
        `;
      })
      .join("");

    container.querySelectorAll("[data-jump-repo]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const repoName = btn.getAttribute("data-jump-repo");
        jumpToRepoCard(repoName);
      });
    });
  }

  function jumpToRepoCard(repoName) {
    state.activeCategory = "all";
    state.activeFilter = "all";
    state.searchQuery = "";
    const searchInput = document.getElementById("repo-search-input");
    if (searchInput) searchInput.value = "";
    renderCategoryTabs();
    renderQuickFilters();
    renderRepositoryGrid();

    const targetEl = document.querySelector(`[data-repo-name="${repoName}"]`);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
      targetEl.classList.remove("ring-highlight");
      void targetEl.offsetWidth;
      targetEl.classList.add("ring-highlight");
    }
  }

  // Render Category Filter Chips (34px height, 999px full pill, active flips to grey-900 + white)
  function renderCategoryTabs() {
    const container = document.getElementById("category-tabs");
    if (!container) return;

    container.innerHTML = data.categories
      .map((cat) => {
        const count =
          cat.id === "all"
            ? data.repositories.length
            : data.repositories.filter((r) => r.category === cat.id).length;
        const active = state.activeCategory === cat.id;

        return `
          <button type="button" data-cat-id="${escapeHtml(cat.id)}"
            class="shrink-0 chip ${active ? "is-active" : ""}">
            <span>${escapeClean(cat.shortName)}</span>
            <span class="num-tabular" style="opacity: 0.75;">${count}</span>
          </button>
        `;
      })
      .join("");

    // Category synergy banner
    const banner = document.getElementById("category-synergy-banner");
    if (banner) {
      const selectedCat = data.categories.find((c) => c.id === state.activeCategory);
      if (selectedCat && selectedCat.synergy) {
        banner.classList.remove("hidden");
        banner.innerHTML = `
          <div class="surface-card p-4 flex items-start gap-3">
            <div class="asset-avatar !w-9 !h-9 !rounded-[10px]">
              ${getAssetIcon(selectedCat.id)}
            </div>
            <div class="typo-body-2" style="color: var(--grey-700);">
              <strong style="color: var(--grey-900); font-weight: 600;">${escapeClean(selectedCat.name)} 연결 구조:</strong>
              <span class="ml-1">${escapeClean(selectedCat.synergy)}</span>
            </div>
          </div>
        `;
      } else {
        banner.classList.add("hidden");
        banner.innerHTML = "";
      }
    }

    container.querySelectorAll("[data-cat-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.activeCategory = btn.getAttribute("data-cat-id");
        renderCategoryTabs();
        renderRepositoryGrid();
      });
    });
  }

  // Render Quick Filters as Segmented Control (Mutually exclusive single choice)
  function renderQuickFilters() {
    const container = document.getElementById("quick-filter-pills");
    if (!container) return;

    const filters = [
      { id: "all", label: "전체 10" },
      { id: "public", label: "공개 6" },
      { id: "private", label: "비공개 4" },
      { id: "webapp", label: "웹앱 6" }
    ];

    container.innerHTML = `
      <div class="segmented-control shrink-0">
        ${filters
          .map((f) => {
            const active = state.activeFilter === f.id;
            return `
              <button type="button" data-filter-id="${f.id}"
                class="segmented-item num-tabular ${active ? "is-active" : ""}">
                ${escapeClean(f.label)}
              </button>
            `;
          })
          .join("")}
      </div>
    `;

    container.querySelectorAll("[data-filter-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.activeFilter = btn.getAttribute("data-filter-id");
        renderQuickFilters();
        renderRepositoryGrid();
      });
    });
  }

  function getFilteredRepos() {
    return data.repositories.filter((repo) => {
      if (state.activeCategory !== "all" && repo.category !== state.activeCategory) {
        return false;
      }
      if (state.activeFilter === "public" && repo.visibility !== "public") {
        return false;
      }
      if (state.activeFilter === "private" && repo.visibility !== "private") {
        return false;
      }
      if (state.activeFilter === "webapp" && repo.deployType !== "static-webapp") {
        return false;
      }
      if (state.searchQuery.trim() !== "") {
        const q = state.searchQuery.trim().toLowerCase();
        const hay = [
          repo.name,
          repo.title,
          repo.subtitle,
          repo.summary,
          repo.language,
          ...(repo.techStack || []),
          ...(repo.highlights || []),
          ...(repo.todos || []).map((t) => t.text)
        ]
          .join(" ")
          .toLowerCase();
        return hay.includes(q);
      }
      return true;
    });
  }

  // Render Repository Cards Grid
  function renderRepositoryGrid() {
    const grid = document.getElementById("repo-cards-grid");
    if (!grid) return;

    const filtered = getFilteredRepos();

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-14 text-center surface-card">
          <p class="typo-title-1" style="color: var(--grey-900);">찾으시는 조건의 레포지터리가 없어요</p>
          <p class="typo-body-2 mt-1" style="color: var(--grey-600);">다른 검색어를 입력하거나 필터를 전체로 바꿔 보세요.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered
      .map((repo) => {
        const isPublic = repo.visibility === "public";
        const visBadge = isPublic
          ? `<span class="badge badge-brand">공개</span>`
          : `<span class="badge badge-neutral">비공개</span>`;

        const statusBadgeEl =
          repo.statusLevel === "completed"
            ? `<span class="badge badge-green">${escapeClean(repo.statusBadge)}</span>`
            : `<span class="badge badge-brand">${escapeClean(repo.statusBadge)}</span>`;

        const doneCount = repo.todos.filter((t) => isTodoDone(t)).length;
        const totalTodoCount = repo.todos.length;

        const highlightsHtml = repo.highlights
          .map(
            (h) => `
            <li class="flex items-start gap-2 typo-body-3" style="color: var(--grey-700);">
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style="background-color: var(--blue-500);"></span>
              <span>${escapeClean(h)}</span>
            </li>
          `
          )
          .join("");

        const stackHtml = repo.techStack
          .map(
            (tech) => `
            <span class="inline-tag font-mono">
              ${escapeClean(tech)}
            </span>
          `
          )
          .join("");

        const todosHtml = repo.todos
          .map((t) => {
            const checked = isTodoDone(t);
            const prioBadge =
              t.priority === "high"
                ? `<span class="badge badge-red shrink-0">중요</span>`
                : t.priority === "medium"
                ? `<span class="badge badge-orange shrink-0">보통</span>`
                : `<span class="badge badge-neutral shrink-0">낮음</span>`;

            return `
              <label class="list-row !p-2.5 cursor-pointer items-center">
                <input type="checkbox" data-todo-id="${escapeHtml(t.id)}" ${checked ? "checked" : ""}
                  class="hub-checkbox" />
                <span class="todo-label typo-body-3 flex-1" style="color: var(--grey-800);">
                  ${escapeClean(t.text)}
                </span>
                ${prioBadge}
              </label>
            `;
          })
          .join("");

        let liveBtnHtml = "";
        if (repo.liveStatus === "live" && repo.liveUrl) {
          liveBtnHtml = `
            <a href="${escapeHtml(repo.liveUrl)}" target="_blank" rel="noopener noreferrer"
              class="btn-base btn-m btn-brand-weak">
              <span>웹앱 열기</span>
            </a>
          `;
        } else {
          liveBtnHtml = `
            <span class="btn-base btn-m btn-secondary truncate num-tabular">
              <span>로컬 (${escapeClean(repo.localLaunch.port)})</span>
            </span>
          `;
        }

        const isCmdOpen = state.expandedCmdRepoId === repo.id;

        return `
          <article data-repo-name="${escapeHtml(repo.name)}"
            class="repo-card surface-card flex flex-col justify-between overflow-hidden">
            
            <div class="p-5 sm:p-6">
              <!-- Top Meta Row -->
              <div class="flex flex-wrap items-center justify-between gap-2 mb-3.5">
                <div class="flex items-center gap-1.5">
                  <span class="badge badge-neutral">
                    ${escapeClean(repo.categoryLabel)}
                  </span>
                  ${visBadge}
                </div>
                <span class="typo-caption num-tabular" style="color: var(--grey-500);">
                  ${escapeClean(repo.lastUpdated)}
                </span>
              </div>

              <!-- Title (title-1 18px/600) & Subtitle -->
              <div class="flex items-start gap-3">
                <div class="asset-avatar">
                  ${getAssetIcon(repo.id in { "english-studio": 1, "workout-coach": 1, "regex-learn": 1, "docker-learn": 1, "dfe-learn": 1, "semi-learn": 1 } ? repo.id : repo.category)}
                </div>
                <div class="min-w-0 flex-1">
                  <h3 class="typo-title-1" style="color: var(--grey-900);">
                    <a href="${escapeHtml(repo.repoUrl)}" target="_blank" rel="noopener noreferrer" class="hover:underline">
                      ${escapeClean(repo.title)}
                    </a>
                  </h3>
                  <p class="typo-body-3 mt-0.5" style="color: var(--grey-600);">
                    ${escapeClean(repo.subtitle)}
                  </p>
                </div>
              </div>

              <!-- Status & Progress Bar (grey-200 track + blue-500 fill + right-side label-s tabular percentage) -->
              <div class="mt-4 p-3.5 surface-inset">
                <div class="flex items-center justify-between gap-2 mb-2">
                  ${statusBadgeEl}
                  <span class="typo-label-s num-tabular" style="color: var(--blue-500);">${repo.progress}%</span>
                </div>
                <div class="w-full progress-track">
                  <div class="progress-fill" style="width: ${repo.progress}%"></div>
                </div>
              </div>

              <!-- Summary (body-2 15px/1.5) -->
              <p class="mt-4 typo-body-2" style="color: var(--grey-800);">
                ${escapeClean(repo.summary)}
              </p>

              <!-- Key Highlights -->
              <div class="mt-4">
                <h4 class="typo-label-s mb-2" style="color: var(--grey-600);">
                  주요 구현 내용
                </h4>
                <ul class="space-y-1.5">
                  ${highlightsHtml}
                </ul>
              </div>

              <!-- Relation Note -->
              <div class="mt-4 p-3 surface-inset typo-body-3" style="color: var(--grey-700);">
                <strong style="color: var(--blue-500); font-weight: 600;">연결 정보:</strong> ${escapeClean(repo.relationNote)}
              </div>

              <!-- Tech Stack (8px radius inline tags) -->
              <div class="mt-4 flex flex-wrap gap-1.5">
                ${stackHtml}
              </div>

              <!-- Interactive To-Do Checklist -->
              <div class="mt-5 pt-4" style="border-top: 1px solid var(--hairline-border);">
                <div class="flex items-center justify-between mb-2">
                  <h4 class="typo-label-m" style="color: var(--grey-900);">
                    앞으로 할 일
                  </h4>
                  <span class="badge badge-neutral num-tabular">
                    남은 항목 ${totalTodoCount - doneCount}건
                  </span>
                </div>
                <div class="space-y-1">
                  ${todosHtml}
                </div>
              </div>
            </div>

            <!-- Card Footer Actions (Size M: 40px height, 12px radius) -->
            <div class="px-5 sm:px-6 py-3.5 flex flex-col gap-2.5" style="border-top: 1px solid var(--hairline-border); background-color: var(--layered-background);">
              <div class="grid grid-cols-3 gap-2">
                ${liveBtnHtml}
                <a href="${escapeHtml(repo.repoUrl)}" target="_blank" rel="noopener noreferrer"
                  class="btn-base btn-m btn-secondary">
                  <span>저장소 열기</span>
                </a>
                <button type="button" data-copy-cmd-repo="${escapeHtml(repo.id)}"
                  class="btn-base btn-m btn-secondary">
                  <span>명령어 복사</span>
                </button>
              </div>

              <!-- Expandable Local Command Preview -->
              <div id="cmd-box-${escapeHtml(repo.id)}" class="${isCmdOpen ? "" : "hidden"} mt-1 p-3.5 surface-inset typo-caption font-mono">
                <div class="flex items-center justify-between mb-1.5" style="color: var(--grey-600);">
                  <span class="truncate">${escapeHtml(repo.localLaunch.path)}</span>
                  <span class="shrink-0 ml-2 font-sans font-semibold" style="color: var(--blue-500);">복사되었어요</span>
                </div>
                <pre class="overflow-x-auto whitespace-pre-wrap leading-relaxed" style="color: var(--grey-900);">${escapeHtml(repo.localLaunch.command)}</pre>
                <p class="mt-2 font-sans typo-caption" style="color: var(--grey-600);">${escapeClean(repo.localLaunch.note)}</p>
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    // Attach Todo checkbox listeners
    grid.querySelectorAll("[data-todo-id]").forEach((cb) => {
      cb.addEventListener("change", () => {
        toggleTodo(cb.getAttribute("data-todo-id"));
      });
    });

    // Attach Local Launch Command Copy listeners
    grid.querySelectorAll("[data-copy-cmd-repo]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const repoId = btn.getAttribute("data-copy-cmd-repo");
        const repo = data.repositories.find((r) => r.id === repoId);
        if (!repo) return;
        state.expandedCmdRepoId = state.expandedCmdRepoId === repoId ? null : repoId;
        copyText(repo.localLaunch.command, `${repo.name} 실행 명령어`);
        renderRepositoryGrid();
      });
    });
  }

  // Render Unified Action Center (Priority To-Dos + Local Sync Status)
  function renderActionCenter() {
    const todoListEl = document.getElementById("unified-todo-list");
    const syncListEl = document.getElementById("sync-diagnostics-list");
    if (!todoListEl || !syncListEl) return;

    const flatTodos = [];
    data.repositories.forEach((repo) => {
      repo.todos.forEach((todo) => {
        flatTodos.push({
          ...todo,
          repoName: repo.name,
          repoUrl: repo.repoUrl,
          doneState: isTodoDone(todo)
        });
      });
    });

    const filteredTodos = flatTodos.filter((item) => {
      if (state.todoFilter === "pending") return !item.doneState;
      if (state.todoFilter === "high") return item.priority === "high" && !item.doneState;
      return true;
    });

    const priorityOrder = { high: 0, medium: 1, low: 2 };
    filteredTodos.sort((a, b) => {
      if (a.doneState !== b.doneState) return a.doneState ? 1 : -1;
      return (priorityOrder[a.priority] ?? 9) - (priorityOrder[b.priority] ?? 9);
    });

    todoListEl.innerHTML =
      filteredTodos.length === 0
        ? `<div class="p-8 text-center typo-body-2" style="color: var(--grey-600);">선택한 조건에 남은 할 일이 없어요</div>`
        : filteredTodos
            .map((item) => {
              const prioBadge =
                item.priority === "high"
                  ? `<span class="badge badge-red">중요</span>`
                  : item.priority === "medium"
                  ? `<span class="badge badge-orange">보통</span>`
                  : `<span class="badge badge-neutral">낮음</span>`;

              return `
                <label class="list-row surface-inset cursor-pointer items-start">
                  <input type="checkbox" data-unified-todo-id="${escapeHtml(item.id)}" ${item.doneState ? "checked" : ""}
                    class="hub-checkbox mt-0.5" />
                  <div class="todo-label flex-1 min-w-0">
                    <div class="flex flex-wrap items-center gap-1.5 mb-1">
                      <span class="badge badge-brand">${escapeClean(item.repoName)}</span>
                      ${prioBadge}
                    </div>
                    <p class="typo-body-2" style="color: var(--grey-800);">
                      ${escapeClean(item.text)}
                    </p>
                  </div>
                </label>
              `;
            })
            .join("");

    todoListEl.querySelectorAll("[data-unified-todo-id]").forEach((cb) => {
      cb.addEventListener("change", () => {
        toggleTodo(cb.getAttribute("data-unified-todo-id"));
      });
    });

    document.querySelectorAll("[data-todo-filter]").forEach((btn) => {
      const f = btn.getAttribute("data-todo-filter");
      if (f === state.todoFilter) {
        btn.className = "segmented-item is-active";
      } else {
        btn.className = "segmented-item";
      }
    });

    syncListEl.innerHTML = data.syncDiagnostics
      .map((diag) => {
        const badge =
          diag.status === "warning"
            ? `<span class="badge badge-red">${escapeClean(diag.statusLabel)}</span>`
            : diag.status === "info"
            ? `<span class="badge badge-brand">${escapeClean(diag.statusLabel)}</span>`
            : `<span class="badge badge-green">${escapeClean(diag.statusLabel)}</span>`;

        return `
          <div class="p-4 surface-inset space-y-2.5">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="typo-label-m" style="color: var(--grey-900);">${escapeClean(diag.repo)}</span>
              ${badge}
            </div>
            <p class="typo-body-3" style="color: var(--grey-700);">
              ${escapeClean(diag.detail)}
            </p>
            <div class="flex items-center justify-between gap-2 p-2.5 surface-card font-mono typo-caption">
              <code class="truncate flex-1" style="color: var(--grey-800);">${escapeHtml(diag.fixCommand)}</code>
              <button type="button" data-copy-sync-cmd="${escapeHtml(diag.fixCommand)}"
                class="btn-base btn-s btn-brand-weak font-sans shrink-0">
                <span>복사하기</span>
              </button>
            </div>
          </div>
        `;
      })
      .join("");

    syncListEl.querySelectorAll("[data-copy-sync-cmd]").forEach((btn) => {
      btn.addEventListener("click", () => {
        copyText(btn.getAttribute("data-copy-sync-cmd"), "동기화 명령어");
      });
    });
  }

  // Export Markdown Report
  function exportMarkdownReport() {
    const lines = [
      `# Schuna Repositories Status & To-Do Report (${new Date().toISOString().slice(0, 10)})`,
      ""
    ];

    data.repositories.forEach((repo) => {
      lines.push(`## ${cleanCopy(repo.title)} (${repo.visibility} · ${repo.progress}%)`);
      lines.push(`- 상태: ${cleanCopy(repo.statusBadge)}`);
      lines.push(`- 저장소: ${repo.repoUrl}`);
      if (repo.liveUrl) {
        lines.push(`- 웹앱 주소: ${repo.liveUrl}`);
      }
      lines.push(`- 할 일 목록:`);
      repo.todos.forEach((t) => {
        const mark = isTodoDone(t) ? "x" : " ";
        lines.push(`  - [${mark}] (${t.priority}) ${cleanCopy(t.text)}`);
      });
      lines.push("");
    });

    copyText(lines.join("\n"), "마크다운 현황 보고서");
  }

  function renderAll() {
    renderHeroAndKpis();
    renderLiveWebApps();
    renderEcosystem();
    renderCategoryTabs();
    renderQuickFilters();
    renderRepositoryGrid();
    renderActionCenter();
  }

  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    renderAll();

    const themeBtn = document.getElementById("theme-toggle-btn");
    if (themeBtn) {
      themeBtn.addEventListener("click", toggleTheme);
    }

    const searchInput = document.getElementById("repo-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value || "";
        renderRepositoryGrid();
      });
    }

    document.querySelectorAll("[data-todo-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.todoFilter = btn.getAttribute("data-todo-filter");
        renderActionCenter();
      });
    });

    const exportBtn = document.getElementById("export-md-btn");
    if (exportBtn) {
      exportBtn.addEventListener("click", exportMarkdownReport);
    }

    const resetTodoBtn = document.getElementById("reset-todo-btn");
    if (resetTodoBtn) {
      resetTodoBtn.addEventListener("click", resetTodos);
    }
  });
})();
