// Array com cores para trocar
const colors = ['#FF6347', '#1E90FF', '#3CB371', '#FF69B4', '#8A2BE2', '#FFD700'];

let currentIndex = 0;

document.getElementById('color-btn').addEventListener('click', () => {
    // Muda a cor de fundo da página
    document.body.style.backgroundColor = colors[currentIndex];
    
    // Atualiza o índice para a próxima cor
    currentIndex = (currentIndex + 1) % colors.length;
});