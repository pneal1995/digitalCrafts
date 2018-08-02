$(function(){

    // getting the API data from zillow
$.get("http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=X1-ZWz18fvjq3ltsb_6ttia&state=wa&city=seattle&childtype=neighborhood")
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
    xmlDoc = response;
    x = xmlDoc.getElementsByTagName("list");
    list = x[0];
    y = list.getElementsByTagName("region");
    for (i=0; i < 10; i++) {
    z = y[i];
    a = [z.getElementsByTagName("name"), z.getElementsByTagName("zindex"), z.getElementsByTagName("url"), z.getElementsByTagName("latitude"), z.getElementsByTagName("longitude")];
    var $infobox = $("#infobox");
    $infobox.append(a[0]);
    $infobox.append("<br>$");
    $infobox.append(a[1]);
    $infobox.append("<br>");
    $infobox.append(a[2]);
    $infobox.append("<br>");
    $infobox.append(a[3]);
    $infobox.append(", ");
    $infobox.append(a[4]);
    $infobox.append("<br><br>");
    }
    // check the console to see the list!
    console.log(y);
  }