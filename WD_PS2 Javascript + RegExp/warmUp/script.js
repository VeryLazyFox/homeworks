buttonSubmit.addEventListener('click', () => {
  let x = document.getElementById("input1");
  let y = document.getElementById("input2");
  let rez = document.getElementById("numberRezult");
  
  let start = Number(x.value);
  let end = Number(y.value);
  let sum = 0;
  let i;
  if (x.validity.valid && y.validity.valid) {
      if(start > end){
        [start, end] = [end, start];
      }
      i = start;
      for(i ; i <= end; i++){
        let q = Number(i)
        if ( Math.abs(q % 10) == 2 || Math.abs(q % 10) == 3 || Math.abs(q % 10) == 7) {
          sum += q;
        }
      rez.textContent = sum;
    }
  }
});

submitSecondToDate.addEventListener('click', () => {
  if (second.numberOfSeconds.validity.valid) {
    let date = new Date(null);
    date.setSeconds(numberOfSeconds.value);
    dateForSeconds.textContent = date.toISOString().substr(11, 8);
  }
});

dateToSeconds.addEventListener('click', () => {
  // let time = new Date();
  let time = inputTime.valueAsDate;
  let userTimezoneOffset = time.getTimezoneOffset() * 60000;
  console.log(new Date(time.getTime() - userTimezoneOffset).getHours())
  console.log("time " + time)
  console.log("time " + time.getHours())
  console.log("time " + time.getMinutes())
  console.log("time " + time.getSeconds())
  let seconds = time.getHours()*24*60 + time.getMinutes()*60 + time.getSeconds();
  countForSeconds.textContent = seconds;

  // лишние объявления и, по-моему, функция делает что-то не то. Попробуйте использовать другой инпут
  // а должно быть (1час3600 + 560 + 20) = 3920


});

differenceDates.addEventListener('click', () => {
  let first = new Date(firstDate.value);
  let second = new Date(secondDate.value);
  // let difference = second - first;
  console.log("difference")
  console.log(first)
  if ( isNaN(first)) {
    differenceForDate.textContent = "first date is invalid" ;
    return;
  }

  if ( first < second) {
    differenceForDate.textContent = "first date must be less than second" ;
    return;
  }

  let difference = second - first;
  difference /= 1000;
  console.log(difference)

  if ( isNaN(difference)) {
    differenceForDate.textContent = "error" ;
    return;
  }
  if (difference < 60) {
    differenceForDate.textContent = Math.round(difference) + ' second(s)';
    return;
  }
  difference /= 60;
  console.log(difference)
  if (difference < 60) {
    differenceForDate.textContent = Math.round(difference) + ' minute(s)';
    return;
  }
  difference /= 60;
  console.log(difference)
  if (difference < 24) {
    differenceForDate.textContent = Math.round(difference) + ' hour(s)';
    return;
  }
  difference /= 24;
  console.log(difference)
  if (difference < 30) {
    differenceForDate.textContent = Math.round(difference) + ' day(s)';
    return;
  }
  difference /= 30;
  console.log(difference)
  if (difference < 12) {
    differenceForDate.textContent = Math.round(difference) + ' month(s)';
    return;
  }
  else{
    difference /= 12;
    console.log(difference)
    differenceForDate.textContent = Math.round(difference) + ' year(s)';
  }
  
});

addChessBoard.addEventListener('click', () => {
  let array = chessBoardInput.value.split('x')
  let x = array[0];
  let y = array[1];
  chessBoard.classList.add("chessBoard");
  if (chessBoard.childNodes.length > 0)
    {
      chessBoard.removeChild(chessBoard.firstChild)
    }
  let wrapper = document.createElement("div");
  for (let i=0; i<y; i++){
    row = wrapper.appendChild(document.createElement("div"));
    row.classList.add("row");
      for (let j=0; j<x; j++){
        elem = row.appendChild(document.createElement("div"));
        if ((i%2 != 0 && j%2 === 0) || (i%2 === 0 && j%2 != 0)){
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
  let arrayRezult;
  let arr =  validTextArea.value.split(',');

  let regexpIp = /([0-9]{1,3}[\.]){3}[0-9]{1,3}/g;
  let regexpLink = /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/g;

  let arrayIp = arr.filter(item => item.match(regexpIp));
  let arrayLink = arr.filter(item => item.match(regexpLink)).map(
    x => {
      return x.replace(/http\:\/\/|https\:\/\//g,'');
    });

  if (arrayIp != null && arrayLink!= null){
    arrayRezult = [ ...new Set([...arrayIp,...arrayLink])].sort();
  }
  else if (arrayIp == null){
    arrayRezult = arrayLink
  }
  else arrayRezult = arrayIp

  let wrapper = document.createElement("div");

  arrayRezult.forEach(element => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    let linkText = document.createTextNode(element);
    a.appendChild(linkText);
    a.href = '//'+element;
    a.target = "_blank"
    element = a;
    li.appendChild(a)
    wrapper.appendChild(li)
  });
  validP.appendChild(wrapper)
});

validButton.addEventListener('click', () => {
  let arr =  regTextArea.value;
  let input =  regP.value;

  let newArr = replaceAll(arr, input, "<mark>"+"$&"+"</mark>")

  validRezult.innerHTML = newArr;

  function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}
});