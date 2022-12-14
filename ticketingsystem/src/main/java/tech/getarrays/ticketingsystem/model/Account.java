package tech.getarrays.ticketingsystem.model;


import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Account implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String accNo;
    private String credit;

    public Account() {
    }

    public Account(String accNo, String credit) {
        this.accNo = accNo;
        this.credit = credit;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAccNo() {
        return accNo;
    }

    public void setAccNo(String accNo) {
        this.accNo = accNo;
    }

    public String getCredit() {
        return credit;
    }

    public void setCredit(String credit) {
        this.credit = credit;
    }

    @Override
    public String toString() {
        return "Account{" +
                "id=" + id +
                ", accNo='" + accNo + '\'' +
                ", credit='" + credit + '\'' +
                '}';
    }
}
