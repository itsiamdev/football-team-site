// Small interactive script to render the squad and add filters
const players = [
  { id:1, name:"Andrei Popescu", number:1, position:"Goalkeeper", country:"RO", img:"https://via.placeholder.com/150?text=Andrei" },
  { id:2, name:"Mihai Ionescu", number:4, position:"Defender", country:"RO", img:"https://via.placeholder.com/150?text=Mihai" },
  { id:3, name:"Alex Stan", number:8, position:"Midfielder", country:"RO", img:"https://via.placeholder.com/150?text=Alex" },
  { id:4, name:"Cristi Marin", number:9, position:"Forward", country:"RO", img:"https://via.placeholder.com/150?text=Cristi" },
  { id:5, name:"Vlad Radu", number:5, position:"Defender", country:"RO", img:"https://via.placeholder.com/150?text=Vlad" },
  { id:6, name:"George Enache", number:10, position:"Midfielder", country:"RO", img:"https://via.placeholder.com/150?text=George" }
];

const playersEl = document.getElementById('players');
const searchInput = document.getElementById('searchInput');
const positionFilter = document.getElementById('positionFilter');
const darkToggle = document.getElementById('darkToggle');

function renderPlayers(list){
  playersEl.innerHTML = '';
  if(list.length === 0){
    playersEl.innerHTML = '<p>Niciun jucător găsit.</p>';
    return;
  }
  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'player-card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" />
      <div class="player-info">
        <h4>${p.name} <small style="color:#6b7280">#${p.number}</small></h4>
        <p>${p.position} • ${p.country}</p>
      </div>
    `;
    playersEl.appendChild(card);
  })
}

function filterAndRender(){
  const q = searchInput.value.trim().toLowerCase();
  const pos = positionFilter.value;
  let result = players.filter(p => p.name.toLowerCase().includes(q) || String(p.number) === q);
  if(pos !== 'all') result = result.filter(p => p.position === pos);
  renderPlayers(result);
}

searchInput.addEventListener('input', filterAndRender);
positionFilter.addEventListener('change', filterAndRender);

darkToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  darkToggle.textContent = document.documentElement.classList.contains('dark') ? 'Light' : 'Dark';
});

// set year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// initial render
renderPlayers(players);
