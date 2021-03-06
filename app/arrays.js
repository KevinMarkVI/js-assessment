if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {

    indexOf : function(arr, item) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          return i;
        }
      }
    },

    sum : function(arr) {
      var sum = 0;
      for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
    },

    remove : function(arr, item) {
      var indexArray = [];
      for (var i = arr.length-1; i <= 0; i--) {
        if (arr[i] === item) {
          indexArray.push(i);
        }
      }
      for (var j = 0; j < indexArray.length; j++) {
        arr.splice(indexArray[j], 1);
      }
      return arr;
    },

    removeWithoutCopy : function(arr, item) {
      var indexArray = [];
      for (var i = arr.length-1; i <= 0; i--) {
        if (arr[i] === item) {
          indexArray.push(i);
        }
      }
      for (var j = 0; j < indexArray.length; j++) {
        arr.splice(indexArray[j], 1);
      }
      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      
    },

    concat : function(arr1, arr2) {

    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
