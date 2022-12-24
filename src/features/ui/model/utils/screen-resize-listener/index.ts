import { DisplaySize } from '../../types';
import { getScreenSize } from '../sizes';

/** Listener on resize display */
export function screenResizeListener(setScreenSize: (displaySize: DisplaySize) => void) {

  window.addEventListener("resize", resizeThrottler, false);
  // log(`START LISTENER RESIZE`);

  var resizeTimeout;
  function resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if ( !resizeTimeout ) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
      }, 200);
    }
  }

  // Получаем текущий размер экрана и сохраняем в store
  function actualResizeHandler() {
    const screenSize = getScreenSize();
    setScreenSize(screenSize);
  }

  // Один раз запускаем в самом начале
  actualResizeHandler();
};
