import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/styles.css';
// import { colors } from 'prompt';



const Tabs = (props) => {
    const [selectedTab, setSelectedTab] = useState(""); // setting state to index 0
    const [randomColor, setRandomColor] = useState("");

    const handleTabClick = (index) => {
        console.log(index);
        setSelectedTab(contentInfo[index]);
        const randomColor = contentColors[Math.floor(Math.random() * contentColors.length)];  // iterating through array and pulling out random color 
        setRandomColor(randomColor); // setting state of Color = randomColor
        console.log(randomColor);
    };

    const contentInfo = [  // Putting my tabs content (text) into array called contentInfo so i can dynamically render it with react based on tab clicked.
        "The average person will spend about six months of their life waiting for red traffic lights to turn green. It's a reminder that even those small moments of waiting can add up over time. So, next time you're at a red light, embrace the opportunity to take a deep breath and enjoy a brief pause in your day.",
        "The world's oldest piece of chewing gum is over 9,000 years old! Archaeologists discovered a wad of ancient chewing gum made from birch bark tar in SwTeden. This prehistoric gum shows that humans have been chewing gum for thousands of years, possibly for its antibacterial properties or simply for the enjoyment of chewing.",
        "Did you know that a single strand of spaghetti is called a 'spaghetto'? So the next time you enjoy a plate of spaghetti, remember that you're indulging in delicious 'spaghetti' strands!"
    ];


    const contentColors = [ // hard coded colors into array
        "red", "blue", "purple", "brown", "yellow", "orange", "black", "lightblue", "lightgreen", "lightpink", "pink", "teal", "grey", "cyan", "tomato", "dodgerblue", "slateblue", "violet", "crimson", "magenta", "plum", "lime", "coral", "olive", "orchid", "gold"
    ]

    return (
        <>

            <nav className="nav-container" >
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button onClick={() => handleTabClick(0)} className="nav-link active" id="nav-home-tab 0" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Snapple Fact #1</button>
                    <button onClick={() => handleTabClick(1)} className="nav-link" id="nav-profile-tab 1" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Snapple Fact #2</button>
                    <button onClick={() => handleTabClick(2)} className="nav-link" id="nav-contact-tab 2" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Snapple Fact #3</button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">

                <div style={{ color: randomColor }} >{selectedTab}</div>
            </div>
        </>
    )
};


export default Tabs;