
document.addEventListener("DOMContentLoaded", function() {
    let rows = document.getElementsByClassName("gameRow")
    for (let i = 0; i < rows.length; i++) {
        rows[i].addEventListener("click", function() {
            let id = this.getAttribute("mongo_id");
            $.ajax({
                method: "GET",
                url: "/games/" + id
            }).then(function(data) {
                console.log(data);

                let header = document.createElement("h3");
                header.classList = "header";
                header.innerHTML = data.name;

                let announcement = document.createElement("div");
                announcement.innerHTML = "Have any comments about this game?";

                let commentInsert = document.createElement("textarea");
                commentInsert.classList = "comment";
                commentInsert.id = "commentInsert";

                let submitButton = document.createElement("button");
                submitButton.classList = "button";
                submitButton.setAttribute("mongo_id", this._id);
                submitButton.addEventListener("click", function() {
                    console.log("Add an AJAX call to submit data");
                })
                submitButton.innerText = "Submit";

                // Insert in current notes on the game itself

                let noteSection = document.getElementById("noteSection");
                noteSection.innerText = "";
                noteSection.append(header, announcement, commentInsert, submitButton)
            })
        })
    }    
})

