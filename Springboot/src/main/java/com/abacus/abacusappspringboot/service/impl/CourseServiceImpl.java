package com.abacus.abacusappspringboot.service.impl;

	import java.util.ArrayList;
	import java.util.Optional;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;

	import com.abacus.abacusappspringboot.model.CourseModel;
	import com.abacus.abacusappspringboot.repository.CourseRepository;
	import com.abacus.abacusappspringboot.service.CourseService;

	@Service
	public class CourseServiceImpl implements CourseService {

		@Autowired
		CourseRepository courseRepository;
		
		@Override
		public CourseModel addCourse(CourseModel courseModel) {
			return courseRepository.save(courseModel);
		}

		@Override
		public ArrayList<CourseModel> viewCourses() {
			return (ArrayList<CourseModel>) courseRepository.findAll();
		}

		@Override
		public CourseModel editCourse(CourseModel courseModel,int courseId) {
			
			CourseModel existingCourse=getCourseById(courseId);
			
			if(existingCourse!=null) {
				existingCourse.setCourseName(courseModel.getCourseName());
				existingCourse.setCourseDescription(courseModel.getCourseDescription());
				existingCourse.setCourseDuration(courseModel.getCourseDuration());
			}
			return courseRepository.save(existingCourse);
		}

		@Override
		public String deleteCourse(int courseId) {
			
			CourseModel courseModel=getCourseById(courseId);
			
			if(courseModel!=null) {
				
				courseRepository.deleteById(courseId);
				
				return "Course is deleted successfully";
			}else {
				return "data does'nt exists with given id : "+courseId;
			}
				
		}

		@Override
		public CourseModel getCourseById(int courseId) {

			Optional<CourseModel> optional=courseRepository.findById(courseId);
			
			return optional.get();
		}

}
