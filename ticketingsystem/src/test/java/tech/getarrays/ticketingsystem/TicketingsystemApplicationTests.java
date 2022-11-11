package tech.getarrays.ticketingsystem;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import tech.getarrays.ticketingsystem.model.BusSchedule;
import tech.getarrays.ticketingsystem.model.Fares;
import tech.getarrays.ticketingsystem.model.Passenger;
import tech.getarrays.ticketingsystem.repo.BusScheduleRepo;
import tech.getarrays.ticketingsystem.repo.FaresRepo;
import tech.getarrays.ticketingsystem.repo.PassengerRepo;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class TicketingsystemApplicationTests {

	@Autowired
	PassengerRepo passengerRepo;
	@Autowired
	FaresRepo faresRepo;
	@Autowired
	BusScheduleRepo busScheduleRepo;

	@Test
	public void testCreatePassenger(){
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
	public void testReadAllPassengers(){
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

	@Test
	public void testReadAllFares(){
		List<Fares> list = faresRepo.findAll();
		assertThat(list).size().isGreaterThan(0);
	}

//	@Test
//	public void testAddFares(){
//		Fares fares=new Fares();
//		fares.setId(5L);
//		fares.setRouteNo("009996");
//		fares.setBusNo("tv3443");
//		fares.setTimePeriod("8.00-12.00");
//		fares.setNoOfPassengers("200");
//		fares.setTotalFare("60000");
//		fares.setDate("2022-08-20");
//		faresRepo.save(fares);
//		assertNotNull(faresRepo.findFareById(5L));
//	}

	@Test
	public void testReadAllBusSchedules(){
		List<BusSchedule> list = busScheduleRepo.findAll();
		assertThat(list).size().isGreaterThan(0);
	}

	@Test
	public void testAddBusSchedules(){
		BusSchedule busSchedule=new BusSchedule();
		busSchedule.setId(7L);
		busSchedule.setStartLocation("Colombo");
		busSchedule.setArrivingLocation("Balangoda");
		busSchedule.setDate("27-10-2022");
		busSchedule.setTimePeriod("8.00-12-00");
		busSchedule.setBusNo("tv3333");
		busScheduleRepo.save(busSchedule);
		assertNotNull(busScheduleRepo.findBusScheduleById(7L));

	}


}
