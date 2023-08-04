function CondicionCompleja (num) {
    if (num > 9 && num % 2 === 0 || num === 3) console.log (true);
    else console.log (false);
};

CondicionCompleja (10);
CondicionCompleja (6);
CondicionCompleja (3);
CondicionCompleja (5);