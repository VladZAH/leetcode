var intToRoman = function(num) {
    let arr = [];
    let str = num.toString();
    var map1 = new Map([[1, 'I'], [2, 'II'], [3, 'III'], [4, 'IV'], [5, 'V'], [6, 'VI'], [7, 'VII'], [8, 'VIII'], [9, 'IX'], [0, '']]);
    var map2 = new Map([[1, 'X'], [2, 'XX'], [3, 'XXX'], [4, 'XL'], [5, 'L'], [6, 'LX'], [7, 'LXX'], [8, 'LXXX'], [9, 'XC'], [0, '']]);
    var map3 = new Map([[1, 'C'], [2, 'CC'], [3, 'CCC'], [4, 'CD'], [5, 'D'], [6, 'DC'], [7, 'DCC'], [8, 'DCCC'], [9, 'CM'], [0, '']]);
    var map4 = new Map([[1, 'M'], [2, 'MM'], [3, 'MMM'], [0, '']]); 
    if(str.length == 1){
    arr.unshift(map1.get(parseInt(str.substr(str.length-1, 1))));
    }else if(str.length==2){
    arr.unshift(map1.get(parseInt(str.substr(str.length-1, 1))));
    arr.unshift(map2.get(parseInt(str.substr(str.length-2, 1))));
    }else if(str.length==3){
    arr.unshift(map1.get(parseInt(str.substr(str.length-1, 1))));
    arr.unshift(map2.get(parseInt(str.substr(str.length-2, 1))));
    arr.unshift(map3.get(parseInt(str.substr(str.length-3, 1))));
    }else{
    arr.unshift(map1.get(parseInt(str.substr(str.length-1, 1))));
    arr.unshift(map2.get(parseInt(str.substr(str.length-2, 1))));
    arr.unshift(map3.get(parseInt(str.substr(str.length-3, 1))));
    arr.unshift(map4.get(parseInt(str.substr(str.length-4, 1))));}
    
    var ans = arr.join('');
    return ans;
};

console.log(intToRoman(1995));
