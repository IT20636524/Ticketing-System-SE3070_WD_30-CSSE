package tech.getarrays.ticketingsystem.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.getarrays.ticketingsystem.model.Account;

import java.util.List;
import java.util.Optional;

public interface AccountRepo extends JpaRepository<Account, Long> {
    Account findAccountById(Long id);
}
