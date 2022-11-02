package tech.getarrays.ticketingsystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tech.getarrays.ticketingsystem.model.Account;
import tech.getarrays.ticketingsystem.repo.AccountRepo;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class AccountService {
    private final AccountRepo accountRepo;

    @Autowired
    public AccountService(AccountRepo accountRepo) {
        this.accountRepo = accountRepo;
    }
    public Account addAccount(Account account) {
        return accountRepo.save(account);
    }
    public List<Account> findAllAccounts() {
        return accountRepo.findAll();
    }
    public Account findAccountById(Long id) {
        return accountRepo.findAccountById(id);
    }

}
