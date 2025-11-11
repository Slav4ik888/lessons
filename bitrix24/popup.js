document.addEventListener('DOMContentLoaded', function () {
  const bgImageInput = document.getElementById('bgImage');
  const bgSizeSelect = document.getElementById('bgSize');
  const saveBtn = document.getElementById('saveBtn');
  const resetBtn = document.getElementById('resetBtn');
  const imagePreview = document.getElementById('imagePreview');
  const savedMessage = document.getElementById('savedMessage');

  // Загрузить сохраненные настройки
  if (typeof chrome !== 'undefined' && chrome.storage) {
    chrome.storage.local.get(['backgroundImage', 'backgroundSize'], function (result) {
      if (result.backgroundImage) {
        bgImageInput.value = result.backgroundImage;
        updatePreview(result.backgroundImage);
      }
      if (result.backgroundSize) {
        bgSizeSelect.value = result.backgroundSize;
      }
    });
  }

  // Предпросмотр при вводе URL
  bgImageInput.addEventListener('input', function () {
    updatePreview(this.value);
  });

  // Сохранение настроек
  saveBtn.addEventListener('click', function () {
    const settings = {
      backgroundImage: bgImageInput.value,
      backgroundSize: bgSizeSelect.value
    };

    // Сохраняем в chrome.storage если доступно
    if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.local.set(settings, function () {
        showSavedMessage();
        applyToCurrentTab(settings);
      });
    } else {
      // Альтернативный способ для тестирования
      applyToCurrentTab(settings);
      showSavedMessage();
    }
  });

  // Сброс настроек
  resetBtn.addEventListener('click', function () {
    const DEFAULT_IMG_URL = 'https://proza.ru/pics/2021/06/20/847.jpg';

    const defaultSettings = {
      backgroundImage: DEFAULT_IMG_URL,
      backgroundSize: 'cover'
    };

    if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.local.set(defaultSettings, function () {
        bgImageInput.value = defaultSettings.backgroundImage;
        bgSizeSelect.value = defaultSettings.backgroundSize;
        updatePreview(defaultSettings.backgroundImage);
        showSavedMessage();
        applyToCurrentTab(defaultSettings);
      });
    }
    else {
      bgImageInput.value = defaultSettings.backgroundImage;
      bgSizeSelect.value = defaultSettings.backgroundSize;
      updatePreview(defaultSettings.backgroundImage);
      showSavedMessage();
      applyToCurrentTab(defaultSettings);
    }
  });

  // Функция применения настроек к текущей вкладке
  function applyToCurrentTab(settings) {
    if (typeof chrome !== 'undefined' && chrome.tabs) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (tabs[0]) {
          chrome.tabs.sendMessage(tabs[0].id, {
            action: "updateBackground",
            backgroundImage: settings.backgroundImage,
            backgroundSize: settings.backgroundSize
          });
        }
      });
    }
    else {
      // Для тестирования напрямую
      if (window.applyCustomDesign) {
        window.applyCustomDesign(settings);
      }
    }
  }

  function updatePreview(imageUrl) {
    if (imageUrl) {
      imagePreview.style.backgroundImage = `url('${imageUrl}')`;
      imagePreview.innerHTML = '';
    }
    else {
      imagePreview.style.backgroundImage = 'none';
      imagePreview.innerHTML = 'Предпросмотр';
    }
  }

  function showSavedMessage() {
    savedMessage.style.display = 'block';
    setTimeout(() => {
      savedMessage.style.display = 'none';
    }, 2000);
  }
});
