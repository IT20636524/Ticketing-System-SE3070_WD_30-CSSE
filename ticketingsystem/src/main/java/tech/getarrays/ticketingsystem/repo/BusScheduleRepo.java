package tech.getarrays.ticketingsystem.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.getarrays.ticketingsystem.model.BusSchedule;

import java.util.Optional;

public interface BusScheduleRepo extends JpaRepository<BusSchedule, Long> {
    Optional<BusSchedule> findBusScheduleById(Long id);

    void deleteBusScheduleById(Long id);


}
