import { Given, When, Then, Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, expect } from "@playwright/test";
 
setDefaultTimeout(15_000);
 
Before(async function () {
    this.browser = await chromium.launch();
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
});
 
After(async function () {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
});
 
Given("que estou na pagina principal", async function () {
    await this.page.goto(
        "https://hotel-example-site.takeyaqa.dev/en-US/index.html",
    );
    await expect(
        this.page.getByRole("heading", { name: "Hotel Planisphere" }),
    ).toBeVisible();
});
 
When("acesso a pagina de reservas", async function () {
    await this.page.getByRole("link", { name: "Reserve", exact: true }).click();
});

Then("visualizo os planos de hospedagem", async function () {
    await expect(
        this.page.getByRole("heading", { name: "Plans" }),
    ).toBeVisible();
});

When("seleciono o plano recomendado", async function () {
    const promise = this.context.waitForEvent("page");
 
    await this.page
        .locator(".card-body")
        .filter({
            has: this.page.getByRole("heading", {
                name: "Plan with special offers",
            }),
        })
        .getByRole("link", { name: "Reserve room" })
        .click();
 
    this.page = await promise;
});

Then("visualizo o formulario de reserva", async function () {
    await expect(
        this.page.getByRole("heading", { name: "Reservation" }),
    ).toBeVisible();
});

When("seleciono o check-in para {string}", async function (check_in) {
    const date = new Date();
    date.setDate(date.getDate() + Number(check_in));
    const targetDay = date.getDate();
    const targetMonth = date.toLocaleDateString("en-US", { month: "long" });
    const targetYear = date.getFullYear().toString();
 
    await this.page.locator("#date").click();
    // await this.page.locator("#date").fill(`${targetMonth}/${targetDay}/${targetYear}`);
 
    while (true) {
        const currentMonth = await this.page
            .locator(".ui-datepicker-month")
            .textContent();
        const currentYear = await this.page
            .locator(".ui-datepicker-year")
            .textContent();
 
        if (targetMonth == currentMonth && targetYear == currentYear) {
            break;
        }
 
        await this.page.locator(".ui-datepicker-next").click();
    }
 
    await this.page.getByRole("link", { name: targetDay }).click();
});

When("preencho a {string} e {string} e {string}", async function (estadia, num_hospedes, nome) {
        await this.page.locator("#term").fill(estadia);
        await this.page.locator("#head-count").fill(num_hospedes);
        await this.page.locator("#username").fill(nome);
 
        await this.page
            .getByRole("combobox", { name: "Confirmation" })
            .selectOption("None");
    },
);

When("clico em confirmar reserva", async function () {
    await this.page
        .getByRole("button", { name: "Confirm Reservation" })
        .click();
});
 
Then("visualizo a confirmacao da reserva", async function () {
    await expect(this.page.getByRole("heading", { name: "Confirm Reservation" })).toBeVisible();
});
