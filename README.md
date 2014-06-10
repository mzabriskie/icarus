# Icarus [![Build Status](https://travis-ci.org/mzabriskie/icarus.png?branch=master)](https://travis-ci.org/mzabriskie/icarus)

Icarus is a dynamic CDN that serves static content such as JavaScript or CSS files. It is dynamic in that it will pull resources from Git repositories based upon configuration and then serve cached versions of those resources.

**Icarus is currently a work in progress**

## How it works

Based on the following configuration:

```js
{
	"modules": {
		"mymodule": {
			"url": "http://github.com/mzabriskie/mymodule.git",
			"files": "lib/**/*.js"
		}
	}
}
```

Requests can then be made for `/mymodule/0.1.3/myfile.js`.

Icarus will then split the request as follows:

```js
{
	"module": "mymodule",
	"version": "0.1.3",
	"file": "myfile.js"
}
```

If a module exists in configuration matching `mymodule` the cache will then be checked, otherwise a `404` error is returned. If no such module exists in cache, Icarus will clone the repository. Once cached the requested file, `myfile.js` will be returned for the tag version requested.