# Wikipedia-Quest
A Single Page Application made for Missouri State University's Advanced Internet Programming course.

## Build Steps

Run the following commands if gulp-cli has been globally installed on your computer:

```
npm install
gulp
```

Otherwise, run these commands:

```
npm install
node_modules\.bin\gulp
```


## Start the local dev server

```
npm start
```

## Notes about the application

* Not all wikipedia articles have an image that mediawiki's RESTful API can fetch, despite there being images within the page. In those cases, a "No Image available" image is displayed instead.