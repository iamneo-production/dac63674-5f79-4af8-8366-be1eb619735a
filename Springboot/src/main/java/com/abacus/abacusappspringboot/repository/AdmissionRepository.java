package com.abacus.abacusappspringboot.repository;

	import org.springframework.data.jpa.repository.JpaRepository;

	import com.abacus.abacusappspringboot.model.AdmissionModel;

	public interface AdmissionRepository extends JpaRepository<AdmissionModel, Integer> {

}



