function createButton(text, onClick) {
    var btn = document.createElement("BUTTON");
    btn.innerText = text;
    if (onClick) {
        btn.addEventListener("click", function (e) {
            onClick(e, btn);
        });
    }

    document.body.appendChild(btn);
    return {
        btn: btn,
        updateText: function (newText) {
            btn.innerText = newText;
        }
    }
}

function createTable(data, options) {
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    thead.appendChild(
        options
            .reduce((a, c) => {
                let th = document.createElement("th");
                th.innerText = c.name;
                a.appendChild(th);
                return a;
            }, document.createElement("tr"))
    );
        
    // thead.appendChild(
    //     options
    //         .reduce((a, c) => {
    //             let th = document.createElement("th");
    //             th.innerText = c.name;
    //             a.appendChild(th);
    //             return a;
    //         }, document.createElement("tr"))
    //);
    table.appendChild(thead);
    data.reduce((a, datum) => {
        a.appendChild(options.reduce((a, c) => {
            let td = document.createElement("td");
            td.innerText = c.getData(datum);
            a.appendChild(td);
            return a;
        }, document.createElement("tr")));
        return a;
    }, tbody);
    table.appendChild(tbody);
    document.body.appendChild(table);
    return {
        table,
        updateData: function (data) {
            // TODO
        },
        updateHeader: function () {
            // WIP
            thead.innerHTML = "";
        }
    }
}