window.onload = function () {
    Products = [
        { ProductId: "1", ProductName: "bhaji pav", CategoryName: "food", Price: "200", Manufacturer: "rajge & co" },
        { ProductId: "2", ProductName: "mixer 021", CategoryName: "kitchen appliance", Price: "2000", Manufacturer: "bajaj" },
        { ProductId: "3", ProductName: "waffle", CategoryName: "food", Price: "1500", Manufacturer: "rajge & co" },
        { ProductId: "4", ProductName: "ear buds", CategoryName: "accessories", Price: "2000", Manufacturer: "onePlus" },
        { ProductId: "5", ProductName: "Oven", CategoryName: "kitchen appliance", Price: "2200", Manufacturer: "philips" },
        { ProductId: "6", ProductName: "Toaster", CategoryName: "kitchen appliance", Price: "1250", Manufacturer: "philips" },
        { ProductId: "7", ProductName: "adapter", CategoryName: "accessories", Price: "400", Manufacturer: "onePlus" },
        { ProductId: "8", ProductName: "memory card", CategoryName: "accessories", Price: "700", Manufacturer: "samsung" },
    ];

    var tbody = document.getElementById("tbdy");
    for (var index = 0; index < Products.length; index++) {
        tbody.innerHTML += "<tr class='table-light'><td>" + Products[index].ProductId + "</td><td>" + Products[index].ProductName + "</td><td>" + Products[index].CategoryName + "</td><td>" + Products[index].Price + "</td><td>" + Products[index].Manufacturer + "</td></tr>";
    }

    // for (let value of Object.values(arr)) {
    //     alert(value);
    // }
    var manId = document.getElementById("manId");
    manId.addEventListener('click', function () {
        Objectt = crateProductGroup(Products, 'Manufacturer');
        Products = [];
        for (let value of Object.values(Objectt)) {
            // alert(value);
            for (let product of value) {
                Products.push(product);
            }
        }
        // console.log(Products);
        var tbody = document.getElementById("tbdy");
        tbody.innerHTML = "";
        for (var index = 0; index < Products.length; index++) {
            tbody.innerHTML += "<tr class='table-light'><td>" + Products[index].ProductId + "</td><td>" + Products[index].ProductName + "</td><td>" + Products[index].CategoryName + "</td><td>" + Products[index].Price + "</td><td>" + Products[index].Manufacturer + "</td></tr>";
        }

    }, false);

    var catId = document.getElementById("catId");
    catId.addEventListener('click', function () {
        Objectt = crateProductGroup(Products, 'CategoryName');
        Products = [];
        for (let value of Object.values(Objectt)) {
            // alert(value);
            for (let product of value) {
                Products.push(product);
            }
        }
        // console.log(Products);
        var tbody = document.getElementById("tbdy");
        tbody.innerHTML = "";
        for (var index = 0; index < Products.length; index++) {
            tbody.innerHTML += "<tr class='table-light'><td>" + Products[index].ProductId + "</td><td>" + Products[index].ProductName + "</td><td>" + Products[index].CategoryName + "</td><td>" + Products[index].Price + "</td><td>" + Products[index].Manufacturer + "</td></tr>";
        }

    }, false);

    var searchBar = document.getElementById("searchBar");
    searchBar.addEventListener('change', function () {
        var searchText = searchBar.value;
        tbody.innerHTML = " ";
        if (searchText == "") {
            for (var index = 0; index < Products.length; index++) {
                tbody.innerHTML += "<tr class='table-light'><td>" + Products[index].ProductId + "</td><td>" + Products[index].ProductName + "</td><td>" + Products[index].CategoryName + "</td><td>" + Products[index].Price + "</td><td>" + Products[index].Manufacturer + "</td></tr>";
            }
            console.log(tbody)
        } else {
            let obj1;
            let obj2;
            let obj = Products.find(o => o.CategoryName === searchText);
            tbody.innerHTML = "<tr class='table-light'><td>" + obj.ProductId + "</td><td>" + obj.ProductName + "</td><td>" + obj.CategoryName + "</td><td>" + obj.Price + "</td><td>" + obj.Manufacturer + "</td></tr>";
            console.log(tbody)
            // if(obj == null){
            //     obj1 = Products.find(o => o.CategoryName === searchText)
            //     tbody.innerHTML = "<tr class='table-light'><td>" + obj.ProductId + "</td><td>" + obj.ProductName + "</td><td>" + obj.CategoryName + "</td><td>" + obj.Price + "</td><td>" + obj.Manufacturer + "</td></tr>";
            //     console.log("1st if ")
            // }else if(obj1 == null){
            //     obj2 = Products.find(o => o.Manufacturer === searchText);
            //     console.log("2nd if ")
            // }
        }
    }, false);
}



function crateProductGroup(records, property) {
    // groupResult: Initial State {}
    // record: The current record to be read
    Products = [];
    let result = records.reduce((groupResult, record) => {
        console.log(`Current State ${JSON.stringify(groupResult)} and current record ${JSON.stringify(record)}`);
        // read the key on which the group will be created on the current record
        let key = record[property]; // currentRecord[dname] this will be value of the property for the record
        // key will be D1, D2, D3
        console.log(`Key of the record = ${key}`);

        // match each record with the previous record key in the groupResult state
        // because groupResult has the resultant records
        if (!groupResult[key]) {
            groupResult[key] = []; // if the match does not found based on key makes the resultant as empty
        }
        // if found then add the matched record in the resultant state
        groupResult[key].push(record);
        console.log(`After match found for push state is = ${JSON.stringify(groupResult)}`);
        // return the final group state
        console.log("+++++++++++++++++++++++++++++++++++");
        return groupResult;

    }, {});

    return result;
};
