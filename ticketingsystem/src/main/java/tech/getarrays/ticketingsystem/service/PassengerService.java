package tech.getarrays.ticketingsystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tech.getarrays.ticketingsystem.exception.UserNotFoundException;
import tech.getarrays.ticketingsystem.model.Passenger;
import tech.getarrays.ticketingsystem.repo.PassengerRepo;

import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class PassengerService {
    private final PassengerRepo passengerRepo;

    @Autowired
    public PassengerService(PassengerRepo passengerRepo) {
        this.passengerRepo = passengerRepo;
    }

    public Passenger addPassenger(Passenger passenger){
        passenger.setPassengerCode(UUID.randomUUID().toString());
        return passengerRepo.save(passenger);
    }
    public Passenger findPassengerById(Long id) {
        return passengerRepo.findPassengerById(id).
                orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }
    public List<Passenger> findAllPassengers() {
        return passengerRepo.findAll();
    }
}
