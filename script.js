"use strict";

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    income: [],
    optionalExpenses : {},
    savings: true
};


function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let  a = prompt("Введите обязательную статью расходов в этом месяце", ""),
             b = prompt("Во сколько обойдется?", "");
        if ((typeof(a)) === "string" && (typeof(a) != null ) && (typeof(b) != null )
            && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
        } else {
            i--;
        }         
    }
}

chooseExpenses();

function detectDayBudget() {
    appData.oneDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.oneDay + " рублей.");
}
    
detectDayBudget();

function detectLevel() {
    if (appData.oneDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.oneDay > 100 && appData.oneDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.oneDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Произошла ошибка");
    }
}

detectLevel()

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма нокоплений?"),
            percent = +prompt ("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с депозита: " + appData.monthIncome + " рублей.");
    }     
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}

chooseOptExpenses();

console.log(appData);