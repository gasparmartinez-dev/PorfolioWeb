const skills = {
    IA: [
        { nombre: "Pyhton", nivel: "Avanzado" },
        { nombre: "Pandas", nivel: "Avanzado" },
        { nombre: "Scikit-Learn", nivel: "Intermedio" },
        { nombre: "TensorFlow", nivel: "Intermedio" },
        { nombre: "PyTorch", nivel: "Intermedio" },
    ],
    web: [
        { nombre: "HTML", nivel: "Experto" },
        { nombre: "CSS", nivel: "Experto" },
        { nombre: "JavaScript", nivel: "Avanzado" },
        { nombre: "Pyhton", nivel: "Avanzado" },
        { nombre: "SQL", nivel: "Intermedio" },
        { nombre: "Figma", nivel: "Intermedio" },
    ],
    devops: [
        { nombre: "Git", nivel: "Experto" },
        { nombre: "GitHub", nivel: "Experto" },
        { nombre: "Linux", nivel: "Avanzado" },
        { nombre: "Docker", nivel: "Avanzado" },
        { nombre: "Vercel", nivel: "Intermedio" },
    ]
}

const grid = document.getElementById("skills-grid");

function renderSkills(category) {
  const items = skills[category];

  grid.innerHTML = items
    .map(
      skill => `
        <div class="skill_card">
          <h5>${skill.nombre}</h5>
          <span>${skill.nivel}</span>
        </div>
      `
    )
    .join("");
}

const opciones = document.querySelectorAll('.skills_opcion');

opciones.forEach(opcion => {opcion.addEventListener('click', () =>{
        opciones.forEach(opc => opc.classList.remove('active'));
        opcion.classList.add('active');

        const category = opcion.getAttribute('categoria');
        renderSkills(category);
    });
})

renderSkills('IA');