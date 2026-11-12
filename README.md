# Chat

Quiet notes with your class. A tiny chat room that looks like a plain document.

## How it works

1. Open the page and type your name.
2. Got a code from a friend? Type it under **Join a room**. Or start your own: type a code (like `pizza` or `42`) or leave it empty for a random 3-digit one, then tap **Start**. You're the admin.
3. Tap the room name at the top any time to see the code and copy an invite link.
4. Not sure? Tap **How does this work?** on the home screen or in Settings.

## Features

- **Set your name and color**
- **Notifications** when the tab is in the background, for the room you have open and your other recent rooms. A banner in the room turns them on with one tap, and Settings shows if they're blocked and has a **Send me a test notification** button. By default they only say "1 new note", not who or what. Notes you missed while the connection dropped still get a notification when it's back
- **Notifications when Chat is closed** with the free [ntfy](https://ntfy.sh) app: Settings → "When Chat is closed", subscribe in ntfy and flip the switch. Friends' Chat sends a "1 new note" ping (no names, no text) when you're not there
- **Egyptian Arabic explanations**: tap "اشرحلي بالمصري" on the home screen, in Settings or in the guide
- **Unread badges** on your rooms on the home screen
- **Replies**: swipe a note to the right (phone), hover it and click **↩ Reply** (computer), or tap it. Tap a quote to jump to the original note. Replies to you are highlighted
- **Hide**: press `Esc` (or tap Hide) and the screen turns into a fake notes page. Press `Esc` again, or tap the page title 3 times, to come back
- **Hide when I switch away**: optional, shows the fake page whenever you come back to the tab
- **Tab name** can be "Notes", "Untitled document", "Homework" and more
- **Plain document look** by default, or a dark chat look
- **Wanna play?**: tap Play, pick a Crashpot game (now with 🎰 Casino too), and everyone gets a Join button that drops them in the same lobby
- **Inside Crashpot**: open the 💬 panel in the game and pick **Chats**. Same name and rooms as here. In a lobby, **Play → Invite them to my lobby** shares your lobby code, and Join opens the game right there instead of a new tab
- **Private, inside Crashpot**: the game also has a 🔐 CHAT tab that opens this chat in a side panel. In there nothing is saved on the device, and closing it locks it, so you type the room code again next time. Tap 🎮 Invite in the panel to send your lobby to the room
- **Admin**: rename the room, pin a note, delete messages, remove people, clear the chat. The admin's notes get an "admin" tag nobody else can fake
- **Admin link** to be admin on another device
- @mentions, typing indicator, who's here

## Privacy

- Messages are encrypted in your browser with the room code before they leave. The relay server only sees scrambled text.
- Anyone who knows the code can read and write. Short codes are easy to guess, so pick one only your friends would know.
- Removing someone hides their notes and blocks their input, but a determined person could clear their browser and come back. If that happens, start a new room.
- History lives in each person's browser. New people get recent notes from whoever is online, plus the last 40 notes kept on the relay.

## Notes

- Browser notifications only work while the page is open in a tab (it can be in the background). For notifications with Chat closed, use the ntfy option. On iPhone, add it to your Home Screen first for browser notifications.
- ntfy topics are public, so anyone who guesses one could see that a ping happened, but never who wrote or what. The topic is made from the room code.
- No notification showing up? Check that your browser allows notifications for the site, and that Do Not Disturb or Focus is off.
- It uses free public MQTT relays, the same ones Crashpot uses. No server or account needed. Host it on GitHub Pages.
