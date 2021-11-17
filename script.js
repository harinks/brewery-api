var breweries= document.getElementById("container")
async function getData() {
    try {
        var data = await fetch("https://api.openbrewerydb.org/breweries")
        var res = await data.json();
        display(res);
    }
    catch (error) {
        console.error(error)
    }
} getData()

function display(res) {
    res.forEach(element => {
        var list = document.createElement("div");
        list.classList.add("card");

        list.innerHTML = `
        <div class= "cardHead">
        <h1>${element.name}</h1>
        </div>
            <div class="cardBody">
                <h2>Type: ${element.brewery_type}</h2>
                <h2>Address: </h2>
                <h3>Street: ${element.street}<h3>
                <h3>City: ${element.city}<h3>
                <h3>State: ${element.state}<h3>
                <h3>Postal Code: ${element.postal_code}<h3>
                <h3>Country: ${element.country}</h3>
                <h2>Website: ${element.website_url}</h2>
                <h2>Phone: ${element.phone}</h2>
            </div>`

        breweries.appendChild(list);

    });
}