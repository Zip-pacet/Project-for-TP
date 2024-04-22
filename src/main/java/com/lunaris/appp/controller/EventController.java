package com.lunaris.appp.controller;

import com.lunaris.appp.entity.Event;
import com.lunaris.appp.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class EventController {

    @Autowired
    private EventService eventService;

    @GetMapping("/events")
    public List<Event> getAllEvents(){
        return eventService.getAllEvents();
    }

    @GetMapping("/event")
    public Event getEventById(@RequestParam Long id){
        return eventService.getEventById(id);
    }

    @PostMapping("/events")
    public String createEvent(@RequestBody Event newEvent){
        eventService.createEvent(newEvent);
        return "объект с id = " + newEvent.getId() + " успешно создан";
    }

    @DeleteMapping("/events")
    public String deleteEvent(@RequestParam Long id){
        eventService.deleteEvent(id);
        return "объект с id = " + id + " успешно удалён";
    }

}
