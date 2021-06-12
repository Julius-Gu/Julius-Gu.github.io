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

var dark_theme = false;
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
            icon.src="/cv/icons/dark_link.svg";
        });
        Array.from(document.getElementsByClassName("ico_goto")).forEach( icon => {
            icon.src="/cv/icons/dark_goto.svg";
        });
    }
    dark_theme = !dark_theme;
}

switch_theme();
switch_theme();

console.log("hello world");
