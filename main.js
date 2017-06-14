// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function fetchPerson(results) {

  'use strict';

  // Your Code Goes Here
  fetch('https://randomuser.me/api/?results=12')
    .then(function(response){
    return response.json()
    })
    .then(function(json){
    console.log(json)

      for (var i = 0; i < json.results.length; i++) {
        const pic = json.results[i].picture
        const name = json.results[i].name
        const email = json.results[i].email
        const location = json.results[i].location
        const phone = json.results[i].phone
        const html = `
            <div class="person">
              <div class="pic">
                <img src="${pic.large}">
              </div>
              <div class="name">
                ${name.title} ${name.first} ${name.last}
              </div>
              <div class="email">
                ${email}
              </div>
              <div class="address">
                ${location.street}
                <br>
                ${location.city}, ${location.state} ${location.postcode}
              </div>
              <div class="phone">
                ${phone}
              </div>
            </div>`

        document.querySelector(".customers").insertAdjacentHTML('afterbegin', html)
      }
    })
})();
