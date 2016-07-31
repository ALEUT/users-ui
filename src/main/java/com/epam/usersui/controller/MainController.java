package com.epam.usersui.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
public class MainController {

    private static final String DEFAULT_CONFIG_FILE_NAME = "config.properties";

    private Properties config = new Properties();

    @Autowired
    public MainController(ApplicationArguments appArgs) {
        String configFileName = DEFAULT_CONFIG_FILE_NAME;

        String[] args = appArgs.getSourceArgs();
        if (args.length > 0) {
            configFileName = args[0];
        }

        try(FileReader configFileReader = new FileReader(configFileName)) {
            config.load(configFileReader);
        } catch (IOException e) {
            throw new RuntimeException(String.format("Unable to read config file: %s", configFileName), e);
        }
    }

    @RequestMapping(value = "/config", method = GET)
    public Properties config() {
        return config;
    }
}
