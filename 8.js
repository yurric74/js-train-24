console.log("Завдання: 8 ==============================");

function task8() {
  function fetchFakeData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
  // Створюємо функцію fetchFakeData, яка симулює запит до сервера та повертає "дані" через Promise.resolve().
  const random = Math.random();
  if (random < 0.5) {
    const fakeData = { name: "John", age: 30 };
    resolve(fakeData);
  } else {
    reject("Помилка при отриманні даних");}},1000);});}
    // Створюємо fakeData константу з данними { name: "John",age: 30}
  // Використовуємо Promise.resolve(fakeData) для того, щоб створити вже зарезолвлений проміс.
  fetchFakeData()
    .then((data) => {
      console.log( data);})
      .catch((error) => {
        console.error("Помилка:", error);});
  // Викликаємо функцію fetchFakeData
  // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
  // Якщо проміс виконаний з помилкою виводимо в консоль помилку
}

// Викликаємо функцію task8
task8();
