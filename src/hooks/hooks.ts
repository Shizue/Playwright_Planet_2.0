import { BeforeAll, AfterAll } from "@cucumber/cucumber";

const { pageFixture } = require("./pageFixture");

BeforeAll(async () => {
    await pageFixture.setup();
})

AfterAll(async () => {
    await pageFixture.teardown();
})