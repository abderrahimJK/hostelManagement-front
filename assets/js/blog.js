function renderTouristicPlans(plans) {
	const container = document.querySelector('#touristicPlansContainer');
  
	plans.forEach(plan => {
	  const planDiv = document.createElement('div');
	  planDiv.classList.add('col-lg-4', 'col-md-6', 'mb-4');
  
	  const packageItem = document.createElement('div');
	  packageItem.classList.add('package-item', 'bg-white', 'mb-2');
  
	  const img = document.createElement('img');
	  img.classList.add('img-fluid');
	  img.src = plan.imageUrl;
	  img.alt = plan.title;
  
	  const contentDiv = document.createElement('div');
	  contentDiv.classList.add('p-4');
  
	  const detailsDiv = document.createElement('div');
	  detailsDiv.classList.add('d-flex', 'justify-content-between', 'mb-3');
  
	  const locationSpan = document.createElement('span');
	  locationSpan.classList.add('m-0');
	  locationSpan.innerHTML = `<i class="fa fa-map-marker-alt text-primary mr-2"></i>${plan.location}`;
  
	  const durationSpan = document.createElement('span');
	  durationSpan.classList.add('m-0');
	  durationSpan.innerHTML = `<i class="fa fa-calendar-alt text-primary mr-2"></i>${plan.duration}`;
  
	  const peopleSpan = document.createElement('span');
	  peopleSpan.classList.add('m-0');
	  peopleSpan.innerHTML = `<i class="fa fa-user text-primary mr-2"></i>${plan.maxPeople} Personnes`;
  
	  detailsDiv.appendChild(locationSpan);
	  detailsDiv.appendChild(durationSpan);
	  detailsDiv.appendChild(peopleSpan);
  
	  const titleLink = document.createElement('a');
	  titleLink.classList.add('h5', 'text-decoration-none');
	  titleLink.href = plan.url;
	  titleLink.textContent = plan.title;
  
	  const ratingDiv = document.createElement('div');
	  ratingDiv.classList.add('border-top', 'mt-4', 'pt-4');
  
	  const ratingInfoDiv = document.createElement('div');
	  ratingInfoDiv.classList.add('d-flex', 'justify-content-between');
  
	  const ratingSpan = document.createElement('h6');
	  ratingSpan.classList.add('m-0');
	  ratingSpan.innerHTML = `<i class="fa fa-star text-primary mr-2"></i>${plan.rating} <small>(${plan.reviewCount})</small>`;
  
	  const priceSpan = document.createElement('h5');
	  priceSpan.classList.add('m-0');
	  priceSpan.textContent = `${plan.price} MAD`;
  
	  ratingInfoDiv.appendChild(ratingSpan);
	  ratingInfoDiv.appendChild(priceSpan);
	  ratingDiv.appendChild(ratingInfoDiv);
  
	  contentDiv.appendChild(detailsDiv);
	  contentDiv.appendChild(titleLink);
	  contentDiv.appendChild(ratingDiv);
  
	  packageItem.appendChild(img);
	  packageItem.appendChild(contentDiv);
  
	  planDiv.appendChild(packageItem);
  
	  container.appendChild(planDiv);
	});
  }

  const plans = [
	{
	  imageUrl: '/assets/img/cookingClass.jpeg',
	  title: 'Cours De Cuisine Au  Maroc avec hébergement inclus',
	  location: 'Marrakech',
	  duration: '3 jour',
	  maxPeople: 5,
	  url: '#',
	  rating: 4.5,
	  reviewCount: 250,
	  price: 9999
	},
    {
        imageUrl: '/assets/img/cookingClass.jpeg',
        title: 'Cours De Cuisine Au  Maroc avec hébergement inclus',
        location: 'Marrakech',
        duration: '3 jour',
        maxPeople: 5,
        url: '#',
        rating: 4.5,
        reviewCount: 250,
        price: 9999
      },
      {
        imageUrl: '/assets/img/cookingClass.jpeg',
        title: 'Cours De Cuisine Au  Maroc avec hébergement inclus',
        location: 'Marrakech',
        duration: '3 jour',
        maxPeople: 5,
        url: '#',
        rating: 4.5,
        reviewCount: 250,
        price: 9999
      },
  ];
  
  renderTouristicPlans(plans);