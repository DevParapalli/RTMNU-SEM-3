const http = require("http");
const fs = require("fs");
const URL = require("url").URL;
const hostname = "127.0.0.1";
const port = 3000;
const home = fs.readFileSync("./index.html");
const about = fs.readFileSync("./about.html");
const services = fs.readFileSync("./services.html");
const contact = fs.readFileSync("./contact.html");

const server = http.createServer((req, res) => {
  console.log(req.url);
  const url = new URL(request.url, `http://${request.getHeaders().host}`);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  if (url.pathname == "/") {
    res.end(home);
  } else if (url.pathname == "/about") {
    res.end(about);
  } else if (url.pathname == "/services") {
    res.end(services);
  } else if (url.pathname == "/contact") {
    res.end(contact);
  } else {
    res.statusCode = 200;
    res.end("<h1>404 not found</h1>");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});