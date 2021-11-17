(() => {
  const appDrawerButton = document.querySelector('.app_drawer__button');
  const appDrawer = document.querySelector('.app_drawer');
  appDrawerButton.addEventListener('click', () =>
      toggleMenu(appDrawer, appDrawerButton)
  );
})();

function toggleMenu(drawer, button) {
  button.classList.toggle('app_drawer__button--visible');
  drawer.classList.toggle('app_drawer--visible');
}

(() => {
  const appDrawerButton1 = document.querySelector('.app_drawer__button1');
  const appDrawer1 = document.querySelector('.app_drawer1');
  appDrawerButton1.addEventListener('click', () =>
      toggleMenu1(appDrawer1, appDrawerButton1)
  );
})();

function toggleMenu1(drawer, button) {
  button.classList.toggle('app_drawer__button--visible1');
  drawer.classList.toggle('app_drawer--visible1');
}