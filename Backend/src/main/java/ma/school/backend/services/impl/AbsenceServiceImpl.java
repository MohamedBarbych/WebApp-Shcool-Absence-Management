package ma.school.backend.services.impl;

import ma.school.backend.entities.Absence;
import ma.school.backend.repositories.AbsenceRepository;
import ma.school.backend.services.AbsenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AbsenceServiceImpl implements AbsenceService {

    @Autowired
    private AbsenceRepository absenceRepository;

    @Override
    public List<Absence> getAllAbsences() {
        return absenceRepository.findAll();
    }

    @Override
    public Absence getAbsenceById(Long id) {
        return absenceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Absence not found"));
    }

    @Override
    public Absence createAbsence(Absence absence) {
        return absenceRepository.save(absence);
    }

    @Override
    public Absence updateAbsence(Long id, Absence absence) {
        Absence existingAbsence = getAbsenceById(id);
        existingAbsence.setDate(absence.getDate());
        existingAbsence.setReason(absence.getReason());
        return absenceRepository.save(existingAbsence);
    }

    @Override
    public void deleteAbsence(Long id) {
        absenceRepository.deleteById(id);
    }
}
