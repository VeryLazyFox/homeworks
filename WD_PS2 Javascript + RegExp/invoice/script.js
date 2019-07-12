const GOODS = [
  {
    category: 'furniture',
    name: 'Chair',
    amount: 1,
    price: 20
  },
  {
    category: 'supplies',
    name: 'Gel Pen',
    amount: 20,
    price: 2
  },
  {
    category: 'other',
    name: 'Trash Bin',
    amount: 1,
    price: 5
  },
  {
    category: 'furniture',
    name: 'Sofa',
    amount: 1,
    price: 50
  },
  {
    category: 'supplies',
    name: 'Notebook',
    amount: 3,
    price: 3
  },
  {
    category: 'other',
    name: 'Calendar 2019',
    amount: 1,
    price: 3
  }
];
fillTable(GOODS)
let goods = GOODS;
let sortCategory = true;

category.addEventListener('click', () => {
  fillTable(sortTable(goods, sortCategory));
  sortCategory = !sortCategory;
});

nameTable.addEventListener('click', () => {
  fillTable(sortTableName(goods, sortCategory));
  sortCategory = !sortCategory;
});

filterSelectCategory.addEventListener('change', (event) => {
  let newArray = goods.filter(item => item.category == event.target.value);
  fillTable(newArray);
});

filterInputName
addEventListener('input', (event) => {
  let newArray = goods.filter(item => item.name.match(event.target.value));
  fillTable(newArray);
});

function sortTable(sortGoods, sort){
  sortGoods.sort(function(a, b){
    let categoryA=a.category.toLowerCase(), categoryB=b.category.toLowerCase()
      if (categoryA < categoryB) //сортируем строки по возрастанию
        {
          if (sort) return -1;
            else return 1;
        }
      if (categoryA > categoryB)
      {
        if (sort) return 1;
          else return -1;
      }
      return 0;
  })
  return sortGoods;
};

function sortTableName(sortGoods, sort){
    sortGoods.sort(function(a, b){
    let categoryA=a.name.toLowerCase(), categoryB=b.name.toLowerCase()
    if (categoryA < categoryB) //сортируем строки по возрастанию
    {
      if (sort) return -1;
        else return 1;
    }
    if (categoryA > categoryB)
    {
      if (sort) return 1;
        else return -1;
    }
    return 0;
  })
  return sortGoods;
};

function fillTable(goods){
if (table.childNodes.length > 3)
  {
    table.removeChild(table.lastChild)
    table.removeChild(table.lastChild)
  }
let totalPrice = 0;
let wrapper = document.createElement("tbody");
goods.forEach(element => {
  let row = wrapper.appendChild(document.createElement("tr"));
  let category = row.appendChild(document.createElement("td"));
  category.appendChild(document.createTextNode(element.category));
  let name = row.appendChild(document.createElement("td"));
  name.appendChild(document.createTextNode(element.name));
  let amount = row.appendChild(document.createElement("td"));
  amount.appendChild(document.createTextNode(element.amount));
  let price = row.appendChild(document.createElement("td"));
  price.appendChild(document.createTextNode(element.price));
  totalPrice += element.price;
});
let tfoot = document.createElement("tfoot");
tfoot.appendChild(document.createElement("th"));
tfoot.appendChild(document.createElement("th"));
let costText = tfoot.appendChild(document.createElement("th"));
costText.appendChild(document.createTextNode('Total:'));
let cost = tfoot.appendChild(document.createElement("th"));
cost.appendChild(document.createTextNode(totalPrice + '$'));
table.appendChild(wrapper);
table.appendChild(tfoot);
};