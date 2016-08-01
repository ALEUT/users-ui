package com.epam.usersui.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.yaml.snakeyaml.Yaml;

import java.io.FileReader;
import java.io.IOException;
import java.util.Map;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@Controller
public class MainController {

    private static final String INDEX_TEMPLATE = "index";
    private static final String DEFAULT_CONFIG_FILE_NAME = "config.yml";

    private Map<?, ?> config;

    @Autowired
    public MainController(ApplicationArguments appArgs) {
        String configFileName = DEFAULT_CONFIG_FILE_NAME;

        String[] args = appArgs.getSourceArgs();
        if (args.length > 0) {
            configFileName = args[0];
        }

        try(FileReader configFileReader = new FileReader(configFileName)) {
            config = new Yaml().loadAs(configFileReader, Map.class);
        } catch (IOException e) {
            throw new RuntimeException(String.format("Unable to read config file: %s", configFileName), e);
        }
    }

    @RequestMapping(value = "/", method = GET)
    public String index(Model model) {
        model.addAttribute("config", config);
        return INDEX_TEMPLATE;
    }
}
