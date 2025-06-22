 
let id1 = document.getElementById('id1');
let id2 = document.getElementById('id2');
let p = id1.querySelector('p');  

function getRandomColor() {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

id1.addEventListener('click', () => {
  const newColor = getRandomColor();
  const newColor2 = getRandomColor();
  document.body.style.backgroundColor = newColor;
  id1.style.backgroundColor = newColor2;

  p.textContent = `Body: ${newColor}, Box: ${newColor2}`;
});
