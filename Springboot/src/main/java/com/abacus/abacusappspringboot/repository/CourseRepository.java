package com.abacus.abacusappspringboot.repository;

	import org.springframework.data.jpa.repository.JpaRepository;

	import com.abacus.abacusappspringboot.model.CourseModel;

	public interface CourseRepository extends JpaRepository<CourseModel, Integer> {

	}



