"use strict";

var money, time, expensesMonth, expensesVas;

money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
  budget: money,
  timeData: time,
  expenses: {},
  income: [],
  savings: false
};

var expenses1, expenses2;

expenses1 = prompt("Введите обязательную статью расходов в этом месяце");
appData.expenses[expenses1] = prompt("Во сколько обойдется?");

expenses2 = prompt("Введите обязательную статью расходов в этом месяце");
appData.expenses[expenses2] = prompt("Во сколько обойдется?");

var oneDay = appData.expenses[expenses1] / 30;

alert("Бюджет на 1 день " + oneDay + " рублей.");

console.log(appData);
