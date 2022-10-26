package tech.getarrays.ticketingsystem.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.getarrays.ticketingsystem.model.Fares;

import java.util.Optional;

public interface FaresRepo extends JpaRepository<Fares, Long> {
    Optional<Fares> findFareById(Long id);
}
