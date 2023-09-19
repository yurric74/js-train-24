console.log("Завдання: 10 ==============================");

function task10() {
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 1");
    }, 500);
  });
  // Створюємо проміс promise1, які вирішуються через 500мс, та повертають як успішне виконання рядок "Promise 1".
  const promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 2");
    }, 200);
  });
  // Створюємо проміс promise2, які вирішуються через 200мс, та повертають як успішне виконання рядок "Promise 2".
  const promise3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise 3");
    }, 300);
  });
  // Створюємо проміс promise3, які вирішуються через 300мс, та повертають як успішне виконання рядок "Promise 3".
  const promises = [promise1, promise2, promise3];

  Promise.any(promises)
    .then((data) => {console.log(data);})
    .catch((error) => {console.error(error);});
  // Promise.any() приймає масив промісів які ми створили вище і вирішується, як тільки перший із цих промісів вирішується.
  // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
  // Якщо проміс виконаний з помилкою виводимо в консоль помилку
}

// Викликаємо функцію task10
task10();
