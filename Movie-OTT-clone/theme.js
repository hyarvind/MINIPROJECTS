const themeMap = {
  dark: "light",
  light: "solar",
  solar: "dark"
};

const theme = localStorage.getItem('theme')
  || (tmp = Object.keys(themeMap)[0],
      localStorage.setItem('theme', tmp),
      tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  const current = localStorage.getItem('theme');
  const next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem('theme', next);
}

document.getElementById('themeButton').onclick = toggleTheme;


const search = document.getElementById('search');
const result = document.getElementById('result');

const searchContent = async searchText => {
  const res = await fetch('./content.json');
  const content = await res.json();

  let matches = content.filter(text => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return text.name.match(regex);
  });

  if(searchText.length === 0) {
    matches = [];
    result.innerHTML = "";
  }
  output(matches);
};

const output = matches => {
  if(matches.length > 0) {
    const html = matches.map(match => `
        <a href="${match.link}" class="result-link" style="display: flex;text-decoration: none;color: white;width: 100%;">
           <img src="${match.img}" style="max-width: 60px;">
           <h4>${match.name}</h4>
        </a>

    `).join('');

     result.innerHTML = html;
  }
}

search.addEventListener('input', () => searchContent(search.value));
