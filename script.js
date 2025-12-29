const canvas = document.getElementById("previewCanvas");
const ctx = canvas.getContext("2d");

const inputs = {
  brand: document.getElementById("brandInput"),
  model: document.getElementById("modelInput"),
  iso: document.getElementById("isoInput"),
  aperture: document.getElementById("apertureInput"),
  shutter: document.getElementById("shutterInput"),
  focal: document.getElementById("focalInput"),
  brandFont: document.getElementById("brandFont"),
  modelFont: document.getElementById("modelFont"),
  metaFont: document.getElementById("metaFont"),
  offsetX: document.getElementById("offsetX"),
  offsetY: document.getElementById("offsetY"),
  brandS: document.getElementById("brandSize"),
  brandX: document.getElementById("brandX"),
  brandY: document.getElementById("brandY"),
  modelS: document.getElementById("modelSize"),
  modelX: document.getElementById("modelX"),
  modelY: document.getElementById("modelY"),
  metaS: document.getElementById("metaSize"),
  metaX: document.getElementById("metaX"),
  metaY: document.getElementById("metaY")
};

let uploadedImage = null;
let currentFile = null;

function drawCard() {
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#f4f4f4";
  ctx.fillRect(0, 0, 2598, 2598);

  if (uploadedImage) {
    const scale = Math.max(2598 / uploadedImage.width, 2598 / uploadedImage.height);
    const w = uploadedImage.width * scale;
    const h = uploadedImage.height * scale;
    ctx.save();
    ctx.beginPath(); ctx.rect(0, 0, 2598, 2598); ctx.clip();
    ctx.drawImage(uploadedImage, (2598-w)/2 + parseInt(inputs.offsetX.value), (2598-h)/2 + parseInt(inputs.offsetY.value), w, h);
    ctx.restore();
  }

  ctx.fillStyle = "#000"; ctx.textAlign = "left";
  
  ctx.font = `900 ${inputs.brandS.value}px ${inputs.brandFont.value}`;
  ctx.fillText((inputs.brand.value || "DEVICE").toUpperCase(), parseInt(inputs.brandX.value), parseInt(inputs.brandY.value));

  ctx.font = `700 ${inputs.modelS.value}px ${inputs.modelFont.value}`;
  ctx.fillText((inputs.model.value || "MODEL").toUpperCase(), parseInt(inputs.modelX.value), parseInt(inputs.modelY.value));

  const metaText = `${inputs.focal.value || "--mm"} • ${inputs.aperture.value || "f/--"} • ${inputs.shutter.value || "--s"} • ISO ${inputs.iso.value || "--"}`;
  ctx.font = `${inputs.metaS.value}px ${inputs.metaFont.value}`;
  ctx.fillStyle = "#666";
  ctx.fillText(metaText, parseInt(inputs.metaX.value), parseInt(inputs.metaY.value));

  ctx.fillStyle = "#ff5000";
  ctx.fillRect(2598 - 180, parseInt(inputs.brandY.value) - 140, 60, 60);
}

Object.values(inputs).forEach(el => el.addEventListener('input', drawCard));

async function processExif(file) {
  const data = await exifr.parse(file);
  if (data) {
    inputs.brand.value = data.Make || "";
    inputs.model.value = data.Model || "";
    inputs.iso.value = data.ISO || "";
    inputs.aperture.value = data.FNumber ? `f/${data.FNumber}` : "";
    inputs.shutter.value = data.ExposureTime ? (data.ExposureTime < 1 ? `1/${Math.round(1/data.ExposureTime)}s` : `${data.ExposureTime}s`) : "";
    inputs.focal.value = data.FocalLength ? `${data.FocalLength}mm` : "";
    drawCard();
  }
}

document.getElementById("imageInput").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    currentFile = file;
    const img = new Image();
    img.onload = () => { uploadedImage = img; drawCard(); processExif(file); };
    img.src = URL.createObjectURL(file);
  }
});

document.getElementById("resetExif").addEventListener("click", () => currentFile && processExif(currentFile));

document.getElementById("downloadBtn").addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = `ExifCard.${document.getElementById("exportFormat").value}`;
  link.href = canvas.toDataURL(`image/${document.getElementById("exportFormat").value}`, 1.0);
  link.click();
});

document.fonts.ready.then(drawCard);