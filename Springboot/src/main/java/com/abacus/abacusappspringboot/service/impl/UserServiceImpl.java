package com.abacus.abacusappspringboot.service.impl;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;

	import com.abacus.abacusappspringboot.model.UserModel;
	import com.abacus.abacusappspringboot.repository.UserRepository;
	import com.abacus.abacusappspringboot.service.UserService;

	@Service
	public class UserServiceImpl implements UserService {

		@Autowired
		UserRepository userRepository;
		
		@Override
		public UserModel saveUser(UserModel userModel) {

			return userRepository.save(userModel);
		}

		@Override
		public boolean userLogin(String email, String password) {

			return userRepository.existsByEmailAndPassword(email, password);
		}

}
