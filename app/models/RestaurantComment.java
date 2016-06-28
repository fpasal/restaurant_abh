package models;

import play.*;
import play.db.*;
import play.db.jpa.*;
import play.db.jpa.JPA;
import play.mvc.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static play.data.Form.*;

@Entity
@Table(name="restaurantcomments")
public class RestaurantComment {
    @Id @GeneratedValue long id;
    private long mark;
    private long idUser;
    private long idRestaurant;
    private String comment;
    private Date insertTime;

    public RestaurantComment() {}

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getMark() {
        return mark;
    }

    public void setMark(long mark) {
        this.mark = mark;
    }

    public long getIdUser() {
        return idUser;
    }

    public void setIdUser(long idUser) {
        this.idUser = idUser;
    }

    public long getIdRestaurant() {
        return idRestaurant;
    }

    public void setIdRestaurant(long idRestaurant) {
        this.idRestaurant = idRestaurant;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Date getInsertTime() {
        return insertTime;
    }

    public void setInsertTime(Date insertTime) {
        this.insertTime = insertTime;
    }

    public void save() { JPA.em().persist(this); }

    public static class InputCommentDto {
        public long mark;
        public long idUser;
        public long idRestaurant;
        public String comment;

        public long getMark() {
            return mark;
        }

        public void setMark(long mark) {
            this.mark = mark;
        }

        public long getIdUser() {
            return idUser;
        }

        public void setIdUser(long idUser) {
            this.idUser = idUser;
        }

        public long getIdRestaurant() {
            return idRestaurant;
        }

        public void setIdRestaurant(long idRestaurant) {
            this.idRestaurant = idRestaurant;
        }

        public String getComment() {
            return comment;
        }

        public void setComment(String comment) {
            this.comment = comment;
        }
    }

    public static class OutputCommentsDto {
        public long mark;
        public String name;
        public String insertTime;
        public String comment;

        public long getMark() {
            return mark;
        }

        public void setMark(long mark) {
            this.mark = mark;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getInsertTime() {
            return insertTime;
        }

        public void setInsertTime(String insertTime) {
            this.insertTime = insertTime;
        }

        public String getComment() {
            return comment;
        }

        public void setComment(String comment) {
            this.comment = comment;
        }
    }
}
