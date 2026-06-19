# Credential Dashboard — User Manual

---

## 1. What is this app?

Credential Dashboard is a local tool for storing and accessing client credentials — usernames, passwords, and certificate passwords. Instead of digging through text files, you open the app, find the client, and copy the credential you need with one click.

All data is encrypted on your machine. A master passphrase is required every time you open the app.

---

## 2. Starting the app

1. Double-click **`launch.bat`** in the app folder.
2. A terminal window will open — leave it running in the background.
3. Your browser will open automatically at `http://localhost:3000`.
4. The app will ask for your master passphrase before showing any data.

> **Note:** The first time you run the app, it will install dependencies automatically. This takes about a minute and only happens once.

## 3. Stopping the app

Just close the browser tab or window. The server detects that the browser is no longer active and shuts itself down automatically after **30 minutes of inactivity**.

You do not need to find or close the terminal window. It will close on its own.

If you need to stop the server immediately, you can close the terminal window manually or end the `node.exe` process in Task Manager.

---

## 4. First-time setup (encryption)

The very first time the app starts, it will prompt you to create a master passphrase. This passphrase encrypts all your data.

1. Enter a strong passphrase in the first field.
2. Type it again in the **Confirm Passphrase** field.
3. Click **Encrypt & Continue**.

The app will encrypt your existing data and save it. From this point on, the passphrase is required every time you open the app.

> **Important:** There is no "forgot passphrase" option. If the passphrase is lost, the data cannot be recovered. Keep it somewhere safe, and make sure your coworkers know it too.

---

## 5. Unlocking the app

Every time you open the app, a passphrase prompt appears before any data is shown.

1. Enter your master passphrase.
2. Click **Unlock** (or press `Enter`).

If the passphrase is correct, the app loads your data. If not, an error message appears and you can try again. The prompt cannot be dismissed — you must enter the correct passphrase to proceed.

---

## 6. Navigating the app

The app has two main areas:

- **Sidebar (left):** lists all clients. Click a client to view its credentials.
- **Main panel (right):** shows the selected client's locations, cert password, and users.

On narrow screens (or when the window is squeezed to the side of your monitor), the sidebar collapses. Use the **≡** button in the top-left corner to open it.

**Location tabs** appear below the client name. If a client has multiple locations (e.g. Main, Branch), click the tab to switch between them.

---

## 7. Copying credentials

Each credential has a **⧉** button to its right. Click it to copy the value to your clipboard.

- The button briefly shows **✓** to confirm the copy.
- Copy buttons are available in both read-only and admin mode.

For certificate passwords, the value is masked (••••••••) in the main view but visible in the history panel.

---

## 8. Admin mode

By default, the app opens in **read-only mode** — you can view and copy credentials but cannot make changes. This prevents accidental edits.

To make changes, you must activate admin mode:

1. Click the **Admin** button in the top-right corner of the header. It appears faded/greyed when inactive.
2. A confirmation modal appears, warning you that you are entering edit mode.
3. Enter your **master passphrase** in the field provided.
4. Click **Enter Admin Mode**.

When admin mode is active, the Admin button glows red and the header border turns red — a clear visual indicator that you are in edit mode.

To exit admin mode, click the **Admin** button again. No confirmation is needed to exit.

> **Honor system:** Only one person should be in admin mode at a time. Coordinate with your coworkers before making changes.

---

## 9. Managing clients

> Requires admin mode.

**Add a client:**
Click the **+** button at the top of the sidebar. Enter a client name and click Save. A default "Headquarters" location is created automatically.

**Rename a client:**
Select the client, then click **Edit** next to the client name in the main panel header.

**Delete a client:**
Select the client, then click **✕** next to the client name. This deletes the client and all its locations, users, and credentials — this action cannot be undone.

---

## 10. Managing locations

> Requires admin mode.

Each client can have one or more locations. Locations appear as tabs below the client name.

**Add a location:**
Click the **+** tab (rightmost tab) while a client is selected.

**Rename a location:**
Click **Edit** in the location's action bar (below the tabs).

**Delete a location:**
Click **✕** in the location's action bar. A client must have at least one location — the delete button is hidden when only one location exists.

---

## 11. Managing users

> Requires admin mode.

Users belong to a specific location. Each user has a username and a password.

**Add a user:**
Click **+ Add User** in the Users section of the location panel.

**Edit a user:**
Click **Edit** on the user's card. You can update the username and set a new password. Leave the password field blank to keep the current one.

**Delete a user:**
Click **✕** on the user's card. This cannot be undone.

> When a password is changed, the old password is automatically saved to that user's password history.

---

## 12. Certificate passwords

> Editing requires admin mode. Viewing and copying are available in read-only mode.

Each location has a certificate password field, shown at the top of the location panel.

**Edit the cert password:**
Click **Edit** next to the cert password field. Enter the new password and click Save. The previous password is saved to cert password history automatically.

**View cert password history:**
Click the **Old Passwords** button in the cert password row to expand the history panel.

---

## 13. Password history

Password history is visible for both users and cert passwords. It shows each old password and the date it was changed.

- For users: click **Old Passwords (n)** at the bottom-right of the user card to expand.
- For cert passwords: click **Old Passwords (n)** in the cert password row.

Each entry has a **⧉** copy button.

The history button is hidden if there is no history yet.

---

## 14. Exporting the data file

Click **Export** in the header to download the current `credentials.json` file. The file is encrypted — it cannot be read without the master passphrase.

Use this to share your data with a coworker, create a backup, or transfer data to another machine.

---

## 15. Printing credentials

Click **Print** in the header to generate and download a formatted `.txt` file with all credentials in plain text.

To print only one client's credentials, select that client and click **Print** next to the client name in the main panel.

The print file uses the currently active language.

> Print files are plain text (unencrypted) by design — they are meant for reading, not storage.

---

## 16. Importing a file

> Requires admin mode.

To receive an updated file from a coworker:

1. Click **Import** in the header.
2. Select the `.json` file.
3. The app compares the incoming version number with your current version and asks you to confirm.
4. Confirm to replace your local data with the imported file.

If the version numbers differ, the app will tell you which file is newer before asking you to confirm.

> The imported file must have been encrypted with the same master passphrase. If decryption fails, an error will appear.

---

## 17. Sharing files with coworkers

The recommended workflow for a team sharing this tool:

1. One person (the "admin") makes changes and clicks **Export**.
2. The exported file is sent to the coworker (e.g. via a compressed folder on WhatsApp).
3. The coworker opens their app, clicks **Import**, selects the file, and confirms.
4. Both users now have the same data.

**The master passphrase is never sent with the file.** Communicate it separately, in person or via a secure channel. All coworkers must use the same passphrase to access the encrypted file.

---

## 18. Changing the language

Click the **Language** dropdown in the header and select **English** or **Português**. Your preference is saved in the browser and will be remembered next time you open the app.

---

## 19. Security notes

- **The master passphrase is never stored anywhere.** It lives only in memory while the app is open. Closing the tab clears it.
- **The encrypted file is safe to share.** Without the passphrase, the data blob is unreadable.
- **Print / TXT files are not encrypted.** Treat them like sensitive documents — do not leave them unsecured.
- **There is no passphrase recovery.** If the passphrase is lost, the data cannot be decrypted. Keep a backup and make sure all coworkers know the passphrase.
- **Admin mode is not a security lock.** Anyone can click the Admin button. Its purpose is to prevent accidental edits, not to enforce access control.
