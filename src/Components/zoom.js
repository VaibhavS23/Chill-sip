
function initZoom() {
    let zoom = document.getElementById('zoom');
    let imgZoom = document.getElementById('imgZoom');
  
    if (zoom && imgZoom) {
      zoom.addEventListener('mousemove', (event) => {
        imgZoom.style.opacity = 1;
        let positionPx = event.x - zoom.getBoundingClientRect().left;
        let positionX = (positionPx / zoom.offsetWidth) * 100;
  
        let positionPy = event.y - zoom.getBoundingClientRect().top;
        let positionY = (positionPy / zoom.offsetHeight) * 100;
  
        imgZoom.style.setProperty('--zoom-x', positionX + '%');
        imgZoom.style.setProperty('--zoom-y', positionY + '%');
  
        let transformX = -(positionX - 50) / 3.5;
        let transformY = -(positionY - 50) / 3.5;
        imgZoom.style.transform = `scale(1) translateX(${transformX}%) translateY(${transformY}%)`;
      });
  
      zoom.addEventListener('mouseout', () => {
        imgZoom.style.opacity = 0;
      });
    }
  }
  
  export default initZoom;
  