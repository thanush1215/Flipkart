package org.pom;

import org.base.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Pojo extends BaseClass{
	
	public Pojo() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath = "//input[@type='text']")
	private WebElement search;
	
	@FindBy(xpath = "//div[contains(text(),'Motorola G34 5G (Ocean Green, 128 GB)')]")
	private WebElement sproduct;
	
	@FindBy(xpath = "//button[text()='Add to cart']")
	private WebElement butt;
	
	@FindBy(xpath = "//span[text()='Place Order']")
	private WebElement checkout; 
	
	@FindBy(xpath = "//input[@type='text']") 
	private WebElement lgn;
	
	@FindBy(xpath = "//span[text()='CONTINUE']")
	private WebElement conbtn;
	
	@FindBy(xpath = "(//input[@type='text'])[2]")
	private WebElement otp;
	
	@FindBy(xpath = "///span[text()='Login']")
	private WebElement oclick;

	public WebElement getSearch() {
		return search;
	}

	public WebElement getSproduct() {
		return sproduct;
	}

	public WebElement getButt() {
		return butt;
	}

	public WebElement getCheckout() {
		return checkout;
	}

	public WebElement getLgn() {
		return lgn;
	}

	public WebElement getConbtn() {
		return conbtn;
	}

	public WebElement getOtp() {
		return otp;
	}

	public WebElement getOclick() {
		return oclick;
	}
	
}