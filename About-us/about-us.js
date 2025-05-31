function setupToggleButton() {
  const toggleBtn = document.querySelector('.toggle_btn');
  const dropdownMenu = document.querySelector('.dropdown_menu');

  if (!toggleBtn || !dropdownMenu) return;

  toggleBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('open');
  });
}

// Jalankan saat dokumen siap
document.addEventListener('DOMContentLoaded', setupToggleButton);
