/* Generated from project root Scripts.js (kept in /public for case-sensitive deploys). */
(() => {
  const REPO_OWNER = "Stanimir0";
  const REPO_NAME = "HistoricalApp";

  const repoUrl = `https://github.com/${REPO_OWNER}/${REPO_NAME}`;
  const releasesUrl = `${repoUrl}/releases`;
  const latestReleaseUrl = `${repoUrl}/releases/latest`;
  const issuesUrl = `${repoUrl}/issues`;
  const apiLatestReleaseUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/releases/latest`;

  const $ = (id) => document.getElementById(id);

  const els = {
    primaryDownload: $("primaryDownload"),
    viewOnGitHub: $("viewOnGitHub"),
    sourceLink: $("sourceLink"),
    issuesLink: $("issuesLink"),
    footerRepo: $("footerRepo"),
    footerReleases: $("footerReleases"),
    releasesLinkInline: $("releasesLinkInline"),
    downloadWindowsBtn: $("downloadWindowsBtn"),
    downloadAndroidBtn: $("downloadAndroidBtn"),
    copyReleaseLink: $("copyReleaseLink"),
    downloadTitle: $("downloadTitle"),
    downloadText: $("downloadText"),
    langSelect: $("langSelect"),
    themeToggle: $("themeToggle"),
    toast: $("toast"),
  };

  const I18N = {
    en: {
      "lang.label": "Language",
      "nav.features": "Features",
      "nav.download": "Download",
      "nav.faq": "FAQ",
      "nav.about": "About",
      "cta.download": "Download",

      "hero.eyebrow": "Gamified history learning",
      "hero.title": "Learn history through play.",
      "hero.subtitle":
        "Explore battles, events, and characters through quick quizzes. Earn XP, climb ranks, and compete on leaderboards.",
      "hero.primary": "Download",
      "hero.github": "View on GitHub",

      "meta.platforms.k": "Platforms",
      "meta.platforms.v": "Android • Windows",
      "meta.built.k": "Built with",
      "meta.built.v": ".NET MAUI",

      "features.title": "Everything you need to stay learning",
      "features.subtitle": "Designed to be fast, satisfying, and easy to pick up daily.",

      "feature.quiz.title": "Quiz categories",
      "feature.quiz.text": "Battles, events, and characters—learn in focused bursts.",
      "feature.xp.title": "XP & ranks",
      "feature.xp.text": "Build streaks, level up, and track your progress over time.",
      "feature.leaderboards.title": "Leaderboards",
      "feature.leaderboards.text": "Compete globally and see how you stack up with friends.",
      "feature.auth.title": "Sign in",
      "feature.auth.text": "Secure accounts with cloud authentication.",
      "feature.admin.title": "Admin tools",
      "feature.admin.text": "Manage quiz content and evolve the experience over time.",
      "feature.speed.title": "Made for speed",
      "feature.speed.text": "Quick sessions, clean UI, and a satisfying gameplay loop.",

      "download.title": "Download Historical App",
      "download.subtitle": "Download the Windows installer (.exe) or the Android build (.apk) from the latest GitHub release.",
      "download.latestTitle": "Latest release downloads",
      "download.windows": "Download for Windows (.exe)",
      "download.android": "Download for Android (.apk)",
      "download.copy": "Copy release link",
      "download.preferSource": "Prefer source?",
      "download.source": "Build from source",
      "download.issue": "Report an issue",
      "download.releases": "Open releases",
      "download.side.title": "What you’ll get",
      "download.side.b1": "Quizzes with multiple categories",
      "download.side.b2": "XP, ranks, and progression",
      "download.side.b3": "Leaderboards & competition",
      "download.side.b4": "Windows + Android downloads",
      "download.security.title": "Security note",
      "download.security.text": "Only install builds from trusted sources. GitHub releases are recommended.",

      "faq.title": "FAQ",
      "faq.subtitle": "Quick answers for common questions.",
      "faq.q1": "Where do downloads come from?",
      "faq.a1": "Downloads are hosted on GitHub under “Releases”. If no releases exist yet, you can still build from source.",
      "faq.q2": "Which platforms are supported?",
      "faq.a2": "Downloads are provided for Windows (.exe) and Android (.apk).",
      "faq.q3": "Can I contribute?",
      "faq.a3": "Yes. Open the repository, fork it, and submit a pull request.",

      "footer.tagline": "A gamified, cross-platform history-learning app built with .NET MAUI.",
      "footer.repo": "GitHub repo",
      "footer.releases": "Releases",
      "footer.download": "Download",

      "toast.copied": "Copied release link.",
      "toast.copyFail": "Couldn’t copy automatically. Open Releases instead.",
      "toast.themeLight": "Light theme.",
      "toast.themeDark": "Dark theme.",

      "download.hint.windows": "Download for Windows",
      "download.hint.android": "Download for Android",
      "download.hint.generic": "Download",

      "release.title": "Latest release: {tag}",
      "release.text.both": "Direct downloads are ready. If a button doesn’t work, open Releases.",
      "release.text.one":
        "One direct download is ready; the other will open the latest release page until it’s published.",
      "release.text.none": "Direct assets weren’t found yet—these buttons will open the latest release page.",
    },
    bg: {
      "lang.label": "Език",
      "nav.features": "Функции",
      "nav.download": "Изтегляне",
      "nav.faq": "Въпроси",
      "nav.about": "За нас",
      "cta.download": "Изтегли",

      "hero.eyebrow": "Учене на история чрез игра",
      "hero.title": "Научи историята чрез игра.",
      "hero.subtitle":
        "Изследвай битки, събития и личности с кратки въпроси. Печели XP, качвай рангове и се състезавай в класации.",
      "hero.primary": "Изтегли",
      "hero.github": "Виж в GitHub",

      "meta.platforms.k": "Платформи",
      "meta.platforms.v": "Android • Windows",
      "meta.built.k": "Създадено с",
      "meta.built.v": ".NET MAUI",

      "features.title": "Всичко нужно за постоянно учене",
      "features.subtitle": "Бързо, приятно и лесно за ежедневна игра.",

      "feature.quiz.title": "Категории",
      "feature.quiz.text": "Битки, събития и личности — учи на порции.",
      "feature.xp.title": "XP и рангове",
      "feature.xp.text": "Прави серии, качвай нива и следи прогреса си.",
      "feature.leaderboards.title": "Класации",
      "feature.leaderboards.text": "Състезавай се глобално и сравнявай резултати.",
      "feature.auth.title": "Вход",
      "feature.auth.text": "Сигурни профили с облачна автентикация.",
      "feature.admin.title": "Админ инструменти",
      "feature.admin.text": "Управлявай въпроси и развивай съдържанието.",
      "feature.speed.title": "Създадено за бързина",
      "feature.speed.text": "Кратки сесии, чист интерфейс и удовлетворяващ геймплей.",

      "download.title": "Изтегли Historical App",
      "download.subtitle": "Изтегли Windows инсталатор (.exe) или Android версия (.apk) от последния GitHub release.",
      "download.latestTitle": "Изтегляне от последния release",
      "download.windows": "Изтегли за Windows (.exe)",
      "download.android": "Изтегли за Android (.apk)",
      "download.copy": "Копирай линка",
      "download.preferSource": "Предпочиташ код?",
      "download.source": "Създай от сорс",
      "download.issue": "Докладвай проблем",
      "download.releases": "Отвори releases",
      "download.side.title": "Какво получаваш",
      "download.side.b1": "Куизове с категории",
      "download.side.b2": "XP, рангове и прогрес",
      "download.side.b3": "Класации и състезание",
      "download.side.b4": "Изтегляния за Windows + Android",
      "download.security.title": "Сигурност",
      "download.security.text": "Инсталирай само от доверени източници. Препоръчваме GitHub releases.",

      "faq.title": "Въпроси",
      "faq.subtitle": "Кратки отговори на най-честите въпроси.",
      "faq.q1": "Откъде са изтеглянията?",
      "faq.a1": "Изтеглянията са в GitHub под “Releases”. Ако още няма release, можеш да компилираш от сорс кода.",
      "faq.q2": "Кои платформи се поддържат?",
      "faq.a2": "Има изтегляния за Windows (.exe) и Android (.apk).",
      "faq.q3": "Мога ли да допринеса?",
      "faq.a3": "Да. Отвори репото, направи fork и изпрати pull request.",

      "footer.tagline": "Геймифицирано, кросплатформено приложение за учене на история с .NET MAUI.",
      "footer.repo": "GitHub репо",
      "footer.releases": "Releases",
      "footer.download": "Изтегли",

      "toast.copied": "Линкът е копиран.",
      "toast.copyFail": "Не успях да копирам. Отварям Releases.",
      "toast.themeLight": "Светла тема.",
      "toast.themeDark": "Тъмна тема.",

      "download.hint.windows": "Изтегли за Windows",
      "download.hint.android": "Изтегли за Android",
      "download.hint.generic": "Изтегли",

      "release.title": "Последен release: {tag}",
      "release.text.both": "Директните изтегляния са готови. Ако бутон не работи, отвори Releases.",
      "release.text.one": "Едното директно изтегляне е готово; другото ще отвори последния release, докато се публикува.",
      "release.text.none": "Не намерих директни файлове — бутоните ще отворят последния release.",
    },
    ru: {
      "lang.label": "Язык",
      "nav.features": "Возможности",
      "nav.download": "Скачать",
      "nav.faq": "FAQ",
      "nav.about": "О проекте",
      "cta.download": "Скачать",

      "hero.eyebrow": "История в формате игры",
      "hero.title": "Учите историю играя.",
      "hero.subtitle":
        "Сражения, события и личности в быстрых викторинах. Получайте XP, повышайте ранг и соревнуйтесь в таблицах лидеров.",
      "hero.primary": "Скачать",
      "hero.github": "Открыть в GitHub",

      "meta.platforms.k": "Платформы",
      "meta.platforms.v": "Android • Windows",
      "meta.built.k": "Сделано на",
      "meta.built.v": ".NET MAUI",

      "features.title": "Всё для регулярного обучения",
      "features.subtitle": "Быстро, приятно и удобно каждый день.",

      "feature.quiz.title": "Категории викторин",
      "feature.quiz.text": "Сражения, события и личности — учитесь короткими подходами.",
      "feature.xp.title": "XP и ранги",
      "feature.xp.text": "Держите серию, повышайте уровень и отслеживайте прогресс.",
      "feature.leaderboards.title": "Лидеры",
      "feature.leaderboards.text": "Соревнуйтесь глобально и сравнивайте результаты.",
      "feature.auth.title": "Вход",
      "feature.auth.text": "Безопасные аккаунты с облачной аутентификацией.",
      "feature.admin.title": "Инструменты админа",
      "feature.admin.text": "Управляйте контентом викторин и развивайте проект.",
      "feature.speed.title": "Сделано для скорости",
      "feature.speed.text": "Короткие сессии, чистый UI и приятный игровой цикл.",

      "download.title": "Скачать Historical App",
      "download.subtitle":
        "Скачайте установщик для Windows (.exe) или сборку для Android (.apk) из последнего GitHub release.",
      "download.latestTitle": "Загрузки последнего release",
      "download.windows": "Скачать для Windows (.exe)",
      "download.android": "Скачать для Android (.apk)",
      "download.copy": "Скопировать ссылку",
      "download.preferSource": "Нужен исходник?",
      "download.source": "Собрать из исходников",
      "download.issue": "Сообщить о проблеме",
      "download.releases": "Открыть releases",
      "download.side.title": "Что вы получите",
      "download.side.b1": "Викторины с категориями",
      "download.side.b2": "XP, ранги и прогресс",
      "download.side.b3": "Лидеры и соревнование",
      "download.side.b4": "Загрузки для Windows + Android",
      "download.security.title": "Безопасность",
      "download.security.text": "Устанавливайте только из доверенных источников. Рекомендуем GitHub releases.",

      "faq.title": "FAQ",
      "faq.subtitle": "Короткие ответы на популярные вопросы.",
      "faq.q1": "Откуда берутся загрузки?",
      "faq.a1":
        "Загрузки размещены на GitHub в разделе “Releases”. Если release ещё нет, можно собрать из исходников.",
      "faq.q2": "Какие платформы поддерживаются?",
      "faq.a2": "Доступны загрузки для Windows (.exe) и Android (.apk).",
      "faq.q3": "Можно ли помочь проекту?",
      "faq.a3": "Да. Откройте репозиторий, сделайте fork и отправьте pull request.",

      "footer.tagline": "Игровое приложение для изучения истории, созданное на .NET MAUI.",
      "footer.repo": "Репозиторий GitHub",
      "footer.releases": "Releases",
      "footer.download": "Скачать",

      "toast.copied": "Ссылка скопирована.",
      "toast.copyFail": "Не удалось скопировать. Открываю Releases.",
      "toast.themeLight": "Светлая тема.",
      "toast.themeDark": "Тёмная тема.",

      "download.hint.windows": "Скачать для Windows",
      "download.hint.android": "Скачать для Android",
      "download.hint.generic": "Скачать",

      "release.title": "Последний release: {tag}",
      "release.text.both": "Прямые загрузки готовы. Если кнопка не работает — откройте Releases.",
      "release.text.one":
        "Одна прямая загрузка готова; другая откроет последний release, пока файл не будет опубликован.",
      "release.text.none": "Прямые файлы не найдены — кнопки откроют последний release.",
    },
  };

  const getStoredLang = () => {
    try {
      return localStorage.getItem("lang");
    } catch {
      return null;
    }
  };

  const setStoredLang = (lang) => {
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // ignore
    }
  };

  const detectDefaultLang = () => {
    const lang = (navigator.language || "en").toLowerCase();
    if (lang.startsWith("bg")) return "bg";
    if (lang.startsWith("ru")) return "ru";
    return "en";
  };

  const t = (lang, key, vars) => {
    const dict = I18N[lang] || I18N.en;
    let str = dict[key] ?? I18N.en[key] ?? null;
    if (str == null) return null;
    if (vars) {
      Object.keys(vars).forEach((k) => {
        str = str.replaceAll(`{${k}}`, String(vars[k]));
      });
    }
    return str;
  };

  const setLangSelectValue = (lang) => {
    if (!els.langSelect) return;
    els.langSelect.value = lang;
  };

  const applyI18n = (lang) => {
    const nodes = document.querySelectorAll("[data-i18n]");
    nodes.forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (!key) return;
      const value = t(lang, key);
      if (value == null) return;
      node.textContent = value;
    });
  };

  const showToast = (message) => {
    if (!els.toast) return;
    els.toast.textContent = message;
    els.toast.classList.add("toast--show");
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => {
      els.toast.classList.remove("toast--show");
    }, 2200);
  };

  const safeSetHref = (el, href) => {
    if (!el) return;
    el.href = href;
  };

  const initLinks = () => {
    safeSetHref(els.viewOnGitHub, repoUrl);
    safeSetHref(els.sourceLink, repoUrl);
    safeSetHref(els.issuesLink, issuesUrl);
    safeSetHref(els.footerRepo, repoUrl);
    safeSetHref(els.footerReleases, releasesUrl);
    safeSetHref(els.releasesLinkInline, releasesUrl);

    safeSetHref(els.downloadWindowsBtn, latestReleaseUrl);
    safeSetHref(els.downloadAndroidBtn, latestReleaseUrl);
  };

  const detectPlatformHint = () => {
    const ua = navigator.userAgent || "";
    const isWindows = /Windows/i.test(ua);
    const isAndroid = /Android/i.test(ua);

    if (els.primaryDownload) {
      const currentLang = document.documentElement.getAttribute("lang") || "en";
      if (isWindows) els.primaryDownload.textContent = t(currentLang, "download.hint.windows") || els.primaryDownload.textContent;
      else if (isAndroid) els.primaryDownload.textContent = t(currentLang, "download.hint.android") || els.primaryDownload.textContent;
      else els.primaryDownload.textContent = t(currentLang, "download.hint.generic") || els.primaryDownload.textContent;
    }
  };

  const pickAsset = (assets, predicate) => {
    if (!Array.isArray(assets)) return null;
    return assets.find((a) => a && typeof a.name === "string" && predicate(a.name)) || null;
  };

  const setDownloadButtonsFromRelease = (release) => {
    if (!release || !Array.isArray(release.assets)) return false;

    const windowsAsset = pickAsset(release.assets, (name) => /\.exe$/i.test(name));
    const androidAsset = pickAsset(release.assets, (name) => /\.apk$/i.test(name));

    const windowsOk = windowsAsset && typeof windowsAsset.browser_download_url === "string";
    const androidOk = androidAsset && typeof androidAsset.browser_download_url === "string";

    if (windowsOk) safeSetHref(els.downloadWindowsBtn, windowsAsset.browser_download_url);
    if (androidOk) safeSetHref(els.downloadAndroidBtn, androidAsset.browser_download_url);

    if (els.downloadTitle && typeof release.tag_name === "string") {
      const currentLang = document.documentElement.getAttribute("lang") || "en";
      els.downloadTitle.textContent = t(currentLang, "release.title", { tag: release.tag_name }) || els.downloadTitle.textContent;
    }

    if (els.downloadText) {
      const currentLang = document.documentElement.getAttribute("lang") || "en";
      if (windowsOk && androidOk) els.downloadText.textContent = t(currentLang, "release.text.both") || els.downloadText.textContent;
      else if (windowsOk || androidOk) els.downloadText.textContent = t(currentLang, "release.text.one") || els.downloadText.textContent;
      else els.downloadText.textContent = t(currentLang, "release.text.none") || els.downloadText.textContent;
    }

    return windowsOk || androidOk;
  };

  const loadLatestRelease = async () => {
    try {
      const res = await fetch(apiLatestReleaseUrl, {
        headers: { Accept: "application/vnd.github+json" },
      });
      if (!res.ok) return;
      const data = await res.json();
      setDownloadButtonsFromRelease(data);
    } catch {
      // ignore
    }
  };

  const initCopy = () => {
    if (!els.copyReleaseLink) return;
    els.copyReleaseLink.addEventListener("click", async () => {
      const text = latestReleaseUrl;
      const currentLang = document.documentElement.getAttribute("lang") || "en";
      try {
        await navigator.clipboard.writeText(text);
        showToast(t(currentLang, "toast.copied") || "Copied.");
      } catch {
        showToast(t(currentLang, "toast.copyFail") || "Couldn’t copy.");
        window.open(releasesUrl, "_blank", "noreferrer");
      }
    });
  };

  const getStoredTheme = () => {
    try {
      return localStorage.getItem("theme");
    } catch {
      return null;
    }
  };

  const setStoredTheme = (theme) => {
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // ignore
    }
  };

  const applyTheme = (theme) => {
    const root = document.documentElement;
    if (theme === "light") root.setAttribute("data-theme", "light");
    else root.removeAttribute("data-theme");
  };

  const initTheme = () => {
    const stored = getStoredTheme();
    if (stored === "light" || stored === "dark") applyTheme(stored);

    if (!els.themeToggle) return;
    els.themeToggle.addEventListener("click", () => {
      const currentLang = document.documentElement.getAttribute("lang") || "en";
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      const next = isLight ? "dark" : "light";
      applyTheme(next);
      setStoredTheme(next);
      showToast(next === "light" ? t(currentLang, "toast.themeLight") : t(currentLang, "toast.themeDark"));
    });
  };

  const setLang = (lang) => {
    const safe = I18N[lang] ? lang : "en";
    document.documentElement.lang = safe;
    setLangSelectValue(safe);
    applyI18n(safe);
    detectPlatformHint();
    setStoredLang(safe);
  };

  const initLang = () => {
    const stored = getStoredLang();
    const initial = stored && I18N[stored] ? stored : detectDefaultLang();
    setLang(initial);

    if (!els.langSelect) return;
    els.langSelect.addEventListener("change", (e) => {
      const value = e.target && typeof e.target.value === "string" ? e.target.value : "en";
      setLang(value);
    });
  };

  const init = () => {
    initLinks();
    initLang();
    initCopy();
    initTheme();
    loadLatestRelease();
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();

