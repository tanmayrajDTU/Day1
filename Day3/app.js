window.onload = function () {
    var abc = {};
    var input = document.getElementById("x");
    Object.defineProperty(abc, "inputValue", {
      get: function () {
        return value;
      },
      set: function (inputVal) {
        input.value = inputVal;
        value = inputVal;
      },
    });
    input.addEventListener("input", function () {
      abc.inputValue = input.value;
      document.getElementById("y").innerHTML = abc.inputValue;
    });
    setInterval(function () {
      abc.inputValue = Math.floor(Math.random() * 42);
      document.getElementById("y").innerHTML = abc.inputValue;
    }, 5000);
  };