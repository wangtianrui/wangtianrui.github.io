(() => {
  "use strict";

  const config = window.DEMO_CONFIG;
  const table = document.getElementById("comparison-table");
  const scoreToggle = document.getElementById("score-toggle");
  const scoreToggleLabel = scoreToggle?.querySelector(".score-toggle-label");
  if (!config || !table) return;

  const order = [
    "qaflow",
    "dasheng",
    "resemble",
    "cmgan",
    "fullsubnet-plus",
    "sgmse",
    "input",
  ];
  const systems = new Map(config.systems.map((system) => [system.key, system]));
  let current = null;

  function stopCurrent() {
    if (!current) return;
    current.audio.pause();
    current.button.textContent = "▶";
    current.button.setAttribute("aria-label", `播放 ${current.name}`);
    current.cell.classList.remove("playing");
    current = null;
  }

  function createHeader() {
    const row = document.createElement("div");
    row.className = "comparison-row comparison-header";

    const sampleHeader = document.createElement("div");
    sampleHeader.className = "header-cell";
    sampleHeader.textContent = "No.";
    row.appendChild(sampleHeader);

    order.forEach((key) => {
      const system = systems.get(key);
      const cell = document.createElement("div");
      cell.className = `header-cell${key === "qaflow" ? " ours" : ""}`;
      cell.textContent = key === "qaflow" ? "Ours" : system.name;
      row.appendChild(cell);
    });
    return row;
  }

  function createResultCell(track) {
    const system = systems.get(track.system);
    const cell = document.createElement("div");
    cell.className = `result-cell${track.system === "qaflow" ? " ours" : ""}`;
    cell.style.setProperty("--system-color", system.color);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "play-button";
    button.textContent = "▶";
    button.title = `播放 ${system.name}`;
    button.setAttribute("aria-label", `播放 ${system.name}`);

    const audio = document.createElement("audio");
    audio.preload = "none";
    audio.src = track.audio;

    const progress = document.createElement("span");
    progress.className = "audio-progress";
    progress.setAttribute("aria-hidden", "true");
    const progressFill = document.createElement("span");
    progress.appendChild(progressFill);

    const playerLine = document.createElement("span");
    playerLine.className = "player-line";
    playerLine.append(button, progress);

    const score = document.createElement("small");
    score.className = "score-note";
    score.textContent = track.score.toFixed(3);

    button.addEventListener("click", async () => {
      if (current && current.audio === audio && !audio.paused) {
        stopCurrent();
        return;
      }
      stopCurrent();
      current = { audio, button, cell, name: system.name };
      try {
        await audio.play();
        button.textContent = "Ⅱ";
        button.setAttribute("aria-label", `暂停 ${system.name}`);
        cell.classList.add("playing");
      } catch (error) {
        current = null;
        button.textContent = "!";
        button.title = "音频无法播放";
        console.error(error);
      }
    });

    audio.addEventListener("timeupdate", () => {
      const ratio =
        Number.isFinite(audio.duration) && audio.duration > 0
          ? audio.currentTime / audio.duration
          : 0;
      progressFill.style.width = `${ratio * 100}%`;
    });
    audio.addEventListener("ended", () => {
      audio.currentTime = 0;
      progressFill.style.width = "0%";
      stopCurrent();
    });
    cell.append(playerLine, score, audio);
    return cell;
  }

  function createSampleRow(sample) {
    const row = document.createElement("div");
    row.className = "comparison-row";

    const sampleCell = document.createElement("div");
    sampleCell.className = "sample-cell";
    sampleCell.textContent = String(sample.index);
    row.appendChild(sampleCell);

    const trackMap = new Map(sample.tracks.map((track) => [track.system, track]));
    order.forEach((key) => row.appendChild(createResultCell(trackMap.get(key))));
    return row;
  }

  table.replaceChildren(createHeader(), ...config.samples.map(createSampleRow));

  scoreToggle?.addEventListener("click", () => {
    const showScores = !table.classList.contains("show-scores");
    table.classList.toggle("show-scores", showScores);
    scoreToggle.setAttribute("aria-pressed", String(showScores));
    const label = showScores ? "Hide DNSMOS Scores" : "Show DNSMOS Scores";
    scoreToggle.setAttribute("aria-label", label);
    scoreToggle.title = label;
    scoreToggleLabel.textContent = label;
  });
})();
