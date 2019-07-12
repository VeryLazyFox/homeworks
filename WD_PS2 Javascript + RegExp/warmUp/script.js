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
  let seconds = (inputTime.valueAsNumber / 1000 )
  countForSeconds.textContent = seconds;
});

differenceDates.addEventListener('click', () => {
  let first = new Date(firstDate.valueAsNumber);
  let second = new Date(secondDate.valueAsNumber);
  
  let difference = Math.abs((second - first)/1000); // to seconds

  if ( isNaN(first)) {
    differenceForDate.textContent = "first date is invalid" ;
    return;
  }

  if ( isNaN(second)) {
    differenceForDate.textContent = "second date is invalid" ;
    return;
  }

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
  chessBoardSpan.textContent = ""
  let array = chessBoardInput.value.split('x')
  let x = array[0];
  let y = array[1];
  if ( !x || !y ){
    chessBoardSpan.textContent = "invalid input syntax"
    return;
  }
  if ( x > 1000 || y > 1000 ){
    chessBoardSpan.textContent = "numbers must by less"
    return;
  }

  chessBoard.classList.add("chessBoard");
  if (chessBoard.childNodes.length > 0)
    {
      chessBoard.removeChild(chessBoard.firstChild)
    }
  let wrapper = document.createElement("div");
  for (let rowCounter=0; rowCounter<y; rowCounter++){
    row = wrapper.appendChild(document.createElement("div"));
    row.classList.add("row");
      for (let columnCounter=0; columnCounter<x; columnCounter++){
        elem = row.appendChild(document.createElement("div"));
        if ((rowCounter%2 != 0 && columnCounter%2 === 0) || (rowCounter%2 === 0 && columnCounter%2 != 0)){
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
  // console.log(validTextArea)
  let arrayRezult;
  let arr =  validTextArea.value.split(',');

  // let regexpIp = /([0-9]{1,3}[\.]){3}[0-9]{1,3}/g;
  // let regexpLink = /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/g;
  let regexpIp = /(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g;
  let regexpLink = /((http|https|ftp|ftps)\:\/\/)|(www\.)[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/gi;

// http://ru.stackoverflow.com, www.ru.stackoverflow.com, ru.stackoverflow.com,
// 4444.11.11.11,
// 192.168.1.1,
// 1.1.1.1,
// 115.42.150.37
  let arrayIp = arr.filter(item => item.match(regexpIp));
  let arrayLink = arr.filter(item => item.match(regexpLink)).map(
    x => {
      return x.replace(/http\:\/\/|https\:\/\//g,'');
    });

  if (arrayIp != null && arrayLink!= null){
    arrayRezult = [ ...new Set([...arrayIp,...arrayLink])].sort();
    console.log(arrayIp)
    console.log(arrayLink)
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
    // console.log(element)
    li.appendChild(a)
    wrapper.appendChild(li)
  });
  validP.appendChild(wrapper)
});

validButton.addEventListener('click', () => {
  let arr =  regTextArea.value;
  let input =  regP.value;

  let newArr = replaceAll(arr, '<', "&lt;")
  newArr = replaceAll(newArr, '>', "&gt;")
  newArr = replaceAll(newArr, input, "<mark>"+"$&"+"</mark>")

  validRezult.innerHTML = newArr;

  function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }
});