import {
  simulation,
  scenario,
  exec,
  csv,
  pause,
  css,
  feed,
  repeat,
  tryMax,
  rampUsers
} from "@gatling.io/core";

import { http, status } from "@gatling.io/http";
import { execSync } from 'child_process';

//const output = execSync('cd C:/Users/Shizue/Documents/workspace/Playwright_Planet_2.0/data/banking.html python -m http.server 8000').toString();

export default simulation((setUp) => {
  const feeder = csv("transactions.csv").random();

  const search = exec(
    http("Home").get("/"),
    pause(1)
  );

  const edit =  tryMax(2)
  .on(
    feed(feeder),
    http("Form").get("/"),
    pause(1),
    http("Post")
          .post("/")
          .formParam("fromAccount", "#{from_account}")
          .formParam("toAccount", "#{to_account}")
          .formParam("amount", "#{amount}")
          .formParam("currency", "#{currency}")
          .check(
            status().is(
              (session) => 200 + Math.floor(Math.random() * 2) // +0 or +1 at random
            )
          )
      )
      .exitHereIfFailed();

  const httpProtocol = http
    .baseUrl("http://localhost:8000/banking.html")
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/119.0"
  );
  
  const browse =
  repeat(4, "i").on(http("Page #{i}").get("/"), pause(1));


  const users = scenario("Users").exec(browse, edit);

  setUp(
    users.injectOpen(rampUsers(10).during(10)),
  ).protocols(httpProtocol);
});
