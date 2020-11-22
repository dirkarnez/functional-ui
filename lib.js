function createButton(className, textContent) {
    var button = document.createElement("button");
    button.textContent = textContent;
    button.className = className;
    return {
        button,
        textContent: function (newText) {
            button.innerText = newText;
        },
        className: function(className) {
            button.className = className;
        }
    }
}

function createParagraph(className, textContent) {
    var p = document.createElement("p");
    p.textContent = textContent;
    p.className = className;
    return {
        p,
        textContent: function (newText) {
            p.innerText = newText;
        },
        className: function(className) {
            p.className = className;
        }
    }
}

function createDiv(className) {
    var div = document.createElement("div");
    div.className = className;
    return {
        div
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