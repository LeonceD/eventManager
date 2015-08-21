
for ( var i=0 ; i<=24; i++) {
    $("#hours").append("<option value="+i+">"+i+"</option>");
}

for ( var i=0 ; i<=60; i+=5) {
    $("#mins").append("<option value="+i+">"+i+"</option>");
}