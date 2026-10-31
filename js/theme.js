/* Применяем сохранённую тему до первого отображения страницы */
'use strict';
(() => {
  const root = document.documentElement;
  const key = 'pm-theme';
  function apply(value) {
    const theme = value === 'light' ? 'light' : 'dark';
    root.dataset.theme = theme;
    const dark = theme === 'dark';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#111111' : '#ffffff');
    const button = document.querySelector('#theme-toggle');
    if (button) {
      button.setAttribute('aria-pressed', String(dark));
      button.setAttribute('aria-label', dark ? 'Включить светлую тему' : 'Включить тёмную тему');
      button.querySelector('.theme-label').textContent = dark ? 'Светлая тема' : 'Тёмная тема';
    }
  }
  let saved;
  try { saved = localStorage.getItem(key); } catch {}
  apply(saved);
  document.addEventListener('DOMContentLoaded', () => {
    apply(root.dataset.theme);
    document.querySelector('#theme-toggle')?.addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      apply(next);
      try { localStorage.setItem(key, next); } catch {}
    });
  }, {once:true});
  window.addEventListener('storage', event => {
    if (event.key === key || event.key === null) apply(event.newValue);
  });
})();
