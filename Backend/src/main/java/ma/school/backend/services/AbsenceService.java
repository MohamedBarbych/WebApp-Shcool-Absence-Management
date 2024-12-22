package ma.school.backend.services;

import ma.school.backend.entities.Absence;

import java.util.List;

public interface AbsenceService {
    List<Absence> getAllAbsences();
    Absence getAbsenceById(Long id);
    Absence createAbsence(Absence absence);
    Absence updateAbsence(Long id, Absence absence);
    void deleteAbsence(Long id);
}