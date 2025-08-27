<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Happy Birthday!</title>
  <style>
    body {
      margin: 0;
      height: 100vh;
      background: linear-gradient(180deg, #4a90e2 0%, #1e3a5c 100%);
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .message {
      color: #fff;
      font-size: 3em;
      font-family: 'Comic Sans MS', cursive, sans-serif;
      margin-bottom: 30px;
      text-shadow: 2px 2px 10px #222;
      animation: pop 1s ease;
    }
    @keyframes pop {
      0% { transform: scale(0.2); }
      80% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
    .cake {
      position: relative;
      width: 200px;
      height: 160px;
      margin-bottom: 50px;
    }
    .cake-base {
      position: absolute;
      bottom: 0;
      width: 200px;
      height: 100px;
      background: #fff;
      border-radius: 0 0 30px 30px;
      border: 5px solid #d1c8c1;
      box-shadow: 0 10px 40px #2228;
    }
    .cake-top {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 160px;
      height: 40px;
      background: #f8bbd0;
      border-radius: 30px 30px 20px 20px;
      border: 3px solid #e57373;
    }
    .candle {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 12px;
      height: 40px;
      background: #ffd54f;
      border-radius: 4px;
      border: 2px solid #ffb300;
      z-index: 2;
    }
    .flame {
      position: absolute;
      top: -18px;
      left: 50%;
      transform: translateX(-50%);
      width: 14px;
      height: 20px;
      background: radial-gradient(circle at 7px 9px, #fffde4 40%, #ffc107 100%);
      border-radius: 50%;
      opacity: 0.8;
      animation: flicker 0.5s infinite alternate;
      z-index: 3;
    }
    @keyframes flicker {
      0% { opacity: 0.9; transform: translateX(-50%) scaleY(1.0);}
      100% { opacity: 0.7; transform: translateX(-50%) scaleY(1.1);}
    }
    .balloon {
      position: absolute;
      bottom: 0;
      width: 50px;
      height: 70px;
      border-radius: 30px 30px 30px 30px/40px 40px 30px 30px;
      background: #42a5f5;
      border: 2px solid #1976d2;
      left: 0;
      animation: float 7s linear infinite;
      z-index: 1;
    }
    .balloon::after {
      content: '';
      position: absolute;
      left: 22px;
      top: 65px;
      width: 4px;
      height: 30px;
      background: #1976d2;
      border-radius: 2px;
    }
    @keyframes float {
      0% { transform: translateY(0) scale(1); opacity: 1;}
      90% { opacity: 1;}
      100% { transform: translateY(-120vh) scale(1.1); opacity: 0;}
    }
  </style>
</head>
<body>
  <div class="message">Happy Birthday, Sister! 🎉</div>
  <div class="cake">
    <div class="cake-base"></div>
    <div class="cake-top"></div>
    <div class="candle">
      <div class="flame"></div>
    </div>
  </div>
  <script>
    // Floating Balloons Generator
    function createBalloon() {
      const balloon = document.createElement('div');
      balloon.classList.add('balloon');
      balloon.style.left = Math.random() * (window.innerWidth - 60) + 'px';
      balloon.style.background = 'hsl(' + (200 + Math.random() * 40) + ', 90%, 60%)';
      balloon.style.animationDuration = (6 + Math.random() * 3) + 's';
      document.body.appendChild(balloon);
      setTimeout(() => { balloon.remove(); }, 8000);
    }
    setInterval(createBalloon, 600);
  </script>
</body>
</html>
