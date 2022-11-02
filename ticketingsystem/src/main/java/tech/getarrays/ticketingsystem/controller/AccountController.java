package tech.getarrays.ticketingsystem.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.getarrays.ticketingsystem.model.Account;
import tech.getarrays.ticketingsystem.service.AccountService;

import java.util.List;

@RestController
@RequestMapping("/account")
public class AccountController {
    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Account>> getAllAccounts() {
        List<Account> accounts = accountService.findAllAccounts();
        return new ResponseEntity<>(accounts, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Account> getAccountById(@PathVariable("id") Long id) {
        Account account = accountService.findAccountById(id);
        return new ResponseEntity<>(account, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Account> addAccount(@RequestBody Account account) {
        Account newAccount = accountService.addAccount(account);
        return new ResponseEntity<>(newAccount, HttpStatus.CREATED);
    }
}
