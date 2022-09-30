package com.abacus.abacusappspringboot.service.impl;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;

	import com.abacus.abacusappspringboot.model.AdminModel;
	import com.abacus.abacusappspringboot.repository.AdminRepository;
	import com.abacus.abacusappspringboot.service.AdminService;

	@Service
	public class AdminServiceImpl implements AdminService {

		@Autowired
		AdminRepository adminRepository;
		
		@Override
		public AdminModel saveAdmin(AdminModel adminModel) {

			return adminRepository.save(adminModel);
		}

		@Override
		public boolean adminLogin(String email, String password) {

			return adminRepository.existsByEmailAndPassword(email, password);
		}
}



