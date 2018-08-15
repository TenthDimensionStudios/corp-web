$(document).ready(function(){

   // for stick #forHomeMenu 
          var menu = document.querySelector('#forHomeMenu');
            var origOffsetY = menu.offsetTop;

            function scroll() {
                if ($(window).scrollTop() > origOffsetY) {
                    $('#forHomeMenu').addClass('sticky');
                    $('.content').addClass('menu-padding');
                    $('#body').addClass('stickyBody');
                } else {
                    $('#forHomeMenu').removeClass('sticky');
                    $('.content').removeClass('menu-padding');
                    $('#body').removeClass('stickyBody');
                }
            }

            document.onscroll = scroll;

      // hide #back-top first
      //$(".forHomeMenu").hide();
      //$(".getPageContent").hide();


      /* When users click on different flags */

      
      
      $('.languageSelector').click(function(){
        
        $(".languageMenu").addClass("slideOutLeft").delay( 800 ).hide("slow");
        $(".logoTenth").addClass("pulse");
        
        $(".forHomeMenu").show("");
        $(".getPageContent").show("");


      });

      /*** For different languages **/
      $('#esLanguage').click(function() {
            
            $('#body').addClass('esLanguage');
            
            $('#body').removeClass('frLanguage');
            $('#body').removeClass('roLanguage');
            $('#body').removeClass('enLanguage');
            $('#body').removeClass('ruLanguage');
            $('#body').removeClass('deLanguage');
            $('#body').removeClass('chLanguage');
            
      });
      // -----------------------------------------

      $('#frLanguage').click(function() {
            
            $('#body').addClass('frLanguage');
            
            $('#body').removeClass('esLanguage');
            $('#body').removeClass('roLanguage');
            $('#body').removeClass('enLanguage');
            $('#body').removeClass('ruLanguage');
            $('#body').removeClass('deLanguage');
            $('#body').removeClass('chLanguage');
            
      });
      // -----------------------------------------
      $('#roLanguage').click(function() {
            
            $('#body').addClass('roLanguage');
            
            $('#body').removeClass('esLanguage');
            $('#body').removeClass('frLanguage');
            $('#body').removeClass('enLanguage');
            $('#body').removeClass('ruLanguage');
            $('#body').removeClass('deLanguage');
            $('#body').removeClass('chLanguage');
            
      });
      // -----------------------------------------
      $('#enLanguage').click(function() {
            
            $('#body').addClass('enLanguage');
            
            $('#body').removeClass('esLanguage');
            $('#body').removeClass('frLanguage');
            $('#body').removeClass('roLanguage');
            $('#body').removeClass('ruLanguage');
            $('#body').removeClass('deLanguage');
            $('#body').removeClass('chLanguage');
            
      });
      // -----------------------------------------
      $('#ruLanguage').click(function() {
            
            $('#body').addClass('ruLanguage');
            
            $('#body').removeClass('enLanguage');
            $('#body').removeClass('esLanguage');
            $('#body').removeClass('frLanguage');
            $('#body').removeClass('roLanguage');
            $('#body').removeClass('deLanguage');
            $('#body').removeClass('chLanguage');
            
      });
      // -----------------------------------------
      $('#deLanguage').click(function() {
            
            $('#body').addClass('deLanguage');
            
            $('#body').removeClass('ruLanguage');
            $('#body').removeClass('enLanguage');
            $('#body').removeClass('esLanguage');
            $('#body').removeClass('frLanguage');
            $('#body').removeClass('roLanguage');
            $('#body').removeClass('chLanguage');
            
      });
      // -----------------------------------------
      $('#chLanguage').click(function() {
            
            $('#body').addClass('chLanguage');
            
            $('#body').removeClass('frLanguage');
            $('#body').removeClass('roLanguage');
            $('#body').removeClass('enLanguage');
            $('#body').removeClass('ruLanguage');
            $('#body').removeClass('deLanguage');
            $('#body').removeClass('esLanguage');
            
      });
      // -----------------------------------------

    });