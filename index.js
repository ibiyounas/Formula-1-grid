
const choice = document.getElementById("mySelect")
//console.log(choice.value);

function renderDrivers(driverObj) {
    
    choice.addEventListener("change", chooser);

    function chooser(selection) {
        selection = choice.value;
        //console.log(selection)
        //console.log(driverObj.team)
        let menuDiv = document.getElementById("driver-display")
        let content = menuDiv.innerHTML
            content = ""
        if (selection == driverObj.team || selection == "all") {
            console.log(selection)
    
            
            const img = document.createElement("img")
            img.src = driverObj.img
            img.alt = driverObj.driverId
            console.log(img)
            const nametag = document.createElement("h2")
            nametag.innerHTML = driverObj.fullName
            content=img
            
            menuDiv.appendChild(content);
            menuDiv.appendChild(nametag);
            console.log(content)
            img.addEventListener("click", handleClick)
        
        

        function handleClick(driverDetail) {
            const detailedInfo = document.querySelector("#myModal > .modal-content")
            const fullRes = document.createElement("img")
            fullRes.src = img.src
            const detailedName = document.createElement("h1")
            detailedName.innerHTML = nametag.innerHTML
            
            
            driverDetail = document.getElementById("myModal");
            const span = document.querySelector("#myModal > .modal-content > .close")
            const detailedStats = document.querySelector("#myModal > .modal-content >.modal-stats")
            const team = document.querySelector("#myModal > .modal-content >.team")
            const dob = document.querySelector("#myModal > .modal-content >.dob")
            const nationality = document.querySelector("#myModal > .modal-content >.nationality")
            const champs = document.querySelector("#myModal > .modal-content >.champs")
            const wins = document.querySelector("#myModal > .modal-content >.wins")
            const poles = document.querySelector("#myModal > .modal-content >.poles")
            const podiums = document.querySelector("#myModal > .modal-content >.podiums")

            const detailedTeam = document.createElement("p")
            const detailedDob = document.createElement("p")
            const detailedOrigin = document.createElement("p")
            const detailedChamps = document.createElement("p")
            const detailedWins = document.createElement("p")
            const detailedPoles = document.createElement("p")
            const detailedPodiums = document.createElement("p")
            detailedTeam.innerHTML = driverObj.team
            detailedDob.innerHTML = driverObj.dateOfBirth
            detailedOrigin.innerHTML = driverObj.nationality
            detailedChamps.innerHTML = driverObj.championships
            detailedWins.innerHTML = driverObj.wins
            detailedPoles.innerHTML = driverObj.poles
            detailedPodiums.innerHTML = driverObj.podiums
            detailedStats.appendChild(detailedName)
            detailedStats.appendChild(fullRes);
            team.appendChild(detailedTeam)
            dob.appendChild(detailedDob);
            nationality.appendChild(detailedOrigin)
            champs.appendChild(detailedChamps);
            wins.appendChild(detailedWins)
            poles.appendChild(detailedPoles);
            podiums.appendChild(detailedPodiums)
        
            function logSubmit(event) {
                commentDisplay.textContent = ``
                let input = document.getElementById("userInput").value;

                const savedComments = input;
                const commentString = document.createElement("p")
                commentString.innerHTML = savedComments
                
                commentDisplay.appendChild(commentString)
                
                
                event.preventDefault();

      }
        const form = document.getElementById("newComment");
        const commentDisplay = document.getElementById("commentDisplay");
        form.addEventListener("submit", logSubmit);

        driverDetail.style.display = "block";
        
        span.onclick = function() {
            driverDetail.style.display = "none";
            detailedStats.removeChild(fullRes);
            detailedStats.removeChild(detailedName);
            team.removeChild(detailedTeam)
            dob.removeChild(detailedDob)
            nationality.removeChild(detailedOrigin)
            champs.removeChild(detailedChamps)
            wins.removeChild(detailedWins)
            poles.removeChild(detailedPoles)
            podiums.removeChild(detailedPodiums)
            document.getElementById("userInput").value = ""
        commentDisplay.innerText = ""
        }
        window.onclick = function(event) {
            if (event.target == driverDetail) {
            driverDetail.style.display = "none";
            detailedStats.removeChild(fullRes);
            detailedStats.removeChild(detailedName);
            team.removeChild(detailedTeam)
            dob.removeChild(detailedDob)
            nationality.removeChild(detailedOrigin)
            champs.removeChild(detailedChamps)
            wins.removeChild(detailedWins)
            poles.removeChild(detailedPoles)
            podiums.removeChild(detailedPodiums)
            document.getElementById("userInput").value = ""
            commentDisplay.innerText = ""
            }


  }


  }
  
}
    /*    else if(selection!= driverObj.team) {
            const menuDiv = document.getElementById("driver-display")
            menuDiv.innerHTML = "umm??";
        }
*/

    }

}


  fetch("http://localhost:3000/drivers")
  .then((resp) => resp.json())
  .then((data) => {
    document.getElementById("driver-display").innerHTML = "";
    data.forEach(renderDrivers,)
  })
  .catch((error) => console.log(error));