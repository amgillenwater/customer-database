
function loadAll () {
  const targetElement = document.querySelector('.container')

  for (const individual of customers) {
    // console.log(individual);
    const cardElement = document.createElement('div')
    cardElement.className = 'card'
    targetElement.appendChild(cardElement)
    // photo:
    const photoElement = document.createElement('div')
    photoElement.className = 'photo'
    photoElement.innerHTML = `<img src="${individual.picture.large}">`
    cardElement.appendChild(photoElement)
    // info div:
    const infoElement = document.createElement('div')
    infoElement.className = 'info'
    cardElement.appendChild(infoElement)
    // name:
    const nameElement = document.createElement('div')
    nameElement.className = 'name'
    nameElement.innerHTML = `<h2>${individual.name.first} ${individual.name.last}</h2>`
    cardElement.appendChild(nameElement)
    // address line 1
    const addressElement = document.createElement('div')
    addressElement.className = 'address-street'
    addressElement.innerHTML = `${individual.location.street}`
    cardElement.appendChild(addressElement)
    // address line 2:
    const addressTwoElement = document.createElement('div')
    addressTwoElement.className = 'city-state-zip'
    addressTwoElement.innerHTML = `${individual.location.city}, ${individual.location.state} ${individual.location.postcode}`
    cardElement.appendChild(addressTwoElement)
    // phone number:
    const phoneElement = document.createElement('div')
    phoneElement.className = 'phone'
    phoneElement.innerHTML = `${individual.phone}`
    cardElement.appendChild(phoneElement)
    // registration date:
    const regDate = document.createElement('div')
    regDate.className = 'reg-date'
    regDate.innerHTML = `Customer since: ${moment(individual.registered).format('MMM D, YYYY')}`
    cardElement.appendChild(regDate)
  }
}

loadAll()
