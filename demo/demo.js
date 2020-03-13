/* WebGazer.js library */

function horizontal_ratio(xprediction) {
    return xprediction/(screen.width*2-10)*2;
}
webgazer.setRegression("ridge"); //set a regression module
webgazer.setTracker("clmtrackr"); //set a tracker module
webgazer.setGazeListener(function(data, elapsedTime) {
        if (data == null) {
            return;
        }
        var xprediction = data.x; //these x coordinates are relative to the viewport
        var yprediction = data.y; //these y coordinates are relative to the viewport
        console.log(elapsedTime); //elapsed time is based on time since begin was called
    console.log(xprediction, yprediction);
    console.log(horizontal_ratio(xprediction));

    if(horizontal_ratio(xprediction)<=0.3){
        console.log("links");
    }
    else if(horizontal_ratio(xprediction)>=0.6){
        console.log("rechts");
    }else{
        console.log("mitte");
    }
    }).begin()
    .showPredictionPoints(true);

