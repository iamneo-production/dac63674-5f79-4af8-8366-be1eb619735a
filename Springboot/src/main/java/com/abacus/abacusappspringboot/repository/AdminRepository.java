package com.abacus.abacusappspringboot.repository;

	import org.springframework.data.jpa.repository.JpaRepository;
	import com.abacus.abacusappspringboot.model.AdminModel;

	public interface AdminRepository extends JpaRepository<AdminModel, Integer> {

		boolean existsByEmailAndPassword(String email,String password);
	}



