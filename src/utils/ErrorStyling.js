import { ERROR_VIBRATE } from './messageVibrate';

export default function errorStyling(element1, element2) {
  // console.log(element1, element2);
  element1.style.border = '2px solid red';
  element1.animate(ERROR_VIBRATE.keyFrame, ERROR_VIBRATE.errorOptions);
  element2.animate(ERROR_VIBRATE.keyFrame, ERROR_VIBRATE.errorOptions);
}
