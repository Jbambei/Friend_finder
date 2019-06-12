// Requires
var friends = require("../data/friends")


// Logic for friend finding

//gets friends.js
module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends)
    })

    // Pushes into the array and parses the input
    app.post("/api/friends", function(req, res){
       var input = req.body
       for(let i = 0; i < input.number.length; i++){
           input.number[i] = parseInt(input.number[i])
       }

       var defaultFriend = 0 //Default to the 0th index in array 
       var minDifference = 18 

       //
       for(i = 0; i < friends.length; i++){
            var totalDifference = 0
            for(j = 0; j < friends[i].number.length; j++){
                var absoluteDifference = Math.abs(input.number[j] - friends[i].number[j]); //math.abs is absolute value
                totalDifference += absoluteDifference
                console.log(totalDifference)
                console.log(absoluteDifference)
        }
        if(totalDifference < minDifference) { //this determines whether or not we get the default friend
            defaultFriend = i
            minDifference = totalDifference
        }
       }
       friends.push(input)
       res.json(friends[defaultFriend])

    });

    // clear button functionality. RIP friends array
    app.post("/api/clear", function(req, res){
        friends.length = 0
        res.json({ok: true})
    });
}