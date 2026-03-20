---
title: What's Python __future__?
date: 2026-03-20
tags: ["computer science", "python", "versions", "python2", "python2", "2to3", "six", "en", "video"]
draft: false
---

These are the notes I took to do my video about python futures, which is available here:

[![De volta Para o Futuro do Python - Python _future_](https://img.youtube.com/vi/hRDHVKJI8d0/0.jpg)](https://www.youtube.com/shorts/hRDHVKJI8d0?feature=share)

and here:

[De volta Para o Futuro do Python - Python _future_ - tiktokt video](https://www.tiktok.com/@iamdpbm/video/7619330385436069140)

Unfortunately, all the videos are in portuguese. However, my notes are available bellow and the code is open source and available here: [https://github.com/Dpbm/video-python-futures](https://github.com/Dpbm/video-python-futures).

Enjoy :)

## Notes

- Allows you to tell the compiler that you want to use a standard that will come in future releases.
- Is done by simply importing from `__future__`.
    - Must be added on the top of the file, since it changes the way the file is parsed. Otherwise, it raises a `SyntaxError`.
- Tells the compiler you want an specific part of your code to act is it will be the default in the future.
- `division` calls `__truediv__` instead of `__div__`.
- The `from __future__ import whatever` is a future clause, but you can also import the `__future__` module with `import __future__`.
- The future itself is an object that contains metadata about the very feature, like versions and etc.
- Some futures are only supported by specific versions of python2, so older versions may need more workarounds than newer ones. That's why `future` and `six` are so useful in these cases.
- Python 2.7 cli had a flag `-3` that warned you when there was some statements that couldn't be trivial to fix using 2to3.
- `__future__` works since python 2.1.
- There are flags that can be passed to `compile()` to dynamically use future features.
- Only feature that requires future statements is `annoations`.
- Any code compiled with `exec()` or `compile()` will use the new statements when using futures in the module.
- Interactive session also can use futures.
- Only docstrings, comments, blank lines and other future statements can appear before it.
- Future object has 2 elements containing tuples with 5 elements. The first one describes the Optional release, which is the first release the feature was accepted. And the second is the Mandatory Release, describes either when the feature became part of the language, or a prediction of when it will be or can be None if it was dropped. Usually, Optional < Mandatory.

### six

- Used to wrap differences between python $2$ and $3$.
- Is a single python file being easy to copy into a project whenever needed.

### future

- A package to make a compatibility layer for python2-3 code.
- Based on the 2to3 module.
- Not necessary anymore.
- Add supports for the standard library.

### 2to3

- A library builtin python.
- Transforms python2 code into python3 compatible.
- Was removed from Python3.13.

## References

- [https://docs.python.org/3.13/library/__future__.html](https://docs.python.org/3.13/library/__future__.html)
- [https://www.reddit.com/r/learnpython/comments/8ialj1/how_does_future_work/](https://www.reddit.com/r/learnpython/comments/8ialj1/how_does_future_work/)
- [https://stackoverflow.com/questions/7075082/what-is-future-in-python-used-for-and-how-when-to-use-it-and-how-it-works](https://stackoverflow.com/questions/7075082/what-is-future-in-python-used-for-and-how-when-to-use-it-and-how-it-works)
- [https://pt.stackoverflow.com/questions/126466/para-que-serve-o-m%C3%B3dulo-future](https://pt.stackoverflow.com/questions/126466/para-que-serve-o-m%C3%B3dulo-future)
- [https://www.geeksforgeeks.org/python/__future__-module-in-python/](https://www.geeksforgeeks.org/python/__future__-module-in-python/)
- [https://stackoverflow.com/questions/5937251/writing-python-2-7-code-that-is-as-close-to-python-3-x-syntax-as-possible](https://stackoverflow.com/questions/5937251/writing-python-2-7-code-that-is-as-close-to-python-3-x-syntax-as-possible)
- [https://six.readthedocs.io/](https://six.readthedocs.io/)
- [https://pypi.org/project/future/](https://pypi.org/project/future/)
- [https://python-future.org/overview.html](https://python-future.org/overview.html)
- [https://docs.python.org/3.8/library/2to3.html](https://docs.python.org/3.8/library/2to3.html)
- [https://docs.python.org/3/whatsnew/3.13.html](https://docs.python.org/3/whatsnew/3.13.html)
- [https://sources.debian.org/src/python2.7/2.7.9-2/Modules/future_builtins.c](https://sources.debian.org/src/python2.7/2.7.9-2/Modules/future_builtins.c)
- [https://github.com/python/cpython/blob/main/Lib/__future__.py](https://github.com/python/cpython/blob/main/Lib/__future__.py)
- [http://python3porting.com/noconv.html](http://python3porting.com/noconv.html)
- [https://docs.oracle.com/cd/E86824_01/html/E54763/python2-7-1.html](https://docs.oracle.com/cd/E86824_01/html/E54763/python2-7-1.html)
- [https://docs.python.org/3.13/library/__future__.html](https://docs.python.org/3.13/library/__future__.html)
- [https://docs.python.org/3/library/functions.html#compile](https://docs.python.org/3/library/functions.html#compile)
- [https://docs.python.org/3.13/reference/simple_stmts.html#future](https://docs.python.org/3.13/reference/simple_stmts.html#future)
- [https://peps.python.org/pep-0236/](https://peps.python.org/pep-0236/)
- [https://peps.python.org/pep-0563/](https://peps.python.org/pep-0563/)
- [https://peps.python.org/pep-0649/](https://peps.python.org/pep-0649/)
- [https://peps.python.org/pep-0749/#the-future-of-from-future-import-annotations](https://peps.python.org/pep-0749/#the-future-of-from-future-import-annotations)
