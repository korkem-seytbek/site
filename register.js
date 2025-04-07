function showForm(formType) {
    // Скрываем все формы
    const forms = document.querySelectorAll('.form-container');
    forms.forEach(form => {
        form.classList.remove('active');
    });

    // Делаем активной нужную форму
    const activeForm = document.getElementById(`${formType}-form`);
    activeForm.classList.add('active');

    // Переключаем активные кнопки
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    const activeButton = document.querySelector(`button[onclick="showForm('${formType}')"]`);
    activeButton.classList.add('active');
}

// Начальная настройка: показываем форму для входа
showForm('login');