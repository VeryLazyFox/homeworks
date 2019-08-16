buttonSubmit.addEventListener('click', () => {
  const x = document.getElementById("input1");
  const y = document.getElementById("input2");
  const rez = document.getElementById("numberRezult");
  
  const start = Number(x.value);
  const end = Number(y.value);
  const sum = 0;
  let i;
  if (x.validity.valid && y.validity.valid) {
      if(start > end){
        [start, end] = [end, start];
      }
      i = start;
      for(i ; i <= end; i++){
        let q = Number(i)
        let absQ = Math.abs(q % 10)
        if ( absQ === 2 || absQ === 3 || absQ === 7) {
          sum += q;
        }
      rez.textContent = sum;
    }
  }
});

submitSecondToDate.addEventListener('click', () => {
  if (second.numberOfSeconds.validity.valid) {
    const date = new Date(null);
    date.setSeconds(numberOfSeconds.value);
    dateForSeconds.textContent = date.toISOString().substr(11, 8);
  }
});

dateToSeconds.addEventListener('click', () => {
  const seconds = (inputTime.valueAsNumber / 1000 )
  countForSeconds.textContent = seconds;
});

differenceDates.addEventListener('click', () => {
  const first = new Date(firstDate.value);
  const second = new Date(secondDate.value);

  if ( isNaN(first)) {
    differenceForDate.textContent = "first date is invalid" ;
    return;
  }
  if ( isNaN(second)) {
    differenceForDate.textContent = "second date is invalid" ;
    return;
  }
  differenceForDate.textContent = (`
    ${Math.abs(first.getFullYear() - second.getFullYear())} year(s),
    ${Math.abs(first.getMonth() - second.getMonth())} month(s),
    ${Math.abs(first.getDate() - second.getDate())} day(s),
    ${Math.abs(first.getHours() - second.getHours())} hour(s),
    ${Math.abs(first.getMinutes() - second.getMinutes())} minute(s),
    ${Math.abs(first.getSeconds() - second.getSeconds())} second(s)
    `);
});

addChessBoard.addEventListener('click', () => {
  chessBoardSpan.textContent = ""
  const array = chessBoardInput.value.split('x')
  const x = array[0];
  const y = array[1];
  if ( !x || !y ){
    chessBoardSpan.textContent = "invalid input syntax"
    return;
  }
  if ( x > 1000 || y > 1000 ){
    chessBoardSpan.textContent = "numbers must by less"
    return;
  }

  chessBoard.classList.add("chess-board");
  if (chessBoard.childNodes.length > 0)
    {
      chessBoard.removeChild(chessBoard.firstChild)
    }
  const wrapper = document.createElement("div");
  for (let rowCounter=0; rowCounter<y; rowCounter++){
    row = wrapper.appendChild(document.createElement("div"));
    row.classList.add("row");
      for (let columnCounter=0; columnCounter<x; columnCounter++){
        elem = row.appendChild(document.createElement("div"));
        let rCounter  = rowCounter%2;
        let cCounter = columnCounter%2;
        if ((rCounter%2 !== 0 && cCounter%2 === 0) || (rCounter%2 === 0 && cCounter%2 !== 0)){
          elem.classList.add("black");
          elem.classList.add("chess");
        }
        else{ 
          elem.classList.add("white");
          elem.classList.add("chess");
        }
      }
  }
  chessBoard.appendChild(wrapper);
});

validTextArea.addEventListener('blur', () => {
  if (validP.childNodes.length > 0)
    {
      validP.removeChild(validP.firstChild)
    }
  const arrayLinksText = [];
  const arr =  validTextArea.value.split(',');
  const regexpLink = /((http|https|ftp|ftps)\:\/\/)|(www\.)[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/gi;
  const regexpIp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/g;
  const arrayIp = arr.filter(item => item.match(regexpIp));
  const arrayLink = arr.filter(item => item.match(regexpLink))
  arrayIp.forEach((element) => {
    let temp = {};
    temp.text = element;
    temp.link = `//${element}`;
    arrayLinksText.push(temp); 
  });
  arrayLink.forEach((element) => {
    let temp = {};
    temp.text = element.replace(/http\:\/\/|https\:\/\//g,'')
    temp.link = element;
    arrayLinksText.push(temp); 
  });
  arrayLinksText.sort((prev, next) => {
    if ( prev.text < next.text ) return -1;
    else return 1;
  });
  let wrapper = document.createElement("div");
  arrayLinksText.forEach(element => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const linkText = document.createTextNode(element.text);
    a.appendChild(linkText);
    a.href = element.link;
    a.target = "_blank"
    element = a;
    // console.log(element)
    li.appendChild(a)
    wrapper.appendChild(li)
  });
  validP.appendChild(wrapper)
});

validButton.addEventListener('click', () => {
  const arr =  regTextArea.value;
  const input =  regP.value;
  let newArr = replaceAll(arr, '<', "&lt;")
  newArr = replaceAll(newArr, '>', "&gt;")
  newArr = replaceAll(newArr, input, "<mark>$&</mark>")
  validRezult.innerHTML = newArr;

  function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }
});