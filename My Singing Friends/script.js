 document.addEventListener("DOMContentLoaded", function () {

    var button = document.getElementById("singing");
    document.addEventListener("click", function () {

        var friends = ["Warren", "Sky", "Walter", "Greg", "Shadd"];        
        for (i = 0; i < friends.length; i++) {
            var x = 99;
            var myFriends = friends[i];
            var guys = document.createElement("div");
            guys.className = "boys";
            var first = document.createTextNode(myFriends);
            var head = document.createElement("h3");
            head.appendChild(first);
            guys.appendChild(head);
            document.body.appendChild(guys);
            //friends[i].style.color="blue";

            while (x > 2) {
                var songLyrics = (x + " lines of code in the file " + x-- + " lines of code; " + myFriends + " strikes, one out, clears it all out, " + x + " lines of code in the file ");

                var lyric = document.createElement("p");
                var song = document.createTextNode(songLyrics);
                lyric.appendChild(song);
                guys.appendChild(lyric);

            }
            while (x > 1) {
                var songLyrics = (x + " lines of code in the file " + x-- + " lines of code; " + myFriends + " strikes, one out, clears it all out, " + x + " line of code in the file ");
                var lyric = document.createElement("p");
                var song = document.createTextNode(songLyrics);
                lyric.appendChild(song);
                guys.appendChild(lyric);
            }
            while (x > 0) {
                var songLyrics = (x + " line of code in the file " + x-- + " line of code; " + myFriends + " strikes, one out, clears it all out, " + " no more lines of code in the file ");

                var lyric = document.createElement("p");
                var song = document.createTextNode(songLyrics);
                lyric.appendChild(song);
                guys.appendChild(lyric);

            }
        }


    });

});