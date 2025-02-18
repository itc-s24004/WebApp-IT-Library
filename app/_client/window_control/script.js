((() => {


    /**ウィンドウ構成
     * window* * * * * * * * * * * * * * * * * *
     *                                         *
     *   + frame + + + + + + + + + + + + + +   *
     *   +   button...[flag]               +   *
     *   + + + + + + + + + + + + + + + + + +   *
     *                                         *
     *   + content + + + + + + + + + + + + +   *
     *   +   element...                    +   *
     *   + + + + + + + + + + + + + + + + + +   *
     *                                         *
     * * * * * * * * * * * * * * * * * * * * * *
     */

    /**
     * @type {HTMLElement[]}
     */
    const windows = [];


    const flags = document.getElementsByName("floating_window");
    flags.forEach(flag => {

        const frame = flag.parentElement
        const window = frame.parentElement;

        const content = window.children[1];

        windows.push(window);


        window.setAttribute("name", "component_window");


        let move = false;

        //マウス
        frame.addEventListener("mousedown", () => {
            move=true;
            content.style.pointerEvents = "none";
        });
        document.addEventListener("mouseup", () => {
            if (move) {
                move=false
                content.style.pointerEvents = "auto";
            }
        });

        document.addEventListener("mousemove", (ev) => {
            if (move) {
                const Rect = window.getBoundingClientRect();
                window.style.top = `${Rect.top + ev.movementY}px`;
                window.style.left = `${Rect.left + ev.movementX}px`;
            }
        });

        document.addEventListener("mouseleave", () => {
            if (move) {
                move = false;
                console.log("leave")
                content.style.pointerEvents = "auto";
            }
        });

        // window.addEventListener("mouseover", () => {
        //     move = false;
        // })


        //タッチ
        frame.addEventListener("touchstart", () => {
            move=true;
            console.log("touch")
        });
        frame.addEventListener("touchend", () => {
            move=false;
            console.log("touch")
        });

        frame.addEventListener("touchmove", (ev) => {
            console.log("touch")
            const Rect = frame.getBoundingClientRect();
            const touch = ev.targetTouches[0];
            window.style.top = `${touch.pageY - Rect.height/2}px`;
            window.style.left = `${touch.pageX - Rect.width/2}px`;
        });


        flag.remove();
    });



    //ボタン操作
    /**@type {NodeListOf<HTMLElement>} */
    const closeButtons = document.getElementsByName("window_control_close");
    closeButtons.forEach(button => {
        button.onclick = () => {
            window.remove();
            button.parentElement.parentElement.remove()
        }
    })
    /**@type {NodeListOf<HTMLElement>} */
    const minimizeButtons = document.getElementsByName("window_control_minimize");
    minimizeButtons.forEach(button => {
        button.onclick = () => {
            const style = button.parentElement.parentElement.style
            style.opacity = "0";
            style.pointerEvents = "none";
            button.parentElement.parentElement.children[1].style.pointerEvents = "none"
        }
    });




    window.addEventListener("resize", (ev) => {
        console.log("resize")
        const innerWidth = window.innerWidth;
        const innerHeight = window.innerHeight;


        windows.forEach(window => {
            const Rect = window.getBoundingClientRect();
            const {width, height} = Rect;

            const style = window.style;

            style.width = `${Math.min(width, innerWidth)}px`;
            style.height = `${Math.min(height, innerHeight)}px`;
        })
    })
    

}))();


