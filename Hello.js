
export default function Hello(app) {
    // console.log("Hello World!");
    
    app.get('/hello', (req, res) => {res.send("Life is Good!")})
    app.get('/', (req, res) => {res.send("Welcome to Full Stack Development!")})
}
