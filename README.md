# aws-project
 Flask Web Application

A simple Python web application built using Flask and deployed on AWS EC2. This project demonstrates how to create, run, and deploy a web app with basic cloud integration.

---

Features

* Simple Flask web server
* Dynamic routing
* Easy deployment on AWS EC2
* Ready for integration with S3 and RDS
* Beginner-friendly project structure

---

## Tech Stack

* Python 3
* Flask
* AWS EC2
* (Optional) AWS S3 for file storage
* (Optional) AWS RDS for database

---

## Project Structure

```
flask-app/
│── app.py
│── requirements.txt
│── templates/
│   └── index.html
│── static/
│   └── style.css
```



## Installation & Setup

### 1️. Clone the Repository


git clone https://github.com/your-username/flask-app.git
cd flask-app
2.  Create Virtual Environment

python3 -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows
 3️. Install Dependencies

pip install -r requirements.txt

### 4. Run the Application

python app.py

App will run on:


http://127.0.0.1:5000/
or
http://public-ip:5000/

##  Deployment on AWS EC2

### Steps:

1. Launch EC2 instance
2. Install Python & Git
3. Clone repository
4. Install dependencies
5. Run app

sudo apt update
sudo apt install python3-pip git -y
git clone https://github.com/your-username/flask-app.git
cd flask-app
pip3 install -r requirements.txt
python3 app.py

##  Open Port in Security Group

Allow:

* HTTP (80)
* Custom TCP (5000)

## 🌍 Access Application

http://<your-ec2-public-ip>:5000


## ☁️ Future Enhancements

* Upload files to AWS S3
* Connect with AWS RDS database
* Add Load Balancer
* Use Docker for containerization
* Automate deployment using Terraform

---

## 📸 Sample Output

Home Page:

Welcome to Flask App 🚀


##  Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.


## 📄 License

This project is open-source and free to use.


##  Acknowledgement

Created for learning and teaching cloud + DevOps concepts.

---
