import React, { useState } from 'react';

function Emoji() {
 //adding hook
 const [currentEmoji, setCurrentEmoji] = useState(0);
 
 
  const emojis = [ //const changed from smileys for first portion to accommodate the exchanging images
    { name: 'smiley emoji', image: '/src/assets/Happy_heart_emoji.jpg' },
    { name: 'thumbsUp emoji', image: '/src/assets/thumbsSmiley.jpg'}
  ];

  //adding handler for button click
  const handleButtonClick = () => {
    setCurrentEmoji((prevEmoji => (prevEmoji === 0 ? 1 : 0)));   
    // this is saying if previous emoji was item 0 then display item 1 if not 0 then display 0. Only works for 2 atm.
  }

  return (
    <div>
      {/* {smiley.map((emoji) => (          // mapped object taking that pulls all details for the rendering from the const above to allow for any number of images to be sent through.
        <img
          key={emoji.name}
          src={emoji.image}
          alt={emoji.name}
          className="emoji-image"   // adds a tag for css
          style={{ width: '200px', height: '200px'}}  // sets the image to 200x200 px so default size is not too large for screen
        />
      ))} */}


      {/* Creating new <img> in order to tie in new button */}
      <img
      key={emojis[currentEmoji].name}
      src={emojis[currentEmoji].image}
      alt={emojis[currentEmoji].name}
      className='emoji-image'
      style={{width: '200px', height: '200px'}}
      /><br /><br />
      <button onClick={handleButtonClick}>Switch Emoji</button>
    </div>
  );
}

export default Emoji;
