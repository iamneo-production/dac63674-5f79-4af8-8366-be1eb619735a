package com.abacus.abacusappspringboot.service.impl;

	import java.util.ArrayList;
	import java.util.Optional;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;

	import com.abacus.abacusappspringboot.model.InstituteModel;
	import com.abacus.abacusappspringboot.repository.InstituteRepository;
	import com.abacus.abacusappspringboot.service.InstituteService;

	@Service
	public class InstituteServiceImpl implements InstituteService {

		@Autowired
		InstituteRepository instituteRepository;
		
		@Override
		public InstituteModel addInstitute(InstituteModel instituteModel) {

			return instituteRepository.save(instituteModel);
		}

		@Override
		public ArrayList<InstituteModel> viewInstitutes() {

			return (ArrayList<InstituteModel>) instituteRepository.findAll();
		}

		@Override
		public InstituteModel editInstitute(InstituteModel instituteModel, int instituteId) {

			InstituteModel existingInstitute=getInstitute(instituteId);
			
			if(existingInstitute!=null) {
				existingInstitute.setMobile(instituteModel.getMobile());
				existingInstitute.setEmail(instituteModel.getEmail());
				existingInstitute.setInstituteAddress(instituteModel.getInstituteAddress());
				existingInstitute.setInstituteDescription(instituteModel.getInstituteDescription());
				existingInstitute.setInstituteName(instituteModel.getInstituteName());
				
				return instituteRepository.save(existingInstitute);
			}
			
			return null;
		}

		@Override
		public String deleteInstitute(int instituteId) {

			InstituteModel instituteModel=getInstitute(instituteId);
			
			instituteRepository.delete(instituteModel);
			
			return "Institute deleted successfully";
		}

		@Override
		public InstituteModel getInstitute(int instituteId) {

			Optional<InstituteModel> optional=instituteRepository.findById(instituteId);
			
			return optional.get();
		}

}
