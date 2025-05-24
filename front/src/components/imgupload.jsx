const cloudName = import.meta.env.VITE_CLOUD_NAME;
const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;

if (!cloudName) {
  console.error("Cloud name is not defined");
} else {
  console.log(`Cloud name: ${cloudName}`);
}

if (!uploadPreset) {
  console.error("Upload preset is not defined");
} else {
  console.log(`Upload preset: ${uploadPreset}`);
}

const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

const imgupload = async (image) => {
  if (!image) {
    console.error("No image file provided for upload");
    return;
  }

  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", uploadPreset);

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  return response.json();
};

export default imgupload;
