from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__, static_folder='build', static_url_path='/static')
CORS(app)

MAIL_ADDRESS    = os.getenv('MAIL_ADDRESS')
MAIL_PASSWORD   = os.getenv('MAIL_PASSWORD')
RECIPIENT_EMAIL = os.getenv('RECIPIENT_EMAIL')

# ── Email endpoint ────────────────────────────────────────────────────────
@app.route('/send', methods=['POST'])
def send_email():
    data = request.get_json()

    name    = data.get('name', '')
    email   = data.get('email', '')
    subject = data.get('subject', 'No Subject')
    message = data.get('message', '')

    try:
        msg = MIMEMultipart()
        msg['From']    = MAIL_ADDRESS
        msg['To']      = RECIPIENT_EMAIL
        msg['Subject'] = f"[Portfolio] {subject}"

        body = f"""
New message from your portfolio website:

Name:    {name}
Email:   {email}
Subject: {subject}

Message:
{message}
        """

        msg.attach(MIMEText(body, 'plain'))

        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(MAIL_ADDRESS, MAIL_PASSWORD)
            smtp.sendmail(MAIL_ADDRESS, RECIPIENT_EMAIL, msg.as_string())

        return jsonify({'success': True}), 200

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'success': False, 'error': str(e)}), 500

# ── Serve React app ───────────────────────────────────────────────────────
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    full_path = os.path.join(app.static_folder, path)
    if path != '' and os.path.exists(full_path) and os.path.isfile(full_path):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)