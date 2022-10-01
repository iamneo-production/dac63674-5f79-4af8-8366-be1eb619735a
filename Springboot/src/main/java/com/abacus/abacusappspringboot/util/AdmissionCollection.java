package com.abacus.abacusappspringboot.util;

	import com.abacus.abacusappspringboot.model.AdmissionModel;
	import com.abacus.abacusappspringboot.model.CourseModel;
	import com.abacus.abacusappspringboot.model.InstituteModel;
	import com.abacus.abacusappspringboot.model.StudentModel;

	public class AdmissionCollection {

		public AdmissionModel collectDetails(AdmissionModel admissionModel,InstituteModel instituteModel,CourseModel courseModel,StudentModel studentModel) {
			
			AdmissionModel newAdmission=new AdmissionModel();
			newAdmission.setCourseName(courseModel.getCourseName());
			newAdmission.setMobileNumber(studentModel.getMobile());
			newAdmission.setStudentEmail(studentModel.getEmail());
			newAdmission.setStudentName(studentModel.getStudentName());
			newAdmission.setInstituteName(instituteModel.getInstituteName());
			newAdmission.setInstituteLocation(instituteModel.getInstituteAddress());
			
			return newAdmission;
		}

}
