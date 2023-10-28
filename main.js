const container = document.querySelector(".container")


function customerDirectory(clients){
    for (let customers of clients){
        

        //Create Customer Card Div //
        let customerCard = document.createElement("div");
        customerCard.classList.add("customers");
        container.appendChild(customerCard);

        //Create customer image //
        let customerImage = document.createElement("img");
        customerImage.classList.add("image");
        customerImage.src = `${customers.picture.large}`;
        customerCard.appendChild(customerImage);
        
        //Customer Name//
        let customerName = document.createElement("h2");
        customerName.classList.add("name");
        customerName.innerText = `${customers.name.first.charAt(0).toUpperCase() + customers.name.first.slice(1)} ${customers.name.last.charAt(0).toUpperCase() + customers.name.last.slice(1)}`
        customerCard.appendChild(customerName);
        
        //Customer Email//
        let customerEmail = document.createElement("div");
        customerEmail.classList.add("email");
        customerEmail.innerText = `${customers.email}`;
        customerCard.appendChild(customerEmail);

        //Address//
        let addyDiv = document.createElement("div");
        addyDiv.classList.add("street");
        addyDiv.innerText = `${customers.location.street.number} ${customers.location.street.name}`;
        customerCard.appendChild(addyDiv);

        let stateName = document.createElement("div");
        stateName.classList.add("state");
        stateName.innerText = `${customers.location.city}, ${nameToAbbr(customers.location.state)} ${customers.location.postcode}`;
        customerCard.appendChild(stateName);

        //DOB & Customer Since//
        let birthDate = document.createElement("div");
        birthDate.classList.add("dob");
        birthDate.innerText = `DOB: ${moment(customers.dob.date).format("MMM D, YYYY")}`;
        customerCard.appendChild(birthDate);

        let customerSince = document.createElement("div");
        customerSince.classList.add("since");
        customerSince.innerText = `Customer since: ${moment(customers.registered.date).format("MMM D, YYYY")}`;
        customerCard.appendChild(customerSince);

    }
        
}

customerDirectory(customers);