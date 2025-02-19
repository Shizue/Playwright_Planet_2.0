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
    rampUsers,
    atOnceUsers,
    jsonPath,
    jmesPath,
    StringBody
} from "@gatling.io/core";
import { http, status } from "@gatling.io/http";

export default simulation((setUp) => {
    // Define the HTTP protocol
    const httpProtocol = http.baseUrl("https://api.example.com/banking")
        .acceptHeader("application/json")
        .connectionHeader("keep-alive")
        .contentTypeHeader("application/json");
    // Feed the data
    const feeder = csv("transactions.csv").random();

    // Define the scenario
    const myScenario = scenario("POST Transaction")
        .exec(http("Get transaction by ID")
            .get("/transactions/#{transactionsId}")
            .check(status().is(200))
            .check(jsonPath("$.transaction_id").is("#{transactionsId}"))
            .check(jsonPath("$.from_account").is("${from_account}"))
            .check(jsonPath("$.to_account").is("${to_account}"))
            .check(jsonPath("$.amount").is("${amount}"))
            .check(jsonPath("$.currency").is("${currency}")),
            pause(5),
            http("Get transaction by ID")
                .get("T /accounts/#{account_id}/balance")
                .check(status().is(200))
                .check(jsonPath("$.account_id").is("#{account_id}"))
                .check(jsonPath("$.balance").is("${balance}"))
                .check(jsonPath("$.currency").is("${currency}")),
            pause(2),
            feed(feeder),
            http("Create transaction: #{from_account}, #{to_account}, #{amount}, #{currency}")
            .post("/transactions")
            .body(
                StringBody('{"from_account": "${from_account}", "to_account": "${to_account}", "amount": "${amount}", "currency": "${currency}"}')
            ).asJson()
                .check(jmesPath("transaction_id").is("#{transaction_id}"))
                .check(jmesPath('new_balance').is("#{new_balance}"))
                .check(jmesPath('success').is("#{success}"))
        );

    // Define the simulation
    setUp(
        myScenario.injectOpen(
            atOnceUsers(5),
            rampUsers(10).during(10)
        ).protocols(httpProtocol))
});