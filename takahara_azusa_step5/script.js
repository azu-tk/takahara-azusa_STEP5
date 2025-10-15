document.addEventListener('DOMContentLoaded', () => {
    // DOM要素の取得
    const inputText = document.getElementById('inputText');
    const displayButton = document.getElementById('displayButton');
    const displayArea = document.getElementById('displayArea');
    const changeBgButton = document.getElementById('changeBgButton');
    const dataTableBody = document.getElementById('dataTable').querySelector('tbody');
    const addCountSpan = document.getElementById('addCount');

    // 設問2：背景色の変更
    const colors = ['lightblue', 'lightgreen', 'lightcoral'];
    let colorIndex = 0;

    // 設問4, 設問5 関連: 追加回数の管理
    let addCount = 0;
    const MAX_COUNT = 3; // 設問4, 設問5, 設問6 関連の最大値

    // 設問1, 設問3, 設問4　：入力値（空）、テキスト表示、ハイライト切替、テーブル
 
    displayButton.addEventListener('click', () => {
        const text = inputText.value.trim();

        // 設問1 b): 入力値が空の場合
        if (text === '') {
            alert('入力値が空です。');
            return; // 処理を中断
        }

        // 設問1 a): テキストの表示
        displayArea.textContent = text;

        // 設問3: ハイライトの切り替え
        displayArea.classList.toggle('highlight');

        // 設問4 a): テーブルへの追加と削除ボタンの付加
        addRowToTable(text);
        inputText.value = ''; // 入力フィールドをクリア

        // 設問4 b): 追加回数の増加とボタンの非表示
        addCount++;
        updateCountAndButtonVisibility();
    });


    function addRowToTable(text) {
        // 設問6: テストデータ制限 (最大3件)
        // 4件目以降追加→一番古いデータを削除
        if (dataTableBody.children.length >= MAX_COUNT) {
            dataTableBody.removeChild(dataTableBody.firstChild);
        }

        const newRow = dataTableBody.insertRow(); // 新しい行を作成
        
        // データセル
        const dataCell = newRow.insertCell(0);
        dataCell.textContent = text;

        // 削除ボタン
        const actionCell = newRow.insertCell(1);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '削除';

        // 設問5 a): 削除機能
        deleteButton.addEventListener('click', () => {
            newRow.remove();

            // 設問5 b): 削除後カウント減少、ボタン再表示
            addCount--;
            updateCountAndButtonVisibility();
        });

        actionCell.appendChild(deleteButton);
    }

  
    function updateCountAndButtonVisibility() {
        addCountSpan.textContent = addCount;

        // 設問4 b) / 設問5 b) の条件
        if (addCount >= MAX_COUNT) {
            displayButton.style.display = 'none'; // 非表示
        } else {
            displayButton.style.display = 'inline-block'; // 再表示
        }
    }

    // 設問2: 背景色の変更
    changeBgButton.addEventListener('click', () => {
        // 背景色を次の色に変更
        document.body.style.backgroundColor = colors[colorIndex];
        
        // colorIndexを循環的に更新 (0 -> 1 -> 2 -> 0 -> ...)
        colorIndex = (colorIndex + 1) % colors.length;
    });


    // 設問7: ループ表示

    function logLoopCounts() {
        console.log("設問7: ループ表示");
        for (let i = 1; i <= 5; i++) {
            console.log(`現在のループ回数: ${i}`);
        }
    }

    // ページロード時に実行
    logLoopCounts();
});