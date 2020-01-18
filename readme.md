# What is this?
This Chrome Extension allows you to jump to the PHP Manual from php functions and classes on your GitHub source codes and discussion.

# Chrome Web Store
You can download here!
- https://chrome.google.com/webstore/detail/github-php-function-jumpe/pmgmgaejgbjiooiklinoelilmnldlhcf

# Supported services
- GitHub
- Gists
- GitHub for Enterprise

# Customize
## You can choose theme
- **White**
<img src="docs/theme_white.png">

- **Dark**
<img src="docs/theme_dark.png">

## Popup
- You can understand which was effected elements.
<img src="docs/tutorial_1.jpg">

# Setting
- You can set details options on extension setting screen.
<img src="docs/tutorial_2.png">

# How to use on the GitHub for Enterprise?
1. You need to clone this repository.

```
git clone git@github.com:memory-agape/github-php-function-jumper.git
```

2. Change manifest.json

Before:
```
...
"content_scripts": [
    {
      "matches": [
        "https://github.com/*",
        "https://gist.github.com/*"
      ],
...
```

To:
```
...
"content_scripts": [
    {
      "matches": [
        "<all_urls>",
      ],
...
```

3. Access to `chrome://extesions`

4. Enable to developer mode on theGoogle Chrome.
<img src="docs/desc_01.jpg">

5. Click the `Load unpacked` button, and choose cloned directory.

6. You can use on the GitHub for Enterprise now!

# Demo
<img src="docs/demo.gif">

# License
MIT


