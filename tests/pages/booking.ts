import { Page } from '@playwright/test';

export class BookingPage {

  constructor(private page: Page) {}

  async bookRoom() {
  await this.page.locator("input[value='13/06/2026']");
  await this.page.locator("input[value='14/06/2026']");
  await this.page.getByRole("button", {name: 'Check Availability'}).click();

  // Selecting Room
  await this.page.locator(".card.h-100.shadow-sm.room-card").first().getByRole('link', { name: 'Book now' }).click();
  await this.page.locator('h2:has-text("Book This Room")').first().waitFor();
  await this.page.locator("#doReservation").click();
  // Reservation Details
  await this.page.getByPlaceholder('Firstname').fill('Navneet');
  await this.page.getByPlaceholder('Lastname').fill('Rai');
  await this.page.getByPlaceholder('Email').fill('navneet@test.com');
  await this.page.getByPlaceholder('Phone').fill('917683070087');
  await this.page.getByRole('button', { name: 'Reserve Now' }).click();
  }
}