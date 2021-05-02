export default function socialBar(share, tooltip, shareClass) {
  const d = document;
  const shareBtn = d.getElementById(share);
  const tooltipPanel = d.getElementById(tooltip);

  d.addEventListener("click", (e) => {
    if (e.target.matches(share) || e.target.matches(`${shareClass} *`)) {
      shareBtn.classList.toggle("share--active");
      tooltipPanel.classList.toggle("tooltip--show");
    }
  });
  
}
