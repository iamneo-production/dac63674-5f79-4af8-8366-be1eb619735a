package com.abacus.abacusappspringboot.model;

	import javax.persistence.Entity;
	import javax.persistence.GeneratedValue;
	import javax.persistence.GenerationType;
	import javax.persistence.Id;

	@Entity
	public class CourseModel {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private int courseId;
		private String courseName;
		private String courseDescription;
		private int courseDuration;
		public int getCourseId() {
			return courseId;
		}
		public void setCourseId(int courseId) {
			this.courseId = courseId;
		}
		public String getCourseName() {
			return courseName;
		}
		public void setCourseName(String courseName) {
			this.courseName = courseName;
		}
		public String getCourseDescription() {
			return courseDescription;
		}
		public void setCourseDescription(String courseDescription) {
			this.courseDescription = courseDescription;
		}
		public int getCourseDuration() {
			return courseDuration;
		}
		public void setCourseDuration(int courseDuration) {
			this.courseDuration = courseDuration;
		}
	}



