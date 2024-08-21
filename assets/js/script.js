const countdownElement = document.getElementById('countdown');

function createCountdown(time, label, color) {
  return ` 
    <div id="${label.toLowerCase()}" class="flex justify-center items-center" style="width: 60px; height: 60px;"></div>
    <div class="text-center ml-2">
        <p class="font-bold text-${color}-600 text-lg">${time}</p>
        <p class="text-xs">${label}</p>
      </div>

  `;
}

countdownElement.innerHTML = `
  ${createCountdown(9, 'Jam', 'green')}
  ${createCountdown(36, 'Menit', 'red')}
  ${createCountdown(55, 'Detik', 'yellow')}
`;

// Custom Countdown Circle (Optional)
function drawCircle(elementId, percentage, color) {
  Morris.Donut({
    element: elementId,
    data: [
      { label: "", value: percentage },
      { label: "", value: 100 - percentage }
    ],
    colors: [color, '#f1f1f1'],
    formatter: function () { return ""; },
    resize: true
  });
}

drawCircle('jam', 75, '#34D399');
drawCircle('menit', 60, '#EF4444');
drawCircle('detik', 30, '#FBBF24');


