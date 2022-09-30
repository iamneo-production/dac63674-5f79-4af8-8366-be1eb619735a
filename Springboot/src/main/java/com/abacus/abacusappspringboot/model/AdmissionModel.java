package com.abacus.abacusappspringboot.model;

	import javax.persistence.Entity;
	import javax.persistence.GeneratedValue;
	import javax.persistence.GenerationType;
	import javax.persistence.Id;

	@Entity
	public class AdmissionModel {

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private int admissionId;
		private String studentName;
		private String mobileNumber;
		private String courseName;
		private String studentEmail;
		private String instituteName;
		private String instituteLocation;
		
		public int getAdmissionId() {
			return admissionId;
		}
		public void setAdmissionId(int admissionId) {
			this.admissionId = admissionId;
		}
		public String getStudentName() {
			return studentName;
		}
		public void setStudentName(String studentName) {
			this.studentName = studentName;
		}
		public String getMobileNumber() {
			return mobileNumber;
		}
		public void setMobileNumber(String mobileNumber) {
			this.mobileNumber = mobileNumber;
		}
		public String getCourseName() {
			return courseName;
		}
		public void setCourseName(String courseName) {
			this.courseName = courseName;
		}
		public String getStudentEmail() {
			return studentEmail;
		}
		public void setStudentEmail(String studentEmail) {
			this.studentEmail = studentEmail;
		}
		public String getInstituteName() {
			return instituteName;
		}
		public void setInstituteName(String instituteName) {
			this.instituteName = instituteName;
		}
		public String getInstituteLocation() {
			return instituteLocation;
		}
		public void setInstituteLocation(String instituteLocation) {
			this.instituteLocation = instituteLocation;
		}
}



