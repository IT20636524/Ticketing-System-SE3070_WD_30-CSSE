package tech.getarrays.ticketingsystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.getarrays.ticketingsystem.exception.UserNotFoundException;
import tech.getarrays.ticketingsystem.model.Fares;
import tech.getarrays.ticketingsystem.repo.FaresRepo;

import java.util.List;
import java.util.UUID;

@Service
public class FaresService {
    private  final FaresRepo faresRepo;

    @Autowired
    public FaresService(FaresRepo faresRepo){
        this.faresRepo  = faresRepo;
    }

    public Fares addFares(Fares fares) {
        fares.setFareNo(UUID.randomUUID().toString());
        return faresRepo.save(fares);
    }

    public List<Fares> findAllFares() {
        return faresRepo.findAll();
    }

    public Fares findFareById(Long id) {
        return faresRepo.findFareById(id)
                .orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }
}
