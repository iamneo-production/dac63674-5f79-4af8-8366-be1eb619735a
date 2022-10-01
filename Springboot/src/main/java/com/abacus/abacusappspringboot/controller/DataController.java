package com.abacus.abacusappspringboot.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.abacus.abacusappspringboot.model.CourseModel;
import com.abacus.abacusappspringboot.model.InstituteModel;
import com.abacus.abacusappspringboot.model.StudentModel;
import com.abacus.abacusappspringboot.service.CourseService;
import com.abacus.abacusappspringboot.service.InstituteService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class DataController {

	@Autowired
	InstituteService instituteService;

	@Autowired
	CourseService courseService;

	@PostMapping("/enrollInstitute/{instituteId}")
	public String enrollInstitute(@PathVariable int instituteId, HttpServletRequest req) {

		InstituteModel instituteModel = instituteService.getInstitute(instituteId);
		HttpSession session = req.getSession();
		session.setAttribute("institute", instituteModel);

		return "Institute is selected";
	}

	@PostMapping("/enrollCourse/{courseId}")
	public String enrollCourse(@PathVariable int courseId, HttpServletRequest req) {

		CourseModel courseModel = courseService.getCourseById(courseId);
		HttpSession session = req.getSession();
		session.setAttribute("course", courseModel);

		return "Course is selected";
	}

	@PostMapping("/enroll")
	public String enrollStudent(@RequestBody StudentModel studentModel, HttpServletRequest req) {

		HttpSession session = req.getSession();
		session.setAttribute("student", studentModel);

		return "Admission is enrolled";
	}
}
