package tech.getarrays.ticketingsystem.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.getarrays.ticketingsystem.model.Fares;
import tech.getarrays.ticketingsystem.service.FaresService;

import java.util.List;

@RestController
@RequestMapping("/fare")
@CrossOrigin(origins = "http://localhost:4200")
public class FaresResource {

    private final FaresService faresService;


    public FaresResource(FaresService faresService) {
        this.faresService = faresService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Fares>> getAllFares(){
        List<Fares> fares = faresService.findAllFares();
        return new ResponseEntity<>(fares, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Fares> getFaresById (@PathVariable("id") Long id) {
        Fares fares = faresService.findFareById(id);
        return new ResponseEntity<>(fares, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Fares> addFares(@RequestBody Fares fares) {
        Fares newFares = faresService.addFares(fares);
        return new ResponseEntity<>(newFares, HttpStatus.CREATED);
    }
}
