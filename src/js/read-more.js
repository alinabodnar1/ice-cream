document.querySelector('#stop').addEventListener('click', () => {
      document.querySelector('#my-video').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    });