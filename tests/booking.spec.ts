import { test, expect } from '@playwright/test';
import { HomePage } from './pages/homepage';
import { BookingPage } from './pages/booking';

test('Successful room booking', async ({ page }) => {

  const homePage = new HomePage(page);
  const bookingPage = new BookingPage(page);

  await homePage.navigate();
  await expect(page).toHaveTitle('Restful-booker-platform demo');

  await bookingPage.bookRoom();
   const priceLoc= page.locator('span.fs-2.fw-bold.text-primary.me-2');
   await priceLoc.waitFor({state: 'visible'});
   const price = await priceLoc.textContent();
   console.log(price);
   await expect (page.getByText('Cleaning fee')).toBeVisible();
   await expect (page.getByText('£25')).toBeVisible();
   await expect(page.getByText('Booking Confirmed')).toBeVisible();

});