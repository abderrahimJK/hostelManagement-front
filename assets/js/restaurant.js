function getRestaurant() {
    return fetch('http://localhost:8090/restaurant/all')
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error(error);
        });

}


// Call the getHotels function
const hotels = getRestaurant();
hotels.then(data => {
    console.log(data);
    data.forEach(restaurant => {
    const hotelItem = document.createElement('div');
    hotelItem.classList.add('col-lg-4', 'col-md-6', 'mb-4');
    hotelItem.innerHTML = `
        <div class="package-item bg-white mb-2">
            <div class="p-4">
                <div class="d-flex justify-content-between mb-3">
                    <small class="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>${restaurant.location}</small>
                </div>
                <a class="h5 text-decoration-none" href="">${restaurant.name}</a>
                <p class="h6 text-decoration-none" >${restaurant.cuisine}</p>

                <div class="border-top mt-4 pt-4">
                    <div class="d-flex justify-content-between">
                        <h6 class="m-0"><i class="fa fa-star text-primary mr-2"></i>${restaurant.rating}</h6>
                        <h5 class="m-0">${restaurant.price} MAD</h5>
                        
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button onclick="window.location.href = 'book-restau.html?id=${restaurant.id}';" class="btn btn-primary btn">Book Now</button>
                    </div>

                </div>
            </div>
        </div>
    `;
    document.querySelector('.hotel-data').appendChild(hotelItem);
    });
})

