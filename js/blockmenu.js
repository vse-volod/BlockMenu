$(document).ready(function() {
    var firststate = false;
    var secondstate = false;
    var thirdstate = false;
    var isCollapsed = false;
    var delayTime = 800;
    var transitionEvent = whichTransitionEvent();
    //block variables
    var firstBlock = "#firstBlock";
    var secondBlock = "#secondBlock";
    var thirdBlock = "#thirdBlock";
    //block text variables
    var firstBlockText = "#firstBlockText"; //left text menu block id
    var secondBlockText = "#secondBlockText"; //middle text menu block id
    var thirdBlockText = "#thirdBlockText"; //right text menu block id

    function whichTransitionEvent() {
        var t, el = document.createElement("fakeelement");
        var transitions = {
            "transition"      : "transitionend",
            "OTransition"     : "oTransitionEnd",
            "MozTransition"   : "transitionend",
            "WebkitTransition": "webkitTransitionEnd"
          }

        for (t in transitions) {
            if (el.style[t] !== undefined){
              return transitions[t];
            }
        }
    }

    $(firstBlock).click(function() {
        $(this).one(transitionEvent,
            function() {
                $(this).removeClass("animate");
            });
        if ($(firstBlock).hasClass('animate')) {
            console.log('animated');
            return false;
        }
        else if (isCollapsed && !firststate) {
            firststate = true;
            secondstate = false;
            thirdstate = false;
            changeState(1);
            console.log("1 state on!");
            //1st state on
        }
        else if (isCollapsed && firststate) {
            collapseMenu();
            firststate = false;
            changeState(1);
            console.log("1 state off!");
            //1st state off
        }
        else if (!isCollapsed) {
            collapseMenu();
            $(this).addClass("animate");
            firststate = true;
            changeState(1);
            console.log("1 state on and collapsed!");
            //1st state on
        }
     });
    $(secondBlock).click(function() {
        $(this).one(transitionEvent,
            function(event) {
                $(this).removeClass("animate");
            });
        if ($(secondBlock).hasClass('animate')) {
            console.log('animated');
            return false;
        }
        else if (isCollapsed && !secondstate) {
            secondstate = true;
            firststate = false;
            thirdstate = false;
            changeState(2);
            console.log("2 state on!");
            //2nd state on
        }
        else if (isCollapsed && secondstate) {
            collapseMenu();
            secondstate = false;
            changeState(2);
            console.log("2 state off!");
            //2nd state off
        }
        else if (!isCollapsed) {
            collapseMenu();
            $(this).addClass("animate");
            secondstate = true;
            changeState(2);
            console.log("2 state on and collapsed!");
            //2nd state on
        }
     });
    $(thirdBlock).click(function() {
        $(this).one(transitionEvent,
            function(event) {
                $(this).removeClass("animate");
            });
        if ($(thirdBlock).hasClass('animate')) {
            console.log('animated');
            return false;
        }
        else if (isCollapsed && !thirdstate) {
            thirdstate = true;
            secondstate = false;
            firststate = false;
            console.log("3 state on!");
            changeState(3);
            //3rd state on
        }
        else if (isCollapsed && thirdstate) {
            collapseMenu();
            thirdstate = false;
            changeState(3);
            console.log("3 state off!");
            //3rd state off
        }
        else if (!isCollapsed) {
            collapseMenu();
            $(this).addClass("animate");
            thirdstate = true;
            changeState(3);
            console.log("3 state on and collapsed!");
            //3rd state on
        }
     });

    function collapseMenu() {
        isCollapsed = isCollapsed != true;
        $(firstBlock).toggleClass("col-md-1 col-md-4");
        $(secondBlock).toggleClass("col-md-1 col-md-4");
        $(thirdBlock).toggleClass("col-md-1 col-md-4");
        $(".caption").delay(150).toggle(200);
        console.log(delayTime);
    }

    function changeState(num) {
        setAnimSpeed();
        switch (num) {
          case 1:
          $(secondBlockText).hide(300);
          $(thirdBlockText).hide(300);
          $(firstBlockText).delay(delayTime).toggle(250);
            break;
          case 2:
          $(firstBlockText).hide(300);
          $(thirdBlockText).hide(300);
          $(secondBlockText).delay(delayTime).toggle(250);
            break;
          case 3:
          $(firstBlockText).hide(300);
          $(secondBlockText).hide(300);
          $(thirdBlockText).delay(delayTime).toggle(250);
            break;
          default:
        }
    }

    function setAnimSpeed() {
        if (isCollapsed == true) {
            delayTime = 750;
            console.log("fast");
            console.log(delayTime);
        } else {
            delayTime = 0;
            console.log("slow");
            console.log(delayTime);
        }
    }
});
