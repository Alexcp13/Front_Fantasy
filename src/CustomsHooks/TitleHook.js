export function consoleText(words, textRef, consoleRef, colors = ['#fff'], speed = 120, waitTime = 1000) {
  if (!textRef || !consoleRef) return;

  let letterCount = 1;
  let x = 1;
  let waiting = false;
  const target = textRef.current;

  target.setAttribute('style', 'color:' + colors[0]);

  const typingInterval = setInterval(() => {
    if (letterCount === 0 && !waiting) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      setTimeout(() => {
        const usedColor = colors.shift();
        colors.push(usedColor);
        const usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0]);
        letterCount += x;
        waiting = false;
      }, waitTime);
    } else if (letterCount === words[0].length + 1 && !waiting) {
      waiting = true;
      setTimeout(() => {
        x = -1;
        letterCount += x;
        waiting = false;
      }, waitTime);
    } else if (!waiting) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, speed);

  return () => {
    clearInterval(typingInterval);
  };
}
