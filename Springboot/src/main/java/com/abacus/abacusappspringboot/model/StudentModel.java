package com.abacus.abacusappspringboot.model;

	import java.util.Date;

	import javax.persistence.Entity;
	import javax.persistence.GeneratedValue;
	import javax.persistence.GenerationType;
	import javax.persistence.Id;

	@Entity
	public class StudentModel {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private int studentId;
		private String studentName;
		private Date studentDOB;
		private String address;
		private String mobile;
		private int age;
		private String email;
		
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public int getStudentId() {
			return studentId;
		}
		public void setStudentId(int studentId) {
			this.studentId = studentId;
		}
		public String getStudentName() {
			return studentName;
		}
		public void setStudentName(String studentName) {
			this.studentName = studentName;
		}
		public Date getStudentDOB() {
			return studentDOB;
		}
		public void setStudentDOB(Date studentDOB) {
			this.studentDOB = studentDOB;
		}
		public String getAddress() {
			return address;
		}
		public void setAddress(String address) {
			this.address = address;
		}
		public String getMobile() {
			return mobile;
		}
		public void setMobile(String mobile) {
			this.mobile = mobile;
		}
		public int getAge() {
			return age;
		}
		public void setAge(int age) {
			this.age = age;
		}
}