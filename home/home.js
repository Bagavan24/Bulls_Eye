document.addEventListener("DOMContentLoaded", function() {
    const industriesData = [
      { name: "Education", icon: "../assets/INDUSTRIES/graduate.png" },
      { name: "Construction and Residential", icon: "../assets/INDUSTRIES/graduate.png" },
      { name: "Energy and Natural Gas", icon: "../assets/INDUSTRIES/graduate.png" },
      { name: "Healthcare and Pharma", icon: "../assets/INDUSTRIES/graduate.png" },
      { name: "Healthcare and Pharma", icon: "../assets/INDUSTRIES/graduate.png" },
      { name: "Insurance and Hospitality", icon: "../assets/INDUSTRIES/graduate.png" },
      { name: "Energy and Natural Gas", icon: "../assets/INDUSTRIES/graduate.png" },
      { name: "Energy and Natural Gas", icon: "../assets/INDUSTRIES/graduate.png" },
      { name: "FMCG and Retail", icon: "../assets/INDUSTRIES/graduate.png" },
      { name: "Media and Advertising", icon: "../assets/INDUSTRIES/graduate.png" },
      { name: "Manufacturing and Gig Economy", icon: "../assets/INDUSTRIES/graduate.png" }
    ];
  
    const industriesContainer = document.getElementById("industries-container");
  
    industriesData.forEach(industry => {
      const column = document.createElement("div");
      column.className = "col-lg-3 col-md-6 col-sm-12 common-class";
      column.style.textAlign = "center";
      column.style.padding = "20px";
      column.innerHTML = `
        <div class="hover-effect">
          <button class="logo-round">
            <img src="${industry.icon}" alt=""  style="width: 30px; height: 30px;" >
          </button>
          <div class="logo-text">${industry.name}</div>
        </div>
      `;
      industriesContainer.appendChild(column);
    });
  });
  