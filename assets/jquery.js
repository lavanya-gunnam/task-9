$(document).ready(function() {
  // click event  for submit button
  $('#submitBtn').on('click', function() {
 
      submitValidation();
     
  });
  // form field validation
  function submitValidation() {
    
      const username = $('#username').val();
      const email = $('#inputEmail').val();
      const pnumber = $('#inputphonenumber').val();
      const dob = $('#dateOfBirth').val();
      const password = $('#exampleInputPassword1').val();
      const password1 = $('#exampleInputPassword2').val();
      const male = $('#male');
      const female = $('#female');
      const country = $('#country').val();
      const checkbox = $('#flexCheckChecked');

      if (userfunction(username)) {
          if (emailfunction(email)) {
              if (phonefunction(pnumber)) {
                  if (datefunction(dob)) {
                      if (passwfunction(password)) {
                          if(cpasswfunction(password, password1)) {
                              if (genderfunction(male, female)) {
                                  if (countryfunction(country)) {
                                      if (boxfunction(checkbox)) {
                                          // Reset form fields on successful submission
                                          resetFormFields();
                                          // Reload page after 4 seconds 
                                          setTimeout(function () {
                                              window.location.reload();
                                          }, 4000);
                                          // display popup msg
                                          $('#popupMsg').css('display', 'block');
                                      } 
                                  } else {
                                      $('#checkErr').css('display', 'none');
                                   
                                  }
                              } else {
                                  $('#countryErr').css('display', 'none');
                                  $('#country').css('borderColor', 'black');
                              }
                          } else {
                            
                             
                              $('#countryErr').css('display', 'none');
                              $('#country').css('borderColor', 'black');
                          }
                      } else {
                          $('#genderErr').css('display', 'none');
                        
                          $('#exampleInputPassword2').css('borderColor', 'black');
                          $('#countryErr').css('display', 'none');
                          $('#country').css('borderColor', 'black');
                      }
                  } else {
                      $('#passwordErr').css('display', 'none');
                      $('#exampleInputPassword1').css('borderColor', 'black');
                      $('#genderErr').css('display', 'none');
                      $('#password2Err').css('display', 'none');
                      $('#exampleInputPassword2').css('borderColor', 'black');
                      $('#countryErr').css('display', 'none');
                      $('#country').css('borderColor', 'black');
                  }
              } else {
                  $('#dateOfBirthrErr').css('display', 'none');
                  $('#dateOfBirth').css('borderColor', 'black');
                  $('#passwordErr').css('display', 'none');
                  $('#exampleInputPassword1').css('borderColor', 'black');
                  $('#password2Err').css('display', 'none');
                  $('#exampleInputPassword2').css('borderColor', 'black');
                  $('#genderErr').css('display', 'none');
                  $('#countryErr').css('display', 'none');
                  $('#country').css('borderColor', 'black');
              }
          } else {
              $('#phonenumberErr').css('display', 'none');
              $('#inputphonenumber').css('borderColor', 'black');
              $('#dateOfBirthrErr').css('display', 'none');
              $('#dateOfBirth').css('borderColor', 'black');
              $('#passwordErr').css('display', 'none');
              $('#exampleInputPassword1').css('borderColor', 'black');
              $('#password2Err').css('display', 'none');
              $('#exampleInputPassword2').css('borderColor', 'black');
              $('#genderErr').css('display', 'none');
              $('#country').css('borderColor', 'black');
              $('#checkErr').css('display', 'none');
              $('#flexCheckChecked').css('borderColor', 'black');
          }
      } else {
          $('#emailErr').css('display', 'none');
          $('#inputEmail').css('borderColor', 'black');
          $('#phonenumberErr').css('display', 'none');
          $('#inputphonenumber').css('borderColor', 'black');
          $('#dateOfBirthrErr').css('display', 'none');
          $('#dateOfBirth').css('borderColor', 'black');
          $('#passwordErr').css('display', 'none');
          $('#exampleInputPassword1').css('borderColor', 'black');
          $('#password2Err').css('display', 'none');
          $('#exampleInputPassword2').css('borderColor', 'black');
          $('#genderErr').css('display', 'none');
          $('#male').css('borderColor', 'black');
          $('#female').css('borderColor', 'black');
          $('#country').css('borderColor', 'black');
          $('#countryErr').css('display', 'none');
          $('#checkErr').css('display', 'none');
          $('#flexCheckChecked').css('borderColor', 'black');
      }
  }
// user field
  function userfunction(username) {
      if (username.length <= 3 || /\d/.test(username)) {
          $('#username').css('borderColor', 'red');
          $('#usernameErr').css('display', 'block');
          userCheck = false;
          return false;
      } else {
          $('#username').css('borderColor', 'green');
          $('#usernameErr').css('display', 'none');
          userCheck = true;
          return true;
      }
  }
// email field
  function emailfunction(email) {
      const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (emailPattern.test(email)) {
          $('#inputEmail').css('borderColor', 'green');
          $('#emailErr').css('display', 'none');
          emailCheck = true;
          return true;
      } else {
          $('#inputEmail').css('borderColor', 'red');
          $('#emailErr').css('display', 'block');
          emailCheck = false;
          return false;
      }
  }
// phone field
  function phonefunction(pnumber) {
      const pnumberpattern = /^[6-9]\d{9}$/;
      if (pnumberpattern.test(pnumber)) {
          $('#inputphonenumber').css('borderColor', 'green');
          $('#phonenumberErr').css('display', 'none');
          phoneCheck = true;
          return true;
      } else {
          $('#inputphonenumber').css('borderColor', 'red');
          $('#phonenumberErr').css('display', 'block');
          phoneCheck = false;
          return false;
      }
  }
// date field
  function datefunction(dob) {
      if (dob == null || dob.trim() === '') {
          $('#dateOfBirth').css('borderColor', 'red');
          $('#dateOfBirthrErr').css('display', 'block');
          dateCheck = false;
          return false;
      } else {
          $('#dateOfBirth').css('borderColor', 'green');
          $('#dateOfBirthrErr').css('display', 'none');
          dateCheck = true;
          return true;
      }
  }

  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// password
  function passwfunction(password) {
    console.log("Original Password:", password);
      if (passwordPattern.test(password)) {
          $('#exampleInputPassword1').css('borderColor', 'green');
          $('#passwordErr').css('display', 'none');
          passwordCheck = true;
          return true;
      } else {
          $('#exampleInputPassword1').css('borderColor', 'red');
          $('#passwordErr').css('display', 'block');
          passwordCheck = false;
          return false;
      }
  }
// conform password
  function cpasswfunction(password, password1) {
      console.log("Original Password1:", password);
      console.log("Confirmed Password:", password1);
   
      if (password1 === password) {
    
          $('#exampleInputPassword2').css('borderColor', 'green');
          $('#password2Err').css('display', 'none');
          password2Check = true;
          return true;
      }
      else if(password1===''){
       
        $('#exampleInputPassword2').css('borderColor', 'red');
  
        $('#password2Err').css('display', 'block');
        password2Check = false;
        return false;
      } else if (password1 != password) {
       
          $('#exampleInputPassword2').css('borderColor', 'red');
          $('#password2Err').css('display', 'block');
          password2Check = false;
          return false;
      }
  }
// gender
  function genderfunction(male, female) {
    
      if (male.is(':checked') || female.is(':checked')) {
          $('#genderErr').css('display', 'none');
          mfCheck = true;
          return true;
      } else {
          $('#genderErr').css('display', 'block');
          mfCheck = false;
          return false;
      }
  }
// country
  function countryfunction(country) {
    console.log("country:", country);
    console.log("country type:", typeof country);

    if (country === null) {
      $('#country').css('borderColor', 'red');
      $('#countryErr').css('display', 'block');
      countryCheck = false;
      return false;
    } else {
       
        $('#country').css('borderColor', 'green');
        $('#countryErr').css('display', 'none');
        countryCheck = true;
        return true;
    }
}
// checkbox
  function boxfunction(checkbox) {
      if (!checkbox.is(':checked')) {
          checkbox.css('borderColor', 'red');
          $('#checkErr').css('display', 'block');
          check = false;
          return false;
      } else {
          checkbox.css('borderColor', 'green');
          $('#checkErr').css('display', 'none');
          check = true;
          return true;
      }
  }
  // reset form
  function resetFormFields() {
      // Reset form fields by setting values to empty
      const fieldIds = ['username', 'inputEmail', 'inputphonenumber', 'dateOfBirth', 'exampleInputPassword1', 'exampleInputPassword2',  'country' ];
      // male female checkbox fields to null
      $('#male').prop('checked', false);
      $('#female').prop('checked', false);
      $('#flexCheckChecked').prop('checked', false);
      fieldIds.forEach((id) => {
          $('#' + id).val('');
          $('#' + id).css('borderColor', 'black');
      });
  }
});







