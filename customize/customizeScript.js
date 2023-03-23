let kbSize = 100;
let currentCase = '/customize/pictures/kb-case.JPG';
const imgElement = document.getElementsByClassName('kb-img')[0];
const imgMaterials = document.getElementsByClassName('material');
const sizes = document.getElementsByClassName('size');
const woods = document.getElementsByClassName('wood');
/* const colorImgs = document.getElementsByClassName('color-img'); */
const backButton = document.getElementById('BackButton');
/* const selectedColors = []; */
const tags = ["Hidden", "Material", "Size", "Color"];
var currentTag = "Hidden";
var url = document.URL;
var currentColor;
var buttonAdd = false;
const color1 = document.getElementsByClassName('color-wrapper')[0];
const color2 = document.getElementsByClassName('color-wrapper')[1];
const colorElems = Array.from(document.getElementsByClassName('color-wrapper'));

function Hover(kbCase, id) {
    imgElement.setAttribute('src', kbCase);
    ToggleInspect(id);
}

function OnLeave(id) {
    imgElement.setAttribute('src', currentCase);
    ToggleInspect(id);
}

function OnMaterialClick(kbCase, id, type) {
    let collection;
    if (type == 'material') {
        collection = imgMaterials;

        if (id == 'Wood') {
            document.getElementById('WoodH').hidden = false;
            document.getElementById('ColorH').hidden = true;

            document.getElementsByClassName('color-container')[0].classList.add("hide");
            document.getElementsByClassName('wood-container')[0].classList.remove("hide");
        }
        else {
            document.getElementById('WoodH').hidden = true;
            document.getElementById('ColorH').hidden = false;

            document.getElementsByClassName('color-container')[0].classList.remove("hide");
            document.getElementsByClassName('wood-container')[0].classList.add("hide");
        }
    }

    else { collection = woods; }

    Select(collection, id);
    currentCase = kbCase;
}

function Select(collection, id) {
    Array.from(collection).forEach(element => {
        if (element.id == id) {
            element.classList.add('selected');
            element.firstElementChild.classList.add('hovering');
            element.firstElementChild.nextElementSibling.classList.add('description-highlight');
        }
        else {
            element.classList.remove('selected');
            element.firstElementChild.classList.remove('hovering');
            if (element.firstElementChild.nextElementSibling != null) {
                element.firstElementChild.nextElementSibling.classList.remove('description-highlight');
            }
        }
    });
}

function OnSizeClick(id, size) {
    Select(sizes, id)
    kbSize = size;
}

function ToggleInspect(id) {
    let element = document.getElementById(id);
    let elementClassList;

    if (element.classList.contains('img-class')) { elementClassList = element.classList; }
    else { elementClassList = element.getElementsByClassName('img-class')[0].classList; }

    let description = document.getElementById(id).getElementsByClassName('description');
    let ok = false;
    if (description.length == 1) {
        description = description[0].classList;
        ok = true;
    }
/*     if (elementClassList.contains('hovering')) {
        elementClassList.remove('hovering');
        if (ok) { description.remove('description-highlight'); }
    } else {
        elementClassList.add('hovering');
        if (ok) { description.add('description-highlight'); }
    } */
}

/* function HoverColor(id) {
    if (!selectedColors.includes(id)) { selectedColors.push(id); }
    SelectKbPic();
}

function OnColorLeave(id) {
    let classList = document.getElementById(id).classList;
    if (!classList.contains('selected')) { selectedColors.splice(selectedColors.indexOf(id), 1); }
    SelectKbPic();
}

function OnColorClick(id) {
    var element = document.getElementById(id);
    if (element.classList.contains('selected')) { element.classList.remove('selected'); }
    else { element.classList.add('selected'); }
}

function SelectKbPic() {
    if (selectedColors.length == 3) { imgElement.setAttribute('src', '/customize/pictures/kb-acrylic.jpg'); }
    else if (['Black', 'Red'].every(color => { return selectedColors.includes(color); })) { imgElement.setAttribute('src', '/customize/pictures/kb-wood.JPG'); }
    else if (['Black', 'Grey'].every(color => { return selectedColors.includes(color); })) { imgElement.setAttribute('src', '/customize/pictures/kb-wood.JPG'); }
    else if (['Red', 'Grey'].every(color => { return selectedColors.includes(color); })) { imgElement.setAttribute('src', '/customize/pictures/kb-case.jpg'); }
    else if (selectedColors.includes('Black')) { imgElement.setAttribute('src', '/customize/pictures/kb-acrylic.jpg'); }
    else if (selectedColors.includes('Red')) { imgElement.setAttribute('src', '/customize/pictures/kb-acrylic.jpg'); }
    else if (selectedColors.includes('Gray')) { imgElement.setAttribute('src', '/customize/pictures/kb-acrylic.jpg'); }
    else { imgElement.setAttribute('src', currentCase); }
} */

function ChangePrevTag(id) {
    if (id == 'Hidden') { backButton.hidden = true; return; }
    else if (backButton.hidden) { backButton.hidden = false; }
    currentTag = id;
    url = url.split('#')[0];
    backButton.setAttribute("href", url + '#' + currentTag);
}

function ChangeTag() {
    backButton.setAttribute("href", url + '#' + currentTag);

    let i = tags.indexOf(currentTag);
    if (i == 0) { return; }
    currentTag = tags[i - 1];
    if (currentTag == "Hidden") { backButton.hidden = true; }
}

/* function OnColorChoosen(value) {
    currentColor = value;
    if (!document.getElementsByClassName('color')[0].classList.contains('color1-animation')) {
        let nr = 1;
        Array.from(document.getElementsByClassName('color')).forEach(element => {
            element.classList.add('color' + nr + '-animation');
            nr = 2;
        })
    }
}

function OnColorClick(id) {
    document.getElementById(id).style.backgroundColor = currentColor;
} */

/* function OnColorButton(element) {
    buttonAdd = !buttonAdd;

    if (buttonAdd) {
        let nr;
        let bool = true;
        if (element == 'c1') { nr = 1; } else { nr = 2; }

        Array.from(document.getElementsByClassName('color-wrapper')).forEach(element => {
            if (bool) { element.classList.add('color-ontop'); }
            element.classList.add('color' + nr + '-animation-out');
            if (nr == 2) { nr = 1; } else { nr = 2; }
            bool = false;
        })

        Array.from(document.getElementsByClassName('color-wrapper')).forEach(element => {
            element.classList.remove('color1-animation-in', 'color2-animation-in');
        })
    }
    else {
        Array.from(document.getElementsByClassName('color-wrapper')).forEach(element => {
            if (element.classList.contains('color1-animation-out')) { element.classList.add('color1-animation-in'); }
            else { element.classList.add('color2-animation-in'); }
        })

        Array.from(document.getElementsByClassName('color-wrapper')).forEach(element => {
            element.classList.remove('color1-animation-out', 'color2-animation-out');
        })
    }

    if (buttonAdd) {
        if (element == 'c1') {
            color1.classList.add('color-ontop');
            color1.firstElementChild.nextElementSibling.firstElementChild.innerHTML = 'remove';
        }
        else if (element == 'c2') {
            color2.classList.add('color-ontop');
            color2.firstElementChild.nextElementSibling.firstElementChild.innerHTML = 'remove';
        }
    }
    else {
        if (element == 'c1') {
            color1.classList.remove('color-ontop');
            color2.classList.add('color-ontop');
            color2.firstElementChild.nextElementSibling.firstElementChild.innerHTML = 'add';
        }
        else if (element == 'c2') {
            color2.classList.remove('color-ontop');
            color1.classList.add('color-ontop');
            color1.firstElementChild.nextElementSibling.firstElementChild.innerHTML = 'add';
        }
    }
} */

function OnColorButton(e) {
    buttonAdd = !buttonAdd;

    if (buttonAdd) {
        colorElems.forEach(elem => {
            if (elem.classList.contains('color-ontop')) { elem.classList.add('color1-animation-out'); }
            else { elem.classList.add('color2-animation-out') }
            elem.classList.remove('color1-animation-in', 'color2-animation-in')
            elem.firstElementChild.nextElementSibling.firstElementChild.innerHTML = 'remove';
        })
    }
    else {
        if (color1.classList.contains('color-ontop')) {
            color1.classList.remove('color1-animation-out', 'color2-animation-out', 'color-switch1-animation', 'color-switch2-animation');
            color1.classList.add('color1-animation-in');

            color2.classList.remove('color1-animation-out', 'color2-animation-out', 'color-switch1-animation', 'color-switch2-animation');
            color2.classList.add('color2-animation-in');
        }
        else {
            color2.classList.remove('color1-animation-out', 'color2-animation-out', 'color-switch1-animation', 'color-switch2-animation');
            color2.classList.add('color1-animation-in');

            color1.classList.remove('color1-animation-out', 'color2-animation-out', 'color-switch1-animation', 'color-switch2-animation');
            color1.classList.add('color2-animation-in');
        }

        if (e == 'c1') {
            color1.classList.remove('color-ontop');
            color2.classList.add('color-ontop');
        }
        else {
            color2.classList.remove('color-ontop');
            color1.classList.add('color-ontop');
        }

        color1.firstElementChild.nextElementSibling.firstElementChild.innerHTML = 'add';
        color2.firstElementChild.nextElementSibling.firstElementChild.innerHTML = 'add';
    }
}

/* function SwitchButton() {
    for (var i = 1; i <= 2; i++) {
        Array.from(document.getElementsByClassName('color-wrapper')).forEach(element => {
            element.classList.remove('color' + i + '-animation-out');
            if (element.classList.contains('color-ontop')) {
                color1.classList.add('color-switch2-animation');
                color1.classList.remove('color-switch1-animation');
                if (i == 2) {
                    element.classList.remove('color-ontop')
                }
            }
            else {
                color2.classList.add('color-switch1-animation');
                color2.classList.remove('color-switch2-animation');
                if (i == 2) {
                    element.classList.add('color-ontop')
                }
            }
        })
    }
} */

function SwitchButton() {
    colorElems.forEach(elem => {
        elem.classList.remove('color1-animation-out', 'color2-animation-out');
        if (elem.classList.contains('color-ontop')) {
            elem.classList.add('color-switch1-animation');
            elem.classList.remove('color-ontop', 'color-switch2-animation');
        }
        else {
            elem.classList.add('color-ontop', 'color-switch2-animation');
            elem.classList.remove('color-switch1-animation');
        }
    })
}
