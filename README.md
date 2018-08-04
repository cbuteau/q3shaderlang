
# q3shaderlang

## Concept

I thought wasn't that Quake 3 shader language pretty sweet and useful.  And wouldn't a port of that be helpful and fun to do.

A good goal would be a demo website with the teapot model.
and you can enter different shaders.

## Steps

+ [ ] Parse test shader files into some abstract object hierarchy.
+ [ ] Generate webgl shader that actually loads.
+ [ ] Make an extension or object that loads the texture referenced and loads the shader in THREE.


## Links

+ [Q3 Source](https://github.com/id-Software/Quake-III-Arena/)
+ [Tokenizer](https://www.npmjs.com/package/tokenizer)
+ [Shader Manual](http://toolz.nexuizninjaz.com/shader/)
+ [Jasmine](https://jasmine.github.io/setup/nodejs.html)


Tokenizer
code\splines\q_parse.cpp

Shader Parser
q3map\shaders.c
