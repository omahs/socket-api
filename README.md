
## Bluetooth (extends EventEmitter)

Create an instance of a Bluetooth service.


## arch

This is a `FunctionDeclaration` named `arch`in `os.js`, it's exported but undocumented.



## networkInterfaces

This is a `FunctionDeclaration` named `networkInterfaces`in `os.js`, it's exported but undocumented.



## platform

This is a `FunctionDeclaration` named `platform`in `os.js`, it's exported but undocumented.



## type

This is a `FunctionDeclaration` named `type`in `os.js`, it's exported but undocumented.



## EOL

This is a `VariableDeclaration` named `EOL`in `os.js`, it's exported but undocumented.



## Server (extends EventEmitter)

This is a `ClassDeclaration` named `Server (extends EventEmitter)`in `net.js`, it's exported but undocumented.



## Socket (extends Duplex)

This is a `ClassDeclaration` named `Socket (extends Duplex)`in `net.js`, it's exported but undocumented.



## connect

This is a `VariableDeclaration` named `connect`in `net.js`, it's exported but undocumented.



## createServer

This is a `VariableDeclaration` named `createServer`in `net.js`, it's exported but undocumented.



## getNetworkInterfaces

This is a `VariableDeclaration` named `getNetworkInterfaces`in `net.js`, it's exported but undocumented.



## isIPv4

This is a `VariableDeclaration` named `isIPv4`in `net.js`, it's exported but undocumented.



## undefined

This is a `ExportAllDeclaration` named `undefined`in `fs/index.js`, it's exported but undocumented.



## access

Asynchronously check access a file for a given mode calling `callback`
upon success or error.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer | URL |  | false |  |
| [mode = F_OK(0)] | (string) |  | true |  |
| callback | function(err, fd) |  | false |  |

## chmod

This is a `FunctionDeclaration` named `chmod`in `fs/index.js`, it's exported but undocumented.



## chown

This is a `FunctionDeclaration` named `chown`in `fs/index.js`, it's exported but undocumented.



## close

Asynchronously close a file descriptor calling `callback` upon success or error.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| fd | number |  | false |  |
| callback | function(err) |  | false |  |

## createReadStream

This is a `FunctionDeclaration` named `createReadStream`in `fs/index.js`, it's exported but undocumented.



## createWriteStream

This is a `FunctionDeclaration` named `createWriteStream`in `fs/index.js`, it's exported but undocumented.



## fstat

Invokes the callback with the <fs.Stats> for the file descriptor. See
the POSIX fstat(2) documentation for more detail.


| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| fd | number |  | false | A file descriptor. |
| options | Object |  | false | An options object. |
| callback | function |  | false | The function to call after completion. |

## lchown

This is a `FunctionDeclaration` named `lchown`in `fs/index.js`, it's exported but undocumented.



## lutimes

This is a `FunctionDeclaration` named `lutimes`in `fs/index.js`, it's exported but undocumented.



## link

This is a `FunctionDeclaration` named `link`in `fs/index.js`, it's exported but undocumented.



## lstat

This is a `FunctionDeclaration` named `lstat`in `fs/index.js`, it's exported but undocumented.



## mkdir

This is a `FunctionDeclaration` named `mkdir`in `fs/index.js`, it's exported but undocumented.



## open

Asynchronously open a file calling `callback` upon success or error.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer | URL |  | false |  |
| [flags = 'r'] | (string) |  | true |  |
| [mode = 0o666] | (string) |  | true |  |
| callback | function(err, fd) |  | false |  |

## read

Asynchronously read from an open file descriptor.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| fd | number |  | false |  |
| buffer | object \| Buffer | TypedArray |  | false |  |

## readFile



| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer | URL | number  |  | false |  |
| [options] | object |  | false |  |
| callback | function(err, buffer) |  | false |  |

## realpath

This is a `FunctionDeclaration` named `realpath`in `fs/index.js`, it's exported but undocumented.



## rename

This is a `FunctionDeclaration` named `rename`in `fs/index.js`, it's exported but undocumented.



## rmdir

This is a `FunctionDeclaration` named `rmdir`in `fs/index.js`, it's exported but undocumented.



## rm

This is a `FunctionDeclaration` named `rm`in `fs/index.js`, it's exported but undocumented.



## stat

This is a `FunctionDeclaration` named `stat`in `fs/index.js`, it's exported but undocumented.



## symlink

This is a `FunctionDeclaration` named `symlink`in `fs/index.js`, it's exported but undocumented.



## truncate

This is a `FunctionDeclaration` named `truncate`in `fs/index.js`, it's exported but undocumented.



## unlink

This is a `FunctionDeclaration` named `unlink`in `fs/index.js`, it's exported but undocumented.



## utimes

This is a `FunctionDeclaration` named `utimes`in `fs/index.js`, it's exported but undocumented.



## watch

This is a `FunctionDeclaration` named `watch`in `fs/index.js`, it's exported but undocumented.



## write

This is a `FunctionDeclaration` named `write`in `fs/index.js`, it's exported but undocumented.



## writeFile

This is a `FunctionDeclaration` named `writeFile`in `fs/index.js`, it's exported but undocumented.



## writev

This is a `FunctionDeclaration` named `writev`in `fs/index.js`, it's exported but undocumented.



## OK

Represents an OK IPC status.


## ERROR

Represents an ERROR IPC status.


## TIMEOUT

Timeout in milliseconds for IPC requests.


## kDebugEnabled

Symbol for the `ipc.debug.enabled` property


## parseSeq

Parses `seq` as integer value

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| seq | string\|number |  | false |  |
| [options] | (object) |  | true |  |
| [options.bigint = false] | boolean |  | false |  |

## Result

A result type used internally for handling
IPC result values from the native layer that are in the form
of `{ err?, data? }`. The `data` and `err` properties on this
type of object are in tuple form and be accessed at `[data?,err?]`


## ready

This is a `FunctionDeclaration` named `ready`in `ipc.js`, it's exported but undocumented.



## sendSync

Sends a synchronous IPC command over XHR returning a `Result`
upon success or error.

| Argument | Type | Default | Optional | Description |
| :---     | :--- | :---:   | :---:    | :---        |
| command | string |  | false |  |
| params | (object\|string) |  | true |  |

## resolve

This is a `FunctionDeclaration` named `resolve`in `ipc.js`, it's exported but undocumented.



## send

This is a `FunctionDeclaration` named `send`in `ipc.js`, it's exported but undocumented.



## write

This is a `FunctionDeclaration` named `write`in `ipc.js`, it's exported but undocumented.



## request

This is a `FunctionDeclaration` named `request`in `ipc.js`, it's exported but undocumented.



## lookup


This module enables name resolution. For example, use it to look up IP
addresses of host names. Although named for the Domain Name System (DNS),
it does not always use the DNS protocol for lookups. dns.lookup() uses the
operating system facilities to perform name resolution. It may not need to
perform any network communication. To perform name resolution the way other
applications on the same system do, use dns.lookup().


## Socket (extends EventEmitter)

New instances of dgram.Socket are created using dgram.createSocket().
The new keyword is not to be used to create dgram.Socket instances.


## createSocket

This is a `VariableDeclaration` named `createSocket`in `dgram.js`, it's exported but undocumented.


