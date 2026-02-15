---
title: How does Python handle imports?
date: 2026-02-15
tags: ["computer science", "en", "python", "libraries", "imports", "video", "youtube", "research"]
draft: false
---

This is a topic that I discussed in the following youtube video (unfortunately only in brazilian portuguese)

[![Como python faz imports - youtube video](https://img.youtube.com/vi/qoHjoAgangI/0.jpg)](https://www.youtube.com/watch?v=qoHjoAgangI)

These notes were extracted from my github repo [https://github.com/Dpbm/video-python-import-methods](https://github.com/Dpbm/video-python-import-methods), take a look if you want more details and some code ;)

---

## Notes

### C includes

#### headers (.h  files)

- includes the interfaces for external code. including a header into a c source file is the same as copying the definition of the function or whatever to that context, but less prone to errors.


#### `#include`

- it reads a file and places it inside the current source code.
- to avoid errors, use it to only import functions/declarations/definitions/etc from header files.
- includes using `<>` looks only in standard system directories. But without it, it first looks into the current path and then starts look for it in other system locations.

#### Wrappers

- to avoid import the same thing twice use the wrappers

```c
#ifndef DEFINITION_OF_HEADER
#define DEFINITION_OF_HEADER

...

#endif 
```

- you can also use `#pragma once`

---

### JS

### Common JS

- use `require` and `exports.`
- require can load ES modules when the file is `.mjs`

### ES modules

- are more flexible
- you can define queries, properties, etc.


---

### Python import

- Python uses importlib as the underlying machinary for importing.
- components of `import` are available through `importlib` to make it possible for you to create a custom object.
- `import` calls `__import__()`.
- `importer` is a term that refers to a both finds and loads a module.
- the `import` command don't put every single definition directly into the current scope, but only the module name. To access its internals, you must use `module_name.<what you want>`.
- is not required to be on the top of the file.
- it search, create a module object and binds a name, while `__import__` only searches and creates the object.
- when module is not found it raises `ModuleNotFoundError`.



#### The import statement

1. find a module and loads it.
2. define a name for this module in the current scope.

#### The import statement using `from`

1. find the module specified in `from` clause.
2. for each name in `import` check if the name exists. If not, check if it's a submodule. If not found raise `ImportError`. Otherwise import to the local namespace.

#### using `*`

- it exposes all public data.
- members with `_` are not exposed by default.
- if `__all__` is defined, all names defined are exposed. Otherwise all public members.
- `__all__` is a global variable per module.
- it imports all names into the current scope (except those which start with `_`).
- not recommended.

#### Relative imports

- only works on packages contained one within the another.
- `.` for the current package and `..` for one that's a level up.

### `PYTHONPATH`

- add entries in `sys.path`.
- useful when we need to test a package without installing it.
- affects installed python versions/environments, only use when it's really needed.

### `sys.path`

- first entry is the directory of the current script or the current directory when using `-c` or `-m`.

### `sys.modules`

- a dictionary that maps modules that were already loaded.
- it's a cache.
- return a module ready to run.
- maps submodules as well.
- if an entry value is `None` python will raise an `ModuleNotFoundError`.

### `sys.meta_path` (meta hooks)

- Are called before any importing proccess so it can override the `sys.path`, `frozen modules` and even `builtin` ones.
- To register add a finder object in `sys.meta_path`
- if the whole list is check and every finder returns `None`, so the module cannot be handled, raising an `ModuleNotFoundError`, otherwise return a spec.
- it's called multiple times for multilevel packages (`foo.bar.baz`, 3 times, 'foo', 'foo.bar', 'foo.bar.baz').
- python has 3 by default. For builtin modules, for frozen modules and for an import path.
- by default it can handle `.py`, `.pyc` and `.so` files.

### `sys.path_hooks`

- part of `sys.path` processing.
- is registered by adding an importer factory into `sys.path_hooks`.
- it checks if a path item can be handled.
- return an importer when an item can be handled, otherwise return `ImportError`.
- is consulted while traversing a package `__path__`.
- python uses this list to handle different types of files and locations, like from URLs, zip files, so files, .py files, etc.
- it's used after python tries every single finder from `sys.meta_path`. If none works, it iterate over each `sys.path_hooks` entries and give it each possible value from `sys.path`.
- must call `sys.path_importer_cache.clear()` after adding a new factory to it

### Modules

- is a file containing statements and definitions.
- the module name is the filename, which can be accessed via `__name__`.
- can have executable statements that are executed only once when the module is imported.
- have its private namespace.
- when executed as a script its name (`__name__`) becomes `__main__`.
- when importing a module, it searches in this sequence:
    1. `sys.builtin_module_names`.
    2. `sys.path` (which includes the directory of the file, `PYTHONPATH` and the installation dependent directory `site-packages`).
- the `dir()` command is used to list all the names in a module
- `builtins` is a module that list everything that's builtin python
- every module has a `repr` (representaion) depending of data like name, origin, etc.

### `__pycache__`

- contains the cached modules that were previously built.
- python always ignore the cache when:
    1. they are directly loaded via CLI (it recompiles the module).
    2. when the module is a binary.
- to reduce the compiled size use:
    1. `-O` to remove `assert` statements
    2. `-OO` to remove `asserts` and `__doc__`
    3. `opt-` to optimize the binary
- `.pyc` are only faster for loading not executing

### Packages

- collection of modules
- inside the package, when importing, python searchs in `sys.path` for the names. To find the submodules inside your package, each submodule must have a `__init__.py` file.
- when loading submodules with `import` python tries to find the name as a declarion/statement from the module, if it's not find it tries to load as a submodule. In case it's not found, it will raise and `ImportError`.
- when using `import *` it only import the names defined for that package, not every submodule name.
- you can use relative imports within the submodules to navigate quickly between code.
- you can also use '__path__' to check which directory python search for the submodules. 
- Any module that has a `__path__` is a package.

#### Regular Packages

- directories with `__init__.py`.

#### Namespace Packages

- split a pacakge between multiple locations on disk.
- cannot contain `__init__.py` files.
- `__path__` is read-only.
- at runtime you can use `sys.path` to discover them.

### `__init__.py`

- can be empty but can also run initialization code.
- when a module is imported, the `__init__.py` is executed.
- define a package.

### Import Protocol

- it has two parts
- when both are implement it's called an `importer`.
- finder and loader can be the same object.

#### finders

- it determines if a module can be found.
- return a `module spec` with all information needed for loading it.
- can't point to whatever location, not requering to be in the local machine.
- can be a `meta_path finder`, which operates at the beggining of the importing proccess, and `path_entry finder`, which responsible for finding and loading `modules` and `packages` located via a string `path entry`.
- `sys.path_importer_cache` maintains a cache of finders objects.

#### loaders

- don't need to check for `sys.modules`, import will check it before.
- module execution.

### Overall Execution pipeline (Default pipeline as I understood)

- you use `import`
- it uses under the hood `__import__()`
- search the module at cache `sys.modules`
- if not found, run the `meta hooks`
- run the finder iteratively
    - if no `meta_path` worked, it iterates over `sys.path` and `sys.path_hooks` trying to see if any of the paths can be handled
- check if `.pyc` file is up-to-date, when importing python files
    - if not, it regenerates the file and save the new hash
- run loader returning a module object
- binds the module object into a name provided via `import`


## References

- [https://www.grumpymetalguy.com/programming/python_importlib/](https://www.grumpymetalguy.com/programming/python_importlib/)
- [https://docs.python.org/3/library/importlib.html](https://docs.python.org/3/library/importlib.html)
- [https://docs.python.org/3/reference/simple_stmts.html#import](https://docs.python.org/3/reference/simple_stmts.html#import)
- [https://github.com/python/cpython/blob/3.14/Lib/importlib/__init__.py](https://github.com/python/cpython/blob/3.14/Lib/importlib/__init__.py)
- [https://docs.python.org/3/glossary.html#term-importer](https://docs.python.org/3/glossary.html#term-importer)
- [https://docs.python.org/3/glossary.html#term-loader](https://docs.python.org/3/glossary.html#term-loader)
- [https://docs.python.org/3/glossary.html#term-module-spec](https://docs.python.org/3/glossary.html#term-module-spec)
- [https://realpython.com/ref/stdlib/importlib/](https://realpython.com/ref/stdlib/importlib/)
- [https://discuss.python.org/t/usage-of-all-in-init-py/17936/5](https://discuss.python.org/t/usage-of-all-in-init-py/17936/5)
- [https://discuss.python.org/t/usage-of-pythonpath/18086/7](https://discuss.python.org/t/usage-of-pythonpath/18086/7)
- [https://bic-berkeley.github.io/psych-214-fall-2016/using_pythonpath.html](https://bic-berkeley.github.io/psych-214-fall-2016/using_pythonpath.html)
- [https://github.com/stas00/the-art-of-debugging](https://github.com/stas00/the-art-of-debugging)
- [https://docs.python.org/3/using/cmdline.html#envvar-PYTHONPATH](https://docs.python.org/3/using/cmdline.html#envvar-PYTHONPATH)
- [https://gcc.gnu.org/onlinedocs/cpp/Header-Files.html](https://gcc.gnu.org/onlinedocs/cpp/Header-Files.html)
- [https://nodejs.org/api/modules.html](https://nodejs.org/api/modules.html)
- [https://nodejs.org/api/esm.html](https://nodejs.org/api/esm.html)
- [https://tc39.es/ecma262/#sec-modules](https://tc39.es/ecma262/#sec-modules)
- [https://docs.python.org/3/tutorial/modules.html](https://docs.python.org/3/tutorial/modules.html)
- [https://docs.python.org/3/glossary.html#term-namespace-package](https://docs.python.org/3/glossary.html#term-namespace-package)
- [https://docs.python.org/3/reference/datamodel.html#module.__path__](https://docs.python.org/3/reference/datamodel.html#module.__path__)
- [https://docs.python.org/3/reference/import.html](https://docs.python.org/3/reference/import.html)
- [https://docs.python.org/3/library/sys.html#sys.modules](https://docs.python.org/3/library/sys.html#sys.modules)
- [https://docs.python.org/3/library/sys.html#sys.meta_path](https://docs.python.org/3/library/sys.html#sys.meta_path)
- [https://peps.python.org/pep-0302/](https://peps.python.org/pep-0302/)
- [https://docs.python.org/3/library/sys.html#sys.path_importer_cache](https://docs.python.org/3/library/sys.html#sys.path_importer_cache)
- [https://docs.python.org/3/glossary.html#term-portion](https://docs.python.org/3/glossary.html#term-portion)
- [https://micropython-stubber.readthedocs.io/en/main/50_frozen_stubs.html#frozen-modules](https://micropython-stubber.readthedocs.io/en/main/50_frozen_stubs.html#frozen-modules)
- [https://github.com/python/cpython/blob/main/Python/frozen.c](https://github.com/python/cpython/blob/main/Python/frozen.c)
- [https://wiki.python.org/moin/Freeze](https://wiki.python.org/moin/Freeze)
- [https://docs.python-guide.org/shipping/freezing/](https://docs.python-guide.org/shipping/freezing/)
- [https://docs.python.org/3/library/sys_path_init.html](https://docs.python.org/3/library/sys_path_init.html)
- [https://docs.python.org/3/tutorial/classes.html#tut-scopes](https://docs.python.org/3/tutorial/classes.html#tut-scopes)
- [https://docs.python.org/3/library/compileall.html#module-compileall](https://docs.python.org/3/library/compileall.html#module-compileall)
- [https://peps.python.org/pep-3147/](https://peps.python.org/pep-3147/)
- [https://peps.python.org/pep-0420/](https://peps.python.org/pep-0420/)
- [https://packaging.python.org/en/latest/guides/packaging-namespace-packages/](https://packaging.python.org/en/latest/guides/packaging-namespace-packages/)
- [https://realpython.com/python-namespace-package/](https://realpython.com/python-namespace-package/)
- [https://docs.python.org/3/library/importlib.html#importlib.machinery.PathFinder.find_spec](https://docs.python.org/3/library/importlib.html#importlib.machinery.PathFinder.find_spec)
- [https://stackoverflow.com/questions/41990169/how-to-use-sys-path-hooks-for-customized-loading-of-modules](https://stackoverflow.com/questions/41990169/how-to-use-sys-path-hooks-for-customized-loading-of-modules)
- [https://stackoverflow.com/questions/31882967/why-are-pyc-files-created-on-import](https://stackoverflow.com/questions/31882967/why-are-pyc-files-created-on-import)
- [https://peps.python.org/pep-3147/#python-behavior](https://peps.python.org/pep-3147/#python-behavior)
- [https://medium.com/@utkarshshukla.author/what-is-a-pyc-file-visualizing-pythons-bytecode-generation-fcce8e6da679](https://medium.com/@utkarshshukla.author/what-is-a-pyc-file-visualizing-pythons-bytecode-generation-fcce8e6da679)
- [https://peps.python.org/pep-0451/](https://peps.python.org/pep-0451/)
- [https://github.com/python/cpython/blob/main/Lib/importlib/_bootstrap.py](https://github.com/python/cpython/blob/main/Lib/importlib/_bootstrap.py)
- [https://github.com/python/cpython/blob/main/Lib/importlib/_bootstrap_external.py](https://github.com/python/cpython/blob/main/Lib/importlib/_bootstrap_external.py)
- [https://github.com/python/cpython/blob/main/Lib/importlib/abc.py](https://github.com/python/cpython/blob/main/Lib/importlib/abc.py)
- [https://github.com/python/cpython/blob/main/Lib/importlib/_abc.py](https://github.com/python/cpython/blob/main/Lib/importlib/_abc.py)
- [https://www.reddit.com/r/Python/comments/untwoc/syspath_hooks_is_fun_for_everyone_cfgimp_a_misuse/](https://www.reddit.com/r/Python/comments/untwoc/syspath_hooks_is_fun_for_everyone_cfgimp_a_misuse/)
- [https://docs.python.org/3/glossary.html#term-path-entry-finder](https://docs.python.org/3/glossary.html#term-path-entry-finder)
- [https://docs.python.org/3/glossary.html#term-path-entry-hook](https://docs.python.org/3/glossary.html#term-path-entry-hook)
- [https://snarky.ca/writing-a-zip-file-importer-the-path-hook-part-1/](https://snarky.ca/writing-a-zip-file-importer-the-path-hook-part-1/)
- [https://rahul.gopinath.org/post/2018/09/07/python-importer/](https://rahul.gopinath.org/post/2018/09/07/python-importer/)
- [https://docs.ploomber.io/en/latest/api/_modules/root/ploomber.SourceLoader.html](https://docs.ploomber.io/en/latest/api/_modules/root/ploomber.SourceLoader.html)
