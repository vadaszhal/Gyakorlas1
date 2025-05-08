import { getAll } from './db.js';//1

const table = document.querySelector('table.table');//3

const generateTable = (data = []) => {
    console.log(data);//1

    const thead = document.createElement('thead');//thead elem létrehozása
    table.appendChild(thead);//4

    const keys = Object.keys(data[0]);//5 lekérjük az első objektum elemeit

    const tr = document.createElement('tr');//új sor létrehozása
    thead.appendChild(tr);// 5

    //5 for ciklusban végigmegyünk az objektum kulcsain
    keys.forEach(key => {
        const th = document.createElement('th');
        th.innerText = key;
        tr.appendChild(th);
    });
    //++fejlécben új név létrehozása
    const th = document.createElement('th');
    th.appendChild = (th);
    const actionTh = document.createElement('th');
    actionTh.innerText = 'Műveletek';
    tr.appendChild(actionTh);

    //6.részben a tbody-t is létrehozzuk
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);
    data.forEach(row => {
        const tr = document.createElement('tr');//új sor létrehozása
        tbody.appendChild(tr);// a tbodybe
        keys.forEach(key => {
            const td = document.createElement('td');//új cella létrehozása
            td.innerText = row[key];//az objektum kulcsának értéke
            tr.appendChild(td);// a sorba
        });
        //7.új cella létrehozása
        const td = document.createElement('td');//új cella létrehozása
        tr.appendChild(td);// a sorba 
        //8.új gombcsoport létrehozása
        const btnGroup = document.createElement('div');//gombcsoport létrehozása
        td.appendChild(btnGroup);// a cellába
        btnGroup.classList.add('btn-group');
        //9.új gomb létrehozása
        const infoBtn = document.createElement('button')
        btnGroup.appendChild(infoBtn)
        infoBtn.classList.add('btn', 'btn-info');
        infoBtn.innerText = 'Info';
        //Eseménykezelő a gombnak
        infoBtn.addEventListener('click', () => {
            alert(JSON.stringify(row, null, 2));
        });

        //10.új gomb létrehozása
        const deleteBtn = document.createElement('button')
        btnGroup.appendChild(deleteBtn)
        deleteBtn.classList.add('btn', 'btn-danger');
        deleteBtn.innerText = 'Delete';

        //Eseménykezelő a delete gombnak
        deleteBtn.addEventListener('click', async () => {
            if (confirm('Biztosan törölni szeretnéd?')) {
                await removeEventListener(row.id);
                tr.parentElement.removeChild(tr);//sor törlése
                alert('Sikeresen törölve!');
            }
        });




    });
};
getAll().then(data => generateTable(data));//1.rész
