function updateTime() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const locationElement = document.getElementById('location');

    const now = new Date();

    const timeString = now.toLocaleTimeString();
    const dateString = now.toDateString();
    const locationString = window.location.href;

    timeElement.textContent = `Hora: ${timeString}`;
    dateElement.textContent = `Fecha: ${dateString}`;
    locationElement.textContent = `Ubicación: ${locationString}`;
}

setInterval(updateTime, 1000); // Actualizar cada segundo
updateTime(); // Actualizar de inmediato al cargar la página

