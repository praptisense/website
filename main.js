//youtube video

$('#watchYtVideo').click(function () {
    var src = 'https://www.youtube.com/watch?v=obKXrYdTm1I&amp;autoplay=1';
    $('#ytModal').modal('show');
    $('#ytModal .modal-body').html('<iframe class="shadow" width="100%" height="400" src="https://www.youtube.com/embed/obKXrYdTm1I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    $('#ytModal').modal('handleUpdate')
});


$('#ytModal').on('hidden.bs.modal', function () {
    $('#ytModal iframe').removeAttr('src');
})


//scrollTo
var scrollToDOM = function (id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 500);
};
