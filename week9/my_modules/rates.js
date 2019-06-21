module.exports = function(weight, mailtype, callback){
    let rate = 0;
    if(mailtype == "stamped"){
        rate = .55;
        if(weight > 1){ rate = .7; }
        if(weight > 2){ rate = .85; }
        if(weight > 3){ rate = 1; }
        if(weight > 3.5){ rate = 0; }
    } else if (mailtype == "metered"){
        rate = .5;
        if(weight > 1){ rate = .65; }
        if(weight > 2){ rate = .8; }
        if(weight > 3){ rate = 95; }
        if(weight > 3.5){ rate = 0; }
    } else if(mailtype == "flats"){
        rate = 1;
        if(weight > 1){ rate = 1.15; }
        if(weight > 2){ rate = 1.3; }
        if(weight > 3){ rate = 1.45; }
        if(weight > 4){ rate = 1.6; }
        if(weight > 5){ rate = 1.75; }
        if(weight > 6){ rate = 1.9; }
        if(weight > 7){ rate = 2.05; }
        if(weight > 8){ rate = 2.2; }
        if(weight > 9){ rate = 2.35; }
        if(weight > 10){ rate = 2.5; }
        if(weight > 11){ rate = 2.65; }
        if(weight > 12){ rate = 2.8; }
        if(weight > 13){ rate = 0; }
    } else if(mailtype == "package"){
        rate = 3.66;
        if(weight > 1){ rate = 3.66; }
        if(weight > 2){ rate = 3.66; }
        if(weight > 3){ rate = 3.66; }
        if(weight > 4){ rate = 4.39; }
        if(weight > 5){ rate = 4.39; }
        if(weight > 6){ rate = 4.39; }
        if(weight > 7){ rate = 4.39; }
        if(weight > 8){ rate = 5.19; }
        if(weight > 9){ rate = 5.19; }
        if(weight > 10){ rate = 5.19; }
        if(weight > 11){ rate = 2.65; }
        if(weight > 12){ rate = 5.71; }
        if(weight > 13){ rate = 0; }
    } else {
        return callback("Missing valid mailtype");   
    }
    
    if(rate == 0){
        return callback("Weight too heavy for this mail type")
    } else {
        return callback(null, rate);   
    }
}