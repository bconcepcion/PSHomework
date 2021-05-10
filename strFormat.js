/*Write program that accepts 3 strings of lyrics.
It will trim the lyrics empty space, remove numbers in the string
if the strings contain the words friday or weekend it will replace
them with the words monday and weekday.


*/
let intro = 
`                          Yeah, (Ah-Ah-Ah-Ah-Ah-Ark) Oo-ooh-ooh, hoo yeah, yeah
Yeah, yeah
Yeah-ah-ah
Yea34h-ah-ah
Yeah-ah-ah
Ye34ah-ah-ah
Yeah, ye34ah, yeah                      `


let verse =`                            Seven a.m., waking up in the morning
Gotta be fresh, gotta go downstairs
Gotta have my bowl, gotta have cereal
Seein' everything, the time is goin'
Tickin' on and on234, eve24rybody's rushin'
Gotta get down to the bus stop
Gotta cat24ch my bus, I see my f234riends (My friends)
Kickin' in the front seat
Sittin' in the back seat
Gotta make my m234ind up
Which seat can I take?                `


let chorus = `         It's friday, friday
Gotta get down on friday
Ever333ybody's loo3333kin' forward to the weekend, weekend
Fri9999day, friday
Gettin' do99999wn on friday
Everybody's lookin' forward to the weekend                                       
`


//makes str lowercase,replaces all numbers amd joins
function strFormat(str1,str2,str3){
    str1 = str1.trim().toLowerCase().replace(/[0-9]/g, '');
    str2 = str2.trim().toLowerCase().replace(/[0-9]/g, '');
    str3 = str3.trim().toLowerCase().replace(/[0-9]/g, '');
    let newStr = str1.concat(str2,' ',str3);


    var wkDay = {
        friday:"Monday",
        weekend:"Weekday",
     };
    
    
    newStr = newStr.replace(/friday|weekend/gi, function(replace){
      return wkDay[replace];
    });
    
    return newStr
}



console.log(strFormat(intro,verse,chorus));






    //replaces all numbers in the string with white space.
// let newChorus = chorus.replace(/[0-9]/g, '').trim().toLowerCase();
// let newIntro = intro.replace(/[0-9]/g, '').trim().toLowerCase();
// let newVerse = verse.replace(/[0-9]/g, '').trim().toLowerCase();
// let song = newIntro.concat(newVerse," ",newChorus).toLowerCase()


