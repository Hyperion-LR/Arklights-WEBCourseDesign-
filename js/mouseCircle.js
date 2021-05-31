var mouseCircle = document.getElementById("mouseCircle");
document.addEventListener('mousemove', function(e) {
    e = e || window.event;
    mouseCircle.style.left = e.pageX - 17 + 'px';
    mouseCircle.style.top = e.pageY - 17 + 'px';        
});