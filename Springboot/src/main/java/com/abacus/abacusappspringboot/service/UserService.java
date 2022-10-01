package com.abacus.abacusappspringboot.service;

	import com.abacus.abacusappspringboot.model.UserModel;

	public interface UserService {

		UserModel saveUser(UserModel userModel);
		
		boolean userLogin(String email,String password);
	}



