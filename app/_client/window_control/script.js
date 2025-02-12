((() => {
    // document.addEventListener("mousemove", (ev) => {
    //     console.log(ev.pageX, ev.pageY);
    // })
    const windows = document.getElementsByName("floating_window");
    windows.forEach(button => {
        // console.log(button)
        button.removeAttribute("name")

        const frame = button.parentElement
        const window = frame.parentElement;

        /**@type {NodeListOf<HTMLElement>} */
        const closeButtons = document.getElementsByName("window_control_close");
        closeButtons.forEach(button => {
            button.onclick = () => {
                window.remove();
            }
        })
        /**@type {NodeListOf<HTMLElement>} */
        const minimizeButtons = document.getElementsByName("window_control_minimize");
        minimizeButtons.forEach(button => {
            button.onclick = () => {
                const style = window.style
                style.opacity = "0";
                style.pointerEvents = "none";
            }
        })
        // console.log("=".repeat(20))
        // console.log(window);
        // console.log(frame);

        let move = false;

        //マウス
        frame.addEventListener("mousedown", () => {move=true});
        frame.addEventListener("mouseup", () => {move=false});

        frame.addEventListener("mousemove", (ev) => {
            if (move) {
                const Rect = window.getBoundingClientRect();
                window.style.top = `${Rect.top + ev.movementY}px`;
                window.style.left = `${Rect.left + ev.movementX}px`;
            }
        });

        frame.addEventListener("mouseleave", () => {
            move = false;
        });


        //タッチ
        frame.addEventListener("touchstart", () => {move=true});
        frame.addEventListener("touchend", () => {move=false});

        frame.addEventListener("touchmove", (ev) => {
            const Rect = frame.getBoundingClientRect();
            const touch = ev.targetTouches[0];
            window.style.top = `${touch.pageY - Rect.height/2}px`;
            window.style.left = `${touch.pageX - Rect.width/2}px`;
        });
    });
    

}))();


