let add = (basket, req) => {
   basket.contents.push(req.body);
   return JSON.stringify(basket, null, 4);
};

let change = (basket, req) => {
   let find = basket.contents.find(el => el.id === +req.params.id);
   find.quantity += req.body.quantity;
   return JSON.stringify(basket, null, 4);
};

let remove = (basket, req) => {
   let find = basket.contents.find(el => +el.id === req.body.id);
   let basketContent = basket.contents;
   basketContent.splice(basketContent.indexOf(find), 1);
   return JSON.stringify(basket, null, 4);
}

module.exports = {
   add,
   change,
   remove
};