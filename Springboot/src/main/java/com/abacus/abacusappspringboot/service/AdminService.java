package com.abacus.abacusappspringboot.service;

	import com.abacus.abacusappspringboot.model.AdminModel;

	public interface AdminService {

		AdminModel saveAdmin(AdminModel adminModel);
		
		boolean adminLogin(String email,String password);
	}



