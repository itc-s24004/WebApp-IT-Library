

((() => {


    const segmenter = new Intl.Segmenter("ja", { granularity: "word" });//単語分割

    const PopButton = document.getElementById("popup_search");

    const PopupSearchText = document.getElementById("popup_search_text");

    const PopStyle = PopButton.style;
    const PopRect = PopButton.getBoundingClientRect();

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
                    style.top = `${ev.pageY + PopRect.height/2 + 20}px`;
                    style.left = `${ev.pageX - PopRect.width/2 + 20}px`
                    PopButton.style.opacity = "1";
                    PopStyle.display = "block";

                } else {
                PopButton.style.opacity = "0";
                PopStyle.display = "none";

                }
            } else {
                PopButton.style.opacity = "0";
                PopStyle.display = "none";

            }
        }
    }

    PopButton.onclick = async () => {
        PopButton.style.opacity = "0";
        PopStyle.display = "none";


        console.log(searchWords);
        /**
         * @type {import("../app/_API_Modules/Wikipedia.ts").WikiSearchResponse}
         */
        const res = await (await fetch(`/api/wiki?q=${searchWords.join(",")}`)).json();
        console.log(res.query);
        const pages = res.query.pages;

        /**
         * @type {HTMLIFrameElement}
         */
        const frame = document.getElementById("popup_iframe");

        console.log(frame);

        frame.src = pages[Object.keys(pages)[0]].fullurl;

        const style = frame.style
        style.display = "block";
        style.opacity = "1";
    }




}))()


