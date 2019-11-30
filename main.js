//Setting refer
var userInputElement = document.getElementById('user-input');
var addingElement = document.getElementById('adding');
var listContainerElement = document.getElementById('list-container');
var mainContainer = document.getElementsByClassName('container')[0];
var notice = document.getElementById('notice');

//Checking number of <li> elemnet ( text-node) in <ul> element.
function checkQuatityLi() {
    if (listContainerElement.childElementCount > 0) {
        notice.style.display = 'none';
    } else {
        notice.style.display = 'flex';
    }
};

//Modify notes (li)



// checkQuatityLi();
function createLi() {
    if (userInputElement.value != "") {
        var li = document.createElement('li');
        var p = document.createElement('p');


        //Create content for li ( using p )
        p.style.display = 'inline';
        p.style.marginBottom = '0px';
        var noteContent = userInputElement.value;
        p.textContent = noteContent;

        li.appendChild(p);
        (function modifyLi() {
            //Create and style modify button
            var modifyButton = document.createElement('button');
            modifyButton.textContent = "Modify";
            modifyButton.setAttribute('class', 'btn btn-warning')
            modifyButton.style.marginLeft = "auto";
            li.appendChild(modifyButton);

            //Change text modify
            p.addEventListener('dblclick', function () {
                var msg = p.textContent;
                console.log(msg);
                p.parentNode.removeChild(p);
                var inputModify = document.createElement('input');
                inputModify.setAttribute('type', 'text');
                inputModify.setAttribute('placeholder', msg);
                li.insertBefore(inputModify, modifyButton);
                noteContent = inputModify.value;

                //Create function for button
                modifyButton.addEventListener('click', function () {
                    var p = document.createElement('p');

                    //Create content for li ( using p )
                    p.style.display = 'inline';
                    p.style.marginBottom = '0px';
                    p.textContent = inputModify.value;
                    li.removeChild(inputModify);
                    li.insertBefore(p, modifyButton);
                });
            });



        })();

        (function deleteLi() {
            //Create Delete button
            var deleteButton = document.createElement('button');
            deleteButton.textContent = "Delete";
            deleteButton.setAttribute('class', 'btn btn-danger');
            deleteButton.style.marginLeft = '5px';
            deleteButton.style.display = 'inline';

            //Create function for button
            deleteButton.addEventListener('click', function () {
                li.parentNode.removeChild(li);
                checkQuatityLi();
            });

            li.appendChild(deleteButton);
        })();

        listContainerElement.appendChild(li);
        li.setAttribute('class', 'list-group-item');
        li.style.display = 'flex';
        li.style.alignItems = 'center';
        userInputElement.value = "";

    }


}

//When user click "Add" button
addingElement.addEventListener('click', function () {
    createLi();
    checkQuatityLi();

});

/*
Hoan thien :
- Day du cac chuc nang, nhu THEM ghi chu, XOA ghi chi, SUA ghi chu
- Giao dien dep, de dung.

Chua hoan thien :
- LOI chi co the sua ghi chu duy nhat 1 lan tren moi lan tao moi mot note.
  Nguyen nhan la do p.addEventListener chi duoc thuc hien mot lan. 
  Chi can p.addEvemtListener co the dung nhieu lan la coi nhu tam xong app nay.

- TIM Hieu lai ve lap trinh ham trong JavaScript. Cach viet chuong trinh theo
bo cuc hoan chinh. Tang kha nang nang cap va bao tri.
- Tim  hieu ve lap trinh Ham trong javascript

*/

