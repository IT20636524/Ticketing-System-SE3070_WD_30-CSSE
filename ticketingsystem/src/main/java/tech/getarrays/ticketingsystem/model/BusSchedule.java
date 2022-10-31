package tech.getarrays.ticketingsystem.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class BusSchedule implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false,updatable = false)
    private Long id;
    private String startLocation;
    private String arrivingLocation;
    private String date;
    private String timePeriod;
    @Column(nullable = false,updatable = false)
    private String busNo;

    public BusSchedule() {}

    public BusSchedule(Long id, String startLocation, String arrivingLocation, String date, String timePeriod, String busNo) {
        this.id = id;
        this.startLocation = startLocation;
        this.arrivingLocation = arrivingLocation;
        this.date = date;
        this.timePeriod = timePeriod;
        this.busNo = busNo;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStartLocation() {
        return startLocation;
    }

    public void setStartLocation(String startLocation) {
        this.startLocation = startLocation;
    }

    public String getArrivingLocation() {
        return arrivingLocation;
    }

    public void setArrivingLocation(String arrivingLocation) {
        this.arrivingLocation = arrivingLocation;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTimePeriod() {
        return timePeriod;
    }

    public void setTimePeriod(String timePeriod) {
        this.timePeriod = timePeriod;
    }

    public String getBusNo() {
        return busNo;
    }

    public void setBusNo(String busNo) {
        this.busNo = busNo;
    }

    @Override
    public String toString() {
        return "BusSchedule{" +
                "id=" + id +
                ", startLocation='" + startLocation + '\'' +
                ", arrivingLocation='" + arrivingLocation + '\'' +
                ", date='" + date + '\'' +
                ", timePeriod='" + timePeriod + '\'' +
                ", busNo='" + busNo + '\'' +
                '}';
    }
}
