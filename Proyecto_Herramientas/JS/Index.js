
const slider = document.getElementById('alertasSlider');
document.getElementById('prevBtn').onclick = () => slider.scrollBy({ left: -320, behavior: 'smooth' });
document.getElementById('nextBtn').onclick = () => slider.scrollBy({ left: 320, behavior: 'smooth' });
