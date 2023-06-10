import { useState } from "react";

const phrases = new Map([
  ["english", "Happy Birthday"],
  ["german", "Alles Gute zum Geburtstag"],
  ["spanish", "Felix Cumpleanos"],
  ["pig latin", "Appy Hay Irthday Bay"]
]);

function Phrases() {
  const [currentLanguage, setCurrentLanguage] = useState("english");     //uncommented out to change up translator

  // const [phrase, setPhrase] = useState(phrase.get("english"));

  const [currentPhrase, setCurrentPhrase] = useState({
    lang: "english",
    phrase: "Happy Birthday",
  });

  const [settings, setSettings] = useState({
    darkmode: false,
    autoscroll: false,
    autoplay: false
  })

  //event handler
  const handleChangeSettings = (newSetting) => {
    setCurrentSetting(newSetting)
    
    
    //commented out to change up translator
    // setCurrentPhrase({
    //   lang: newLang,
    //   phrase: phrases.get(newLang),
    // });

    const handleChangeLanguage = (newLang) => {}
    setCurrentLanguage(newLang);
    setPhrase(phrases.get(lang));

    const handleChangeSettings = (newSetting) => {
      setSettings({
        ...settings, 
        newSetting
      })
    }

    // const handleChangeLanguage = (newLang) => {

    // }
  };

  return (
    // This is the first version
    // <div className="BirthdayTranslator componentBox">
    //   <h3>
    //     {phrase}! ({currentLanguage})
    //   </h3>
    //   <button onClick={() => handleChangeLanguage("english")}>English</button>
    //   <button onClick={() => handleChangeLanguage("german")}>German</button>
    //   <button onClick={() => handleChangeLanguage("spanish")}>Spanish</button>
    // </div>

    //this is the new version
    <>
      <h3>
        {currentPhrase.phrase}! ({currentPhrase.lang})
      </h3>
      <button onClick={() => handleChangeLanguage("english")}>English</button>
      <button onClick={() => handleChangeLanguage("german")}>German</button>
      <button onClick={() => handleChangeLanguage("spanish")}>Spanish</button>
      <button onClick={() => handleChangeLanguage("pig latin")}>Pig Latin</button>
    </>
  );
}
export default Phrases;
