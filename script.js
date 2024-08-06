function changeColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#FF8333'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('.centered').style.color = randomColor;
}
