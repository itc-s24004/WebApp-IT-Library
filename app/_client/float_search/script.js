((() => {


    const segmenter = new Intl.Segmenter("ja", { granularity: "word" });//単語分割

    const PopButton = document.getElementById("popup_search");

    const PopupSearchText = document.getElementById("popup_search_text");

    const PopStyle = PopButton.style;

    let searchWords = [];

    document.onmouseup = (ev) => {
        const select = document.getSelection();
        if (select.rangeCount > 0) {
            const selectText = select.getRangeAt(0).toString();
            if (selectText.length > 0) {
                const words = [...segmenter.segment(selectText)].filter(e => e.isWordLike && e.segment.length > 1 && !/[\u3040-\u309F]/.test(e.segment)).map(e => e.segment)//単語&&2文字以上&&ひらがな以外
                
                searchWords = words;

                if (words.length > 0) {
                    PopupSearchText.innerText = words.join(", ");

                    const style = PopButton.style;
                    PopButton.style.opacity = "1";
                    PopStyle.pointerEvents = "auto";
                    const PopRect = PopButton.getBoundingClientRect();
                    style.top = `${ev.pageY + PopRect.height/2 - 20}px`;
                    style.left = `${ev.pageX - PopRect.width/2}px`
                    return

                }
            }
        }
        PopButton.style.opacity = "0";
        PopStyle.pointerEvents = "none";
    }

    document.ontouchend = (ev) => {
        const select = document.getSelection();
        if (select.rangeCount > 0) {
            const selectText = select.getRangeAt(0).toString();
            if (selectText.length > 0) {
                const words = [...segmenter.segment(selectText)].filter(e => e.isWordLike && e.segment.length > 1 && !/[\u3040-\u309F]/.test(e.segment)).map(e => e.segment)//単語&&2文字以上&&ひらがな以外
                
                searchWords = words;

                if (words.length > 0) {
                    PopupSearchText.innerText = words.join(", ");

                    const style = PopButton.style;
                    PopButton.style.opacity = "1";
                    PopStyle.pointerEvents = "auto";
                    const PopRect = PopButton.getBoundingClientRect();
                    const touch = ev.touches[0];
                    style.top = `${touch.pageY + PopRect.height/2 - 20}px`;
                    style.left = `${touch.pageX - PopRect.width/2}px`
                    return
                }
            }
        }
        PopButton.style.opacity = "0";
        PopStyle.pointerEvents = "none";
    }


    document.onselectionchange = (ev) => {
        
    }

    PopButton.onclick = async () => {
        PopButton.style.opacity = "0";
        PopStyle.pointerEvents = "none";


        document.getSelection().removeAllRanges();


        /**@type {HTMLIFrameElement} */
        const frame = document.getElementById("popup_iframe");
        /**@type {HTMLIFrameElement} */
        const label = document.getElementById("floating_search_window_label");


        /**
         * @type {import("../../_API_Modules/Wikipedia").WikiSearchResponse}
         */
        const res = await (await fetch(`/api/wiki?q=${searchWords.join(",")}`)).json();
        
        if (res.query.search.length == 0) {
            label.innerText = "ヒットする内容が見つかりませんでした"
            return;
        };
        



        label.innerText = `[ ${searchWords.join(",")} ]の検索結果`

        frame.src = `https://ja.wikipedia.org/w/index.php?curid=${res.query.search[0].pageid}`;

        const style = frame.parentElement.parentElement.style
        // style.display = "block";
        style.opacity = "1";
        style.pointerEvents = "auto";
    }




}))()


