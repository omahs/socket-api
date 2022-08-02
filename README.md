
# [Bluetooth](./bluetooth.js#L7)

A high level, cross-platform API for Bluetooth Pub-Sub



## [`Bluetooth` (extends `EventEmitter`)](./bluetooth.js#L13)

Create an instance of a Bluetooth service.



### [`constructor()`](./bluetooth.js#L21)

constructor is an example property that is set to `true`
Creates a new service with key-value pairs

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| serviceId | string |  | false | Given a default value to determine the type |



### [`subscribe()`](./bluetooth.js#L63)

Start scanning for published values that correspond to a well-known UUID

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| id | string |  | false | A well-known UUID |



### [`publish()`](./bluetooth.js#L75)

Start advertising a new value for a well-known UUID

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| id | string |  | false | A well-known UUID |



# [Dgram](./dgram.js#L8)

This module provides an implementation of UDP datagram sockets. It does
not (yet) provide any of the multicast methods or properties.



## [`Socket` (extends `EventEmitter`)](./dgram.js#L42)

New instances of dgram.Socket are created using dgram.createSocket().
The new keyword is not to be used to create dgram.Socket instances.



### [`bind()`](./dgram.js#L94)

Listen for datagram messages on a named port and optional address
If address is not specified, the operating system will attempt to
listen on all addresses. Once binding is complete, a 'listening'
event is emitted and the optional callback function is called.
If binding fails, an 'error' event is emitted.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| port | number |  | false | The port to to listen for messages on |
| address | string |  | false | The address to bind to (0.0.0.0) |
| callback | function |  | false | With no parameters. Called when binding is complete. |



### [`connect()`](./dgram.js#L197)

Associates the dgram.Socket to a remote address and port. Every message sent
by this handle is automatically sent to that destination. Also, the socket
will only receive messages from that remote peer. Trying to call connect()
on an already connected socket will result in an ERR_SOCKET_DGRAM_IS_CONNECTED
exception. If address is not provided, '127.0.0.1' (for udp4 sockets) or '::1'
(for udp6 sockets) will be used by default. Once the connection is complete,
a 'connect' event is emitted and the optional callback function is called.
In case of failure, the callback is called or, failing this, an 'error' event
is emitted.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| port | number |  | false | Port the client should connect to. |
| host | string |  | true | Host the client should connect to. |
| connectListener | function |  | true | Common parameter of socket.connect() methods. Will be added as a listener for the 'connect' event once. |



### [`send()`](./dgram.js#L330)

Broadcasts a datagram on the socket. For connectionless sockets, the
destination port and address must be specified. Connected sockets, on the
other hand, will use their associated remote endpoint, so the port and
address arguments must not be set.
The msg argument contains the message to be sent. Depending on its type,
different behavior can apply. If msg is a Buffer, any TypedArray or a
DataView, the offset and length specify the offset within the Buffer where
the message begins and the number of bytes in the message, respectively.
If msg is a String, then it is automatically converted to a Buffer with
'utf8' encoding. With messages that contain multi-byte characters, offset
and length will be calculated with respect to byte length and not the
character position. If msg is an array, offset and length must not be
specified.
The address argument is a string. If the value of address is a host name,
DNS will be used to resolve the address of the host. If address is not
provided or otherwise nullish, '127.0.0.1' (for udp4 sockets) or '::1'
(for udp6 sockets) will be used by default.
If the socket has not been previously bound with a call to bind, the socket
is assigned a random port number and is bound to the "all interfaces"
address ('0.0.0.0' for udp4 sockets, '::0' for udp6 sockets.)
An optional callback function may be specified to as a way of reporting DNS
errors or for determining when it is safe to reuse the buf object. DNS
lookups delay the time to send for at least one tick of the Node.js event
loop.
The only way to know for sure that the datagram has been sent is by using a
callback. If an error occurs and a callback is given, the error will be
passed as the first argument to the callback. If a callback is not given,
the error is emitted as an 'error' event on the socket object.
Offset and length are optional but both must be set if either are used.
They are supported only when the first argument is a Buffer, a TypedArray,
or a DataView.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| buffer | ArrayBuffer |  | false | An array buffer of data to send |



### [`close()`](./dgram.js#L416)

Close the underlying socket and stop listening for data on it. If a
callback is provided, it is added as a listener for the 'close' event.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| callback | function |  | false | Called when the connection is completed or on error. |



### [`address()`](./dgram.js#L444)

Returns an object containing the address information for a socket. For
UDP sockets, this object will contain address, family, and port properties.
This method throws EBADF if called on an unbound socket.


| Return Value | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| socketInfo | Object |  | false | Information about the local socket |
| socketInfo.address | string |  | false | The IP address of the socket |
| socketInfo.ip | ip |  | false | The IP address of the socket |
| socketInfo.port | string |  | false | The port of the socket |
| socketInfo.family | string |  | false | The IP family of the socket |


### [`remoteAddress()`](./dgram.js#L464)

Returns an object containing the address, family, and port of the remote
endpoint. This method throws an ERR_SOCKET_DGRAM_NOT_CONNECTED exception
if the socket is not connected.


| Return Value | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| socketInfo | Object |  | false | Information about the remote socket |
| socketInfo.remoteAddress | string |  | false | The IP address of the socket |
| socketInfo.remoteIp | ip |  | false | The IP address of the socket |
| socketInfo.remotePort | string |  | false | The port of the socket |
| socketInfo.remoteFamily | string |  | false | The IP family of the socket |


## [createSocket](./dgram.js#L553)

This is a `VariableDeclaration` named `createSocket`in `dgram.js`, it's exported but undocumented.



## [`lookup()`](./dns.js#L18)

This module enables name resolution. For example, use it to look up IP
addresses of host names. Although named for the Domain Name System (DNS),
it does not always use the DNS protocol for lookups. dns.lookup() uses the
operating system facilities to perform name resolution. It may not need to
perform any network communication. To perform name resolution the way other
applications on the same system do, use dns.lookup().



# [IPC](./ipc.js#L35)

There are three important concepts for an application built with the Socket
SDK. The `Render` process, the `Main` process, and the `Bridge` process.
`IPC` is an acronym for Inter Process Communication. It's the method for
which these [processes][processes] work together.
The Bridge process handles communication between the Render and Main
processes. For Desktop apps, the Render process is the user interface, and
the Main process, which is optional, is strictly for computing and IO.
When an applicaiton starts, the Bridge process will spawn a child process
if one is specified.
The Binding process uses standard input and output as a way to communicate.
Data written to the write-end of the pipe is buffered by the OS until it is
read from the read-end of the pipe.
The IPC protocol uses a simple URI-like scheme.
```uri
ipc://command?key1=value1&key2=value2...
```
The query is encoded with `encodeURIComponent`.
Here is a reference [implementation][0] if you would like to use a language
that does not yet have one.



## [OK](./ipc.js#L119)

Represents an OK IPC status.



## [ERROR](./ipc.js#L124)

Represents an ERROR IPC status.



## [TIMEOUT](./ipc.js#L129)

Timeout in milliseconds for IPC requests.



## [kDebugEnabled](./ipc.js#L134)

Symbol for the `ipc.debug.enabled` property



## [`parseSeq()`](./ipc.js#L142)

Parses `seq` as integer value

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| seq | string\|number |  | false |  |
| [options] | (object) |  | true |  |
| [options.bigint = false] | boolean |  | false |  |



## [`debug()`](./ipc.js#L152)

If `debug.enabled === true`, then debug output will be printed to console.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| [enable] | (boolean) |  | false |  |



## [Result](./ipc.js#L182)

A result type used internally for handling
IPC result values from the native layer that are in the form
of `{ err?, data? }`. The `data` and `err` properties on this
type of object are in tuple form and be accessed at `[data?,err?]`



### [`from()`](./ipc.js#L190)

Creates a `Result` instance from input that may be an object
like `{ err?, data? }`, an `Error` instance, or just `data`.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| result | (object\|Error|mixed) |  | true |  |



### [`constructor()`](./ipc.js#L213)

`Result` class constructor.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| data | (object) |  | true |  |
| err | (Error) |  | true |  |



## [ready](./ipc.js#L246)

This is a `FunctionDeclaration` named `ready`in `ipc.js`, it's exported but undocumented.



## [`sendSync()`](./ipc.js#L271)

Sends a synchronous IPC command over XHR returning a `Result`
upon success or error.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| command | string |  | false |  |
| params | (object\|string) |  | true |  |



## [emit](./ipc.js#L311)

This is a `FunctionDeclaration` named `emit`in `ipc.js`, it's exported but undocumented.



## [resolve](./ipc.js#L321)

This is a `FunctionDeclaration` named `resolve`in `ipc.js`, it's exported but undocumented.



## [send](./ipc.js#L331)

This is a `FunctionDeclaration` named `send`in `ipc.js`, it's exported but undocumented.



## [write](./ipc.js#L341)

This is a `FunctionDeclaration` named `write`in `ipc.js`, it's exported but undocumented.



## [request](./ipc.js#L435)

This is a `FunctionDeclaration` named `request`in `ipc.js`, it's exported but undocumented.



# [OS](./os.js#L8)

This module provides normalized system information from all the major
operating systems.



## [arch](./os.js#L19)

This is a `FunctionDeclaration` named `arch`in `os.js`, it's exported but undocumented.



## [networkInterfaces](./os.js#L52)

This is a `FunctionDeclaration` named `networkInterfaces`in `os.js`, it's exported but undocumented.



## [platform](./os.js#L119)

This is a `FunctionDeclaration` named `platform`in `os.js`, it's exported but undocumented.



## [type](./os.js#L146)

This is a `FunctionDeclaration` named `type`in `os.js`, it's exported but undocumented.



## [EOL](./os.js#L178)

This is a `VariableDeclaration` named `EOL`in `os.js`, it's exported but undocumented.



# [Net](./net.js#L10)

This module provides an asynchronous network API for creating
stream-based TCP or IPC servers (net.createServer()) and clients
(net.createConnection()).



## [`Server` (extends `EventEmitter`)](./net.js#L67)

This is a `ClassDeclaration` named ``Server` (extends `EventEmitter`)`in `net.js`, it's exported but undocumented.



## [`Socket` (extends `Duplex`)](./net.js#L152)

This is a `ClassDeclaration` named ``Socket` (extends `Duplex`)`in `net.js`, it's exported but undocumented.



## [connect](./net.js#L411)

This is a `VariableDeclaration` named `connect`in `net.js`, it's exported but undocumented.



## [createServer](./net.js#L422)

This is a `VariableDeclaration` named `createServer`in `net.js`, it's exported but undocumented.



## [getNetworkInterfaces](./net.js#L426)

This is a `VariableDeclaration` named `getNetworkInterfaces`in `net.js`, it's exported but undocumented.



## [isIPv4](./net.js#L432)

This is a `VariableDeclaration` named `isIPv4`in `net.js`, it's exported but undocumented.



# [File System](./fs/index.js#L20)

This module enables interacting with the file system in a way modeled on
standard POSIX functions.
To use the promise-based APIs:
```js
import
```
To use the callback and sync APIs:
```js
import
as fs from 'node:fs';
```



## [`access()`](./fs/index.js#L70)

Asynchronously check access a file for a given mode calling `callback`
upon success or error.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer | URL |  | false |  |
| [mode = F_OK(0)] | (string) |  | true |  |
| callback | function(err, fd) |  | false |  |



## [appendFile](./fs/index.js#L86)

This is a `FunctionDeclaration` named `appendFile`in `fs/index.js`, it's exported but undocumented.



## [chmod](./fs/index.js#L89)

This is a `FunctionDeclaration` named `chmod`in `fs/index.js`, it's exported but undocumented.



## [chown](./fs/index.js#L107)

This is a `FunctionDeclaration` named `chown`in `fs/index.js`, it's exported but undocumented.



## [`close()`](./fs/index.js#L116)

Asynchronously close a file descriptor calling `callback` upon success or error.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| fd | number |  | false |  |
| callback | function(err) |  | false |  |



## [copyFile](./fs/index.js#L132)

This is a `FunctionDeclaration` named `copyFile`in `fs/index.js`, it's exported but undocumented.



## [createReadStream](./fs/index.js#L135)

This is a `FunctionDeclaration` named `createReadStream`in `fs/index.js`, it's exported but undocumented.



## [createWriteStream](./fs/index.js#L169)

This is a `FunctionDeclaration` named `createWriteStream`in `fs/index.js`, it's exported but undocumented.



## [`fstat()`](./fs/index.js#L211)

Invokes the callback with the <fs.Stats> for the file descriptor. See
the POSIX fstat(2) documentation for more detail.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| fd | number |  | false | A file descriptor. |
| options | Object |  | false | An options object. |
| callback | function |  | false | The function to call after completion. |



## [lchmod](./fs/index.js#L232)

This is a `FunctionDeclaration` named `lchmod`in `fs/index.js`, it's exported but undocumented.



## [lchown](./fs/index.js#L235)

This is a `FunctionDeclaration` named `lchown`in `fs/index.js`, it's exported but undocumented.



## [lutimes](./fs/index.js#L238)

This is a `FunctionDeclaration` named `lutimes`in `fs/index.js`, it's exported but undocumented.



## [link](./fs/index.js#L241)

This is a `FunctionDeclaration` named `link`in `fs/index.js`, it's exported but undocumented.



## [lstat](./fs/index.js#L244)

This is a `FunctionDeclaration` named `lstat`in `fs/index.js`, it's exported but undocumented.



## [mkdir](./fs/index.js#L247)

This is a `FunctionDeclaration` named `mkdir`in `fs/index.js`, it's exported but undocumented.



## [`open()`](./fs/index.js#L258)

Asynchronously open a file calling `callback` upon success or error.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer | URL |  | false |  |
| [flags = 'r'] | (string) |  | true |  |
| [mode = 0o666] | (string) |  | true |  |
| callback | function(err, fd) |  | false |  |



## [`opendir()`](./fs/index.js#L305)

Asynchronously open a directory calling `callback` upon success or error.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer | URL |  | false |  |
| callback | function(err, fd) |  | false |  |



## [`read()`](./fs/index.js#L327)

Asynchronously read from an open file descriptor.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| fd | number |  | false |  |
| buffer | object \| Buffer | TypedArray |  | false |  |



## [`readdir()`](./fs/index.js#L359)

Asynchronously read all entries in a directory.

| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer | URL  |  | false |  |
| [options] | object |  | false |  |
| callback | function(err, buffer) |  | false |  |



## [`readFile()`](./fs/index.js#L407)



| Argument | Type | Default | Optional | Description |
| :--- | :--- | :---:   | :---:    | :---        |
| path | string \| Buffer | URL | number  |  | false |  |
| [options] | object |  | false |  |
| callback | function(err, buffer) |  | false |  |



## [readlink](./fs/index.js#L440)

This is a `FunctionDeclaration` named `readlink`in `fs/index.js`, it's exported but undocumented.



## [realpath](./fs/index.js#L443)

This is a `FunctionDeclaration` named `realpath`in `fs/index.js`, it's exported but undocumented.



## [rename](./fs/index.js#L446)

This is a `FunctionDeclaration` named `rename`in `fs/index.js`, it's exported but undocumented.



## [rmdir](./fs/index.js#L449)

This is a `FunctionDeclaration` named `rmdir`in `fs/index.js`, it's exported but undocumented.



## [rm](./fs/index.js#L452)

This is a `FunctionDeclaration` named `rm`in `fs/index.js`, it's exported but undocumented.



## [stat](./fs/index.js#L455)

This is a `FunctionDeclaration` named `stat`in `fs/index.js`, it's exported but undocumented.



## [symlink](./fs/index.js#L484)

This is a `FunctionDeclaration` named `symlink`in `fs/index.js`, it's exported but undocumented.



## [truncate](./fs/index.js#L487)

This is a `FunctionDeclaration` named `truncate`in `fs/index.js`, it's exported but undocumented.



## [unlink](./fs/index.js#L490)

This is a `FunctionDeclaration` named `unlink`in `fs/index.js`, it's exported but undocumented.



## [utimes](./fs/index.js#L493)

This is a `FunctionDeclaration` named `utimes`in `fs/index.js`, it's exported but undocumented.



## [watch](./fs/index.js#L496)

This is a `FunctionDeclaration` named `watch`in `fs/index.js`, it's exported but undocumented.



## [write](./fs/index.js#L499)

This is a `FunctionDeclaration` named `write`in `fs/index.js`, it's exported but undocumented.



## [writeFile](./fs/index.js#L502)

This is a `FunctionDeclaration` named `writeFile`in `fs/index.js`, it's exported but undocumented.



## [writev](./fs/index.js#L533)

This is a `FunctionDeclaration` named `writev`in `fs/index.js`, it's exported but undocumented.


