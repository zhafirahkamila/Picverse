document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.querySelector(".file-selector-input");
    const dropArea = document.querySelector(".drop-section");
    const uploadList = document.querySelector(".upload-list");
    const browseButton = document.querySelector(".file-section");
    const form = document.getElementById("submission-form");
    const popup = document.getElementById("successPopup");
  
    let uploadedFiles = [];
  
    browseButton.addEventListener("click", (event) => {
      event.preventDefault();
      fileInput.click();
    });
  
    fileInput.addEventListener("change", function () {
      if (fileInput.files.length > 0) {
        handleFiles(fileInput.files);
      }
    });
  
    dropArea.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropArea.classList.add("drag-over");
    });
  
    dropArea.addEventListener("dragleave", () => {
      dropArea.classList.remove("drag-over");
    });
  
    dropArea.addEventListener("drop", (e) => {
      e.preventDefault();
      dropArea.classList.remove("drag-over");
      handleFiles(e.dataTransfer.files);
    });
  
    function handleFiles(files) {
      let newFiles = Array.from(files).filter((file) => validateFile(file));
  
      if (uploadedFiles.length + newFiles.length > 6) {
        alert("You can only upload up to 6 images.");
        return;
      }
  
      uploadedFiles = uploadedFiles.concat(newFiles);
      newFiles.forEach((file) => uploadFile(file));
    }
  
    function validateFile(file) {
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (!allowedTypes.includes(file.type)) {
        alert(`File "${file.name}" is not a valid JPEG, JPG, or PNG.`);
        return false;
      }
      return true;
    }
  
    function uploadFile(file) {
      const fileItem = document.createElement("div");
      fileItem.classList.add("upload-item", "uploading");
  
      fileItem.innerHTML = `
               <div class="file-icon">
                  <img src="./img/img-icons.png" alt="" class="file-preview-img">
              </div>
              <div class="file-info">
                  <div class="file-name">${file.name}</div>
                  <div class="file-size">${(file.size / 1024).toFixed(2)} KB</div>
                  <div class="upload-progress">
                      <span style="width: 0%;"></span>
                  </div>
                  <div class="file-status">Uploading 0%</div>
              </div>
              <div class="upload-actions">
                  <button class="cancel-upload">
                      <i class="fa-solid fa-xmark"></i>
                  </button>
              </div>
          `;
  
      uploadList.appendChild(fileItem);
  
      const progressBar = fileItem.querySelector(".upload-progress span");
      const statusText = fileItem.querySelector(".file-status");
      const cancelButton = fileItem.querySelector(".cancel-upload");
      const filePreview = fileItem.querySelector(".file-preview-img");
  
      let progress = 0;
      let interval = setInterval(() => {
        progress += 10;
        progressBar.style.width = `${progress}%`;
        statusText.innerText = `Uploading ${progress}%`;
  
        if (progress >= 100) {
          clearInterval(interval);
  
          statusText.innerText = "Completed";
  
          fileItem.classList.remove("uploading");
          fileItem.classList.add("uploaded");
  
          fileItem.querySelector(".upload-progress").remove();
  
          const objectURL = URL.createObjectURL(file);
          filePreview.src = objectURL;
  
          cancelButton.innerHTML = '<i class="fa-solid fa-check"></i>';
          cancelButton.style.color = "#4CAF50";
  
          const fileSize = (file.size / 1024).toFixed(2);
          fileItem.querySelector(".file-size").innerText = `${fileSize} KB`;
          fileItem.querySelector(".file-name").innerText = file.name;
        }
      }, 500);
  
      cancelButton.addEventListener("click", () => {
        clearInterval(interval);
        fileItem.remove();
        uploadedFiles = uploadedFiles.filter((f) => f !== file);
      });
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // mencegah reload

      const email = form.querySelector('input[placeholder*="Email"]');
      const title = form.querySelector('input[placeholder*="Title"]');
      const desc = form.querySelector('input[placeholder*="Description"]');
      const tag = form.querySelector("select");
      const aiYes = form.querySelector('#check-yes');
      const aiNo = form.querySelector('#check-no');

      if (
        email.value.trim() === "" ||
        title.value.trim() === "" ||
        desc.value.trim() === "" ||
        !tag.value ||
        (!aiYes.checked && !aiNo.checked) ||
        uploadedFiles.length === 0
      ) {
        alert("Please complete all required fields and upload at least one image.");
        return;
      }

      popup.style.display = "flex"; 
      form.reset();
      uploadedFiles = [];
      uploadList.innerHTML = "";
    });
  });
  
  function closePopup() {
    document.getElementById("successPopup").style.display = "none";
  };  

  function setupToggleButton() {
  const toggleBtn = document.querySelector('.toggle_btn');
  const dropdownMenu = document.querySelector('.dropdown_menu');

  if (!toggleBtn || !dropdownMenu) return;

  toggleBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('open');
  });
}

// Jalankan saat dokumen siap
document.addEventListener('DOMContentLoaded', setupToggleButton);


  
    
  