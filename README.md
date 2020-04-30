# android-virtual-devices
Place where we can share hardware profiles for AVDs. 

It's hard to find an up to date place which has downloadable hardware profiles for Android Studio.

## How to add device
1. Put the hardware profile in the correct brand folder at the root of the repo. 

2. Open `devices.js` in the root of the repo and add the new device inside of a new object according to the template:

```
  {
    brand: "Samsung",
    model: "J2",
    size: 4.7,
    screenRatio: "long",
    xDimension: 960,
    yDimension: 540,
    githubPath:
      "https://github.com/ugglr/android-virtual-devices/blob/master/samsung/samsung_j2.xml",
  },
```

* brand - Phone manufactorer. eg. Samsung || Huawei || Xiaomi etc.
* model - Phone model. eg. Samsung Galaxy S8
* size - Diagonal Screen Size in inches
* screenRatio - If the phone is "tall", "large" etc. 
* xDimension - number of pixels in x dimension
* yDimension - number of pixels in y dimension
* githubPath - path to the hardware profile file here at github. 

3. Send PR. 

