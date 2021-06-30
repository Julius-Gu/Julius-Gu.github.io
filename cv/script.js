try {
    tof = document.getElementById("table_of_contents");
  Array.from(document.getElementsByClassName("heading")).forEach( header => {
    txt = header.innerText;
    header.innerHTML = "<a href=\"#"+txt+"\">"+
        txt+
        "<image class=\"icon ico_link\"></image></a>";
    header.id = txt;

    tof_element = '<a class="'+header.nodeName+'" href="\#'+
            txt+'\"><image class="icon ico_goto"></image> '+
            txt+
            '</a><br>';

    tof.innerHTML += tof_element;
    console.log(tof_element);
  });
}
catch(e) {
    console.log("no tof");
}
    
var dark_theme = true;
document.documentElement.setAttribute('data-theme', 'light');
function switch_theme() {
    if(dark_theme) {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById("ico_theme").src = "/cv/icons/light_theme.svg";
        Array.from(document.getElementsByClassName("ico_link")).forEach( icon => {
            icon.src="/cv/icons/light_link.svg";
        });
        Array.from(document.getElementsByClassName("ico_goto")).forEach( icon => {
            icon.src="/cv/icons/light_goto.svg";
        });
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById("ico_theme").src = "/cv/icons/dark_theme.svg";
        Array.from(document.getElementsByClassName("ico_link")).forEach( icon => {
            icon.src="/cv/icons/light_link.svg";
        });
        Array.from(document.getElementsByClassName("ico_goto")).forEach( icon => {
            icon.src="/cv/icons/dark_goto.svg";
        });
    }
    dark_theme = !dark_theme;
}

// can only be called after some delay for some reason
setTimeout(
function() {
    switch_theme();
}, 200);

// make the language button change language
var language = "de";
function change_language(lang) {
    Array.from(document.getElementsByClassName("en")).forEach( element => {
        if (language==="en") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
    Array.from(document.getElementsByClassName("de")).forEach( element => {
        if (language==="de") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
}
try {
    var language_bt = document.getElementById("language");
    language_bt.onclick = function () {change_language("en")};
}
catch(e) {
    console.log("no lang");
}

console.log("hello world");
