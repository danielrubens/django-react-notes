# Django React Notes

## About
A [Django](https://www.djangoproject.com/) project boilerplate/template with lots of state of the art libraries and tools like:
- [React](https://facebook.github.io/react/), for building interactive UIs
- [django-js-reverse](https://github.com/ierror/django-js-reverse), for generating URLs on JS
- [React Bootstrap](https://react-bootstrap.github.io/), for responsive styling
- [Webpack](https://webpack.js.org/), for bundling static assets
- [Celery](https://docs.celeryproject.org/), for background worker tasks
- [WhiteNoise](http://whitenoise.evans.io/en/stable/) with [brotlipy](https://github.com/python-hyper/brotlipy), for efficient static files serving
- [prospector](https://prospector.landscape.io/en/master/) and [ESLint](https://eslint.org/) with [pre-commit](https://pre-commit.com/) for automated quality assurance (does not replace proper testing!)

For continuous integration, a [Github Action](https://github.com/features/actions) configuration `.github/workflows/main.yml` is included.

Also, includes a Heroku `app.json` and a working Django `production.py` settings, enabling easy deployments with ['Deploy to Heroku' button](https://devcenter.heroku.com/articles/heroku-button). Those Heroku plugins are included in `app.json`:
- PostgreSQL, for DB
- Redis, for Celery
- Sendgrid, for e-mail sending
- Papertrail, for logs and platform errors alerts (must set them manually)

This is a good starting point for modern Python/JavaScript web projects.

## Project bootstrap [![main](https://github.com/chocoelho/django-react-boilerplate/actions/workflows/main.yml/badge.svg)](https://github.com/chocoelho/django-react-boilerplate/actions/workflows/main.yml) [![Greenkeeper badge](https://badges.greenkeeper.io/vintasoftware/django-react-boilerplate.svg)](https://greenkeeper.io/)
- [ ] Make sure you have Python 3.8 installed
- [ ] Install Django with `pip install django`, to have the `django-admin` command available.
- [ ] Open the command line and go to the directory you want to start your project in.
- [ ] Start your project using:
    ```
    django-admin startproject theprojectname --extension py,yml,json --name Procfile,Dockerfile,README.md,.env.example,.gitignore,Makefile --template=https://github.com/vintasoftware/django-react-boilerplate/archive/boilerplate-release.zip
    ```
    Alternatively, you may start the project in the current directory by placing a `.` right after the project name, using the following command:
    ```
    django-admin startproject theprojectname . --extension py,yml,json --name Procfile,Dockerfile,README.md,.env.example,.gitignore,Makefile --template=https://github.com/vintasoftware/django-react-boilerplate/archive/boilerplate-release.zip
    ```
