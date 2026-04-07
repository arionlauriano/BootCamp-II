const habitLogic = require('../src/script');

test('Deve calcular o progresso como 50% quando metade dos hábitos estiver concluída', () => {
    const mockHabits = [
        { text: 'Habito 1', completed: true },
        { text: 'Habito 2', completed: false }
    ];
    expect(habitLogic.calculateProgress(mockHabits)).toBe(50);
});

test('Deve retornar 0 de progresso para lista vazia', () => {
    expect(habitLogic.calculateProgress([])).toBe(0);
});