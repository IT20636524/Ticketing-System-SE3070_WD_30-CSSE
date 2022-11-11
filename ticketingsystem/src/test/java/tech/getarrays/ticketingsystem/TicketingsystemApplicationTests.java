package tech.getarrays.ticketingsystem;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import tech.getarrays.ticketingsystem.model.Passenger;
import tech.getarrays.ticketingsystem.repo.PassengerRepo;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class TicketingsystemApplicationTests {

	@Autowired
	PassengerRepo passengerRepo;

	@Test
	public void testCreate(){
		Passenger passenger=new Passenger();
		passenger.setId(6L);
		passenger.setEmail("sachin@test.com");
		passenger.setFullName("Sachin");
		passenger.setImageUrl("https://bootdey.com/img/Content/avatar/avatar3.png");
		passenger.setMobile("0778855666");
		passenger.setNic("997055242");
		passenger.setPassengerCode("aaf8142e-e0b3-4da1-b097-30fea1ab775b");
		passengerRepo.save(passenger);
		assertNotNull(passengerRepo.findPassengerById(5L).get());
	}

	@Test
	public void testReadAll(){
		List<Passenger> list = passengerRepo.findAll();
		assertThat(list).size().isGreaterThan(0);
	}

	@Test
	public void testReadAll2(){
		List<Passenger> list = passengerRepo.findAll();
		assertFalse(list.isEmpty());
	}

	@Test
	public void testFindPassengerById(){
		Optional<Passenger> passenger = passengerRepo.findPassengerById(5L);
		assertEquals("Sachin",passenger.get().getFullName());
	}

	@Test
	public void testFindPassengerById2(){
		Optional<Passenger> passenger = passengerRepo.findPassengerById(5L);
		assertFalse(passenger.isEmpty());
	}
}
