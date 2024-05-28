package org.stepdefinition;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.IOException;
import java.time.Duration;
import java.util.List;
import java.util.Set;

import org.apache.commons.io.FileUtils;
import org.base.BaseClass;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import org.pom.Pojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Flipkarts extends BaseClass {

	Robot r;
	JavascriptExecutor js;
	Actions a;
	Pojo p;

	@Given("I open the Flipkart website")
	public void i_open_the_Flipkart_website() throws IOException {

		browserConf();
		maxWindow();

		File f = new File("C:\\Users\\YOGARAJ S P\\Desktop\\MavenCucumber\\DataFile\\datas.txt");
		List<String> datas = FileUtils.readLines(f);
		// driver.get(datas.get(0));
		browserLaunch(datas.get(0));

	}

	@When("I search for a product")
	public void i_search_for_a_product() throws AWTException, IOException {

		r = new Robot();
		p = new Pojo();

		String data = excel("C:\\Users\\YOGARAJ S P\\Desktop\\MavenCucumber\\Excel\\ExcelData.xlsx", "Sheet1", 0, 0);

		fillTxt(p.getSearch(), data);
		r.keyPress(KeyEvent.VK_ENTER);
		r.keyRelease(KeyEvent.VK_ENTER);

	}

	@When("I select a product")
	public void i_select_a_product() {
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
		
		WebElement sproduct = p.getSproduct();
		click(sproduct);
	}

	@When("I add the product to the cart")
	public void i_add_the_product_to_the_cart() {

		
		allWindowhandle(1);
		

		
		js = (JavascriptExecutor) driver;
		
		WebElement addToCartButton = p.getButt();
		js.executeScript("arguments[0].scrollIntoView(true)", addToCartButton);
		
		click(addToCartButton);
		
		
	}

	@When("I proceed to checkout")
	public void i_proceed_to_checkout() {

		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

		WebElement checkout = p.getCheckout();
		click(checkout);
	}

	@When("I login to the application and enter otp")
	public void i_login_to_the_application_and_enter_otp() throws InterruptedException, AWTException, IOException {

		WebElement lgn = p.getLgn();

		String number = excel("C:\\Users\\YOGARAJ S P\\Desktop\\MavenCucumber\\Excel\\ExcelData.xlsx", "Sheet1", 1, 0);
		
		fillTxt(lgn, number);

		WebElement conbtn = p.getConbtn();
		click(conbtn);

		p.getOtp();
		Thread.sleep(10000l);

		WebElement oclick = p.getOclick();
		click(oclick);
	}

	@When("I should be able to place the order successfully")
	public void i_should_be_able_to_place_the_order_successfully() {

	}

	@When("I select the delivery address")
	public void i_select_the_delivery_address() throws IOException {

		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

		js = (JavascriptExecutor) driver;

		WebElement address = driver.findElement(By.xpath("//div[text()='Add a new address']"));
		js.executeScript("arguments[0].click()", address);

		WebElement name = driver.findElement(By.xpath("//input[@type='text']"));
		String cell0 = excel("C:\\Users\\Dell\\eclipse-workspace\\MavenCucumber\\Excel\\ExcelData.xlsx", "Sheet1", 0,
				2);
		js.executeScript("arguments[0].setAttribute('value','" + cell0 + "')", name);

		WebElement mobileNo = driver.findElement(By.name("phone"));
		String cell1 = excel("C:\\Users\\Dell\\eclipse-workspace\\MavenCucumber\\Excel\\ExcelData.xlsx", "Sheet1", 0,
				1);
		js.executeScript("arguments[0].setAttribute('value','" + cell1 + "')", mobileNo);

		WebElement pinCode = driver.findElement(By.xpath("//input[@tabindex='3']"));
		String cell2 = excel("C:\\Users\\Dell\\eclipse-workspace\\MavenCucumber\\Excel\\ExcelData.xlsx", "Sheet1", 0,
				3);
		js.executeScript("arguments[0].setAttribute('value','" + cell2 + "')", pinCode);

		WebElement locality = driver.findElement(By.name("addressLine2"));
		String cell3 = excel("C:\\Users\\Dell\\eclipse-workspace\\MavenCucumber\\Excel\\ExcelData.xlsx", "Sheet1", 0,
				4);
		locality.sendKeys(cell3);

		WebElement addressArea = driver.findElement(By.xpath("textarea[@autocomplete='street-address']"));

		String cell4 = excel("C:\\Users\\Dell\\eclipse-workspace\\MavenCucumber\\Excel\\ExcelData.xlsx", "Sheet1", 0,
				5);
		addressArea.sendKeys(cell4);

		WebElement city = driver.findElement(By.name("city"));
		String cell5 = excel("C:\\Users\\Dell\\eclipse-workspace\\MavenCucumber\\Excel\\ExcelData.xlsx", "Sheet1", 0,
				6);
		city.sendKeys(cell5);

		WebElement state = driver.findElement(By.name("state"));
		Select s = new Select(state);
		s.selectByVisibleText("Tamil Nadu");

		WebElement landMart = driver.findElement(By.xpath("//input[@autocomplete='off']"));
		String cell6 = excel("C:\\Users\\Dell\\eclipse-workspace\\MavenCucumber\\Excel\\ExcelData.xlsx", "Sheet1", 0,
				9);
		landMart.sendKeys(cell6);

		WebElement alterMobileNo = driver.findElement(By.xpath(" (//input[@type='text'])[7]"));
		alterMobileNo.sendKeys("");

		WebElement addressType = driver.findElement(By.xpath("//span[text()='Home (All day delivery)']"));
		js.executeScript("arguments[0].click()", addressType);

		WebElement deleveryHere = driver.findElement(By.xpath("//button[text()='Save and Deliver Here']"));
		js.executeScript("arguments[0].click()", deleveryHere);

		WebElement orderSummary = driver.findElement(By.xpath("//span[text()='Order Summary']"));
		js.executeScript("arguments[0].click()", orderSummary);

	}

	@When("I select the payment option")
	public void i_select_the_payment_option() {

		WebElement continueBtn = driver.findElement(By.xpath("//button[text()='CONTINUE']"));
		js.executeScript("arguments[0].scrollIntoView(true)", continueBtn);
		continueBtn.click();

		WebElement paymentOption = driver.findElement(By.xpath("//span[text()='Credit / Debit / ATM Card']"));
		paymentOption.click();
	}

	@When("I have products in the cart")
	public void i_have_products_in_the_cart() {

		js = (JavascriptExecutor) driver;
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

		a = new Actions(driver);
		WebElement flipkartMainPage = driver.findElement(By.xpath("//img[@title='Flipkart']"));
		a.moveToElement(flipkartMainPage).perform();
		flipkartMainPage.click();

	}

	@When("I remove a product from the cart")
	public void i_remove_a_product_from_the_cart() {

		WebElement cart = driver.findElement(By.xpath("(//div[@class='_38VF5e'])[2]"));
		cart.click();

		WebElement removeProduct = driver.findElement(By.xpath("//div[text()='Remove']"));
		js.executeScript("arguments[0].scrollIntoView(true)", removeProduct);
		removeProduct.click();

	}

	@When("The cart should be empty")
	public void the_cart_should_be_empty() {

		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

		a = new Actions(driver);
		WebElement flipkartMainPage = driver.findElement(By.xpath("//img[@title='Flipkart']"));
		a.moveToElement(flipkartMainPage).perform();
		flipkartMainPage.click();

		WebElement cart = driver.findElement(By.xpath("(//div[@class='_38VF5e'])[2]"));
		cart.click();

		WebElement emptyCart = driver.findElement(By.xpath("//div[text()='Your cart is empty!']"));
		String text = emptyCart.getText();
		System.out.println(text);
	}

	@Then("I quit the browser")
	public void i_quit_the_browser() {

		driver.quit();
	}

}
