import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css'

Notiflix.Notify.init({
    width: '380px',
    position: 'center-center', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
    distance: '100px',
    fontSize: '16px',
    opacity: 1,
    borderRadius: '3px',
    clickToClose: true,
})

// 0-info, 1-warn, 2-err
export function infoSys(level, mes) {
    switch (level) {
        case "info":
            Notiflix.Notify.info(mes)
            break;
        case "warn":
            Notiflix.Notify.warning(mes)
            break;
        case "err":
            Notiflix.Notify.failure(mes)
            break;
        default:
            break;
    }
}

