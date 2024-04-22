package com.lunaris.appp.service;

import com.lunaris.appp.entity.Event;
import com.lunaris.appp.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public void createEvent(Event event){
        eventRepository.save(event);
    }

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public Event getEventById(Long id) {
        return eventRepository.findById(id).get();
    }

    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }
}
