document.addEventListener("DOMContentLoaded", () => {
  const browserEvents = [
    { name: "abort", category: "Media", description: "Fired when media loading is aborted (resource loading stopped).", tags: ["<video>", "<audio>"], w3Link: "https://www.w3schools.com/jsref/event_onabort_media.asp", mdnLink: "https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event" },
    { name: "afterprint", category: "Window", description: "Fired after printing (or after print preview dialog is closed).", tags: ["<window>"], w3Link: "https://www.w3schools.com/jsref/event_onafterprint.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/WindowEventHandlers/onafterprint" },
    { name: "animationend", category: "Animation", description: "Fired when a CSS Animation has completed.", tags: ["<div>", "<span>", "<element>"], w3Link: "https://www.w3schools.com/jsref/event_animationend.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Element/animationend_event" },
    { name: "animationiteration", category: "Animation", description: "Fired when a CSS Animation iterates to the next cycle.", tags: ["<div>", "<span>", "<element>"], w3Link: "https://www.w3schools.com/jsref/event_animationiteration.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event" },
    { name: "animationstart", category: "Animation", description: "Fired when a CSS Animation starts.", tags: ["<div>", "<span>", "<element>"], w3Link: "https://www.w3schools.com/jsref/event_animationstart.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Element/animationstart_event" },
    { name: "beforeprint", category: "Window", description: "Fired before printing (or before print preview).", tags: ["<window>"], w3Link: "https://www.w3schools.com/jsref/event_onbeforeprint.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/WindowEventHandlers/onbeforeprint" },
    { name: "beforeunload", category: "Window", description: "Fired before the document is unloaded (navigate away / close). Note: browsers limit custom dialogs here).", tags: ["<window>"], w3Link: "https://www.w3schools.com/jsref/event_onbeforeunload.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Window/beforeunload_event" },
    { name: "blur", category: "Focus", description: "Fired when an element loses focus (does not bubble).", tags: ["<input>", "<textarea>", "<button>", "<a>"], w3Link: "https://www.w3schools.com/jsref/event_onblur.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Element/blur_event" },
    { name: "canplay", category: "Media", description: "Fired when enough media data is available to start playing.", tags: ["<video>", "<audio>"], w3Link: "https://www.w3schools.com/jsref/event_oncanplay.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplay_event" },
    { name: "canplaythrough", category: "Media", description: "Fired when the user agent estimates it can play media to the end without stopping for buffering.", tags: ["<video>", "<audio>"], w3Link: "https://www.w3schools.com/jsref/event_oncanplaythrough.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplaythrough_event" },
    { name: "change", category: "Form", description: "Fired when the value of an input, select or textarea is committed/changed.", tags: ["<input>", "<select>", "<textarea>"], w3Link: "https://www.w3schools.com/jsref/event_onchange.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/HTMLElement/change_event" },
    { name: "click", category: "Mouse", description: "Fired when a pointing device button is pressed and released on an element.", tags: ["<button>", "<a>", "<div>", "<input>"], w3Link: "https://www.w3schools.com/jsref/event_onclick.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Element/click_event" },
    { name: "contextmenu", category: "Mouse", description: "Fired when the user attempts to open a context menu (usually right-click).", tags: ["<div>", "<body>", "<a>"], w3Link: "https://www.w3schools.com/jsref/event_oncontextmenu.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event" },
    { name: "copy", category: "Clipboard", description: "Fired when the user copies content to the clipboard.", tags: ["<input>", "<textarea>", "<contenteditable>"], w3Link: "https://www.w3schools.com/jsref/event_oncopy.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Document/copy_event" },
    { name: "cut", category: "Clipboard", description: "Fired when the user cuts content to the clipboard.", tags: ["<input>", "<textarea>", "<contenteditable>"], w3Link: "https://www.w3schools.com/jsref/event_oncut.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Document/cut_event" },
    { name: "dblclick", category: "Mouse", description: "Fired when the element is double-clicked.", tags: ["<button>", "<div>", "<a>"], w3Link: "https://www.w3schools.com/jsref/event_ondblclick.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Element/dblclick_event" },
    { name: "drag", category: "Drag", description: "Fired repeatedly during a drag operation.", tags: ["<div>", "<img>", "<draggable>"], w3Link: "https://www.w3schools.com/jsref/event_ondrag.asp", mdnLink: "https://developer.mozilla.org/en-US/docs/Web/API/DragEvent" },
    { name: "dragend", category: "Drag", description: "Fired when a drag operation is ended (by releasing the mouse).", tags: ["<div>", "<img>", "<draggable>"], w3Link: "https://www.w3schools.com/jsref/event_ondragend.asp", mdnLink: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragend_event" },
    { name: "dragenter", category: "Drag", description: "Fired when a dragged item enters a valid drop target.", tags: ["<div>", "<dropzone>"], w3Link: "https://www.w3schools.com/jsref/event_ondragenter.asp", mdnLink: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragenter_event" },
    { name: "dragleave", category: "Drag", description: "Fired when a dragged item leaves a drop target.", tags: ["<div>", "<dropzone>"], w3Link: "https://www.w3schools.com/jsref/event_ondragleave.asp", mdnLink: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragleave_event" },
    { name: "dragover", category: "Drag", description: "Fired when a dragged item is being dragged over a drop target (use preventDefault to allow drop).", tags: ["<div>", "<dropzone>"], w3Link: "https://www.w3schools.com/jsref/event_ondragover.asp", mdnLink: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragover_event" },
    { name: "dragstart", category: "Drag", description: "Fired when the user starts dragging an element or text selection.", tags: ["<div>", "<img>", "<draggable>"], w3Link: "https://www.w3schools.com/jsref/event_ondragstart.asp", mdnLink: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragstart_event" },
    { name: "drop", category: "Drag", description: "Fired when an item is dropped on a drop target.", tags: ["<div>", "<dropzone>"], w3Link: "https://www.w3schools.com/jsref/event_ondrop.asp", mdnLink: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event" },
    { name: "durationchange", category: "Media", description: "Fired when the duration attribute of the media changes (e.g., when metadata loads).", tags: ["<video>", "<audio>"], w3Link: "https://www.w3schools.com/jsref/event_ondurationchange.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/durationchange_event" },
    { name: "ended", category: "Media", description: "Fired when playback reaches the end of the media.", tags: ["<video>", "<audio>"], w3Link: "https://www.w3schools.com/jsref/event_onended.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ended_event" },
    { name: "error", category: "Media", description: "Fired when an error occurs while fetching or playing media (or other resources).", tags: ["<video>", "<audio>", "<img>", "<script>"], w3Link: "https://www.w3schools.com/jsref/event_onerror.asp", mdnLink: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/error_event" },
    { name: "focus", category: "Focus", description: "Fired when an element gains focus (does not bubble).", tags: ["<input>", "<textarea>", "<button>", "<a>"], w3Link: "https://www.w3schools.com/jsref/event_onfocus.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Element/focus_event" },
    { name: "focusin", category: "Focus", description: "Fired when an element or its descendant gains focus (bubbles).", tags: ["<input>", "<form>", "<select>", "<textarea>"], w3Link: "https://www.w3schools.com/jsref/event_onfocusin.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Element/focusin_event" },
    { name: "focusout", category: "Focus", description: "Fired when an element or its descendant loses focus (bubbles).", tags: ["<input>", "<form>", "<select>", "<textarea>"], w3Link: "https://www.w3schools.com/jsref/event_onfocusout.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Element/focusout_event" },
    { name: "fullscreenchange", category: "Window", description: "Fired when the document switches into or out of fullscreen mode.", tags: ["<document>"], w3Link: "https://www.w3schools.com/jsref/event_fullscreenchange.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Document/fullscreenchange_event" },
    { name: "fullscreenerror", category: "Window", description: "Fired when a request to switch to fullscreen mode fails.", tags: ["<document>"], w3Link: "https://www.w3schools.com/jsref/event_fullscreenerror.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Document/fullscreenerror_event" },
    { name: "hashchange", category: "Window", description: "Fired when the fragment identifier of the URL has changed (window.location.hash).", tags: ["<window>"], w3Link: "https://www.w3schools.com/jsref/event_onhashchange.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Window/hashchange_event" },
    { name: "input", category: "Form", description: "Fired synchronously when the value of an <input> or <textarea> (or contenteditable) is changed.", tags: ["<input>", "<textarea>", "<[contenteditable]>"], w3Link: "https://www.w3schools.com/jsref/event_oninput.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/HTMLElement/input_event" },
    { name: "invalid", category: "Form", description: "Fired when a submittable element is invalid (during constraint validation).", tags: ["<form>", "<input>", "<select>", "<textarea>"], w3Link: "https://www.w3schools.com/jsref/event_oninvalid.asp", mdnLink: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event" },
    { name: "keydown", category: "Keyboard", description: "Fired when a key is pressed down.", tags: ["<document>", "<input>", "<textarea>"], w3Link: "https://www.w3schools.com/jsref/event_onkeydown.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Document/keydown_event" },
    { name: "keypress", category: "Keyboard", description: "Fired when a key producing a character is pressed (deprecated — prefer keydown/keyup).", tags: ["<document>", "<input>", "<textarea>"], w3Link: "https://www.w3schools.com/jsref/event_onkeypress.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Element/keypress_event" },
    { name: "keyup", category: "Keyboard", description: "Fired when a key is released.", tags: ["<document>", "<input>", "<textarea>"], w3Link: "https://www.w3schools.com/jsref/event_onkeyup.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Document/keyup_event" },
    { name: "load", category: "Window", description: "Fired when a resource and its dependent resources have finished loading (window fires when page is fully loaded).", tags: ["<window>", "<img>", "<script>", "<link>"], w3Link: "https://www.w3schools.com/jsref/event_onload.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Window/load_event" },
    { name: "loadeddata", category: "Media", description: "Fired when the first frame of media has been loaded.", tags: ["<video>", "<audio>"], w3Link: "https://www.w3schools.com/jsref/event_onloadeddata.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadeddata_event" },
    { name: "loadedmetadata", category: "Media", description: "Fired when media metadata (e.g., duration, dimensions) is loaded.", tags: ["<video>", "<audio>"], w3Link: "https://www.w3schools.com/jsref/event_onloadedmetadata.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadedmetadata_event" },
    { name: "loadstart", category: "Media", description: "Fired when the user agent begins looking for the media (start of loading).", tags: ["<video>", "<audio>"], w3Link: "https://www.w3schools.com/jsref/event_onloadstart.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadstart_event" },
    { name: "message", category: "Window", description: "Fired when a message is received (postMessage or from workers).", tags: ["<window>", "<iframe>", "<worker>"], w3Link: "https://www.w3schools.com/jsref/event_onmessage_sse.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Window/message_event" },
    { name: "mousedown", category: "Mouse", description: "Fired when a mouse button is pressed on an element.", tags: ["<div>", "<button>", "<a>"], w3Link: "https://www.w3schools.com/jsref/event_onmousedown.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Element/mousedown_event" },
    { name: "mouseenter", category: "Mouse", description: "Fired when the pointer enters an element (does not bubble).", tags: ["<div>", "<button>", "<a>"], w3Link: "https://www.w3schools.com/jsref/event_onmouseenter.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Element/mouseenter_event" },
    { name: "mouseleave", category: "Mouse", description: "Fired when the pointer leaves an element (does not bubble).", tags: ["<div>", "<button>", "<a>"], w3Link: "https://www.w3schools.com/jsref/event_onmouseleave.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Element/mouseleave_event" },
    { name: "mousemove", category: "Mouse", description: "Fired when the pointer is moved over an element.", tags: ["<div>", "<body>", "<canvas>"], w3Link: "https://www.w3schools.com/jsref/event_onmousemove.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Element/mousemove_event" },
    { name: "mouseover", category: "Mouse", description: "Fired when the pointer moves onto an element or one of its children (bubbles).", tags: ["<div>", "<body>", "<a>"], w3Link: "https://www.w3schools.com/jsref/event_onmouseover.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Element/mouseover_event" },
    { name: "mouseout", category: "Mouse", description: "Fired when the pointer leaves an element or one of its children (bubbles).", tags: ["<div>", "<body>", "<a>"], w3Link: "https://www.w3schools.com/jsref/event_onmouseout.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Element/mouseout_event" },
    { name: "mouseup", category: "Mouse", description: "Fired when a mouse button is released over an element.", tags: ["<div>", "<button>", "<a>"], w3Link: "https://www.w3schools.com/jsref/event_onmouseup.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Element/mouseup_event" },
    { name: "offline", category: "Window", description: "Fired when the browser goes offline (network connection lost).", tags: ["<window>"], w3Link: "https://www.w3schools.com/jsref/event_onoffline.asp", mdnLink: "https://developer.mozilla.org/en-US/docs/Web/API/Window/offline_event" },
    { name: "online", category: "Window", description: "Fired when the browser goes online (network connection regained).", tags: ["<window>"], w3Link: "https://www.w3schools.com/jsref/event_ononline.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Window/online_event" },
    { name: "open", category: "Network", description: "Fired when a WebSocket or EventSource connection opens.", tags: ["<websocket>", "<eventsource>", "<sse>"], w3Link: "https://www.w3schools.com/jsref/event_onopen_sse.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/WebSocket/open_event" },
    { name: "pagehide", category: "Window", description: "Fired when the page is being hidden or unloaded (bfcache may preserve page).", tags: ["<window>"], w3Link: "https://www.w3schools.com/jsref/event_onpagehide.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Window/pagehide_event" },
    { name: "pageshow", category: "Window", description: "Fired when the page is shown (including when restored from bfcache).", tags: ["<window>"], w3Link: "https://www.w3schools.com/jsref/event_onpageshow.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Window/pageshow_event" },
    { name: "paste", category: "Clipboard", description: "Fired when the user pastes content from the clipboard.", tags: ["<input>", "<textarea>", "<contenteditable>"], w3Link: "https://www.w3schools.com/jsref/event_onpaste.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Document/paste_event" },
    { name: "pause", category: "Media", description: "Fired when media is paused.", tags: ["<video>", "<audio>"], w3Link: "https://www.w3schools.com/jsref/event_onpause.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/pause_event" },
    { name: "play", category: "Media", description: "Fired when playback is started or resumes.", tags: ["<video>", "<audio>"], w3Link: "https://www.w3schools.com/jsref/event_onplay.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/play_event" },
    { name: "playing", category: "Media", description: "Fired when the media actually begins playing (after buffering).", tags: ["<video>", "<audio>"], w3Link: "https://www.w3schools.com/jsref/event_onplaying.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/playing_event" },
    { name: "progress", category: "Media", description: "Fired periodically to indicate progress of media download.", tags: ["<video>", "<audio>"], w3Link: "https://www.w3schools.com/jsref/event_onprogress.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/progress_event" },
    { name: "ratechange", category: "Media", description: "Fired when the playback rate changes.", tags: ["<video>", "<audio>"], w3Link: "https://www.w3schools.com/jsref/event_onratechange.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ratechange_event" },
    { name: "resize", category: "Window", description: "Fired when the window is resized.", tags: ["<window>"], w3Link: "https://www.w3schools.com/jsref/event_onresize.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Window/resize_event" },
    { name: "reset", category: "Form", description: "Fired when a form is reset.", tags: ["<form>"], w3Link: "https://www.w3schools.com/jsref/event_onreset.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/HTMLFormElement/reset_event" },
    { name: "scroll", category: "Window", description: "Fired when an element or document is scrolled.", tags: ["<window>", "<div>", "<element>"], w3Link: "https://www.w3schools.com/jsref/event_onscroll.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Element/scroll_event" },
    { name: "search", category: "Form", description: "Fired on <input type='search'> when the user presses Enter or clears the field (browser-specific).", tags: ["<input type='search'>"], w3Link: "https://www.w3schools.com/jsref/event_onsearch.asp", mdnLink: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/search_event" },
    { name: "seeked", category: "Media", description: "Fired when a seek operation completes.", tags: ["<video>", "<audio>"], w3Link: "https://www.w3schools.com/jsref/event_onseeked.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeked_event" },
    { name: "seeking", category: "Media", description: "Fired when a seek operation begins.", tags: ["<video>", "<audio>"], w3Link: "https://www.w3schools.com/jsref/event_onseeking.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeking_event" },
    { name: "select", category: "Form", description: "Fired when some text in an <input> or <textarea> is selected.", tags: ["<input>", "<textarea>"], w3Link: "https://www.w3schools.com/jsref/event_onselect.asp", mdnLink: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select_event" },
    { name: "show", category: "Dialog", description: "Fired when a <details> element is shown (or when a <dialog> is shown in some implementations).", tags: ["<details>", "<dialog>"], w3Link: "https://www.w3schools.com/jsref/event_onshow.asp", mdnLink: "https://developer.mozilla.org/en-US/docs/Web/API/Notification/show_event" },
    { name: "stalled", category: "Media", description: "Fired when the user agent is trying to fetch media data, but data is not available.", tags: ["<video>", "<audio>"], w3Link: "https://www.w3schools.com/jsref/event_onstalled.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/stalled_event" },
    { name: "submit", category: "Form", description: "Fired when a form is submitted.", tags: ["<form>"], w3Link: "https://www.w3schools.com/jsref/event_onsubmit.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/HTMLFormElement/submit_event" },
    { name: "suspend", category: "Media", description: "Fired when media loading is suspended (e.g., not enough data available to continue).", tags: ["<video>", "<audio>"], w3Link: "https://www.w3schools.com/jsref/event_onsuspend.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/suspend_event" },
    { name: "timeupdate", category: "Media", description: "Fired when the current playback position changes (periodically during playback).", tags: ["<video>", "<audio>"], w3Link: "https://www.w3schools.com/jsref/event_ontimeupdate.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/timeupdate_event" },
    { name: "toggle", category: "Details", description: "Fired when a <details> element is opened or closed.", tags: ["<details>"], w3Link: "https://www.w3schools.com/jsref/event_ontoggle.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/HTMLDetailsElement/toggle_event" },
    { name: "touchcancel", category: "Touch", description: "Fired when a touch event is interrupted/cancelled (system gesture, etc.).", tags: ["<div>", "<body>", "<touchable>"], w3Link: "https://www.w3schools.com/jsref/event_touchcancel.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Element/touchcancel_event" },
    { name: "touchend", category: "Touch", description: "Fired when a touch point is removed from the touch surface.", tags: ["<div>", "<body>", "<touchable>"], w3Link: "https://www.w3schools.com/jsref/event_touchend.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Element/touchend_event" },
    { name: "touchmove", category: "Touch", description: "Fired when a touch point is moved along the touch surface.", tags: ["<div>", "<body>", "<touchable>"], w3Link: "https://www.w3schools.com/jsref/event_ontouchmove.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Element/touchmove_event" },
    { name: "touchstart", category: "Touch", description: "Fired when a touch point is placed on the touch surface.", tags: ["<div>", "<body>", "<touchable>"], w3Link: "https://www.w3schools.com/jsref/event_touchstart.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Element/touchstart_event" },
    { name: "transitionend", category: "Transition", description: "Fired when a CSS transition completes.", tags: ["<div>", "<span>", "<element>"], w3Link: "https://www.w3schools.com/jsref/event_transitionend.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Element/transitionend_event" },
    { name: "unload", category: "Window", description: "Fired when the document or a resource is being unloaded. (Note: use with caution; many browsers limit behavior.)", tags: ["<window>"], w3Link: "https://www.w3schools.com/jsref/event_onunload.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Window/unload_event" },
    { name: "volumechange", category: "Media", description: "Fired when the volume or muted state of media changes.", tags: ["<video>", "<audio>"], w3Link: "https://www.w3schools.com/jsref/event_onvolumechange.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/volumechange_event" },
    { name: "waiting", category: "Media", description: "Fired when playback has stopped because the next frame is not available yet (buffering).", tags: ["<video>", "<audio>"], w3Link: "https://www.w3schools.com/jsref/event_onwaiting.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/waiting_event" },
    { name: "wheel", category: "Mouse", description: "Fired when the user rotates a wheel button on a pointing device (mouse wheel), or similar input.", tags: ["<div>", "<body>", "<canvas>"], w3Link: "https://www.w3schools.com/jsref/event_onwheel.asp", mdnLink: "https://developer.mozilla.org/docs/Web/API/Element/wheel_event" }
  ];

  const eventContainer = document.getElementById("eventList");
  const searchInput = document.getElementById("eventSearch");

  if (!eventContainer) {
    console.error("Missing element with id='eventList'. Cannot render events.");
    return;
  }

  function createPara(label, text) {
    const p = document.createElement("p");
    if (label) {
      const strong = document.createElement("strong");
      strong.textContent = label + ": ";
      p.appendChild(strong);
    }
    p.appendChild(document.createTextNode(text));
    return p;
  }

  function renderEvents(filter = "") {
    while (eventContainer.firstChild) eventContainer.removeChild(eventContainer.firstChild);

    const normalizedFilter = (filter || "").trim().toLowerCase();

    const filteredEvents = browserEvents.filter(ev => {
      if (!normalizedFilter) return true;
      if (ev.name.toLowerCase().includes(normalizedFilter)) return true;
      if (ev.category.toLowerCase().includes(normalizedFilter)) return true;
      for (const t of ev.tags) {
        const tstr = t.replace(/[<>]/g, "").toLowerCase();
        if (tstr.includes(normalizedFilter)) return true;
      }
      return false;
    });

    if (filteredEvents.length === 0) {
      const noRes = document.createElement("p");
      noRes.className = "no-results";
      noRes.textContent = "No matching events found.";
      eventContainer.appendChild(noRes);
      return;
    }

    filteredEvents.forEach(ev => {
      const card = document.createElement("article");
      card.className = "event-card";

      const h3 = document.createElement("h3");
      h3.textContent = ev.name;
      card.appendChild(h3);

      card.appendChild(createPara("Category", ev.category));
      card.appendChild(createPara("", ev.description));

      const tagsP = document.createElement("p");
      const strong = document.createElement("strong");
      strong.textContent = "Supported Tags: ";
      tagsP.appendChild(strong);

      ev.tags.forEach((tag, idx) => {
        const tagNode = document.createElement("code");
        tagNode.textContent = tag; 
        tagNode.style.marginRight = "0.5rem";
        tagsP.appendChild(tagNode);
        if (idx < ev.tags.length - 1) tagsP.appendChild(document.createTextNode(", "));
      });
      card.appendChild(tagsP);

      const linksDiv = document.createElement("div");
      linksDiv.style.marginTop = "0.6rem";
      if (ev.mdnLink) {
        const a1 = document.createElement("a");
        a1.href = ev.mdnLink;
        a1.target = "_blank";
        a1.rel = "noopener noreferrer";
        a1.textContent = "MDN";
        a1.style.marginRight = "1rem";
        linksDiv.appendChild(a1);
      }
      if (ev.w3Link) {
        const a2 = document.createElement("a");
        a2.href = ev.w3Link;
        a2.target = "_blank";
        a2.rel = "noopener noreferrer";
        a2.textContent = "W3Schools";
        linksDiv.appendChild(a2);
      }

      card.appendChild(linksDiv);

      eventContainer.appendChild(card);
    });
  }

  renderEvents();

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderEvents(e.target.value);
    });
  }
});