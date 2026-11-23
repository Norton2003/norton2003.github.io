{
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const camIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="6" width="18" height="13" rx="1.5"/><circle cx="12" cy="12.5" r="3.5"/><path d="M8 6l1.5-2h5L16 6"/></svg>';
  const vidIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M10 9.5v5l4.5-2.5z" fill="currentColor"/></svg>';

  // ---------- media helpers ----------
  const slot = (m) => {
    const isVid = m && m.type === "video";
    return `<div class="slot">${isVid ? vidIcon : camIcon}<span>${isVid ? "Video coming soon" : "Photo coming soon"}</span>${S.showSlotPaths && m && m.src ? `<code>${esc(m.src)}</code>` : ""}</div>`;
  };
  const media = (m, cls = "") => {
    if (!m || !m.src) return `<div class="media ${cls}">${slot(m)}</div>`;
    let inner;
    if (m.type === "video") inner = `<video src="${esc(m.src)}" controls preload="metadata" playsinline></video>`;
    else if (m.type === "youtube") inner = `<iframe src="https://www.youtube-nocookie.com/embed/${esc(m.src)}" title="${esc(m.caption || "Video")}" style="position:absolute;inset:0;width:100%;height:100%;border:0" allowfullscreen loading="lazy"></iframe>`;
    else inner = `<img src="${esc(m.src)}" alt="${esc(m.caption || "")}" loading="lazy">`;
    return `<div class="media ${cls}" data-src="${esc(m.src)}" data-type="${esc(m.type || "image")}">${inner}</div>`;
  };
  // Any image or video that fails to load turns into a neat placeholder slot.
  document.addEventListener("error", (e) => {
    const el = e.target;
    if (!(el instanceof HTMLImageElement || el instanceof HTMLVideoElement)) return;
    const box = el.closest(".media");
    if (box) box.innerHTML = slot({ type: box.dataset.type, src: box.dataset.src });
  }, true);

  const carousel = (items) => {
    if (!items || !items.length) return "";
    const figs = items.map((m) => `<figure>${media(m)}${m.caption ? `<figcaption>${esc(m.caption)}</figcaption>` : ""}</figure>`).join("");
    const btns = items.length > 1 ? `<div class="carbtns"><button type="button" data-car="-1" aria-label="Previous">‹</button><button type="button" data-car="1" aria-label="Next">›</button></div>` : "";
    return `<div class="car"><div class="track" tabindex="0">${figs}</div>${btns}</div>`;
  };
  const step = (track, dir) => {
    const f = track.querySelector("figure");
    if (f) track.scrollBy({ left: dir * (f.offsetWidth + 14), behavior: "smooth" });
  };
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-car]");
    if (b) step(b.closest(".car").querySelector(".track"), +b.dataset.car);
  });
  document.addEventListener("keydown", (e) => {
    const t = e.target.closest && e.target.closest(".track");
    if (t && (e.key === "ArrowRight" || e.key === "ArrowLeft")) { e.preventDefault(); step(t, e.key === "ArrowRight" ? 1 : -1); }
  });

  // ---------- header, hero, contact ----------
  const setLink = (id, href) => { const a = $(id); if (!a) return; if (href) a.href = href; else a.remove(); };
  $("navName").textContent = S.name;
  $("heroName").textContent = S.name;
  $("heroRole").textContent = S.role;
  $("heroIntro").textContent = S.intro;
  ["heroResume", "eduResume", "cResume"].forEach((id) => setLink(id, S.resumePdf));
  ["heroLinkedin", "cLinkedin"].forEach((id) => setLink(id, S.linkedin));
  document.querySelectorAll('a[href^="http"]').forEach((a) => { a.target = "_blank"; a.rel = "noopener"; });
  $("stats").innerHTML = S.stats.map((s) => `<div><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("");
  $("portrait").outerHTML = media({ type: "image", src: S.portrait, caption: S.name }, "portrait");

  const clist = [
    { k: "Email", v: S.email, href: "mailto:" + S.email },
    { k: "LinkedIn", v: S.linkedin.replace(/^https?:\/\/(www\.)?/, ""), href: S.linkedin },
    S.github ? { k: "GitHub", v: S.github.replace(/^https?:\/\//, ""), href: S.github } : null,
    { k: "Based in", v: S.location }
  ].filter(Boolean);
  $("clist").innerHTML = clist.map((c) => c.href
    ? `<a href="${esc(c.href)}"${c.href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}><small>${esc(c.k)}</small><span style="padding:0;border:0">${esc(c.v)}</span></a>`
    : `<span><small>${esc(c.k)}</small>${esc(c.v)}</span>`).join("");
  $("foot").textContent = `© ${new Date().getFullYear()} ${S.name} · ${S.role}`;

  // ---------- story ----------
  const nowIdx = S.timeline.findIndex((t) => /2026|2027/.test(t.when) && /Lead|Study/.test(t.title));
  $("timeline").innerHTML = S.timeline.map((t, i) =>
    `<li class="${i === nowIdx ? "now" : ""}"><time>${esc(t.when) || "&nbsp;"}</time><div><strong>${esc(t.title)}</strong><p>${esc(t.text)}</p></div></li>`).join("");

  // ---------- projects ----------
  const cats = ["All", ...new Set(S.projects.map((p) => p.category))];
  let filter = "All";
  const renderFilters = () => {
    $("filters").innerHTML = cats.map((c) => `<button type="button" data-f="${esc(c)}" aria-pressed="${c === filter}">${esc(c)}</button>`).join("");
  };
  const renderGrid = () => {
    const list = S.projects.filter((p) => filter === "All" || p.category === filter);
    $("grid").innerHTML = list.map((p) => `
      <button type="button" class="card" data-open="${esc(p.id)}">
        ${media({ type: "image", src: p.cover, caption: p.title })}
        <div class="body">
          <div class="meta"><span>${esc(p.category)}${p.when ? " · " + esc(p.when) : ""}</span><span class="pill ${p.status === "In progress" ? "live" : ""}">${esc(p.status)}</span></div>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.summary)}</p>
          <span class="more">Read case study →</span>
        </div>
      </button>`).join("") + `
      <div class="card next" aria-label="Space for future projects">
        <svg viewBox="0 0 56 56" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="4" y="4" width="48" height="48" stroke-dasharray="4 4"/><path d="M28 18v20M18 28h20"/></svg>
        <h3>Next project</h3>
        <p style="color:var(--mute);margin:6px 0 0">Always building. New work is added here as it's finished.</p>
      </div>`;
  };
  $("filters").addEventListener("click", (e) => {
    const b = e.target.closest("[data-f]");
    if (!b) return;
    filter = b.dataset.f; renderFilters(); renderGrid();
  });
  renderFilters(); renderGrid();

  // ---------- case study drawer ----------
  const dlg = $("drawer");
  const openProject = (id) => {
    const i = S.projects.findIndex((p) => p.id === id);
    if (i < 0) return;
    const p = S.projects[i];
    $("dSheet").textContent = `Project ${String(i + 1).padStart(2, "0")} of ${String(S.projects.length).padStart(2, "0")} · ${p.category}`;
    const files = [...(p.docs || []).map((d) => ({ ...d, kind: "PDF" })), ...(p.links || []).map((d) => ({ ...d, kind: "Link" }))];
    $("dBody").innerHTML = `
      <span class="pill ${p.status === "In progress" ? "live" : ""}">${esc(p.status)}</span>
      <h2 id="dTitle">${esc(p.title)}</h2>
      <div class="org">${esc(p.org)}</div>
      <p class="lede">${esc(p.summary)}</p>
      <div class="facts">
        <div><b>Problem</b>${esc(p.problem)}</div>
        <div><b>My role</b>${esc(p.role)}</div>
        ${p.when ? `<div><b>When</b>${esc(p.when)}</div>` : ""}
      </div>
      ${p.media && p.media.length ? `<h3>Photos &amp; video</h3>${carousel(p.media)}` : ""}
      <h3>Process</h3>
      <ol class="steps">${(p.process || []).map((s) => `<li>${esc(s)}</li>`).join("")}</ol>
      <h3>Results</h3>
      <p>${esc(p.results)}</p>
      ${p.tools && p.tools.length ? `<h3>Tools &amp; skills</h3><div class="tags">${p.tools.map((t) => `<span>${esc(t)}</span>`).join("")}</div>` : ""}
      ${files.length ? `<h3>Documents &amp; links</h3><div class="dl">${files.map((f) => `<a class="btn ghost" href="${esc(f.href)}" target="_blank" rel="noopener">${esc(f.label)}</a>`).join("")}</div>` : ""}`;
    dlg.querySelector(".db").scrollTop = 0;
    if (!dlg.open) dlg.showModal();
    dlg.scrollTop = 0;
    if (location.hash !== "#" + id) history.replaceState(null, "", "#" + id);
  };
  const closeProject = () => { if (dlg.open) dlg.close(); };
  dlg.addEventListener("close", () => {
    dlg.querySelectorAll("video").forEach((v) => v.pause());
    if (S.projects.some((p) => "#" + p.id === location.hash)) history.replaceState(null, "", "#projects");
  });
  $("dClose").addEventListener("click", closeProject);
  dlg.addEventListener("click", (e) => { if (e.target === dlg) closeProject(); });
  $("grid").addEventListener("click", (e) => { const c = e.target.closest("[data-open]"); if (c) openProject(c.dataset.open); });
  const fromHash = () => { const id = location.hash.slice(1); if (S.projects.some((p) => p.id === id)) openProject(id); };
  window.addEventListener("hashchange", fromHash);
  fromHash();

  // ---------- welding ----------
  const W = S.welding;
  $("weldIntro").textContent = W.intro;
  $("skills").innerHTML = W.skills.map((s) => `<div><b>${esc(s.name)}</b><small>${esc(s.where)}</small><span>${esc(s.note)}</span></div>`).join("");
  $("weldCar").outerHTML = carousel(W.gallery);
  $("certs").innerHTML = (W.certs || []).map((c) => `<a class="btn ghost" href="${esc(c.href)}" target="_blank" rel="noopener">${esc(c.label)}</a>`).join("");

  // ---------- experience ----------
  $("jobs").innerHTML = S.experience.map((j) => `
    <article class="job">
      <div class="when">${esc(j.when)}${j.where ? `<span>${esc(j.where)}</span>` : ""}</div>
      <div><h3>${esc(j.org)}</h3><div class="r">${esc(j.role)}</div><p>${esc(j.text)}</p></div>
    </article>`).join("");
  $("edu").innerHTML = S.education.map((e) => `<div><b>${esc(e.school)}</b><span>${esc(e.what)}</span>${e.when ? `<span>${esc(e.when)}</span>` : ""}</div>`).join("");
}
