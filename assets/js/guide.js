function getguide() {
    return fetch('http://localhost:8090/guide/all')
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error(error);
        });

}


// Call the getguide function
const guide = getguide();
guide.then(data => {
    const urlParams = new URLSearchParams(window.location.search);
    const destination = urlParams.get('destination');
   
    if(destination){
        console.log(destination);
        data = data.filter(hotel => hotel.location.toLowerCase() == destination.toLowerCase());
    }
    data.forEach(guide => {
    const hotelItem = document.createElement('div');
    hotelItem.classList.add('col-lg-4', 'col-md-6', 'mb-4');
    hotelItem.innerHTML = `
        <div class="package-item bg-white mb-2">
            <div class="p-4">
                <div class="d-flex justify-content-between mb-3">
                    <small class="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>${guide.address}</small>
                </div>
                <a class="h5 text-decoration-none" href="">${guide.name}</a>

                <div class="border-top mt-4 pt-4">
                    <div class="d-flex">

                        <i class="fa fa-phone text-primary mr-2"></i>
                        <h5 class="m-0">${guide.phone}</h5>
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button onclick="book(${guide.id})" class="btn btn-primary btn">Book Now</button>
                    </div>

                </div>
            </div>
        </div>
    `;
    document.querySelector('.hotel-data').appendChild(hotelItem);
    });
})

function book(guide_id) {
         const price=150
         user_id=JSON.parse(localStorage.getItem('user')).id;
         // Create an object with the form data
         const formData = {
             totalPrice:  price,
             guides:[
                 {
                     id: guide_id
                 }
             ]
                
         };
         
         // Make a POST request to the backend API endpoint
         try {
             const response = fetch('http://localhost:8090/booking/save', {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json'
                 },
                 body:JSON.stringify(formData)
             
             }).then(response => response.json())
                    .then(data => {
                        Swal.fire(
                            'Success!',
                            'Booking successful',
                            'success')
                        .then(() => {
                            window.location.href = './index.html';
                        });
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
         } catch (error) {
             Swal.fire(
                         'Error!',
                         'Booking failed',
                         'error')
                     .then(() => {
                         window.location.href = './index.html';
                     });
         }
     }




