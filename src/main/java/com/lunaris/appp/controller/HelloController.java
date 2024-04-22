package com.lunaris.appp.controller;

import com.lunaris.appp.entity.Event;
import com.lunaris.appp.repository.EventRepository;
import com.lunaris.appp.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloController {

    @Autowired
    private EventService eventService;

    @GetMapping("/hello")
    public String hello(){
        Event event = new Event("Встреча с экспертами", "встреча с экспертами в области веб-разработки", "sdfsdflj");
        eventService.createEvent(event);
        return "объект успешно ";
    }



}
