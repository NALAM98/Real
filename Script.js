function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const date = now.toLocaleDateString();
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} | ${date}`;
}

setInterval(updateClock, 1000);

document.getElementById('calculateBtn').addEventListener('click', calcularDias);

function calcularDias() {
    const selectedDate = document.getElementById('selectedDate').value;

    if (selectedDate) {
        const today = new Date();
        const targetDate = new Date(selectedDate);
        const timeDifference = targetDate - today;
        const pastTime = today - targetDate;

        if (timeDifference > 0) {
            const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const yearsRemaining = Math.floor(daysRemaining / 365);
            const remainingDays = daysRemaining % 365;

            document.getElementById('daysRemaining').textContent = `Faltan ${daysRemaining} días.`;
            document.getElementById('yearsRemaining').textContent = `Eso es aproximadamente ${yearsRemaining} años y ${remainingDays} días.`;
            document.getElementById('daysPassed').textContent = '';
            document.getElementById('yearsPassed').textContent = '';
        } else if (pastTime > 0) {
            const daysPassed = Math.floor(pastTime / (1000 * 60 * 60 * 24));
            const yearsPassed = Math.floor(daysPassed / 365);
            const passedDays = daysPassed % 365;

            document.getElementById('daysPassed').textContent = `Han pasado ${daysPassed} días.`;
            document.getElementById('yearsPassed').textContent = `Eso es aproximadamente ${yearsPassed} años y ${passedDays} días.`;
            document.getElementById('daysRemaining').textContent = '';
            document.getElementById('yearsRemaining').textContent = '';
        }

        // Mostrar los créditos después de 30 segundos
        setTimeout(function() {
            document.getElementById('credits').style.display = 'block';
        }, 30000);
    }
}