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
  });
}
catch(e) {
    console.log("no tof");
    Array.from(document.getElementsByClassName("heading")).forEach( header => {
    txt = header.innerText;
    header.innerHTML = "<a href=\"#"+txt+"\">"+
        txt+
        "<image class=\"icon ico_link\"></image></a>";
    header.id = txt;
    });
}

try {
    lang_bt = document.getElementById("language");


} catch(e) {}
    
var dark_theme = true;
function switch_theme() {
    if(dark_theme) {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById("ico_theme").src = "/icons/light_theme.svg";
        Array.from(document.getElementsByClassName("ico_link")).forEach( icon => {
            icon.src="/icons/light_link.svg";
        });
        Array.from(document.getElementsByClassName("ico_goto")).forEach( icon => {
            icon.src="/icons/light_goto.svg";
        });
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById("ico_theme").src = "/icons/dark_theme.svg";
        Array.from(document.getElementsByClassName("ico_link")).forEach( icon => {
            icon.src="/icons/light_link.svg";
        });
        Array.from(document.getElementsByClassName("ico_goto")).forEach( icon => {
            icon.src="/icons/dark_goto.svg";
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
    language = lang;
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
setTimeout(
function() {
    change_language("en");
}, 200);

console.log("hello world");

// remove printonly
Array.from(document.getElementsByClassName("printonly")).forEach( e => {
    e.style.display="none";
});


// print page
function print_page() {
    Array.from(document.getElementsByClassName("webonly")).forEach( e => {
        e.style.display="none";
    });
    Array.from(document.getElementsByClassName("printonly")).forEach( e => {
        e.style.display="block";
    });
    window.print();
    Array.from(document.getElementsByClassName("webonly")).forEach( e => {
        e.style.display="block";
    });
    Array.from(document.getElementsByClassName("printonly")).forEach( e => {
        e.style.display="none";
    });
}
