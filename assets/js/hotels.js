function getHotels() {
    return fetch('http://localhost:8090/hotel/all')
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error(error);
        });

}


// Call the getHotels function
const hotels = getHotels();
hotels.then(data => {

    const urlParams = new URLSearchParams(window.location.search);
    const destination = urlParams.get('destination');
   
    if(destination){
        console.log(destination);
        data = data.filter(hotel => hotel.location.toLowerCase() == destination.toLowerCase());
    }
    data.forEach(hotel => {
    const hotelItem = document.createElement('div');
    hotelItem.classList.add('col-lg-4', 'col-md-6', 'mb-4');
    
    hotelItem.innerHTML = `
        <div class="package-item bg-white mb-2">
            <img class="img-fluid" src="data:image/png;base64,${hotel.image}" alt="">
            <div class="p-4">
                <div class="d-flex justify-content-between mb-3">
                    <small class="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>${hotel.location}</small>
                </div>
                <a class="h5 text-decoration-none" href="">${hotel.name}</a>
                <div class="border-top mt-4 pt-4">
                    <div class="d-flex justify-content-between">
                        <h6 class="m-0"><i class="fa fa-star text-primary mr-2"></i>${hotel.rating}</h6>
                        <h5 class="m-0">${hotel.price} MAD</h5>
                        
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button onclick="window.location.href = 'book-hotel.html?id=${hotel.id}';" class="btn btn-primary btn">Book Now</button>
                    </div>

                </div>
            </div>
        </div>
    `;
    document.querySelector('.hotel-data').appendChild(hotelItem);
    });
})

