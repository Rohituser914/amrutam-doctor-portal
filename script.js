
// Mobile menu
const toggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');
if(toggle && mobileMenu){
  toggle.addEventListener('click', ()=> mobileMenu.classList.toggle('hidden'));
}

// Dark mode toggle (on music page) + remember preference
const themeBtn = document.getElementById('themeToggle') || document.getElementById('theme-toggle');
if (themeBtn){
  themeBtn.addEventListener('click', ()=>{
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('amrutam-theme', isDark ? 'dark':'light');
  });
}
// Apply saved theme on load
(function(){
  const saved = localStorage.getItem('amrutam-theme');
  if(saved === 'dark'){ document.documentElement.classList.add('dark'); }
})();

// Music controls
const player = document.getElementById('player');
const volume = document.getElementById('volume');
if(player){
  player.volume = volume ? parseFloat(volume.value) : 0.2;
}
if(volume && player){
  volume.addEventListener('input', e => { player.volume = parseFloat(e.target.value); });
}
