package com.abacus.abacusappspringboot.service.impl;

	import java.util.ArrayList;
	import java.util.Optional;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;
	import com.abacus.abacusappspringboot.model.StudentModel;
	import com.abacus.abacusappspringboot.repository.StudentRepository;
	import com.abacus.abacusappspringboot.service.StudentService;

	@Service
	public class StudentServiceImpl implements StudentService {

		@Autowired
		StudentRepository studentRepository;
		
		@Override
		public StudentModel addStudent(StudentModel studentModel) {

			return studentRepository.save(studentModel);
		}

		@Override
		public ArrayList<StudentModel> viewStudents() {

			return (ArrayList<StudentModel>) studentRepository.findAll();
		}

		@Override
		public StudentModel editStudent(StudentModel studentModel, int studentId) {

			StudentModel existingStudent=getStudentById(studentId);
			
			if(existingStudent!=null) {
				
				existingStudent.setAddress(studentModel.getAddress());
				existingStudent.setAge(studentModel.getAge());
				existingStudent.setMobile(studentModel.getMobile());
				existingStudent.setStudentDOB(studentModel.getStudentDOB());
				existingStudent.setStudentName(studentModel.getStudentName());
				
				return studentRepository.save(existingStudent);
			}
			return null;
		}

		@Override
		public String deleteStudent(int studentId) {
			
			StudentModel studenModel=getStudentById(studentId);
			
			studentRepository.delete(studenModel);
			
			return "Student deleted successfully";
		}

		@Override
		public StudentModel getStudentById(int studentId) {

			Optional<StudentModel> optional=studentRepository.findById(studentId);
			
			return optional.get();
		}

}
