$(document).ready(function(){
    
    // Function to clear Email Form
    function clearForm() {
        $('#emailForm').reset()
        $('.form-control').clear()
    }
    
    
    
    // EVENT LISTENERS----------------------------------------------
    $('.send-email-button').on('click', function() {
        clearForm()
    })
  });