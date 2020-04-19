import { Drash } from "https://deno.land/x/drash/mod.ts";

class HomeResource extends Drash.Http.Resource {
  static paths = ["/"];
  public GET() {
    this.response.body = "Hello World!";
    return this.response;
  }
}

const server = new Drash.Http.Server({
  response_output: "text/html",
  resources: [HomeResource]
});

server.run({
  hostname: "localhost",
  port: 1447
});

// Or you can run an HTTPS server
// server.runTLS({
//   hostname: "localhost",
//   port: 1447,
//   certFile: "/path/to/certFile.crt",
//   keyFile: "/path/to/keyFile.key",
// });
