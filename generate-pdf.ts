import puppeteer from "puppeteer";

async function generatePdf() {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://localhost:4000", {
      waitUntil: "networkidle2",
    });

    await page.pdf({
      path: "resume.pdf",
    });
  } catch (e) {
    throw e;
  }
}

(() => {
  console.log("generating a pdf");

  generatePdf()
    .then(() => {
      console.log("successfully generated pdf");
      process.exit(0);
    })
    .catch((error) => {
      console.error(error);
      console.log("error generating pdf");
      process.exit(1);
    });
})();
