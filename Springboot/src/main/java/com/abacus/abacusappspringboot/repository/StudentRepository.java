package com.abacus.abacusappspringboot.repository;

	import org.springframework.data.jpa.repository.JpaRepository;

	import com.abacus.abacusappspringboot.model.StudentModel;

	public interface StudentRepository extends JpaRepository<StudentModel, Integer> {

	}


