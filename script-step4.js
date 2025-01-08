// セレクタ取得
const openVijust = document.querySelector(".openVijust");
const popupVijust = document.getElementById("Vijust");
const closeVijust = document.getElementById("closeVijust");
const customColorButton = document.getElementById("customColor");
const backButton = document.getElementById("backButton");
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
          <label for="redRange">Red</label>
          <input type="range" id="redRange" min="0" max="255" value="200" />
        </div>
        <div>
          <label for="greenRange">Green</label>
          <input type="range" id="greenRange" min="0" max="255" value="200" />
        </div>
        <div>
          <label for="blueRange">Blue</label>
          <input type="range" id="blueRange" min="0" max="255" value="200" />
        </div>
      </div>
    `;
    // 色調整スライダーを挿入
    popupContent.insertAdjacentHTML("beforeend", colorSliderHTML);
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
