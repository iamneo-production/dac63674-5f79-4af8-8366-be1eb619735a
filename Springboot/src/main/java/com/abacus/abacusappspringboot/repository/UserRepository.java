package com.abacus.abacusappspringboot.repository;

	import org.springframework.data.jpa.repository.JpaRepository;

	import com.abacus.abacusappspringboot.model.UserModel;

	public interface UserRepository extends JpaRepository<UserModel, Integer> {

		boolean existsByEmailAndPassword(String email,String password);

	}


