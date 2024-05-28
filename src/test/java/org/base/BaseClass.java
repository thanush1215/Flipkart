package org.base;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

import org.apache.commons.io.FileUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.Alert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class BaseClass {
	
	

	public static WebDriver driver;
	public static Actions a;
	public static JavascriptExecutor js;
	public static TakesScreenshot ts;
	public static Alert a2;
	

	public static void browserConf() {

		driver = new ChromeDriver();
	}

	public static void browserLaunch(String url) {

		driver.get(url);
	}

	public static void maxWindow() {

		driver.manage().window().maximize();
	}

	public static void fillTxt(WebElement text, String value) {

		text.sendKeys(value);

	}

	public static void click(WebElement element) {

		element.click();

	}

	public static void title() {

		String title = driver.getTitle();
		System.out.println(title);

	}

	public static void action(WebElement target) {

		a = new Actions(driver);
		a.moveToElement(target).perform();

	}

	public static void javaScript(String script, WebElement args) {

		js = (JavascriptExecutor) driver;
		js.executeScript(script, args);

	}

	public static void screenShort(String location) throws IOException {

		ts = (TakesScreenshot) driver;
		File target = ts.getScreenshotAs(OutputType.FILE);

		File destination = new File(location);

		FileUtils.copyFile(target, destination);

	}

	public static void time(long sleep) throws InterruptedException {

		Thread.sleep(sleep);
	}

	public static void implicit(long duration) {

		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(duration));

	}

	public static void frame(WebElement element) {

		driver.switchTo().frame(element);

	}

	public static void frameId(String id) {

		driver.switchTo().frame(id);

	}

	public static void frameIndex(int indexPos) {

		driver.switchTo().frame(indexPos);

	}

	
	public static void alert() {
		
		 a2 = driver.switchTo().alert();
		
		}
	
	public static void alertMethods() {
		
		a2.accept();
		
		}
	
	
	public static void allWindowhandle(int index) {
		
		
		Set<String> allWindowId = driver.getWindowHandles();
		
		List<String> l = new ArrayList<String>(allWindowId);
		
		driver.switchTo().window(l.get(index));
		
	}
	
	
	public static void windowshandling(int childswindow) {
		
//		Set<String> childwindow = driver.getWindowHandles();
//		 List<String> li = new LinkedList<String>();
//		 li.addAll(childwindow);
//		 driver.switchTo().window(li.get(childswindow));
//		 
		
	
			
	}
	
	
	public static String excel(String location, String sheetName, int rowNo, int cellNo ) throws IOException {
		// location of file
				File f = new File(location);

				// read file
				FileInputStream fis = new FileInputStream(f);

				// file formate
				Workbook w = new XSSFWorkbook(fis);

				// get the sheet
				Sheet s = w.getSheet(sheetName);

				Row r = s.getRow(rowNo);

				Cell c = r.getCell(cellNo);

				int cellType = c.getCellType();

				// String cell type ------> 0 or 1

				String value = "";

				if (cellType == 1) // to get string cell value
				{
					value = c.getStringCellValue();
					// System.out.println(value);
				}

				else if (DateUtil.isCellDateFormatted(c))// To get date cell value
				{
					Date date = c.getDateCellValue();
					SimpleDateFormat si = new SimpleDateFormat("YYYY-MM-DD");
					value = si.format(date);
					// System.out.println(value);

				}

				else // To get numerical cell value
				{
					double numeric = c.getNumericCellValue();

					long l = (long) numeric;
					value = String.valueOf(l);
					// System.out.println(value);

				}

				return value;

			}

		
	
	

}
