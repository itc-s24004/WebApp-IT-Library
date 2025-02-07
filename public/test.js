const segmenter = new Intl.Segmenter("ja", { granularity: "word" });

document.onmouseup = () => {
    const select = document.getSelection();
    if (select.rangeCount > 0) {
        const selectText = select.getRangeAt(0).toString();
        if (selectText.length > 0) {
            console.log(selectText);
            const words = [...segmenter.segment(selectText)].filter(e => e.isWordLike && e.segment.length > 1 && !/[\u3040-\u309F]/.test(e.segment)).map(e => e.segment)//単語&&2文字以上&&ひらがな以外
            console.log(words);
        }
    }

}