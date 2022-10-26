package tech.getarrays.ticketingsystem.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Fares implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String routeNo;
    private String busNo;
    private String timePeriod;
    private String noOfPassengers;
    private String totalFare;
    private String date;
    @Column(nullable = false, updatable = false)
    private String fareNo;


    public Fares() {}

    public Fares(Long id, String routeNo, String busNo, String timePeriod, String noOfPassengers, String totalFare, String date, String fareNo) {
        this.id = id;
        this.routeNo = routeNo;
        this.busNo = busNo;
        this.timePeriod = timePeriod;
        this.noOfPassengers = noOfPassengers;
        this.totalFare = totalFare;
        this.date = date;
        this.fareNo = fareNo;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRouteNo() {
        return routeNo;
    }

    public void setRouteNo(String routeNo) {
        this.routeNo = routeNo;
    }

    public String getBusNo() {
        return busNo;
    }

    public void setBusNo(String busNo) {
        this.busNo = busNo;
    }

    public String getTimePeriod() {
        return timePeriod;
    }

    public void setTimePeriod(String timePeriod) {
        this.timePeriod = timePeriod;
    }

    public String getNoOfPassengers() {
        return noOfPassengers;
    }

    public void setNoOfPassengers(String noOfPassengers) {
        this.noOfPassengers = noOfPassengers;
    }

    public String getTotalFare() {
        return totalFare;
    }

    public void setTotalFare(String totalFare) {
        this.totalFare = totalFare;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getFareNo() {
        return fareNo;
    }

    public void setFareNo(String fareNo) {
        this.fareNo = fareNo;
    }

    @Override
    public String toString() {
        return "Fares{" +
                "id=" + id +
                ", routeNo='" + routeNo + '\'' +
                ", busNo='" + busNo + '\'' +
                ", timePeriod='" + timePeriod + '\'' +
                ", noOfPassengers='" + noOfPassengers + '\'' +
                ", totalFare='" + totalFare + '\'' +
                ", date='" + date + '\'' +
                ", fareNo='" + fareNo + '\'' +
                '}';
    }
}
