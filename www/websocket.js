var wsUri = "ws://echo.websocket.org/";
var wsUri = "ws://localhost:8001/";

print('Страница загружена', 'info');
initWebSocket();

function print(msg, type) {
    tag = document.createElement('p');
    tag.classList.add(type);
    tag.innerHTML = msg;
    textChat.appendChild(tag);
    textChat.scroll(0, textChat.scrollHeight);textChat.scroll();
}

sendBtn.addEventListener("click", onSendBtnClick, false);

function onSendBtnClick() {
    doSend(textInput.value);
    textInput.value = '';
}

function onOpen(evt)
{
    print('Соединение установлено', 'info');
    doSend('Привет');
}

function onClose(evt)
{
    print('Соединение разорвано', 'info');
}

function onMessage(evt)
{
    print(evt.data, 'in');
    // websocket.close();
}

function onError(evt)
{
    print(evt.data, 'err');
}

function doSend(message)
{
    print(message, 'out');
    websocket.send(message);
}

function initWebSocket()
{
    websocket = new WebSocket(wsUri);
    websocket.onopen    = onOpen;
    websocket.onclose   = onClose;
    websocket.onmessage = onMessage;
    websocket.onerror   = onError;
}