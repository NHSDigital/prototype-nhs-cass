// modal window
(function() {

    'use strict'
  
    // list out the vars
    var mOverlay = getId('modal_window'),
      mOpen = getId('modal_open'),
      mCreate = getId('modal_create'),
      mClose = getId('modal_close'),
      modal = getId('modal_holder'),
      emailField = getId('emailAddress'),
      allNodes = document.querySelectorAll("*"),
      modalOpen = false,
      lastFocus,
      i
  
    // wrap all this and check the modal is on the page first
    if (mOverlay !== null) {
      // Let's open the modal
      function modalShow ( event ) {
        event.preventDefault ? event.preventDefault() : event.returnValue = false
        lastFocus = document.activeElement
        mOverlay.setAttribute('aria-hidden', 'false')
        modalOpen = true
        modal.setAttribute('tabindex', '0')
        modal.forms[0].elements[0].focus()
        modal.focus()
        mOverlay.scrollTop(0)
        emailField.focus()
      }
  
      // binds to both the button click and the escape key to close the modal window
      // but only if modalOpen is set to true
      function modalClose ( event ) {
        if (modalOpen && ( !event.keyCode || event.keyCode === 27 ) ) {
          mOverlay.setAttribute('aria-hidden', 'true')
          modal.setAttribute('tabindex', '-1')
          event.preventDefault()
          modalOpen = false
          lastFocus.focus()
        }
      }
  
      // Restrict focus to the modal window when it's open.
      // Tabbing will just loop through the whole modal.
      // Shift + Tab will allow backup to the top of the modal,
      // and then stop.
      function focusRestrict ( event ) {
        if (modalOpen && !modal.contains( event.target ) ) {
          event.stopPropagation()
          modal.focus()
        }
      }
  
      // Close modal window by clicking on the overlay
      mOverlay.addEventListener('click', function( e ) {
        if (e.target == modal.parentNode) {
          modalClose( e )
        }
      }, false)
  
      // open modal by btn click/hit
      // mOpen.addEventListener('click', modalShow)
      mCreate.addEventListener('click', modalShow, false)
      // close modal by btn click/hit
      mClose.addEventListener('click', modalClose)
  
      // close modal by keydown, but only if modal is open
      document.addEventListener('keydown', modalClose)
  
      // restrict tab focus on elements only inside modal window
      for (i = 0; i < allNodes.length; i++) {
        allNodes.item(i).addEventListener('focus', focusRestrict)
      }
    }
  
    // Let's cut down on what we need to type to get an ID
    function getId ( id ) {
      return document.getElementById(id)
    }
  })()


// ES6 or Vanilla JavaScript

// Delete table row (used on check-condition-group page)

function DeleteRow() {
    // event.target will be the input element.
    var td = event.target.parentNode; 
    var tr = td.parentNode; // the row to be removed
    tr.parentNode.removeChild(tr);
}

// Delete summary list row (used on check-condition-group page)

function DeleteSummaryRow() {
    // event.target will be the input element.
    var dt = event.target.parentNode; 
    var dd = dt.parentNode; // the row to be removed
    dd.parentNode.removeChild(dd);
}

// uncheck radio when checkbox is selected

function deSelectRadio() {
    document.querySelector('input[name="sex-at-birth"]:checked').checked = false;
}

// uncheck radio when checkbox is selected

function deSelectCheckbox() {
    document.querySelector('input[name="not-applicable-sex"]:checked').checked = false;
}

// Check every ethnicity checkbox when all is selected

function toggle(source) {
    var checkboxes = document.querySelectorAll(
        'input[name="ethnicity"], input[name="ethnicity-asian-1"], input[name="ethnicity-asian-2"], input[name="ethnicity-asian-3"], input[name="ethnicity-asian-4"], input[name="ethnicity-asian-5"], input[name="ethnicity-black-1"],input[name="ethnicity-black-2"], input[name="ethnicity-black-3"], input[name="ethnicity-mixed-1"], input[name="ethnicity-mixed-2"], input[name="ethnicity-mixed-3"], input[name="ethnicity-mixed-4"], input[name="ethnicity-white-1"], input[name="ethnicity-white-2"], input[name="ethnicity-white-3"], input[name="ethnicity-white-4"], input[name="ethnicity-white-5"], input[name="ethnicity-other-1"], input[name="ethnicity-other-2"] ');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != source)
            checkboxes[i].checked = source.checked;
    }
}

// status changes

document.getElementById("supporting-info").addEventListener("submit", function(e){
   e.preventDefault();  //prevent form submission
   window.location.href = "cohort-editor?class=nhsuk-tag--grey";
});

// demographics

function deSelectMinAge() {
    document.querySelector('input[name="not-applicable-min-age"]:checked').checked = false;
}

function selectMinAge() {
    document.getElementById("age-min-months").value = "";
    document.getElementById("age-min-years").value = "";
}

function deSelectMaxAge() {
    document.querySelector('input[name="not-applicable-max-age"]:checked').checked = false;
}

function selectMaxAge() {
    document.getElementById("age-max-months").value = "";
    document.getElementById("age-max-years").value = "";
}


// errors
function error1() {
    // Check if the button already has the "clicked" class
    if (document.getElementById("info-tag").classList.contains("nhsuk-tag--grey")) {
        window.location.href = "#error-summary";
        document.getElementById("error-summary").style.display = "block";
        document.getElementById("error-message").classList.add("nhsuk-error-message");
        document.getElementById("error-section").classList.add("nhsuk-form-group--error");
    } else {
        window.location.href = "check-cohort";
    }
}