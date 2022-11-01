package tech.getarrays.ticketingsystem.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.getarrays.ticketingsystem.model.Passenger;

import java.util.Optional;

public interface PassengerRepo extends JpaRepository<Passenger, Long> {

    Optional<Passenger> findPassengerById(Long id);
}
