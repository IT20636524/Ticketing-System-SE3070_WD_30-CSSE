package tech.getarrays.ticketingsystem.model;

import javax.persistence.*;
import java.io.Serializable;
@Entity
public class Passenger implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,updatable = false)
    private Long id;
    private String fullName;
    private String email;
    private String mobile;
    private String nic;
    private String password;
    private String imageUrl;

    private String passengerCode;

    public Passenger() {}

    public Passenger(Long id, String fullName, String email, String mobile, String nic, String password, String imageUrl, String passengerCode) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.mobile = mobile;
        this.nic = nic;
        this.password = password;
        this.imageUrl = imageUrl;
        this.passengerCode = passengerCode;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPassengerCode() {
        return passengerCode;
    }

    public void setPassengerCode(String passengerCode) {
        this.passengerCode = passengerCode;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    @Override
    public String toString() {
        return "Passenger{" +
                "id=" + id +
                ", fullName='" + fullName + '\'' +
                ", email='" + email + '\'' +
                ", nic='" + nic + '\'' +
                ", password='" + password + '\'' +
                ", imageUrl='" + imageUrl +  '\'' +
                '}';
    }
}
