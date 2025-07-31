const technologies = [
  {
    name: "Artificial Intelligence",
    description: "AI mimics human intelligence to perform tasks like decision-making, speech recognition, and language translation.",
    image: "https://source.unsplash.com/featured/?artificial-intelligence"
  },
  {
    name: "Robotics",
    description: "Robotics integrates engineering and computer science to design and operate intelligent machines.",
    image: "https://source.unsplash.com/featured/?robotics"
  },
  {
    name: "Data Science",
    description: "Data Science uses algorithms and statistical models to extract knowledge from data.",
    image: "https://source.unsplash.com/featured/?data-science"
  },
  {
    name: "Blockchain",
    description: "Blockchain is a decentralized digital ledger that records transactions across many computers.",
    image: "https://source.unsplash.com/featured/?blockchain"
  },
  {
    name: "Cybersecurity",
    description: "Cybersecurity involves protecting systems, networks, and programs from digital attacks.",
    image: "https://source.unsplash.com/featured/?cybersecurity"
  }
];

const container = document.getElementById('technology-container');

technologies.forEach(tech => {
  const card = document.createElement('div');
  card.className = 'tech-card';

  card.innerHTML = `
    <img src="${tech.image}" alt="${tech.name}">
    <h2>${tech.name}</h2>
    <p>${tech.description}</p>
  `;

  
  card.addEventListener('click', () => {
    alert(`You clicked on ${tech.name}!`);
  });

  container.appendChild(card);
});
