package ma.school.backend.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "students")
@Data // Lombok pour générer les getters, setters, etc.
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    private String phoneNumber;
}