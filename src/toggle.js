if (localStorage.theme === 'dark') {
    document.querySelector('html').classList.add('dark')
    document.getElementById('moon').style.display="none"
    document.getElementById('sun').style.display="block"
} else {
    document.getElementById('sun').style.display="none"
    document.getElementById('moon').style.display="block"
}

document.getElementById('toggle_button').addEventListener('click', function() {
    let htmlClasses = document.querySelector('html').classList;
    if(localStorage.theme == 'dark') {
        htmlClasses.remove('dark');
        localStorage.removeItem('theme')
        document.getElementById('sun').style.display="none"
        document.getElementById('moon').style.display="block"
    } else {
        htmlClasses.add('dark');
        localStorage.theme = 'dark';
        document.getElementById('moon').style.display="none"
        document.getElementById('sun').style.display="block"
    }
});