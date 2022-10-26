package tech.getarrays.ticketingsystem;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.getarrays.ticketingsystem.model.BusSchedule;
import tech.getarrays.ticketingsystem.service.BusScheduleService;

import java.util.List;

@RestController
@RequestMapping("/busschedule")
@CrossOrigin(origins = "http://localhost:4200")
public class BusScheduleResource {

    private final BusScheduleService busScheduleService;

    public BusScheduleResource(BusScheduleService busScheduleService) {
        this.busScheduleService = busScheduleService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<BusSchedule>> getAllBusSchedule(){
        List<BusSchedule> busSchedule = busScheduleService.findAllBusSchedule();
        return new ResponseEntity<>(busSchedule, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<BusSchedule> getBusScheduleById(@PathVariable("id") Long id){
        BusSchedule busSchedule = busScheduleService.findBusScheduleById(id);
        return new ResponseEntity<>(busSchedule, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<BusSchedule> addBusSchedule(@RequestBody BusSchedule busSchedule) {
        BusSchedule newBusSchedule = busScheduleService.addBusSchedule(busSchedule);
        return new ResponseEntity<>(newBusSchedule, HttpStatus.CREATED);
    }

}
