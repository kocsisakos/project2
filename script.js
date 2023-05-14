// colorpicker

var div = document.getElementsByClassName('row');
var colorArray = [].slice.call(div);

colorArray.forEach(array => {
    array.style.backgroundColor = array.dataset.gradColor
});


// img resize
function imgResize() {
    var imglist = document.getElementsByClassName('car-img');
    var imgArray = [].slice.call(imglist);

    imgArray.forEach(img => {
        if (document.documentElement.clientWidth > 768) {
            if (img.className == 'img-fluid') {
            } else {
                let active = document.querySelector('div.active');
                let data = active.getBoundingClientRect();
                width = (data.right - data.left) / 2;
                img.style.width = width + 'px';
            };
        } else {
            img.style.width = "inherit";
            img.className = 'd-inline-block car-img img-fluid'
        }
    });
};