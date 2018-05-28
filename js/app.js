$(() => {
	console.log('JS works');
	const $results = $('.results');	
	const $populateForm = $('#populateForm');
	$results.hide();

	// Form input constants

	const $input_first_name = $('#input_first_name'); 
	const $input_last_name = $('#input_last_name'); 
	const $input_img_link = $('#input_img_link'); 
	const $input_age = $('#input_age'); 
	const $input_height = $('#input_height'); 
	const $input_dob = $('#input_dob'); 
	const $input_dob_month = $('#input_dob_month'); 
	const $input_next_of_kin_1 = $('#input_next_of_kin_1'); 
	const $input_next_of_kin_2 = $('#input_next_of_kin_2'); 
	const $input_residence = $('#input_residence'); 
	const $input_place_of_birth = $('#input_place_of_birth'); 
	const $input_primary_specialisations_1 = $('#input_primary_specialisations_1'); 
	const $input_primary_specialisations_2 = $('#input_primary_specialisations_2'); 
	const $input_primary_specialisations_3 = $('#input_primary_specialisations_3'); 
	const $input_additional_skills_1 = $('#input_additional_skills_1'); 
	const $input_additional_skills_2 = $('#input_additional_skills_2'); 
	const $input_additional_skills_3 = $('#input_additional_skills_3'); 
	const $input_languages_1 = $('#input_languages_1'); 
	const $input_languages_2 = $('#input_languages_2'); 
	const $iconstnput_languages_3 = $('#iconstnput_languages_3'); 
	const $input_languages_4 = $('#input_languages_4'); 
	const $input_mentors_1 = $('#input_mentors_1'); 
	const $input_mentors_2 = $('#input_mentors_2'); 
	const $input_mentors_3 = $('#input_mentors_3'); 
	const $input_additional_info_1 = $('#input_additional_info_1'); 
	const $input_additional_info_2 = $('#input_additional_info_2'); 
	const $input_additional_info_3 = $('#input_additional_info_3'); 
	const $input_organisation = $('#input_organisation'); 
	const $input_position = $('#input_position'); 
	const $input_discredit = $('#input_discredit'); 

// result constants

	const $ref_img_link = $('#ref_img_link');
	const $first_name = $('#first_name');
	const $last_name = $('#last_name');
	const $rank = $('#rank');
	const $age = $('#age');
	const $height = $('#height');
	const $dob = $('#dob');
	const $dob_month = $('#dob_month');
	const $next_of_kin_1 = $('#next_of_kin_1');
	const $next_of_kin_2 = $('#next_of_kin_2');
	const $residence = $('#residence');
	const $place_of_birth = $('#place_of_birth');
	const $primary_specialisations_1 = $('#primary_specialisations_1');
	const $primary_specialisations_2 = $('#primary_specialisations_2');
	const $primary_specialisations_3 = $('#primary_specialisations_3');
	const $additional_skills_1 = $('#additional_skills_1');
	const $additional_skills_2 = $('#additional_skills_2');
	const $additional_skills_3 = $('#additional_skills_3');
	const $languages_1 = $('#languages_1');
	const $languages_2 = $('#languages_2');
	const $languages_3 = $('#languages_3');
	const $languages_4 = $('#languages_4');
	const $mentors_1 = $('#mentors_1');
	const $mentors_2 = $('#mentors_2');
	const $mentors_3 = $('#mentors_3');
	const $additional_info_1 = $('#additional_info_1');
	const $additional_info_2 = $('#additional_info_2');
	const $additional_info_3 = $('#additional_info_3');
	const $organisation = $('#organisation');
	const $position = $('#position');


	$populateForm.on('click', ()=> {
		console.log('click')
		$results.show();
		console.log($input_first_name.val());
		$ref_img_link.text($input_first_name.val());
		$first_name.text($input_last_name.val());
		$last_name.text($input_img_link.val());
		$rank.text($input_age.val());
		$age.text($input_height.val());
		$height.text($input_dob.val());
		$dob.text($input_dob_month.val());
		$dob_month.text($input_next_of_kin_1.val());
		$next_of_kin_1.text($input_next_of_kin_2.val());
		$next_of_kin_2.text($input_residence.val());
		$residence.text($input_place_of_birth.val());
		$place_of_birth.text($input_primary_specialisations_1.val());
		$primary_specialisations_1.text($input_primary_specialisations_2.val());
		$primary_specialisations_2.text($input_primary_specialisations_3.val());
		$primary_specialisations_3.text($input_additional_skills_1.val());
		$additional_skills_1.text($input_additional_skills_2.val());
		$additional_skills_2.text($input_additional_skills_3.val());
		$additional_skills_3.text($input_languages_1.val());
		$languages_1.text($input_languages_2.val());
		$languages_2.text($iconstnput_languages_3.val());
		$languages_3.text($input_languages_4.val());
		$languages_4.text($input_mentors_1.val());
		$mentors_1.text($input_mentors_2.val());
		$mentors_2.text($input_mentors_3.val());
		$mentors_3.text($input_additional_info_1.val());
		$additional_info_1.text($input_additional_info_2.val());
		$additional_info_2.text($input_additional_info_3.val());
		$additional_info_3.text($input_organisation.val());
		$organisation.text($input_position.val());
		$position.text($input_discredit.val());
	});
});