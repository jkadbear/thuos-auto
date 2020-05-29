# Automating daily information update on THUOS

This script relies on [Microsoft Playwright](https://github.com/microsoft/playwright).

## Usage
1. First, change the `USERID` and `PASSWORD` in `index.js` with your own.
2. Run `npm install`.
3. Run `npm start`.

## For Crontab
Run `crontab -e` and add the following line.
```
1 21 * * * cd /path/to/thuos-auto && /usr/local/bin/node index.js
```
