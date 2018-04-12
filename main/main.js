// Write your cade below:
function main(Numbers) {
  let All_lyrics='';
  for(let i=Numbers;i>2;i--){
    All_lyrics+=Generate_lyric(i);
  }
  All_lyrics+=`
2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
  return All_lyrics.trim();
}
function Generate_lyric(i){
  let lyric=`
${i} bottles of beer on the wall, ${i} bottles of beer.
Take one down and pass it around, ${i-1} bottles of beer on the wall.`;
  return lyric;
}
module.exports = {
    main
}
