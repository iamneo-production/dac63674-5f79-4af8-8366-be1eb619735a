package com.abacus.abacusappspringboot.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.abacus.abacusappspringboot.model.CourseModel;
import com.abacus.abacusappspringboot.model.InstituteModel;
import com.abacus.abacusappspringboot.model.StudentModel;
import com.abacus.abacusappspringboot.service.CourseService;
import com.abacus.abacusappspringboot.service.InstituteService;
import com.abacus.abacusappspringboot.service.StudentService;

@CrossOrigin("*")
@RestController
public class AdminController {

	@Autowired
	StudentService studentService;

	@Autowired
	CourseService courseService;

	@Autowired
	InstituteService instituteService;

	@PostMapping("/admin/addCourse")
	public CourseModel addCourse(@RequestBody CourseModel courseModel) {

		return courseService.addCourse(courseModel);
	}

	@GetMapping("/admin/viewCourses")
	public ArrayList<CourseModel> viewCourses() {

		return courseService.viewCourses();
	}

	@PutMapping("/admin/editCourse/{courseId}")
	public CourseModel editCourse(@RequestBody CourseModel courseModel, @PathVariable int courseId) {

		return courseService.editCourse(courseModel, courseId);
	}

	@DeleteMapping("/admin/deleteCourse/{courseId}")
	public String deleteCourse(@PathVariable int courseId) {

		return courseService.deleteCourse(courseId);
	}

	@GetMapping("/admin/viewCourse/{courseId}")
	public CourseModel viewCourse(@PathVariable int courseId) {

		return courseService.getCourseById(courseId);
	}
	
	@PostMapping("/admin/addInstitute")
	public InstituteModel addInstitute(@RequestBody InstituteModel instituteModel) {

		return instituteService.addInstitute(instituteModel);
	}

	@GetMapping("/admin/viewInstitutes")
	public ArrayList<InstituteModel> viewInstitutes() {

		return instituteService.viewInstitutes();
	}

	@PutMapping("/admin/editInstitute/{instituteId}")
	public InstituteModel editInstitute(@RequestBody InstituteModel instituteModel, @PathVariable int instituteId) {

		return instituteService.editInstitute(instituteModel, instituteId);
	}

	@DeleteMapping("/admin/deleteInstitute/{instituteId}")
	public String deleteInstitute(@PathVariable int instituteId) {

		return instituteService.deleteInstitute(instituteId);
	}

	@PostMapping("/admin/addStudent")
	public StudentModel addStudent(@RequestBody StudentModel studentModel) {

		return studentService.addStudent(studentModel);
	}

	@GetMapping("/admin/viewStudents")
	public ArrayList<StudentModel> viewStudents() {

		return studentService.viewStudents();
	}

	@PutMapping("/admin/editStudent/{studentId}")
	public StudentModel editStudent(@RequestBody StudentModel studentModel, @PathVariable int studentId) {

		return studentService.editStudent(studentModel, studentId);
	}

	@DeleteMapping("/admin/deleteStudent/{studentId}")
	public String deleteStudent(@PathVariable int studentId) {

		return studentService.deleteStudent(studentId);
	}

}
/*
 * { "courseName":"java", "courseDescription":"java full stack development",
 * "courseDuration":"60"
 * 
 * { "instituteName":"hcl", "instituteDescription":"company",
 * "instituteAddress":"hyd", "mobile":"9656659655", "email":"vir123@gmail.com"
 * 
 * { "studentName":"radha", "studentDOB":"2000-02-16", "address":"hyd",
 * "mobile":"9886698567", "age":"22", "email":"vasanthi12@gmail.com" } } }
 */
