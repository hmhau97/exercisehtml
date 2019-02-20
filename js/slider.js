var sliderObjects = [];
createSliderObjects();

function createSliderObjects() {
    var sliders = $('.slider');
    $.each(sliders, function(i, item) {
        var obj = {};
        obj.id = $(item).attr('id');
        obj.content = item;
        obj.slideIndex = 1;
        obj.slideContents = $(item).find('.slide-item');
        obj.slideDots = $(item).find('.slide-dot');
        showSlide(obj);
        sliderObjects.push(obj);
    });
}

function showSlide(obj) {
    // move to start slide
    if (obj.slideIndex > obj.slideContents.length) {
        obj.slideIndex = 1;
    }
    // move to end slide
    if (obj.slideIndex < 1) {
        obj.slideIndex = obj.slideContents.length;
    }
    // hide another slide
    for (var i = 0; i < obj.slideContents.length; i++) {
        obj.slideContents[i].style.display = "none";
        obj.slideDots[i].classList.remove("active");
    }
    // show current slide
    obj.slideContents[obj.slideIndex - 1].style.display = "flex";
    obj.slideDots[obj.slideIndex - 1].classList.add("active");
}

function changeSlide(obj, n) {
    var parentObj = $(obj).parents('.slider');
    var matchedObj;
    $.each(sliderObjects, function(i, item) {
        if ($(parentObj[0]).attr('id') == $(item).attr('id')) {
            matchedObj = item;
            return false;
        }
    });
    matchedObj.slideIndex += n;
    showSlide(matchedObj);
}

function chooseSlide(obj, n) {
    var parentObj = $(obj).parents(".slider"); //important :>
    var matchedObj;
    $.each(sliderObjects, function(i, item) {
        if ($(parentObj[0]).attr('id') == $(item).attr('id')) {
            matchedObj = item;
            return false;
        }
    });
    matchedObj.slideIndex = n;
    showSlide(matchedObj);
}