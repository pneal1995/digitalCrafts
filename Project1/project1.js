$(function(){
    $('#subBtn').on('click', function(){

    // getting the API data from zillow
    var city = $("#cityselect").val();
    var state = $("#stateselect").val();
$.get('http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=X1-ZWz18fvjq3ltsb_6ttia&state=' + state + '&city=' + city + '&childtype=neighborhood')
.done(function(response){
    console.log(response);
    myFunction(response);

})
.fail(function(error){

})


})
// function to find elements in the response and add to the HTML
// bad code but works lol

function myFunction(response) {
    var $sidebar = $("#sidebar");
    xmlDoc = response;
    x = xmlDoc.getElementsByTagName("list");
    list = x[0];
    y = list.getElementsByTagName("region");
    for (i=0; i < 20; i++) {
    z = y[i];
    a = [z.getElementsByTagName("name"), z.getElementsByTagName("zindex"), z.getElementsByTagName("url"), z.getElementsByTagName("latitude"), z.getElementsByTagName("longitude")];
    
    $sidebar.append(a[0], "<br>Median home value in the region: $", a[1], "<br>", a[2], "<br>", a[3], ", ", a[4], "<br><br>");
    }
    // check the console to see the list!
    console.log(y);
  }
        
});
