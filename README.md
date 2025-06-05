# Sign-Up Form Project

This project is a recreation of the sign-up form design from [The Odin Project's Form Project]

<img src="https://cdn.statically.io/gh/TheOdinProject/curriculum/afdbabfab03fbc34783c6b6f3920aba4a4d3b935/intermediate_html_css/forms/project_sign_up_form/imgs/sign-up-form.png" alt="Form" width="1000" style="margin-right: 20px;">.

---

## Overview

I rebuilt this sign-up form using **HTML** and **CSS**, leveraging modern layout techniques like **Flexbox** to create a responsive and clean design. The form includes fields for name, email, phone, password, and confirmation password.

---

## Features

- **Responsive layout:** The form adapts nicely to different screen sizes using Flexbox.
- **Custom font and styling:** Used Google Fonts and a custom font for a unique look.
- **JavaScript-powered password validation:**
  - Real-time password strength meter.
  - Minimum length validation (at least 8 characters).
  - Visual feedback to users on how secure their password is.
- **Confirm password matching check:** Warns users if passwords don’t match.

---

## How It Works

- The form structure is built with semantic HTML, including `<form>`, `<fieldset>`, and `<label>` tags.
- CSS Flexbox is used extensively to layout fields side-by-side and stack them vertically as needed.
- JavaScript listens to user input on the password field:
  - It updates a colored strength meter bar.
  - It shows a text message indicating the password length and whether it meets the minimum length.
  - It checks if the confirmation password matches, showing an error message if not.

---


## Usage

To run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/Tifa004/Form.git
