/**
 * Schuna Engineering & Project Hub — Main Application Controller (v2.2 Mobile-First & Live Launcher)
 */

(function () {
  "use strict";

  const STORAGE_KEY_TODOS = "schuna_hub_todos_v2";
  const STORAGE_KEY_THEME = "schuna_hub_theme_v1";

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
    showToast(!current ? "✅ 할 일 항목을 완료 처리했습니다." : "↩️ 할 일 항목을 미완료로 되돌렸습니다.");
  }

  function resetTodos() {
    state.todoDoneMap = {};
    saveTodoState();
    renderAll();
    showToast("🔄 모든 할 일 체크 상태를 초기 기준값으로 복원했습니다.");
  }

  // Theme management
  function initTheme() {
    const saved = localStorage.getItem(STORAGE_KEY_THEME);
    const html = document.documentElement;
    if (saved === "light") {
      html.classList.remove("dark");
    } else {
      html.classList.add("dark");
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
    const label = document.getElementById("theme-toggle-label");
    const icon = document.getElementById("theme-toggle-icon");
    if (label) label.textContent = isDark ? "라이트 모드" : "다크 모드";
    if (icon) icon.textContent = isDark ? "☀️" : "🌙";
  }

  // Utility: Escape HTML
  function escapeHtml(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Utility: Copy to Clipboard
  function copyText(text, label) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`📋 ${label || "명령어"}가 복사되었습니다.`);
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
      showToast(`📋 ${label || "명령어"}가 복사되었습니다.`);
    } catch (e) {
      showToast("⚠️ 복사에 실패했습니다. 수동으로 선택해 주세요.");
    }
    document.body.removeChild(ta);
  }

  function showToast(message) {
    const container = document.getElementById("toast-container");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className =
      "toast-enter px-3.5 py-2.5 rounded-xl bg-slate-900 dark:bg-indigo-600 text-white text-xs sm:text-sm font-medium shadow-xl border border-slate-700/60 dark:border-indigo-400/40 flex items-center gap-2";
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transition = "opacity 0.25s ease";
      setTimeout(() => toast.remove(), 260);
    }, 2600);
  }

  // Render Header & KPI Summary (2x2 compact on mobile, 4-col on desktop)
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
      <div class="p-3.5 sm:p-5 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div class="flex items-center justify-between gap-1 text-[11px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400">
          <span>관리 레포지터리</span>
          <span class="hidden sm:inline-block px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">4 분류</span>
        </div>
        <div class="mt-1.5 sm:mt-2 flex items-baseline gap-1.5">
          <span class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">${totalRepos}</span>
          <span class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">개 (동기화 완료)</span>
        </div>
        <p class="mt-1 text-[11px] sm:text-xs text-slate-600 dark:text-slate-400">
          🌐 공개 <strong>${publicCount}</strong> · 🔒 비공개 <strong>${privateCount}</strong>
        </p>
      </div>

      <div class="p-3.5 sm:p-5 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-emerald-500/30 dark:border-emerald-500/30 shadow-sm">
        <div class="flex items-center justify-between gap-1 text-[11px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400">
          <span>Live 웹앱</span>
          <span class="px-1.5 py-0.5 rounded-full text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">온라인</span>
        </div>
        <div class="mt-1.5 sm:mt-2 flex items-baseline justify-between">
          <div class="flex items-baseline gap-1.5">
            <span class="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">${liveWebAppsCount}</span>
            <span class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">종 즉시 실행</span>
          </div>
          <a href="#live-demos" class="text-[11px] sm:text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline">보기 ↓</a>
        </div>
        <p class="mt-1 text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 truncate">
          English·Workout·Regex·Docker·Dfe·Semi
        </p>
      </div>

      <div class="p-3.5 sm:p-5 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div class="flex items-center justify-between gap-1 text-[11px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400">
          <span>구현 완료/안정화</span>
          <span class="px-1.5 py-0.5 rounded-full text-[10px] bg-amber-500/10 text-amber-600 dark:text-amber-400">진행 ${activeRepos}</span>
        </div>
        <div class="mt-1.5 sm:mt-2 flex items-baseline gap-1.5">
          <span class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">${completedRepos}</span>
          <span class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">/ ${totalRepos} 프로젝트</span>
        </div>
        <p class="mt-1 text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 truncate">
          진행중: CodexWorkFlow · SemiLearn
        </p>
      </div>

      <div class="p-3.5 sm:p-5 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm">
        <div class="flex items-center justify-between gap-1 text-[11px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400">
          <span>남은 할 일</span>
          <span class="px-1.5 py-0.5 rounded-full text-[10px] bg-rose-500/10 text-rose-600 dark:text-rose-400">HIGH ${highPending}</span>
        </div>
        <div class="mt-1.5 sm:mt-2 flex items-baseline justify-between">
          <div class="flex items-baseline gap-1.5">
            <span class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">${pendingTodos}</span>
            <span class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">건 (체크 ${doneTodos})</span>
          </div>
          <a href="#action-center" class="text-[11px] sm:text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">보드 ↓</a>
        </div>
        <p class="mt-1 text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 truncate">
          체크박스로 완료 상태 직접 관리
        </p>
      </div>
    `;
  }

  // Render Live Web Apps Section (5 Apps with Concise Intro + Key Points + Direct Launch Button)
  function renderLiveWebApps() {
    const container = document.getElementById("live-webapps-grid");
    if (!container || !data.liveWebApps) return;

    const accentStyles = {
      indigo: {
        border: "border-indigo-500/35 hover:border-indigo-500",
        badge: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20",
        btn: "bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white shadow-indigo-600/20"
      },
      rose: {
        border: "border-rose-500/35 hover:border-rose-500",
        badge: "bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/20",
        btn: "bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white shadow-rose-600/20"
      },
      emerald: {
        border: "border-emerald-500/35 hover:border-emerald-500",
        badge: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
        btn: "bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white shadow-emerald-600/20"
      },
      sky: {
        border: "border-sky-500/35 hover:border-sky-500",
        badge: "bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/20",
        btn: "bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white shadow-sky-600/20"
      },
      amber: {
        border: "border-amber-500/35 hover:border-amber-500",
        badge: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20",
        btn: "bg-amber-600 hover:bg-amber-500 active:bg-amber-700 text-white shadow-amber-600/20"
      },
      violet: {
        border: "border-violet-500/35 hover:border-violet-500",
        badge: "bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/20",
        btn: "bg-violet-600 hover:bg-violet-500 active:bg-violet-700 text-white shadow-violet-600/20"
      }
    };

    container.innerHTML = data.liveWebApps
      .map((app) => {
        const st = accentStyles[app.accent] || accentStyles.emerald;
        const keyPointsHtml = (app.keyPoints || [])
          .map(
            (pt) => `
            <li class="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-300 leading-snug">
              <span class="text-emerald-500 font-bold mt-0.5 select-none">✓</span>
              <span>${escapeHtml(pt)}</span>
            </li>
          `
          )
          .join("");

        return `
          <div class="live-app-card p-4 sm:p-5 rounded-2xl bg-white/95 dark:bg-slate-900/95 border ${st.border} shadow-sm flex flex-col justify-between">
            <div>
              <!-- Badge & Live Indicator -->
              <div class="flex items-center justify-between gap-2 mb-2.5">
                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${st.badge}">
                  ${escapeHtml(app.badge)}
                </span>
                <span class="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  LIVE
                </span>
              </div>

              <!-- Title & Subtitle -->
              <h3 class="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-snug">
                <a href="${escapeHtml(app.url)}" target="_blank" rel="noopener noreferrer" class="hover:text-emerald-600 dark:hover:text-emerald-400 transition">
                  ${escapeHtml(app.name)}
                </a>
              </h3>
              <p class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                ${escapeHtml(app.subtitle || app.tech)}
              </p>

              <!-- Concise Description -->
              <p class="mt-2.5 text-xs sm:text-[13px] text-slate-700 dark:text-slate-200 leading-relaxed">
                ${escapeHtml(app.description)}
              </p>

              <!-- Key Points Summary -->
              <ul class="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-800/80 space-y-1.5 mb-4">
                ${keyPointsHtml}
              </ul>
            </div>

            <!-- Action Buttons (Thumb-friendly on mobile) -->
            <div class="pt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-center gap-2">
              <a href="${escapeHtml(app.url)}" target="_blank" rel="noopener noreferrer"
                class="flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-extrabold ${st.btn} text-center shadow-md transition flex items-center justify-center gap-1.5">
                <span>🚀 웹앱 바로가기 ↗</span>
              </a>
              <button type="button" data-live-jump-repo="${escapeHtml(app.repoName)}"
                class="py-2.5 px-2.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition cursor-pointer shrink-0">
                상세 ↓
              </button>
              <a href="${escapeHtml(app.repoUrl)}" target="_blank" rel="noopener noreferrer"
                title="GitHub 저장소"
                class="py-2.5 px-2.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition shrink-0">
                코드 ↗
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

    const colorMap = {
      violet: {
        border: "border-violet-500/30 dark:border-violet-500/30",
        badge: "bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/20",
        pill: "bg-violet-600 hover:bg-violet-500 text-white"
      },
      amber: {
        border: "border-amber-500/30 dark:border-amber-500/30",
        badge: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20",
        pill: "bg-amber-600 hover:bg-amber-500 text-white"
      },
      rose: {
        border: "border-rose-500/30 dark:border-rose-500/30",
        badge: "bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/20",
        pill: "bg-rose-600 hover:bg-rose-500 text-white"
      }
    };

    container.innerHTML = data.ecosystemFlows
      .map((flow) => {
        const c = colorMap[flow.color] || colorMap.violet;
        const nodesHtml = flow.nodes
          .map(
            (repoName, idx) => `
            <button type="button" data-jump-repo="${escapeHtml(repoName)}"
              class="px-3 py-1.5 rounded-lg text-xs font-bold ${c.pill} shadow-sm transition transform active:scale-95 cursor-pointer">
              ${escapeHtml(repoName)}
            </button>
            ${
              idx < flow.nodes.length - 1
                ? `<span class="text-slate-400 dark:text-slate-500 font-bold select-none">→</span>`
                : ""
            }
          `
          )
          .join("");

        return `
          <div class="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-slate-900/80 border ${c.border} shadow-sm flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-2 mb-2.5">
                <span class="px-2.5 py-0.5 text-xs font-semibold rounded-full border ${c.badge}">
                  ${escapeHtml(flow.badge)}
                </span>
                <span class="text-[11px] font-mono text-slate-400">${escapeHtml(flow.track)}</span>
              </div>
              <div class="flex flex-wrap items-center gap-1.5 sm:gap-2 my-2.5">
                ${nodesHtml}
              </div>
            </div>
            <p class="text-xs leading-relaxed text-slate-600 dark:text-slate-300 mt-1.5">
              ${escapeHtml(flow.summary)}
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

  // Render Category Tabs (Swipeable on mobile)
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
            class="shrink-0 px-3 sm:px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center gap-1.5 cursor-pointer ${
              active
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-indigo-400"
            }">
            <span>${escapeHtml(cat.shortName)}</span>
            <span class="px-1.5 py-0.5 text-[11px] rounded-full ${
              active
                ? "bg-indigo-800/60 text-indigo-100"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
            }">${count}</span>
          </button>
        `;
      })
      .join("");

    // Category synergy description banner
    const banner = document.getElementById("category-synergy-banner");
    if (banner) {
      const selectedCat = data.categories.find((c) => c.id === state.activeCategory);
      if (selectedCat && selectedCat.synergy) {
        banner.classList.remove("hidden");
        banner.innerHTML = `
          <div class="p-3 sm:p-3.5 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200/70 dark:border-indigo-800/60 text-xs sm:text-sm text-slate-700 dark:text-slate-200 flex items-start gap-2">
            <span class="text-base">🔗</span>
            <div>
              <strong class="font-semibold text-indigo-700 dark:text-indigo-300">${escapeHtml(selectedCat.name)} 연관성:</strong>
              <span class="ml-1">${escapeHtml(selectedCat.synergy)}</span>
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

  // Render Quick Filters (All / Public / Private / WebApp)
  function renderQuickFilters() {
    const container = document.getElementById("quick-filter-pills");
    if (!container) return;

    const filters = [
      { id: "all", label: "전체 보기" },
      { id: "public", label: "🌐 Public (6)" },
      { id: "private", label: "🔒 Private (4)" },
      { id: "webapp", label: "🚀 Live 웹앱 (6)" }
    ];

    container.innerHTML = filters
      .map((f) => {
        const active = state.activeFilter === f.id;
        return `
          <button type="button" data-filter-id="${f.id}"
            class="shrink-0 px-2.5 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer ${
              active
                ? "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-semibold"
                : "bg-slate-100 dark:bg-slate-800/90 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
            }">
            ${escapeHtml(f.label)}
          </button>
        `;
      })
      .join("");

    container.querySelectorAll("[data-filter-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.activeFilter = btn.getAttribute("data-filter-id");
        renderQuickFilters();
        renderRepositoryGrid();
      });
    });
  }

  // Filter logic
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

  // Render Repository Cards Grid (Mobile Optimized)
  function renderRepositoryGrid() {
    const grid = document.getElementById("repo-cards-grid");
    if (!grid) return;

    const filtered = getFilteredRepos();

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-12 text-center rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-dashed border-slate-300 dark:border-slate-800">
          <p class="text-base font-semibold text-slate-700 dark:text-slate-300">조건에 맞는 레포지터리가 없습니다.</p>
          <p class="text-xs text-slate-500 mt-1">검색어나 카테고리 필터를 초기화해 보세요.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered
      .map((repo) => {
        const isPublic = repo.visibility === "public";
        const visBadge = isPublic
          ? `<span class="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">🌐 Public</span>`
          : `<span class="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">🔒 Private</span>`;

        const statusColor =
          repo.statusLevel === "completed"
            ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20"
            : "bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/20";

        const doneCount = repo.todos.filter((t) => isTodoDone(t)).length;
        const totalTodoCount = repo.todos.length;

        const highlightsHtml = repo.highlights
          .map(
            (h) => `
            <li class="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <span class="text-indigo-500 mt-0.5 select-none">•</span>
              <span>${escapeHtml(h)}</span>
            </li>
          `
          )
          .join("");

        const stackHtml = repo.techStack
          .map(
            (tech) => `
            <span class="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/70">
              ${escapeHtml(tech)}
            </span>
          `
          )
          .join("");

        const todosHtml = repo.todos
          .map((t) => {
            const checked = isTodoDone(t);
            const prioBadge =
              t.priority === "high"
                ? `<span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-rose-500/15 text-rose-600 dark:text-rose-400 shrink-0">HIGH</span>`
                : t.priority === "medium"
                ? `<span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 shrink-0">MED</span>`
                : `<span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-500/15 text-slate-500 dark:text-slate-400 shrink-0">LOW</span>`;

            return `
              <label class="todo-item-row flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-100/80 dark:hover:bg-slate-800/60 cursor-pointer transition">
                <input type="checkbox" data-todo-id="${escapeHtml(t.id)}" ${checked ? "checked" : ""}
                  class="mt-0.5 h-4 w-4 rounded border-slate-300 dark:border-slate-600 text-indigo-600 focus:ring-indigo-500 cursor-pointer shrink-0" />
                <span class="todo-label text-xs text-slate-700 dark:text-slate-200 leading-snug flex-1">
                  ${escapeHtml(t.text)}
                </span>
                ${prioBadge}
              </label>
            `;
          })
          .join("");

        // Live Demo or Local Server Info button
        let liveBtnHtml = "";
        if (repo.liveStatus === "live" && repo.liveUrl) {
          liveBtnHtml = `
            <a href="${escapeHtml(repo.liveUrl)}" target="_blank" rel="noopener noreferrer"
              class="px-3 py-2.5 rounded-xl text-xs font-extrabold bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white shadow-sm transition flex items-center justify-center gap-1">
              <span>🚀 Live 실행 ↗</span>
            </a>
          `;
        } else {
          liveBtnHtml = `
            <span class="px-2.5 py-2.5 rounded-xl text-[11px] sm:text-xs font-medium bg-slate-100 dark:bg-slate-800/70 text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1 truncate">
              <span>🖥️ 로컬 (${escapeHtml(repo.localLaunch.port)})</span>
            </span>
          `;
        }

        const isCmdOpen = state.expandedCmdRepoId === repo.id;

        return `
          <article data-repo-name="${escapeHtml(repo.name)}"
            class="repo-card rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between overflow-hidden">
            
            <div class="p-4 sm:p-6">
              <!-- Top Meta Row -->
              <div class="flex flex-wrap items-center justify-between gap-1.5 mb-2.5">
                <div class="flex items-center gap-1.5">
                  <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    ${escapeHtml(repo.categoryLabel)}
                  </span>
                  ${visBadge}
                </div>
                <span class="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                  ${escapeHtml(repo.lastUpdated)}
                </span>
              </div>

              <!-- Title & Subtitle -->
              <div>
                <h3 class="text-base sm:text-xl font-extrabold text-slate-900 dark:text-white leading-snug">
                  <a href="${escapeHtml(repo.repoUrl)}" target="_blank" rel="noopener noreferrer" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                    ${escapeHtml(repo.title)}
                  </a>
                </h3>
                <p class="text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-0.5 leading-snug">
                  ${escapeHtml(repo.subtitle)}
                </p>
              </div>

              <!-- Status & Progress Bar -->
              <div class="mt-3.5 p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/80">
                <div class="flex items-center justify-between gap-2 text-xs mb-1.5">
                  <span class="px-2 py-0.5 rounded-md text-[11px] sm:text-xs font-semibold border ${statusColor}">
                    ${escapeHtml(repo.statusBadge)}
                  </span>
                  <span class="font-mono font-bold text-slate-700 dark:text-slate-300">${repo.progress}%</span>
                </div>
                <div class="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div class="progress-bar-fill h-full rounded-full ${
                    repo.progress >= 85
                      ? "bg-gradient-to-r from-indigo-500 to-emerald-500"
                      : "bg-gradient-to-r from-amber-500 to-sky-500"
                  }" style="width: ${repo.progress}%"></div>
                </div>
              </div>

              <!-- Summary -->
              <p class="mt-3.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                ${escapeHtml(repo.summary)}
              </p>

              <!-- Key Highlights -->
              <div class="mt-3.5">
                <h4 class="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">
                  현재 상태 및 핵심 기능 (Status &amp; Features)
                </h4>
                <ul class="space-y-1.5">
                  ${highlightsHtml}
                </ul>
              </div>

              <!-- Relation Note -->
              <div class="mt-3.5 p-2.5 rounded-lg bg-indigo-500/5 border border-indigo-500/15 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong class="text-indigo-600 dark:text-indigo-400">🔗 연관성:</strong> ${escapeHtml(repo.relationNote)}
              </div>

              <!-- Tech Stack -->
              <div class="mt-3.5 flex flex-wrap gap-1.5">
                ${stackHtml}
              </div>

              <!-- Interactive To-Do Checklist -->
              <div class="mt-4 pt-3.5 border-t border-slate-200/80 dark:border-slate-800">
                <div class="flex items-center justify-between mb-1.5">
                  <h4 class="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                    <span>📋 앞으로 해야 할 일 (To-Do)</span>
                  </h4>
                  <span class="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    남은 항목 ${totalTodoCount - doneCount}건
                  </span>
                </div>
                <div class="space-y-1">
                  ${todosHtml}
                </div>
              </div>
            </div>

            <!-- Card Footer Actions (Compact 3-col on both Mobile & Desktop for easy thumb tapping) -->
            <div class="px-4 sm:px-5 py-3 bg-slate-50/90 dark:bg-slate-950/80 border-t border-slate-200/80 dark:border-slate-800/90 flex flex-col gap-2">
              <div class="grid grid-cols-3 gap-1.5 sm:gap-2">
                ${liveBtnHtml}
                <a href="${escapeHtml(repo.repoUrl)}" target="_blank" rel="noopener noreferrer"
                  class="px-2.5 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white transition flex items-center justify-center gap-1">
                  <span>GitHub ↗</span>
                </a>
                <button type="button" data-copy-cmd-repo="${escapeHtml(repo.id)}"
                  class="px-2.5 py-2.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition flex items-center justify-center gap-1 cursor-pointer">
                  <span>💻 명령어</span>
                </button>
              </div>

              <!-- Expandable Local Command Preview -->
              <div id="cmd-box-${escapeHtml(repo.id)}" class="${isCmdOpen ? "" : "hidden"} mt-1 p-3 rounded-xl bg-slate-900 text-slate-100 text-xs font-mono border border-slate-700">
                <div class="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                  <span class="truncate">${escapeHtml(repo.localLaunch.path)}</span>
                  <span class="text-emerald-400 shrink-0 ml-2">복사됨 ✓</span>
                </div>
                <pre class="overflow-x-auto whitespace-pre-wrap text-[11px] text-indigo-200 leading-relaxed">${escapeHtml(repo.localLaunch.command)}</pre>
                <p class="mt-1.5 text-[11px] text-slate-400 font-sans">💡 ${escapeHtml(repo.localLaunch.note)}</p>
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
        copyText(repo.localLaunch.command, `${repo.name} 로컬 실행 명령어`);
        renderRepositoryGrid();
      });
    });
  }

  // Render Unified Action Center (Priority To-Dos + Local Sync Status)
  function renderActionCenter() {
    const todoListEl = document.getElementById("unified-todo-list");
    const syncListEl = document.getElementById("sync-diagnostics-list");
    if (!todoListEl || !syncListEl) return;

    // Flatten all todos
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

    // Sort high priority first
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    filteredTodos.sort((a, b) => {
      if (a.doneState !== b.doneState) return a.doneState ? 1 : -1;
      return (priorityOrder[a.priority] ?? 9) - (priorityOrder[b.priority] ?? 9);
    });

    todoListEl.innerHTML =
      filteredTodos.length === 0
        ? `<div class="p-6 text-center text-xs text-slate-500">선택한 필터에 해당하는 할 일 항목이 없습니다. 🎉</div>`
        : filteredTodos
            .map((item) => {
              const prioClass =
                item.priority === "high"
                  ? "bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/30"
                  : item.priority === "medium"
                  ? "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30"
                  : "bg-slate-500/15 text-slate-600 dark:text-slate-400 border-slate-500/30";

              return `
                <label class="todo-item-row flex items-start gap-3 p-3 rounded-xl bg-slate-50/80 dark:bg-slate-950/50 border border-slate-200/70 dark:border-slate-800/80 hover:border-indigo-400/50 transition cursor-pointer">
                  <input type="checkbox" data-unified-todo-id="${escapeHtml(item.id)}" ${item.doneState ? "checked" : ""}
                    class="mt-0.5 h-4 w-4 rounded border-slate-300 dark:border-slate-600 text-indigo-600 cursor-pointer shrink-0" />
                  <div class="todo-label flex-1 min-w-0">
                    <div class="flex flex-wrap items-center gap-1.5 mb-1">
                      <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                        ${escapeHtml(item.repoName)}
                      </span>
                      <span class="px-1.5 py-0.5 rounded text-[10px] font-bold border ${prioClass}">
                        ${escapeHtml(item.priority.toUpperCase())}
                      </span>
                    </div>
                    <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                      ${escapeHtml(item.text)}
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

    // Update todo filter buttons
    document.querySelectorAll("[data-todo-filter]").forEach((btn) => {
      const f = btn.getAttribute("data-todo-filter");
      if (f === state.todoFilter) {
        btn.className = "px-2.5 py-1 rounded-lg text-xs font-semibold bg-indigo-600 text-white cursor-pointer";
      } else {
        btn.className =
          "px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 cursor-pointer";
      }
    });

    // Render Sync Diagnostics
    syncListEl.innerHTML = data.syncDiagnostics
      .map((diag) => {
        const badge =
          diag.status === "warning"
            ? `<span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">⚠️ ${escapeHtml(diag.statusLabel)}</span>`
            : diag.status === "info"
            ? `<span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/30">🛠️ ${escapeHtml(diag.statusLabel)}</span>`
            : `<span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">✅ ${escapeHtml(diag.statusLabel)}</span>`;

        return `
          <div class="p-3.5 rounded-xl bg-slate-50/90 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-1.5">
              <span class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">${escapeHtml(diag.repo)}</span>
              ${badge}
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
              ${escapeHtml(diag.detail)}
            </p>
            <div class="flex items-center justify-between gap-2 p-2 rounded-lg bg-slate-900 text-slate-200 font-mono text-[11px]">
              <code class="truncate flex-1">${escapeHtml(diag.fixCommand)}</code>
              <button type="button" data-copy-sync-cmd="${escapeHtml(diag.fixCommand)}"
                class="px-2.5 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-sans font-semibold shrink-0 cursor-pointer">
                복사
              </button>
            </div>
          </div>
        `;
      })
      .join("");

    syncListEl.querySelectorAll("[data-copy-sync-cmd]").forEach((btn) => {
      btn.addEventListener("click", () => {
        copyText(btn.getAttribute("data-copy-sync-cmd"), "명령어");
      });
    });
  }

  // Export Markdown Summary of current status & To-Dos
  function exportMarkdownReport() {
    const lines = [
      `# 📊 Schuna Repositories Status & To-Do Report (${new Date().toISOString().slice(0, 10)})`,
      ""
    ];

    data.repositories.forEach((repo) => {
      lines.push(`## ${repo.title} (${repo.visibility.toUpperCase()} · ${repo.progress}%)`);
      lines.push(`- **상태**: ${repo.statusBadge}`);
      lines.push(`- **저장소**: ${repo.repoUrl}`);
      if (repo.liveUrl) {
        lines.push(`- **Live Demo**: ${repo.liveUrl}`);
      }
      lines.push(`- **남은 할 일 목록**:`);
      repo.todos.forEach((t) => {
        const mark = isTodoDone(t) ? "x" : " ";
        lines.push(`  - [${mark}] (${t.priority.toUpperCase()}) ${t.text}`);
      });
      lines.push("");
    });

    copyText(lines.join("\n"), "전체 프로젝트 마크다운 현황 보고서");
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

  // Initialize Event Listeners on DOMContentLoaded
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
