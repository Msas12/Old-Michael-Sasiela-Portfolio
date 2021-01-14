$(document).ready(function(){

    // initializes dark theme if switch is toggled to dark
    function darkTheme() {
        $(".navbar, .card").addClass('bg-dark')
        $('html, body').addClass('darkTheme')
    }

    // initializes dark theme if switch is toggled to light
    function lightTheme() {
        $(".navbar, .card").removeClass('bg-dark')
        $('html, body').removeClass('darkTheme')
    }

    // Event Listener switches darkToggle to lightToggle or lightToggle to darkToggle
    $('#flexSwitchCheckDefault, #flexSwitchCheckChecked').on('click', function (){
        if ($('.checked').hasClass('d-none')) {

            $('.checked').removeClass('d-none')
            $('.default').addClass('d-none')
            $('.form-check-input').attr("checked", "checked")

            darkTheme()
        } else {
            $('.default').removeClass('d-none')
            $('.checked').addClass('d-none')
            $('.form-check-input').removeAttr("checked", "checked")

            lightTheme()   
        }
    })


    $('#flexSwitchCheckDefault').on( 'change', function() {
        localStorage.setItem('dark',this.checked);
        if(this.checked) {
            $(".navbar, .card").addClass('bg-dark')
            $('html, body').addClass('darkTheme')
            $('.form-check-input').attr("checked", "checked")

        } else {
            $(".navbar, .card").removeClass('bg-dark')
            $('html, body').removeClass('darkTheme') 
            $('.form-check-input').removeAttr("checked", "checked")

        }
   });

   if(localStorage.getItem('dark')) {
    $(".navbar, .card").addClass('bg-dark')
    $('html, body').addClass('darkTheme')
    $('.form-check-input').attr("checked", "checked")
    }   
    
    
    // // EVENT LISTENERS
    // $('.send-email-button').on('click', function() {
    //     clearForm()
    // })

  });