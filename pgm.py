from flask import Flask, render_template, request, redirect
import sqlite3

app = Flask(__name__)

def create_db():
    conn = sqlite3.connect('chat.db')
    conn.execute('CREATE TABLE IF NOT EXISTS messages (message TEXT)')
    conn.close()

@app.route('/',methods=['GET','POST'])
def chat():
    if request.method == 'POST':
        msg = request.form['message']
        conn = sqlite3.connect('chat.db')
        conn.execute('INSERT INTO messages (message) VALUES(?)',(msg,))
        conn.commit()
        conn.close()
    conn = sqlite3.connect('chat.db')
    messages = conn.execute('SELECT message from messages').fetchall()
    conn.close()


    return render_template("index.html", msg=messages)

create_db()
app.run()