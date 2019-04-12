const buttonSubmit = document.getElementById("submit");
let x = document.getElementById("unput1");
let y = document.getElementById("unput2");
let rez = document.getElementById("numberRezult");

const submitSecontToDate = document.getElementById("submitSecontToDate");
// const inputDateForSeconds = document.getElementById("dateForSeconds");

buttonSubmit.addEventListener('click', () => {
  // !!!!
  //!!!!  с отрицателными не оаботает
  let start = x.value;
  let end = y.value;
  let sum = 0;
  let i = -10;
  console.log(start);
  if(start > end){
    [start, end] = [end, start];
  }
  for(i ; i <= end; i++){
    if ( (i % 10) == 2 || (i % 10) == 3 || (i % 10) == 7) {
      sum += i;
      console.log(i);
    }
  }
  rez.textContent = sum;
  sum = 0;
});

submitSecondToDate.addEventListener('click', () => {
  var date = new Date(null);
  console.log(date)
  date.setSeconds(numberOfSeconds.value);
  var seconds = date.toISOString().substr(11, 8);
  dateForSeconds.textContent = seconds;
});

dateToSeconds.addEventListener('click', () => {
  let time = new Date();
  time = unputTime.valueAsDate;
  let seconds = time.getHours()*24*60 + time.getMinutes()*60 + time.getSeconds();
  console.log(seconds)
  countForSeconds.textContent = seconds;
});

differenceDates.addEventListener('click', () => {
  let first = new Date(firstDate.value);
  let second = new Date(secondDate.value);
  let difference = second - first;  
  // console.log(first)
  // console.log(second)
  // console.log(difference)
  // differenceForDate.textContent = difference/1000;
  difference /= 1000;
  if (difference < 60) {
    differenceForDate.textContent = Math.round(difference) + ' second(s)';
    return;
  }
  difference /= 60;
  if (difference < 60) {
    differenceForDate.textContent = Math.round(difference) + ' minute(s)';
    return;
  }
  difference /= 60;
  if (difference < 24) {
    differenceForDate.textContent = Math.round(difference) + ' hour(s)';
    return;
  }
  difference /= 24;
  if (difference < 30) {
    differenceForDate.textContent = Math.round(difference) + ' day(s)';
    return;
  }
  difference /= 30;
  if (difference < 12) {
    differenceForDate.textContent = Math.round(difference) + ' month(s)';
    return;
  }
  difference /= 12;
  differenceForDate.textContent = Math.round(difference) + ' year(s)';
});

addChessBoard.addEventListener('click', () => {
  console.log('first')
  let x=8;
  let y=8;
  let elem;

  for (var i=0; i<y; i++){
      var row = chessBoard.appendChild(document.createElement("div"));
      for (var j=0; j<x; j++){
        elem = row.appendChild(document.createElement("div"));
        if ((i%2 != 0 && j%2 == 0) || (i%2 == 0 && j%2 != 0)){
          elem.classList.add("black");
        }
        else elem.classList.add("white");
      }
  }
});

validTextArea.addEventListener('blur', () => {
  console.log(validTextArea)
  let arrayRezult;
  let arr =  validTextArea.value;

  let regexpIp = /([0-9]{1,3}[\.]){3}[0-9]{1,3}/g;
  let regexpLink = /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/g;

  let arrayIp = arr.match(regexpIp);
  let arrayLink = arr.match(regexpLink).map(
    function(x) {
      return x.replace(/http\:\/\/|https\:\/\//g,'');
    });
  arrayRezult = [ ...new Set([...arrayIp,...arrayLink])].sort();

  console.log(arrayRezult);
});

regP.addEventListener('blur', () => {
  let arr =  regTextArea.value;
  let input =  regP.value;

  let newArr = arr.match(input);


  console.log(newArr);
});