

// timeout modal script to load / unload

(function() {

  'use strict'

  // list out the vars
  var mOverlayTimeout = getId('modal_window_timeout'),
    mOpenTimeout = getId('modal_open_timeout'),
    mCreateTimeout = getId('modal_create_timeout'),
    mCloseTimeout = getId('modal_close_timeout'),
    modalTimeout = getId('modal_holder_timeout'),
    allNodesTimeout = document.querySelectorAll("*"),
    modalOpenTimeout = false,
    lastFocus,
    i

  // wrap all this and check the modal is on the page first
  if (mOverlayTimeout !== null) {
    // Let's open the modal
    function modalShow ( event ) {
      event.preventDefault ? event.preventDefault() : event.returnValue = false
      lastFocus = document.activeElement
      mOverlayTimeout.setAttribute('aria-hidden', 'false')
      modalOpenTimeout = true
      modalTimeout.setAttribute('tabindex', '0')
      modalTimeout.forms[0].elements[0].focus()
      modalTimeout.focus()
      mOverlayTimeout.scrollTop(0)
    }

    // binds to both the button click and the escape key to close the modal window
    // but only if modalOpen is set to true
    function modalClose ( event ) {
      if (modalOpenTimeout && ( !event.keyCode || event.keyCode === 27 ) ) {
        mOverlayTimeout.setAttribute('aria-hidden', 'true')
        modalTimeout.setAttribute('tabindex', '-1')
        event.preventDefault()
        modalOpenTimeout = false
        lastFocus.focus()
      }
    }

    // Restrict focus to the modal window when it's open.
    // Tabbing will just loop through the whole modal.
    // Shift + Tab will allow backup to the top of the modal,
    // and then stop.
    function focusRestrict ( event ) {
      if (modalOpenTimeout && !modalTimeout.contains( event.target ) ) {
        event.stopPropagation()
        modalTimeout.focus()
      }
    }

    // Close modal window by clicking on the overlay
    mOverlayTimeout.addEventListener('click', function( e ) {
      if (e.target == modalTimeout.parentNode) {
        modalClose( e )
      }
    }, false)

    // open modal by btn click/hit
    mCreateTimeout.addEventListener('click', modalShow, false)
    // close modal by btn click/hit
    mCloseTimeout.addEventListener('click', modalClose)

    // close modal by keydown, but only if modal is open
    document.addEventListener('keydown', modalClose)

    // restrict tab focus on elements only inside modal window
    for (i = 0; i < allNodesTimeout.length; i++) {
      allNodesTimeout.item(i).addEventListener('focus', focusRestrict)
    }
  }

  // Let's cut down on what we need to type to get an ID
  function getId ( id ) {
    return document.getElementById(id)
  }

  function DeleteRow() {
    // event.target will be the input element.
    var td = event.target.parentNode; 
    var tr = td.parentNode; // the row to be removed
    tr.parentNode.removeChild(tr);
}

})()