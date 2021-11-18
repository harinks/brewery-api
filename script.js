document.body.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
document.body.style.backgroundColor = "#ebe7e2";
document.body.style.margin = "auto";


var header = document.createElement("NAV");
header.innerHTML = `<h1>Breweries List</h1>`
header.style.cssText = "height:100px; margin:auto; display:flex; justify-content:center; align-items:center; background-color:#fbf2ea; color:orange; font-weight:bolder; font-size:50px; font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;"


var content = document.createElement("div");
content.classList.add("container")
content.style.cssText = "display:flex; flex-wrap:wrap; align-content:center; justify-content:space-evenly; margin:auto; max-width:100%; padding:20px;"


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
        var list = document.createElement("div")
        list.classList.add("card")
        list.style.cssText = "width:600px; margin:10px; background-color:rgb(255, 232, 167); box-shadow: 0 3px 10px rgb(0 0 0 / 0.2); border-radius:10px; overflow:hidden;"

        list.innerHTML = `
            <div class="cardHead" style="display: flex;
            align-content: stretch;
            padding: 10px 30px 10px 30px;
            box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
            background-color: #fbf2ea">
            <h1 style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            font-stretch:extra-expanded;">${element.name}</h1>
            </div>

            <div class="cardBody" style="padding: 0px 30px 10px 30px;">
                <h2>Type: ${element.brewery_type}</h2>
                <h2>Address: </h2>
                <h3 style="font-style: italic;">Street: ${element.street}<h3>
                <h3 style="font-style: italic;">City: ${element.city}<h3>
                <h3 style="font-style: italic;">State: ${element.state}<h3>
                <h3 style="font-style: italic;">Postal Code: ${element.postal_code}<h3>
                <h3 style="font-style: italic;">Country: ${element.country}</h3>
                <h2>Website: ${element.website_url}</h2>
                <h2>Phone: ${element.phone}</h2>
            </div>`

        content.appendChild(list);
        document.body.appendChild(content);
    });
}

document.body.appendChild(header);