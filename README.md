# Chat

Quiet notes with your class. A tiny chat room that looks like a plain document.

## How it works

1. Open the page and type your name.
2. Tap **Start a room**. You're the admin. Share the invite link or the 12-letter code.
3. Friends open the link (or type the code) and they're in.

## Features

- **Set your name and color**
- **Notifications** when the tab is in the background. By default they only say "1 new note", not who or what
- **Hide**: press `Esc` (or tap Hide) and the screen turns into a fake notes page. Press `Esc` again, or tap the page title 3 times, to come back
- **Hide when I switch away**: optional, shows the fake page whenever you come back to the tab
- **Tab name** can be "Notes", "Untitled document", "Homework" and more
- **Plain document look** by default, or a dark chat look
- **Wanna play?**: tap Play, pick a Crashpot game, and everyone gets a Join button that drops them in the same lobby
- **Admin**: rename the room, pin a note, delete messages, remove people, clear the chat. The admin's notes get an "admin" tag nobody else can fake
- **Admin link** to be admin on another device
- Replies, @mentions, typing indicator, who's here

## Privacy

- Messages are encrypted in your browser with the room code before they leave. The relay server only sees scrambled text.
- Anyone who has the code can read and write. Only share it with people you trust.
- Removing someone hides their notes and blocks their input, but a determined person could clear their browser and come back. If that happens, start a new room.
- History lives in each person's browser. New people get recent notes from whoever is online, plus the last 40 notes kept on the relay.

## Notes

- Notifications only work while the page is open in a tab (it can be in the background). On iPhone, add it to your Home Screen first.
- It uses free public MQTT relays, the same ones Crashpot uses. No server or account needed. Host it on GitHub Pages.
