export function plusList(){
  const plusBtn = document.getElementById('plusBtn'),
  plusBtnImg = document.getElementById('plusBtnImg');

  plusBtnImg.addEventListener('click',function(){
    plusBtn.click();
    console.log("click!")
  })
}