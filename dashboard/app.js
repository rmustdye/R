// Ink & Paper Chart.js Visualizations

document.addEventListener("DOMContentLoaded", () => {
  renderTimeSeriesChart();
  renderLagChart();
});

function renderTimeSeriesChart() {
  const ctx = document.getElementById("timeSeriesChart").getContext("2d");
  
  // Sample aligned timeline data points
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const stockReturns = [0.012, -0.005, 0.034, -0.011, 0.022, 0.008, -0.019, 0.041, 0.002, -0.008];
  const searchChanges = [0.030, -0.010, 0.055, -0.020, 0.015, 0.022, -0.035, 0.060, 0.005, -0.012];

  new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "NVDA Daily Return %",
          data: stockReturns,
          borderColor: "#2D5F3E",
          backgroundColor: "rgba(45, 95, 62, 0.05)",
          borderWidth: 2,
          fill: true,
          tension: 0.2
        },
        {
          label: "Search Interest Change %",
          data: searchChanges,
          borderColor: "#1A1A1A",
          borderDash: [4, 4],
          borderWidth: 1.5,
          fill: false,
          tension: 0.2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "top", labels: { font: { family: "Georgia" } } }
      },
      scales: {
        x: { grid: { color: "#E2E2D8" } },
        y: { 
          grid: { color: "#E2E2D8" },
          ticks: { callback: (val) => (val * 100).toFixed(1) + "%" }
        }
      }
    }
  });
}

function renderLagChart() {
  const ctx = document.getElementById("lagChart").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["t-1 Day", "t-2 Days", "t-3 Days", "t-4 Days", "t-5 Days"],
      datasets: [{
        label: "Pearson Correlation Coefficient (r)",
        data: [0.28, 0.14, 0.03, -0.05, -0.02],
        backgroundColor: ["#2D5F3E", "#8FAD98", "#D1D5DB", "#D1D5DB", "#D1D5DB"],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: { grid: { display: false } },
        y: { 
          grid: { color: "#E2E2D8" },
          suggestedMin: -0.1,
          suggestedMax: 0.4
        }
      }
    }
  });
}
