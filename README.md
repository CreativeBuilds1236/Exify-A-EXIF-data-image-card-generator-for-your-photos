# Exify 📸

**Exify** is a professional-grade web utility designed to transform digital photographs into aesthetic EXIF data image cards. It provides a minimalist way to share technical photography details—like ISO, Aperture, and Shutter Speed—in a high-resolution, gallery-ready format.

<img width="1919" height="870" alt="Image" src="https://github.com/user-attachments/assets/e64b678e-a326-4304-a089-8798e85e296c" />

## ✨ Features

* **Auto-EXIF Detection**: Uses the `exifr` library to instantly pull camera make, model, and exposure settings from your uploaded images. 
* **Triple-Panel Interface**:
    * **Input Data**: Manage technical specs and fine-tune image scaling.
    * **Text Styling**: Dedicated panel to control fonts, sizes, and X/Y positioning for every text element.
    * **Live Preview**: Real-time rendering on a 2598 x 3248px canvas.
* **Custom Typography**: Integrated dropdowns featuring professional fonts like *Inter*, *Space Mono*, and *Oswald*.
* **Image Manipulation**: Advanced tools to **Scale** and **Offset (X/Y)** your photo within the card frame.
* **Universal Export**: Download your final card in **PNG, JPEG, or WEBP** format, optimized for social media platforms.
# Final output
![Image](https://github.com/user-attachments/assets/2f99afe1-dba3-4381-bb00-f795b479d8c6)

---

## 🚀 How It Works

1.  **Upload**: Select a photo using the "SELECT FILE +" button.
2.  **Scan**: The tool automatically fills in the **Device Brand**, **Model**, and **Meta** data using the image metadata.
3.  **Adjust Layout**:
    * Use the **Image Adjustments** sliders to scale or move your photo.
    * Use the **Text Styling** sliders to move the text (X/Y) so it doesn't overlap your subject.
4.  **Style**: Choose your preferred fonts from the dropdown menus to match your personal aesthetic.
5.  **Export**: Select your format and click **EXPORT IMG** to save your high-res card.

---

## 🛠️ Technical Stack

* **HTML5 Canvas**: Powers the high-resolution image compositing.
* **CSS Grid (3-Column)**: Provides a uniform, professional workspace layout.
* **Vanilla JavaScript**: Handles real-time data binding and canvas manipulation.
* **Google Fonts**: Integrated via API for diverse typography options.

---

## 📸 TEST HERE!!
# https://creativebuilds1236.github.io/Exify-A-EXIF-data-image-card-generator-for-your-photos/
---

## 📥 Installation & Usage

1.  **Clone the Repo**:
    ```bash
    git clone [https://github.com/your-username/exify.git](https://github.com/your-username/exify.git)
    ```
2.  **Run Locally**: Simply open `index.html` in any modern web browser. No local server or `npm install` required!

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

*Generated with Exify — A EXIF data image card generator for your photos!*
