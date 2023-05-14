var div = document.getElementsByClassName('row');
var colorArray = [].slice.call(div);


colorArray.forEach(split => {

    console.log(split)

});


colorArray.forEach(array => {
    array.style.backgroundColor = array.dataset.gradColor
});

