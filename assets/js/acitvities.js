function getActivities() {
    return fetch('http://localhost:8090/activity/all')
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error(error);
        });

}


// Call the getactivity function
const activity = getActivities();
activity.then(data => {
    data.forEach(activite=> {
        const activityItem = document.createElement('div');
        activityItem.classList.add("col-lg-4", "col-md-6" ,"mb-4");
        activityItem.innerHTML = `
            <div class="destination-item position-relative overflow-hidden mb-2"  onclick="window.location.href = 'book-activity.html?id=${activite.id}';" >
                <img class="img-fluid" src="data:image/png;base64,${activite.image}" alt="" style="height: 400px;">
                <a class="destination-overlay text-white text-decoration-none" href='book-activity.html?id=${activite.id}'>
                    <h5 class="text-white">${activite.location}</h5>
                    <span>${activite.description}</span>
                </a>
            </div>
        `;
        document.querySelector('.activity-data').appendChild(activityItem);
    });
})

