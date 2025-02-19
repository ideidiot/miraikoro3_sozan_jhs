// 縁取りのトグル関数
const toggleOutline = () => {
    // 縁取りがすでにあるかどうか確認
    if (sampleText.style.textShadow) {
      // 縁取りを削除
      sampleText.style.textShadow = "";
      addOutlineButton.textContent = "縁取りを追加"; // ボタンの文字を変更
    } else {
      // 縁取りを追加
      sampleText.style.textShadow =
        "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000";
      addOutlineButton.textContent = "縁取りを削除"; // ボタンの文字を変更
    }
  };
  
  // ボタンにクリックイベントリスナーを追加
  addOutlineButton.addEventListener("click", toggleOutline);
  
  // 各移動ボタンを取得
  const moveButtons = {
    topLeft: document.querySelector(".move-top-left"),
    topRight: document.querySelector(".move-top-right"),
    bottomLeft: document.querySelector(".move-bottom-left"),
    bottomRight: document.querySelector(".move-bottom-right"),
  };
  
  // ボタンごとにクリックイベントを設定してポップアップを移動
  moveButtons.topLeft.addEventListener("click", () => {
    popupVijust.style.top = "20px";
    popupVijust.style.left = "20px";
    popupVijust.style.right = "auto";
    popupVijust.style.bottom = "auto";
  });
  
  moveButtons.topRight.addEventListener("click", () => {
    popupVijust.style.top = "20px";
    popupVijust.style.left = "auto";
    popupVijust.style.right = "20px";
    popupVijust.style.bottom = "auto";
  });
  
  moveButtons.bottomLeft.addEventListener("click", () => {
    popupVijust.style.top = "auto";
    popupVijust.style.left = "20px";
    popupVijust.style.right = "auto";
    popupVijust.style.bottom = "20px";
  });
  
  moveButtons.bottomRight.addEventListener("click", () => {
    popupVijust.style.top = "auto";
    popupVijust.style.left = "auto";
    popupVijust.style.right = "20px";
    popupVijust.style.bottom = "20px";
  });
  