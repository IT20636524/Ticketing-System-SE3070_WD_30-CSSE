package tech.getarrays.ticketingsystem;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.getarrays.ticketingsystem.model.Passenger;
import tech.getarrays.ticketingsystem.service.PassengerService;

@RestController
@RequestMapping("/passenger")
public class PassengerResource {
    private final PassengerService passengerService;

    public PassengerResource(PassengerService passengerService) {
        this.passengerService = passengerService;
    }

    @PostMapping("/add")
    public ResponseEntity<Passenger> addPassenger(@RequestBody Passenger passenger){
        Passenger newPassenger = passengerService.addPassenger(passenger);
        return new ResponseEntity<>(newPassenger, HttpStatus.CREATED);
    }

}
