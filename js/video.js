$('#videolink').click(function() {
    //show div video
    $('#videostory').show();
});

$('#videostory').click(function() {
    //stop iframe
    $("iframe").each(function() {
        var src= $(this).attr('src');
        $(this).attr('src',src);
    });
    //hide div video
    $('#videostory').hide();
});