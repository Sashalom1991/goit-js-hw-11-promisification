// const makeOrder = (dish, onSuccess, onError) => {
//   const DELAY = 2000;
//   const passed = Math.random() > 0.5;
//   setTimeout(() => {
//     if (passed) {
//       onSuccess("Вот Ваше блюдо");
//     } else {
//       onError("Извините закончили продуктіь");
//     }
//   }, DELAY);
// };

// makeOrder("пирожок", onMakeOrderError, onMakeOrderSuccess);

// function onMakeOrderSuccess(result) {
//   console.log("onMakeOrderSuccess");
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log("onMakeOrderError");
//   console.log(error);
// }

// const fetchPockemonById = id => {
//   return fetch("https://pokeapi.co/api/v2/pokemon/3").then(r => r.json);
// };

// fetchPockemonById(1).then(onFetchSuccess).catch(onFetchError);
// // fetchPockemonById(2);
// // fetchPockemonById(4);

// function onFetchSuccess(pokemon) {
//   console.dir(pokemon);
// }

// function onFetchError(erorr) {
//   console.log("Це в блоці catch");
//   console.log(erorr);
// }
