/*Необходимо пользователя попросить ввести температуру в градусах Цельсия, преобразовать 
введенное пользователем значение в соответствующую температуру в градусах по Фаренгейту и
 вывести в alert сообщение с текстом (пример): Цельсий: 21, Фаренгейт: 69.8
 градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32 */

 const tempCelsius = Number.parseFloat(prompt("Введите температуру в градусах Цельсия:"));
 const tempFahrenheit = 1.8 * tempCelsius + 32;
 alert(`Температура в градусах Цельсия ${tempCelsius} равна ${Math.floor( tempFahrenheit * 100 ) / 100} в градусах Фаренгейта`);
 
