# IDEA

## CSO Migrate from 2.12 to 2.13
Original Source From https://www.cs.ox.ac.uk/people/bernard.sufrin/personal/CSO/2.12.3

- Postfix like `List(123) size ()` confuses with infix in 2.13. But a workaround is adding a function accepting unit. So I added `def ?(unit:Unit):T = ?()` in `io.threadcso.channel.InPort[+T]`
- Seq[T] is now immutable.Seq[T].
    - File `io.threadcso.debug.Logger` Class `Logger` Function `events` is effected. I add `.toList` to convert the `mutable.Queue` to a `immutable.Seq`
    - File `io.threadcso.semaphore.LockFreeDequeue` Function `elements`. I use `it.asScala.toList` to convert
- Moved a few @elidable annotation according to the compiler. Compiler Error was `Only concrete methods can be marked`

## Compilation Notice
Like the 2.12 version. First you need to compile two macro file. Then while compiling the rest, this jar needs to be included in classpath.

``` bash
scalac **/control.scala **/SourceLocation.scala -d macros.jar -feature -language:implicitConversions -language:postfixOps
```