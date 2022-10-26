package tech.getarrays.ticketingsystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.getarrays.ticketingsystem.exception.UserNotFoundException;
import tech.getarrays.ticketingsystem.model.BusSchedule;
import tech.getarrays.ticketingsystem.repo.BusScheduleRepo;

import java.util.List;
import java.util.UUID;

@Service
public class BusScheduleService {
    private final BusScheduleRepo busScheduleRepo;

    @Autowired
    public BusScheduleService(BusScheduleRepo busScheduleRepo){
        this.busScheduleRepo = busScheduleRepo;
    }

    public BusSchedule addBusSchedule(BusSchedule busSchedule){
        busSchedule.setBusNo(UUID.randomUUID().toString());
        return busScheduleRepo.save(busSchedule);
    }

    public List<BusSchedule> findAllBusSchedule(){
        return busScheduleRepo.findAll();
    }

    public BusSchedule findBusScheduleById(Long id){
        return busScheduleRepo.findBusScheduleById(id)
                .orElseThrow(() -> new UserNotFoundException("User by id" + id + "was not found"));
    }

}
