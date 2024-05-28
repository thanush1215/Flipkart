package org.test;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.java.After;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\YOGARAJ S P\\Desktop\\MavenCucumber\\src\\test\\resources\\Flipkart\\Flipkarts.feature",
				 glue="org.stepdefinition",
				 monochrome=true)
                

public class TestRunner {
	
}
