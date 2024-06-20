document.addEventListener('DOMContentLoaded', function() {
    fetchTrips();
});

    const main = document.querySelector('main');

    trips.forEach(trip => {
        const tripElement = document.createElement('div');
        tripElement.classList.add('trip');

        tripElement.innerHTML = `
            <img src="${trip.image}" alt="${trip.location}">
            <h2>${trip.location}</h2>
            <p>Date: ${trip.date}</p>
            <p>${trip.description}</p>
        `;

        main.appendChild(tripElement);
    });

