// セレクタ取得
const popupVijust = document.getElementById("Vijust");
const closeVijust = document.getElementById("closeVijust");
const customColorButton = document.getElementById("customColor");
const backButton = document.getElementById("backButton");
const sampleText = document.getElementById("sampleText");
const addOutlineButton = document.getElementById("addOutline");
const openVijust = document.querySelector(".openVijust");
const popupContent = document.querySelector(".popupContent");
const popupButtons = document.querySelector(".popupButtons");

// ポップアップを開く
openVijust.addEventListener("click", () => {
  popupVijust.style.display = "block";
});

// CUSTOMボタンをクリックしたときの動作
customColorButton.addEventListener("click", () => {
  // 既存のボタンを非表示にする
  popupButtons.style.display = "none";

  // スライダーがすでに表示されていないか確認
  if (!popupContent.querySelector(".colorSlider")) {
    // 新しいコンテンツ（色調整スライダー）を挿入
    const colorSliderHTML = `
      <div class="colorSlider">
        <div>
          <label class="textOnSlider" for="redRange">Red</label>
          <input type="range" id="redRange" min="0" max="255" value="200" />
        </div>
        <div>
          <label class="textOnSlider" for="greenRange">Green</label>
          <input type="range" id="greenRange" min="0" max="255" value="200" />
        </div>
        <div>
          <label class="textOnSlider" for="blueRange">Blue</label>
          <input type="range" id="blueRange" min="0" max="255" value="200" />
        </div>
      </div>
    `;
    // 色調整スライダーを挿入
    popupContent.insertAdjacentHTML("beforeend", colorSliderHTML);

    // スライダー要素を取得
    const redRange = document.getElementById("redRange");
    const greenRange = document.getElementById("greenRange");
    const blueRange = document.getElementById("blueRange");

    // 現在の文字色を取得してスライダーに反映
    const currentColor = getComputedStyle(sampleText).color;
    const rgb = currentColor.match(/\d+/g).map(Number);
    redRange.value = rgb[0];
    greenRange.value = rgb[1];
    blueRange.value = rgb[2];

    // 色更新関数
    const updateColor = () => {
      const r = redRange.value;
      const g = greenRange.value;
      const b = blueRange.value;
      sampleText.style.color = `rgb(${r}, ${g}, ${b})`;
    };

    // スライダーイベントリスナー追加
    redRange.addEventListener("input", updateColor);
    greenRange.addEventListener("input", updateColor);
    blueRange.addEventListener("input", updateColor);
  }

  // 「◀」ボタンを表示
  backButton.style.display = "block";
});

// 「◀」ボタンをクリックしたときの動作
backButton.addEventListener("click", () => {
  // スライダーを削除
  const colorSlider = popupContent.querySelector(".colorSlider");
  if (colorSlider) {
    colorSlider.remove();
  }

  // ボタンを再表示
  popupButtons.style.display = "block";

  // 「◀」ボタンを非表示
  backButton.style.display = "none";
});

// バツ印（閉じるボタン）をクリックしたときの動作
closeVijust.addEventListener("click", () => {
  popupVijust.style.display = "none";
});

// 画像クリックイベント
document.querySelectorAll(".icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    alert(`${icon.alt}がクリックされました`);
  });
});

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
