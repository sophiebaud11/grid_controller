var numbers = {
  1:"",
  2:"",
  3:"",
  4:"",
  5:"",
  6:"",
  7:"",
  8:"",
  9:"",
  10:"",
  11:"",
  12:"",
  13:"",
  14:"",
  15:"",
  16:"",
};
window.onload = function () {
  for (i=1; i < 17; i++) {
    var soundnumber = Math.floor(Math.random() * 5000) + 1;
    for (j=0; j < i; j++) {
      if (numbers.j === soundnumber) {
        i--;
        break;
      };
    var key = i.toString();
    numbers[key] = soundnumber;
    }
    var music = "music";
    var musicid = music.concat(key);
    var padsoundnumber = ("0000" + (soundnumber)).slice(-4);
    var soundUrl = ("https://s3.amazonaws.com/ll-musiclab/public/mp3_samples/sample_" + padsoundnumber + ".mp3");
    document.getElementById(musicid).src = soundUrl;
  }
}

console.log(numbers);
