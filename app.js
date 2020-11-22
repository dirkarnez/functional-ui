(function(window) {
    function myComponent() {
        const btnCreateProxy = createButton("btn btn-primary", "Create");
        const btnReadProxy = createButton("btn btn-primary", "Read");
        const btnUpdateProxy = createButton("btn btn-primary", "Update");
        const btnDeleteProxy = createButton("btn btn-primary", "Delete");
    
        const p1Instance = createParagraph();
        const p2Instance = createParagraph();
    
        btnCreateProxy.button.addEventListener("click", function(e) {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => {
                [p1Instance, p2Instance].forEach(listener => {
                    listener.textContent(JSON.stringify(data));
                    btnCreateProxy.className("btn btn-secondary");
                })
            })
        });
    
        btnReadProxy.button.addEventListener("click", function(e) {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => {
                [p1Instance, p2Instance].forEach(listener => {
                    listener.textContent(JSON.stringify(data));
                })
            })
        });
    
        btnUpdateProxy.button.addEventListener("click", function(e) {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => {
                [p1Instance, p2Instance].forEach(listener => {
                    listener.textContent(JSON.stringify(data));
                })
            })
        });
    
        btnDeleteProxy.button.addEventListener("click", function(e) {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => {
                [p1Instance, p2Instance].forEach(listener => {
                    listener.textContent(JSON.stringify(data));
                })
            })
        });
    
        return [
            (() => {
                const Contact = createButton("btn btn-primary", "Create");
                Contact.button.addEventListener("click", function(e) {
                    window.router.goTo("/contact");
                })
                return Contact.button;
            })(),
            btnCreateProxy.button,
            btnReadProxy.button,
            btnUpdateProxy.button,
            btnDeleteProxy.button,
            p1Instance.p,
            p2Instance.p
        ];
    }
    
    const Home = function() {
        const divProxy = createDiv("container");
        const children = myComponent();
    
        for (var child of children) {
            divProxy.div.appendChild(child);
        }

        return divProxy.div;
    };

    const About = function() {
        const home = document.createElement('div');
        home.textContent = `About`;
        return home;
    };

    const Contact = function() {
        const home = document.createElement('div');
        home.textContent = `Contact`;
        return home;
    };

    const Project = function(params) {
        const home = document.createElement('div');
        home.textContent = `Project ${params.id}`;
        return home;
    };

    window.router.new(
        {
            '/': Home,
            '/about': About,
            '/contact': Contact,
            '/projects/:id': Project,
        },
        {
            onError: function() {
                const error = document.createElement('div');
                error.textContent = `Sorry - 404`;
                return error;
            }
        },
    );
})(window);



// Promise
// .allSettled([
//     new Promise((res, rej) => {
//         var div = document.createElement('div');
//         div.className = "loader";
//         document.body.appendChild(div);
//         window.server.read(function(err, data) {
//             debugger;
//             err ? rej(err) : res({div, data});
//         });
//     })
//     .then(ret => {
//         debugger;
//         ret.div.remove();
    
//         createTable(
//             "table",
//             ret.data,
//             [
//                 {
//                     getData: item => item.id,
//                     name: "Id"
//                 },
//                 {
//                     getData: item => item.name,
//                     name: "Name"
//                 }
//             ]
//         )
//     })
//     .catch(err => {
//         debugger;
//         // div.className = "";
//         // div.textContent = `Cannot fetch, err = ${err}`;
//     })
// ]).
// then((results) => results.forEach((result) => console.log(result.status)));

