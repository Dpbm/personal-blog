---
title: The magic behind shebangs!
date: 2026-02-19
tags: ["computer science", "linux", "shell", "terminal", "unix", "en", "video"]
draft: false
---

These are the notes I took to do my video about shebangs, which is available here:

[![Como shebangs functionam - youtube short video](https://img.youtube.com/vi/Mpv6wYCsikA/0.jpg)](https://www.youtube.com/shorts/Mpv6wYCsikA?feature=share)

and here:

[Como shebangs funcionam - tiktokt video](https://www.tiktok.com/@iamdpbm/video/7608634329568136468)

Unfortunately, all the videos are in portuguese. However, my notes are available bellow and the code is open source and available here: [https://github.com/Dpbm/video-shebang](https://github.com/Dpbm/video-shebang).

Enjoy :)

## Notes

- The name cames from Sharp-bang (`#!` from music sheet notation). Some say that it's due to its phonetics (hash + bang).
- It especifies an interpreter for this script.
- Bash handles the shebang when the underlying system doesn't do that.
- It's usual to set it to `#!/bin/bash` to ensure that it will use Bash instead of any other shell.
- Now days it's preferable to use `#!/usr/bin/env bash` to get bash from `$PATH` if installed in a different directory.
- The script fallback to its parent `SHELL` when no shebang is defined.
- The shebang is used for portability.
- When it's not provided, the system raises an `ENOEXEC (Exec Format error)` error.
- `file` command uses the shebang, as well, to see which kind of executable is that.
- You don't need a blank after `#!`.
- Also accepts relative paths.
- When a program runs in a unix-like system, it executes a kernel `exec()`(or any command from this family) function. It take a look at the first 16 bits, searching for a magic number that describes an executable. If it's no signature is found it return an `ENOEXEC` error.
- As time went, this magic part of the file also described how to execute it.
- When the run starts running your script, it first tries to delegate it to the kernel, which search for the shebang and tries to execute the file with a different interpreter. If none was found, the bash itself tries to execute.
- Explicit calling a script via a shell command (like `sh` or `bash`) the shebang is ignored.
- Using `/usr/bin/env` doesn't provide complete portability, but it's a good practice.
- Arguments can be split differently in different systems, so it may break in some occasions.
- The path of the script is passed via argv to the interpreter.

## Calling trace

```
execve -> do_execveat_common -> create a linux_binprm containing data from it (DEFINE_CLASS -> alloc_bprm ) -> bprm_execve -> exec_binprm -> search_binary_handler -> prepare_binprm -> kernel_read (read the file) ->

it them iterates over a linked list of formats

list_for_each_entry(fmt, &formats, lh) {

the exec.c provides an external function `__register_binfmt` that is used by each type in `binfmt_*.c` to register in the lits, calling like:

core_initcall(init_elf_binfmt);


-> load_binary from struct linux_binprm

if it's a script, it loads `binfmt_script.c` that has the method `load_script` which checks for the shebang

-> open_exec (from exec.c) -> do_open_execat

```


## References

- [https://unix.stackexchange.com/questions/149045/why-is-shebang-called-shebang](https://unix.stackexchange.com/questions/149045/why-is-shebang-called-shebang)
- [https://www.gnu.org/software/bash/manual/bash.html#Shell-Scripts-1](https://www.gnu.org/software/bash/manual/bash.html#Shell-Scripts-1)
- [https://medium.com/@jcroyoaun/a-deeper-view-into-the-shebang-for-linux-scripting-4a26395df49d](https://medium.com/@jcroyoaun/a-deeper-view-into-the-shebang-for-linux-scripting-4a26395df49d)
- [https://stackoverflow.com/questions/3009192/how-does-the-shebang-work](https://stackoverflow.com/questions/3009192/how-does-the-shebang-work)
- [https://unix.stackexchange.com/questions/268766/what-exactly-happens-when-i-execute-a-file-in-my-shell](https://unix.stackexchange.com/questions/268766/what-exactly-happens-when-i-execute-a-file-in-my-shell)
- [https://crocidb.com/post/kernel-adventures/demystifying-the-shebang/](https://crocidb.com/post/kernel-adventures/demystifying-the-shebang/)
- [https://www.in-ulm.de/~mascheck/various/shebang/](https://www.in-ulm.de/~mascheck/various/shebang/)
- [http://www.faqs.org/faqs/unix-faq/faq/part3/section-16.html](http://www.faqs.org/faqs/unix-faq/faq/part3/section-16.html)
- [https://en.wikipedia.org/wiki/Shebang_(Unix)](https://en.wikipedia.org/wiki/Shebang_(Unix))
- [https://github.com/torvalds/linux/blob/v4.8/fs/binfmt_script.c#L25](https://github.com/torvalds/linux/blob/v4.8/fs/binfmt_script.c#L25)
- [https://man7.org/linux/man-pages/man2/execve.2.html](https://man7.org/linux/man-pages/man2/execve.2.html)
- [https://man7.org/linux/man-pages/man3/perror.3.html](https://man7.org/linux/man-pages/man3/perror.3.html)
- [https://stackoverflow.com/questions/4689724/where-do-i-find-the-source-code-for-execve](https://stackoverflow.com/questions/4689724/where-do-i-find-the-source-code-for-execve)
- [https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/fs/exec.c#l1376](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/fs/exec.c#l1376)
- [https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/include/linux/binfmts.h](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/include/linux/binfmts.h)
- [https://github.com/torvalds/linux/blob/master/fs/namei.c#L4849](https://github.com/torvalds/linux/blob/master/fs/namei.c#L4849)
- [https://docs.kernel.org/admin-guide/binfmt-misc.html](https://docs.kernel.org/admin-guide/binfmt-misc.html)
- [https://github.com/torvalds/linux/blob/master/include/linux/list.h](https://github.com/torvalds/linux/blob/master/include/linux/list.h)
- [https://github.com/torvalds/linux/blob/master/fs/binfmt_script.c](https://github.com/torvalds/linux/blob/master/fs/binfmt_script.c)
- [https://homepages.cwi.nl/~aeb/std/hashexclam.html](https://homepages.cwi.nl/~aeb/std/hashexclam.html)
- [https://www.oreilly.com/library/view/understanding-the-linux/0596005652/ch20s04.html](https://www.oreilly.com/library/view/understanding-the-linux/0596005652/ch20s04.html)
