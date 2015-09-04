var myApp = myApp || {};

myApp.count = 0;
myApp.colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

myApp.disco = function(event){
    var listItems = $('li');
    for(var i=0; i<myApp.colors.length; i++) {
      var index = (myApp.count + i) % myApp.colors.length;
      var listItem = listItems[i];
      $(listItem).css('background-color', myApp.colors[index]);
    } // not listitem[i].css, because jQuery returns an array
    myApp.count++;
};

myApp.initialize = function(){
  // mandem myApp.disco is a callback dem, no need to bracket dem. 
  $('button#disco-button').on('click', myApp.disco);
};

// Wait for HTML to load before starting event listeners.
$(document).ready(function(){
  myApp.initialize();
});

