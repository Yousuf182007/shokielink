function store()
{
    var a = document.getElementById("name").value
    var b = document.getElementById("gmail").value
    
    localStorage.setItem('Username',a)

    localStorage.setItem('Gmail',b)

}

 