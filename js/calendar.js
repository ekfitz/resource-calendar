var daysofyear = [0,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
];

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


var duJan = 0;
var duFeb = duJan + 31;
var duMar = duFeb + 28;
var duApr = duMar + 31;
var duMay = duApr + 30;
var duJun = duMay + 31;
var duJul = duJun + 30;
var duAug = duJul + 31;
var duSep = duAug + 31;
var duOct = duSep + 30;
var duNov = duOct + 31;
var duDec = duNov + 30;


var d = new Date();
var today = d.getDate();
var dayofweek = d.getDay();
var thismonth = d.getMonth();

function currmonth() {
  if (thismonth == 0) {
    return months[0];
  } else if (thismonth == 1) {
    return months[1];
  } else if (thismonth == 2) {
    return months[2];
  } else if (thismonth == 3) {
    return months[3];
  } else if (thismonth == 4) {
    return months[4];
  } else if (thismonth == 5) {
    return months[5];
  } else if (thismonth == 6) {
    return months[6];
  } else if (thismonth == 7) {
    return months[7];
  } else if (thismonth == 8) {
    return months[8];
  } else if (thismonth == 9) {
    return months[9];
  } else if (thismonth == 10) {
    return months[10];
  } else if (thismonth == 11) {
    return months[11];
  }
}

function doy(x) {
  if (thismonth == 0) {
    return x + duJan;
  } else if (thismonth == 1) {
    return x + duFeb
  } else if (thismonth == 2) {
    return x + duMar;
  } else if (thismonth == 3) {
    return x + duApr;
  } else if (thismonth == 4) {
    return x + duMay;
  } else if (thismonth == 5) {
    return x + duJun;
  } else if (thismonth == 6) {
    return x + duJul;
  } else if (thismonth == 7) {
    return x + duAug;
  } else if (thismonth == 8) {
    return x + duSep;
  } else if (thismonth == 9) {
    return x + duOct;
  } else if (thismonth == 10) {
    return x + duNov;
  } else if (thismonth == 11) {
    return x + duDec;
  }
}

function dufMon(x) {
  if (dayofweek == 0) {
    return doy(today) + 1;
  } else if (dayofweek == 1) {
    return doy(today);
  } else if (dayofweek == 2) {
    return doy(today) - 1;
  } else if (dayofweek == 3) {
    return doy(today) - 2;
  } else if (dayofweek == 4) {
    return doy(today) - 3;
  } else if (dayofweek == 5) {
    return doy(today) - 4;
  } else if (dayofweek == 6) {
    return doy(today) - 5;
  }
}

function dufTue(x) {
  if (dayofweek == 0) {
    return daysofyear[x] + 2;
  } else if (dayofweek == 1) {
    return daysofyear[x] + 1;
  } else if (dayofweek == 2) {
    return daysofyear[x];
  } else if (dayofweek == 3) {
    return daysofyear[x] - 1;
  } else if (dayofweek == 4) {
    return daysofyear[x] - 2;
  } else if (dayofweek == 5) {
    return daysofyear[x] - 3;
  } else if (dayofweek == 6) {
    return daysofyear[x] - 4;
  }
}

function dufWed(x) {
  if (dayofweek == 0) {
    return daysofyear[x] + 3;
  } else if (dayofweek == 1) {
    return daysofyear[x] + 2;
  } else if (dayofweek == 2) {
    return daysofyear[x] + 1;
  } else if (dayofweek == 3) {
    return daysofyear[x];
  } else if (dayofweek == 4) {
    return daysofyear[x] - 1
  } else if (dayofweek == 5) {
    return daysofyear[x] - 2;
  } else if (dayofweek == 6) {
    return daysofyear[x] - 3;
  }
}

function dufThu(x) {
  if (dayofweek == 0) {
    return daysofyear[x] + 4;
  } else if (dayofweek == 1) {
    return daysofyear[x] + 3;
  } else if (dayofweek == 2) {
    return daysofyear[x] + 2;
  } else if (dayofweek == 3) {
    return daysofyear[x] + 1;
  } else if (dayofweek == 4) {
    return daysofyear[x];
  } else if (dayofweek == 5) {
    return daysofyear[x] - 1;
  } else if (dayofweek == 6) {
    return daysofyear[x] - 2;
  }
}

function dufFri(x) {
  if (dayofweek == 0) {
    return daysofyear[x] + 5;
  } else if (dayofweek == 1) {
    return daysofyear[x] + 4;
  } else if (dayofweek == 2) {
    return daysofyear[x] + 3;
  } else if (dayofweek == 3) {
    return daysofyear[x] + 2;
  } else if (dayofweek == 4) {
    return daysofyear[x] + 1;
  } else if (dayofweek == 5) {
    return daysofyear[x];
  } else if (dayofweek == 6) {
    return daysofyear[x] - 1;
  }
}

function dusMon(x) {
  if (dayofweek == 0) {
    return daysofyear[x] + 8;
  } else if (dayofweek == 1) {
    return daysofyear[x] + 7;
  } else if (dayofweek == 2) {
    return daysofyear[x] + 6;
  } else if (dayofweek == 3) {
    return daysofyear[x] + 5;
  } else if (dayofweek == 4) {
    return daysofyear[x] + 4;
  } else if (dayofweek == 5) {
    return daysofyear[x] + 3;
  } else if (dayofweek == 6) {
    return daysofyear[x] + 2;
  }
}

function dusTue(x) {
  if (dayofweek == 0) {
    return daysofyear[x] + 9;
  } else if (dayofweek == 1) {
    return daysofyear[x] + 8;
  } else if (dayofweek == 2) {
    return daysofyear[x] + 7;
  } else if (dayofweek == 3) {
    return daysofyear[x] + 6;
  } else if (dayofweek == 4) {
    return daysofyear[x] + 5;
  } else if (dayofweek == 5) {
    return daysofyear[x] + 4;
  } else if (dayofweek == 6) {
    return daysofyear[x] + 3;
  }
}

function dusWed(x) {
  if (dayofweek == 0) {
    return daysofyear[x] + 10;
  } else if (dayofweek == 1) {
    return daysofyear[x] + 9;
  } else if (dayofweek == 2) {
    return daysofyear[x] + 8;
  } else if (dayofweek == 3) {
    return daysofyear[x] + 7;
  } else if (dayofweek == 4) {
    return daysofyear[x] + 6;
  } else if (dayofweek == 5) {
    return daysofyear[x] + 5;
  } else if (dayofweek == 6) {
    return daysofyear[x] + 4;
  }
}

function dusThu(x) {
  if (dayofweek == 0) {
    return daysofyear[x] + 11;
  } else if (dayofweek == 1) {
    return daysofyear[x] + 10;
  } else if (dayofweek == 2) {
    return daysofyear[x] + 9;
  } else if (dayofweek == 3) {
    return daysofyear[x] + 8;
  } else if (dayofweek == 4) {
    return daysofyear[x] + 7;
  } else if (dayofweek == 5) {
    return daysofyear[x] + 6;
  } else if (dayofweek == 6) {
    return daysofyear[x] + 5;
  }
}

function dusFri(x) {
  if (dayofweek == 0) {
    return daysofyear[x] + 12;
  } else if (dayofweek == 1) {
    return daysofyear[x] + 11;
  } else if (dayofweek == 2) {
    return daysofyear[x] + 10;
  } else if (dayofweek == 3) {
    return daysofyear[x] + 9;
  } else if (dayofweek == 4) {
    return daysofyear[x] + 8;
  } else if (dayofweek == 5) {
    return daysofyear[x] + 7;
  } else if (dayofweek == 6) {
    return daysofyear[x] + 6;
  }
}


function firstMon(x) {
  return daysofyear[dufMon(x)];
}

function firstTue(x) {
  return daysofyear[dufTue(x)];
}

function firstWed(x) {
  return daysofyear[dufWed(x)];
}

function firstThu(x) {
  return daysofyear[dufThu(x)];
}

function firstFri(x) {
  return daysofyear[dufFri(x)];
}

function secondMon(x) {
  return daysofyear[dusMon(x)];
}

function secondTue(x) {
  return daysofyear[dusTue(x)];
}

function secondWed(x) {
  return daysofyear[dusWed(x)];
}

function secondThu(x) {
  return daysofyear[dusThu(x)];
}

function secondFri(x) {
  return daysofyear[dusFri(x)];
}
