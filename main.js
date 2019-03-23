$(document).ready(function () {

    AOS.init();

    if ($('body.index').length == 1) {

        VANTA.BIRDS({
            el: "body.index .banner",
            color1: 0XDDFF00,
            color2: 0xDD0000,
            backgroundColor: 0x4e5266,
        })

        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            $.scrollify({
                interstitialSection: "body.index .scroller",
                scrollbars: true,
                touchScroll: true,
                overflowScroll: true,
                scrollSpeed: 600,
                easing: "easeOutExpo",
            });
        }
    }


    if ($('body.mayamirror').length == 1) {

        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

            $.scrollify({
                interstitialSection: "body.mayamirror .scroller",
                scrollbars: true,
                touchScroll: true,
                sectionName: false,
                scrollSpeed: 600,
                easing: "easeOutExpo",

                before: function (index, sections) {
                    // console.log(index);
                    // console.log(sections);
                    if (index < 3 || index > 5) {
                        $("#staticMan").removeClass(" d-lg-block");
                    } else {
                        setTimeout(function () {
                            $("#staticMan").addClass(" d-lg-block");
                        }, 150);

                    }
                }
            });
        } else {
            $(".mobile-scroller").removeClass("fullpage");
        }
    }


    //youtube video
    $('#watchYtVideo').click(function () {
        var src = 'https://www.youtube.com/watch?v=obKXrYdTm1I&amp;autoplay=1';
        $('#ytModal').modal('show');
        $('#ytModal .modal-body').html('<iframe class="shadow" width="100%" height="432" src="https://www.youtube.com/embed/Yro9ZpytyLs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        $('#ytModal').modal('handleUpdate')
    });


    $('#ytModal').on('hidden.bs.modal', function () {
        $('#ytModal iframe').removeAttr('src');
    })

});

//scrollTo
var scrollToDOM = function (id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 500);
};
