import { Given, Then } from "@cucumber/cucumber";
import { expect } from '@playwright/test';

const { pageFixture } = require("../../hooks/pageFixture");

Given("API Rest for Banking is available", async function () {
    pageFixture.page = await pageFixture.browser.newPage(); // Get the page instance for interaction with the browser

    // Mock the API response using page.route() to intercept the request and return a mocked response
    await pageFixture.page.route("https://api.example.com/banking", async (route) => {
        await route.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify({ status: "ok", message: "Mocked API response" }),
        });
    });

    // Now make the request, which will be intercepted and mocked
    const response = await pageFixture.page.goto("https://api.example.com/banking"); // Use page.goto() or page.request()
    const responseBody = await response.json();

    // Validate the mocked response
    expect(responseBody.status).toBe("ok");
    expect(responseBody.message).toBe("Mocked API response");
});

Then("I send a POST request to transactions with valid data", async function () {
    // Intercept the POST request to the specified URL
    await pageFixture.page.route('https://api.example.com/banking/transactions', async (route, request) => {
        // Get the raw POST data
        const postData = request.postData(); // Returns the raw body data
        // If the post data is JSON, you can parse it manually
        const parsedData = JSON.parse(postData);
        // Mock the response
        route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
                success: true,
                transaction_id: 'TXN12345',
                new_balance: 500,
            }),
        });
    });

    // Send the POST request, which will be intercepted
    const response = await pageFixture.page.goto('https://api.example.com/banking/transactions', {
        data: {
            from_account: 'flavia',
            to_account: 'test',
            amount: 3,
            currency: 'EUR',
        },
    });

    // You can verify the mocked response
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.success).toBe(true);
    expect(responseBody.transaction_id).toBe('TXN12345');
    expect(responseBody.new_balance).toBe(500);
});

Then("I send a POST request to transactions with invalid data", async function () {
    // Intercept the POST request to the specified URL
    await pageFixture.page.route('https://api.example.com/banking/transactions', async (route, request) => {
        // Get the raw POST data
        const postData = request.postData(); // Returns the raw body data

        // If the post data is JSON, you can parse it manually
        const parsedData = JSON.parse(postData);

        // Mock the response
        route.fulfill({
            status: 402,
            contentType: 'application/json',
            body: JSON.stringify({
                success: false,
                transaction_id: '',
                new_balance: 0,
            }),
        });
    });

    // Send the POST request, which will be intercepted
    const response = await pageFixture.page.goto('https://api.example.com/banking/transactions', {
        data: {
            from_account: 'flavia',
            to_account: 'test',
            amount: 3,
            currency: 'EUR',
        },
    });

    // You can verify the mocked response
    expect(response.status()).toBe(402);
    const responseBody = await response.json();
    expect(responseBody.success).toBe(false);
    expect(responseBody.transaction_id).toBe('');
    expect(responseBody.new_balance).toBe(0);
});

Then("I send a GET request to transactions", async function () {
    await pageFixture.page.route('https://api.example.com/banking/transactions/test', async (route) => {
        // Mock a response for the GET request
        route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
                transaction_id: 'test',
                from_account: 'flavia',
                to_account: 'test',
                amount: 10,
                currency: 'EUR',
                status: 'success',
                timestamp: 5000
            }),
        });
    });

    // Send the GET request, which will be intercepted and mocked
    const response = await pageFixture.page.goto('https://api.example.com/banking/transactions/test');

    // Check the response
    expect(response.status()).toBe(200); // Expected 200 OK status
    const responseBody = await response.json();
    // Check the mock data
    expect(responseBody.transaction_id).toBe('test');
    expect(responseBody.from_account).toBe('flavia');
    expect(responseBody.to_account).toBe('test');
    expect(responseBody.amount).toBe(10);
    expect(responseBody.currency).toBe('EUR');
    expect(responseBody.status).toBe('success');
    expect(responseBody.timestamp).toBe(5000);
});


Then("I send a GET request to transactions with invalid data", async function () {
    await pageFixture.page.route('https://api.example.com/banking/transactions/failTest', async (route) => {
        // Mock a response for the GET request
        route.fulfill({
            status: 400,
            contentType: 'application/json',
            body: JSON.stringify({
                error: "Bad request",
                message: "Request body could not be read properly.",
            }),
        });
    });

    // Send the GET request, which will be intercepted and mocked
    const response = await pageFixture.page.goto('https://api.example.com/banking/transactions/failTest');

    expect(response.status()).toBe(400); // Expected 200 OK status
    const responseBody = await response.json();
    expect(responseBody.error).toBe("Bad request"); // Check the mock data
    expect(responseBody.message).toBe("Request body could not be read properly."); // Check the mock data
});

Then("I send a GET request to balance", async function () {
    await pageFixture.page.route('https://api.example.com/banking/accounts/2/balance', async (route) => {
        // Mock a response for the GET request
        route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
                account_id: '2',
                balance: 1000,
                currency: 'USD',
            }),
        });
    });

    // Send the GET request, which will be intercepted and mocked
    const response = await pageFixture.page.goto('https://api.example.com/banking/accounts/2/balance');

    // Check the response
    expect(response.status()).toBe(200); // Expected 200 OK status
    const responseBody = await response.json();
    expect(responseBody.account_id).toBe('2'); // Check the mock data
    expect(responseBody.balance).toBe(1000); // Check the mock data
    expect(responseBody.currency).toBe('USD');
});

Then("I send a GET request to balance with invalid data", async function () {
    await pageFixture.page.route('https://api.example.com/banking/accounts/0/balance', async (route) => {
        // Mock a response for the GET request
        route.fulfill({
            status: 400,
            contentType: 'application/json',
            body: JSON.stringify({
                error: "Bad request",
                message: "Request body could not be read properly.",
            }),
        });
    });

    // Send the GET request, which will be intercepted and mocked
    const response = await pageFixture.page.goto('https://api.example.com/banking/accounts/0/balance');

    // Check the response
    expect(response.status()).toBe(400); // Expected 200 OK status
    const responseBody = await response.json();
    expect(responseBody.error).toBe("Bad request"); // Check the mock data
    expect(responseBody.message).toBe("Request body could not be read properly."); // Check the mock data
});

