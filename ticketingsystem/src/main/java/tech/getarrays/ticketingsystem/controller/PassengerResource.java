package tech.getarrays.ticketingsystem.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.getarrays.ticketingsystem.model.Passenger;
import tech.getarrays.ticketingsystem.service.PassengerService;

import java.util.List;

@RestController
@RequestMapping("/passenger")
public class PassengerResource {
    private final PassengerService passengerService;

    public PassengerResource(PassengerService passengerService) {
        this.passengerService = passengerService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Passenger>> getALlPassengers() {
        List<Passenger> passengers = passengerService.findAllPassengers();
        return new ResponseEntity<>(passengers, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Passenger> addPassenger(@RequestBody Passenger passenger){
        Passenger newPassenger = passengerService.addPassenger(passenger);
        return new ResponseEntity<>(newPassenger, HttpStatus.CREATED);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<Passenger> getPassengerById(@PathVariable("id") Long id) {
        Passenger passenger = passengerService.findPassengerById(id);
        return new ResponseEntity<>(passenger, HttpStatus.OK);
    }

}
