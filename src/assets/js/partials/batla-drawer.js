/**
 * Batla — desktop menu drawer (the hamburger on wide screens).
 * Mobile keeps Raed's mmenu drawer (#mobile-menu).
 */
export default function initBatlaDrawer() {
  const drawer = document.getElementById('b-drawer');
  const toggle = document.querySelector('.b-drawer-toggle');
  if (!drawer || !toggle) return;

  const close = () => {
    drawer.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('b-drawer-open');
    toggle.focus();
  };
  const open = () => {
    drawer.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('b-drawer-open');
    drawer.querySelector('.b-drawer__close')?.focus();
  };

  toggle.addEventListener('click', () => (drawer.hidden ? open() : close()));
  drawer.querySelectorAll('.b-drawer__backdrop, .b-drawer__close').forEach(el => el.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !drawer.hidden) close(); });
}
