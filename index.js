function shout(string) {
    return string.toUpperCase();
  }
  
  function whisper(string) {
    return string.toLowerCase();
  }
  
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  console.log(shout('hello'));
  console.log(whisper('HELLO'));
  logShout('hello');
  
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
      return "I can't hear you!";
    } else if (string.toUpperCase() === string) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
  
  console.log(logWhisper('HELLO'));
  console.log(sayHiToHeadphonedRoommate('hello'));
  console.log(sayHiToHeadphonedRoommate('HELLO'));
  console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));
  
