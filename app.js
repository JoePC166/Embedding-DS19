console.log("Hello from B2S!");

let viz;

// To do list:
// Select the container in the html
// Give the viz options (height and width)
// Variable for the dashboard url

const vizContainer = document.getElementById("vizContainer");
const vizUrl =
  "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard";

const vizOptions = {
  height: 800,
  width: 1000,
  hideToolbar: true, //does not work on public
  Category: ["Technology", "Furniture"],
  onFirstInteractive: function () {
    console.log("The viz is interactive");
    document.getElementById("ExportPDF").disabled = false;
  },
};

function initViz() {
  viz = new tableau.Viz(vizContainer, vizUrl, vizOptions);
}

// wait until the page has fully loaded, then show dashboard
document.addEventListener("DOMContentLoaded", initViz);

//Export PDF button
//Button element in your html
//Link the button to the JS
//Create the tableau function
//Add a listener

const ExportPDF = document.getElementById("Export PDF");
function loadPdf() {
  viz.showExportPDFDialog();
  console.log("PDF export window laoded");
}

ExportPDF.addEventListener("click", loadPdf);

const ExportPPT = document.getElementById("Export PPT");
function loadPPT() {
  viz.showExportPowerPointDialog();
  console.log("PPT export window loaded");
}

ExportPPT.addEventListener("click", loadPPT);
