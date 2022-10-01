package com.abacus.abacusappspringboot.service;


	import java.util.ArrayList;

	import com.abacus.abacusappspringboot.model.InstituteModel;

	public interface InstituteService {

		InstituteModel addInstitute(InstituteModel instituteModel);
		
		ArrayList<InstituteModel> viewInstitutes();
		
		InstituteModel editInstitute(InstituteModel instituteModel,int instituteId);
		
		String deleteInstitute(int instituteId);
		
		InstituteModel getInstitute(int instituteId);
	}



