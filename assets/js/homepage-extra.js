(function () {
  const chips = Array.from(document.querySelectorAll('.theme-chip[data-research-theme]'));
  const items = Array.from(document.querySelectorAll('.publications li[data-research-themes]'));
  const root = document.documentElement;

  function setActive(theme) {
    chips.forEach((chip) => {
      const active = chip.dataset.researchTheme === theme;
      chip.classList.toggle('is-active', active);
      chip.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    items.forEach((item) => {
      const themes = (item.dataset.researchThemes || '').split(/\s+/).filter(Boolean);
      const visible = theme === 'all' || themes.includes(theme);
      item.hidden = !visible;
    });

    root.dataset.researchTheme = theme;
  }

  chips.forEach((chip) => {
    chip.addEventListener('click', () => setActive(chip.dataset.researchTheme));
  });

  setActive('all');

  items.forEach((item) => {
    const titleLink = item.querySelector('.title a');
    const summary = item.querySelector('.summary');
    const teaser = item.querySelector('.teaser');

    item.addEventListener('mouseenter', () => {
      item.classList.add('is-hovered');
      if (titleLink) titleLink.setAttribute('data-hovered', 'true');
      if (summary) summary.setAttribute('data-hovered', 'true');
      if (teaser) teaser.setAttribute('data-hovered', 'true');
    });

    item.addEventListener('mouseleave', () => {
      item.classList.remove('is-hovered');
      if (titleLink) titleLink.removeAttribute('data-hovered');
      if (summary) summary.removeAttribute('data-hovered');
      if (teaser) teaser.removeAttribute('data-hovered');
    });
  });
})();
