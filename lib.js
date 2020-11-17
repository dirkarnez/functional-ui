function createButton(className, text, onClick) {
    var btn = document.createElement("BUTTON");
    btn.innerText = text;
    if (onClick) {
        btn.addEventListener("click", function (e) {
            onClick(e, btn);
        });
    }

    btn.className = className;
    document.body.appendChild(btn);
    return {
        btn,
        updateText: function (newText) {
            btn.innerText = newText;
        }
    }
}

function createTable(className, data, options) {
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    const optionsThMapper = option => {
        let th = document.createElement("th");
        th.innerText = option.name;
        return th;
    };

    const thListReducer = (a, th) => {
        a.appendChild(th);
        return a;
    };

    let thList = options.map(optionsThMapper);

    thead.appendChild(
        thList.reduce(thListReducer, document.createElement("tr"))
    );

    table.appendChild(thead);

    const dataMapper = (tbody, datum) => {
        tbody.appendChild(
            options.reduce((tr, option) => {
                let td = document.createElement("td");
                td.innerText = option.getData(datum);
                tr.appendChild(td);
                return tr;
            }, document.createElement("tr"))
        );
        return tbody;
    };
    
    data.reduce(dataMapper, tbody);
    table.appendChild(tbody);

    table.className = className;
    document.body.appendChild(table);
    return {
        table,
        updateOption: function (options) {
            thead.innerHTML = "";
            thList = options.map(optionsMapper);
            thead.appendChild(
                thList.reduce(thListReducer, document.createElement("tr"))
            );
        },
        update: function(rowNum, newData) {
            table.deleteRow(rowNum);
            let row = table.insertRow(rowNum);
            options.forEach((option, index) => {
                var cell = row.insertCell(index);
                cell.innerHTML = option.getData(newData);
            });
        },
        append: function(datum) {
            tbody.appendChild(
                options.reduce((tr, option) => {
                    let td = document.createElement("td");
                    td.innerText = option.getData(datum);
                    tr.appendChild(td);
                    return tr;
                }, document.createElement("tr"))
            );
        },
        remove: function(rowNum) {
            table.deleteRow(rowNum);
        }
    }
}