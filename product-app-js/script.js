let itemform = document.getElementById("itemForm");
let itemdiv = document.getElementById("itemsDiv");
let totprice = document.getElementById("totalPriceDiv");
let searchInput = document.getElementById("searchInput");

let allItems = [];

const populateItemsDiv = async () => {
  itemdiv.innerHTML = allItems.map(item => `
      <div class="item">
        <input
          type="checkbox"
          class="checkbox"
         onchange="updateitem('${item.name}')"
        />
        
        <div class="itemInfo">
          <p>${item.name}</p>
          <p>RS.${item.price} x ${item.quantity}</p>
        </div>
       
        <button onclick="removeItem(${allItems[item]})" class="deleteButton">
          X
        </button>
      </div>
    ` ).join('');

  const arrayOfPrices = allItems.map(item => item.price * item.quantity);
  const totalPrice = arrayOfPrices.reduce((a, b) => a + b, 0);

  totalPriceDiv.innerText = 'Total price: $' + totalPrice;
}


const searchItems = () => {
  const searchQuery = searchInput.value.toLowerCase();

  const filteredItems = allItems.filter(item =>
      item.name.toLowerCase().includes(searchQuery)
  );

  itemdiv.innerHTML = filteredItems.map(item => `
    <div class="item">
      <input
        type="checkbox" class="checkbox" onchange="updateitem('${item.name}')"/>
      
      <div class="itemInfo">
        <p>${item.name}</p>
        <p>RS.${item.price} x ${item.quantity}</p>
      </div>
     
      <button onclick="removeItem('${item.name}')" class="deleteButton">
        X
      </button>
    </div>
  `).join('');
};


itemform.onsubmit = async (event) => {
  event.preventDefault();

  let name = document.getElementById('nameInput').value;
  let quantity = document.getElementById('quantityInput').value;
  let price = document.getElementById('priceInput').value;

  await allItems.push({ name, quantity, price });
  await populateItemsDiv();
  console.log(allItems);
  itemform.reset();
}


const removeItem = item => {
  allItems.pop(item);
  populateItemsDiv();
}


let updateitem = (itemName) => {
  let nameInput = document.getElementById('nameInput');
  let quantityInput = document.getElementById('quantityInput');
  let priceInput = document.getElementById('priceInput');

  const index = allItems.findIndex(item => item.name === itemName);

  if (index !== -1) {

    let newName = nameInput.value;
    let newQuantity = quantityInput.value;
    let newPrice = priceInput.value;

    //if input is empty then old input value stored
    allItems[index] = {
      name: newName || allItems[index].name,
      quantity: newQuantity || allItems[index].quantity,
      price: newPrice || allItems[index].price
    };
    populateItemsDiv();

    nameInput.value = '';
    quantityInput.value = '';
    priceInput.value = '';

    // console side update the value
    console.log("Updated Items:", allItems);
  } else {
    console.error(`Item with name "${itemName}" not found.`);
  }
};

