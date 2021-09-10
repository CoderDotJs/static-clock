"use strict";
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document === null || document === void 0 ? void 0 : document.getElementById('second');
const amPm = document === null || document === void 0 ? void 0 : document.getElementById('amPm');
let s = 0;
let h = 0;
let m = 0;
const clock = () => {
    setInterval(() => {
        if (s === 59) {
            s = 0;
        }
        else {
            s++;
        }
        second.innerHTML = `${s}`;
        minute.innerHTML = `${minutes()}`;
    }, 1000);
};
const minutes = () => {
    if (s == 59) {
        m++;
    }
    else if (m == 59) {
        m = 0;
        hour.innerHTML = `${hours()}`;
    }
    return m;
};
const hours = () => {
    if (m == 0) {
        h++;
        amPm.innerHTML = 'PM';
    }
    else if (h == 12) {
        h = 1;
        amPm.innerHTML = 'AM';
    }
    return h;
};
clock();
