let SidePanelParent = document.getElementById("SidePanelParent");
let panelIsOpened = false;

function OpenSidePanel()
{
  // panelIsOpened = true;
  SidePanelParent.style.transform = "translateX(410px)";
  SidePanelParent.style.transition = "1s";
  SidePanelParent.style.opacity = 1;

  // SidePanelParent.classList.add("OpenSidePanelClass");
}

function CloseSideMenu()
{
  SidePanelParent.style.transform = "translateX(-410px)"
  SidePanelParent.style.transition = "1s";
  SidePanelParent.style.opacity = 0;
}



