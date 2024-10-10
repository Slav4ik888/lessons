
// Make video full screen
const chatWrapper = document.querySelector('.chat-wrapper');
chatWrapper.style.display = 'none';

const camColumn = document.querySelector('.cam-column');
camColumn.style.width = '100%';
camColumn.style.height = '100%';

const video_resizable_wrp = document.querySelector('.video_resizable_wrp');
video_resizable_wrp.style.height = '100%';

const chat_resizable_wrp = document.querySelector('.chat_resizable_wrp');
chat_resizable_wrp.style.height = '970px';

const bc_chat_header = document.querySelector('.bc_chat_header');
bc_chat_header.remove();

const page_header = document.querySelector('.js-page_header');
page_header.remove()
