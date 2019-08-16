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

let sortCategory = true;
let sortName = true;
let filter = '';
let searchName = '';

const fillTable = () => {
  let totalPrice = 0;
  let newFilteredArray = GOODS;
  if (filter) {
    newFilteredArray = newFilteredArray.filter(item => item.category === filter)
  }
  if (searchName) {
    newFilteredArray = newFilteredArray.filter(item => item.name.toLowerCase().match(searchName));
  }
  
if (table.childNodes.length > 3)
  {
    table.removeChild(table.lastChild)
    table.removeChild(table.lastChild)
  }
  const wrapper = document.createElement("tbody");
  newFilteredArray.forEach(element => {
    const row = wrapper.appendChild(document.createElement("tr"));
    const category = row.appendChild(document.createElement("td"));
    category.appendChild(document.createTextNode(element.category));
    const name = row.appendChild(document.createElement("td"));
    name.appendChild(document.createTextNode(element.name));
    const amount = row.appendChild(document.createElement("td"));
    amount.appendChild(document.createTextNode(element.amount));
    const price = row.appendChild(document.createElement("td"));
    price.appendChild(document.createTextNode(element.price));
    totalPrice += element.price * element.amount;
  });
  const tfoot = document.createElement("tfoot");
  tfoot.appendChild(document.createElement("th"));
  tfoot.appendChild(document.createElement("th"));
  const costText = tfoot.appendChild(document.createElement("th"));
  costText.appendChild(document.createTextNode('Total:'));
  const cost = tfoot.appendChild(document.createElement("th"));
  cost.appendChild(document.createTextNode(totalPrice + '$'));
  table.appendChild(wrapper);
  table.appendChild(tfoot);
  };

category.addEventListener('click', () => {
  fillTable(sortTable(GOODS, sortCategory, 'category'));
  sortCategory = !sortCategory;
});

nameTable.addEventListener('click', () => {
  fillTable(sortTable(GOODS, sortName, 'name'));
  sortName = !sortName;
});

filterSelectCategory.addEventListener('change', (event) => {
  filter = event.target.value
  fillTable(GOODS);
});

filterInputName.addEventListener('input', (event) => {
  searchName = event.target.value.toLowerCase()
  fillTable(GOODS);
});

function sortTable(sortgoods, sort, sortСriterion){
  sortgoods.sort((a, b) =>{
    const categoryA=a[sortСriterion].toLowerCase(), categoryB=b[sortСriterion].toLowerCase()
      if (categoryA < categoryB)
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
  return sortgoods;
};

fillTable(GOODS)