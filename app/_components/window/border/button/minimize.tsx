import style from "./index.module.css";

export default function component() {
    return <button className={`${style.button_icon} ${style.minimize}`} name="window_control_minimize"></button>;
}
