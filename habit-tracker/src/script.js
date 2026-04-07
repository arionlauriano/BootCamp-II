// Lógica de Negócio (Exportada para testes)
const habitLogic = {
    calculateProgress: (habits) => {
        if (habits.length === 0) return 0;
        const completed = habits.filter(h => h.completed).length;
        return Math.round((completed / habits.length) * 100);
    }
};

// Manipulação do DOM
let habits = [];

function handleAddHabit() {
    const input = document.getElementById('habitInput');
    if (!input.value.trim()) return;

    const newHabit = {
        id: Date.now(),
        text: input.value,
        completed: false
    };

    habits.push(newHabit);
    input.value = '';
    render();
}

function toggleHabit(id) {
    habits = habits.map(h => h.id === id ? { ...h, completed: !h.completed } : h);
    render();
}

function render() {
    const list = document.getElementById('habitList');
    list.innerHTML = habits.map(h => `
        <li onclick="toggleHabit(${h.id})" class="${h.completed ? 'completed' : ''}">
            ${h.text} <span>${h.completed ? '✅' : '⏳'}</span>
        </li>
    `).join('');

    document.getElementById('progress').innerText = `${habitLogic.calculateProgress(habits)}%`;
}

// Para que o Jest consiga testar em Node.js
if (typeof module !== 'undefined') {
    module.exports = habitLogic;
}