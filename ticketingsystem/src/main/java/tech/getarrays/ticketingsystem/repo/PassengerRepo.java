package tech.getarrays.ticketingsystem.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.getarrays.ticketingsystem.model.Passenger;

public interface PassengerRepo extends JpaRepository<Passenger, Long> {

}
