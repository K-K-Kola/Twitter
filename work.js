function createSideMenuButton(name){
   let div =  document.createElement('div');
   let span =  document.createElement('span');

    div.insertBefore(span,div.firstChild);
    span.innerHTML = name;
    div.setAttribute('class','button');
    div.setAttribute('id',name);
    div.setAttribute('onclick','changeColor()');
}

createSideMenuButton('Home');
createSideMenuButton('Subscriptions');







